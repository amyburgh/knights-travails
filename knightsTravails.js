class Knight {
  validMoves(pos, visited) {
    const possibleMoves = [
      [2, -1],
      [2, 1],
      [1, -2],
      [1, 2],
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
    ]

    return possibleMoves.reduce((acc, curr) => {
      const next = [pos[0] + curr[0], pos[1] + curr[1]]
      if (
        next[0] > 0 &&
        next[0] < 8 &&
        next[1] > 0 &&
        next[1] < 8 &&
        !visited.has(next.toString())
      )
        acc.push(next)
      return acc
    }, [])
  }

  moves(start = [0, 0], end = [0, 0]) {
    const visited = new Set()
    visited.add(start.toString())

    const queue = []
    const node = { pos: start, stack: [] }
    queue.push(node)

    while (queue.length) {
      let curr = queue.shift()

      if (curr.pos.toString() === end.toString()) {
        const path = []

        let tmp = curr
        while (tmp) {
          path.unshift(tmp.pos)
          tmp = curr.stack.pop()
        }
        return path
      } else {
        const nextArr = this.validMoves(curr.pos, visited)
        for (let move of nextArr) {
          const n = { pos: move, stack: [] }
          visited.add(n.pos.toString())
          n.stack.push(...curr.stack)
          n.stack.push(curr)
          queue.push(n)
        }
      }
    }
  }
}

module.exports = Knight
