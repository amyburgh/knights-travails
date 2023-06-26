# Knights Travails

Knights Travail is a function that uses a [Breadth-first search (BFS)](https://en.wikipedia.org/wiki/Breadth-first_search) algorithm to return the shortest path from one square to another on a chess board for the knight piece.

## Usage

```
❯ node driver.js

Knight made it in 6 moves!
Path: [0,0] => [2,1] => [4,2] => [6,1] => [7,3] => [6,5] => [7,7]

- - - - - - - 6
- - - - - - - -
- - - - - - 5 -
- - - - - - - -
- - - - - - - 4
- - - - 2 - - -
- - 1 - - - 3 -
0 - - - - - - -
```

## Possible Improvements

Add weighting to graph nodes based on the distance to the target square. This would increase efficiency, as nodes having higher weighting within each level of the BFS would be prioritized.
