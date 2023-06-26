class Board {
  constructor() {
    this.board = this.build()
  }

  build() {
    return new Array(8).fill(null).map(() => new Array(8).fill('-'))
  }

  update(arrayPath) {
    let move = 0
    arrayPath.forEach((i) => {
      this.board[i[1]][i[0]] = move++
    })
  }

  print() {
    let s = '\n'
    for (let i = 7; i >= 0; i--) {
      for (let j = 0; j < 8; j++) {
        s += this.board[i][j]
        s += ' '
      }
      s += i ? '\n' : ''
    }
    console.log(s)
  }
}

module.exports = Board
