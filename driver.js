const Board = require('./board')
const Knight = require('./knightsTravails')

const board = new Board()
const knight = new Knight()

const path = knight.moves([0, 0], [7, 7])
board.update(path)
const buildPath = () => {
  let s = 'Path: '
  path.forEach((mv, i) => {
    s += i < path.length - 1 ? `[${mv}] => ` : `[${mv}]`
  })
  return s
}

console.log(`\nKnight made it in ${path.length - 1} moves!`)
console.log(buildPath())
board.print()
