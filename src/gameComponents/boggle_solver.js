function findAllSolutions(grid, dictionary) {
    if (!dictionary || !dictionary.length || !grid || !grid.length || !grid[0].length) {
      return []
    }
    const height = grid.length
    const width = grid[0].length
    // There're 8 directions: north, west, south, east, north-west, south-west, north-east and south-east
    const num_directions = 8 
    let valid_words = new Set()
    for (var word of dictionary) {
      if (word.length >= 3) {
        valid_words.add(word.toUpperCase())
      }
    }
    let answers = new Set()
    let prefixes = new Set()
    for (word of valid_words) {
      for (var len=1; len<=word.length; len++) {
        prefixes.add(word.slice(0,len))
      }
    }
    // For each cell in the grid, do depth-first-search to find valid words.
    for (var x=0; x<width; x++) {
      for (var y=0; y<height; y++) {
        let path = [0]  // List (stack) of directions numbered 0-7.
        let go_back = false
        while (path.length > 0) {
          word = path_to_str(grid, [x,y], path, width, height)
          if (valid_words.has(word)) {
            answers.add(word)
          }
          if (!prefixes.has(word) || go_back) {
            if (path[path.length-1] === num_directions-1) {
              path.pop()
              go_back = true
            }
            else {
              path[path.length-1]++  // Change direction of last step.
              go_back = false
            }
          } else {
            path.push(0)  // Add step going in direction `0`.
          }
        }
      }
    }
    return returnOutput(dictionary, answers)
  }
  
  // Deltas are changes in coordinates cooresponding to given directions.
  const deltas = [[0, 1], [1, 1], [1, 0], [1, -1],
                  [0, -1], [-1, -1], [-1, 0], [-1, 1]]
  
  function path_to_str(grid, start, path, width, height){
    let [x, y] = start
    let word = [grid[y][x]]
    let seen = new Set([start.join(';')])
    for (var direction of path) {
      var [dx, dy] = deltas[direction]
      x += dx
      y += dy
      if (seen.has(x+';'+y) ||
          !(0 <= y && y < height && 0 <= x && x < width)) {
        return ""
      }
      // We create pairs (x,y) with a string instead of an array since arrays aren't hashable.
      seen.add(x+';'+y)
      word.push(grid[y][x])
    }
    return word.join('').toUpperCase()
  }
  
  function returnOutput(input, output) {
    let results = []
    for (var w of input) {
      if (output.has(w.toUpperCase())) {
        results.push(w)
      }
    }
    return results
  }
  
  export default findAllSolutions;
