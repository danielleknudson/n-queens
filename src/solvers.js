/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution;

  var board = new Board({n: n});


  var findSolution = function(row){

    if (n === row){
      solution = _.map(board.rows(), function(row){
        return row.slice();
      });

      return;
    }

    for (var column = 0; column < n; column++){
      board.togglePiece(row, column);

      if (! board.hasAnyRooksConflicts() ){
        findSolution(row + 1);
      }

      board.togglePiece(row, column);

    }

  };

  debugger;

  findSolution(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 

  // create a variable reference to a board
  // that is the size of the variable n argument
  // passed to countNRooksSolutions
  var board = new Board({n: n});

  // declare a variable function that will
  // iterate over our board
  // and recursively find all solutions
  var findSolutions = function(row){

    // base case to stop recurion
    // stop the function when we've made decisions for all of our rows
    if (row === n){
      // we've found a solution, so increment count
      solutionCount++;
      // exit function
      return;
    }

    // iterate over our row to make a decision
    for (var column = 0; column < n; column++){
      // place a rook at the current row and column
      board.togglePiece(row, column);
      // if there aren't any conflicts
      if (!board.hasAnyRooksConflicts()){
        // recurse to the next row
        findSolutions(row + 1);
      }

      // take rook off at the current row and column
      board.togglePiece(row, column);

    } // end of for loop

  };

  debugger;

  // fall our function to find solutions
  findSolutions(0);

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution = board.rows(); //fixme

  var findSolutions = function(row){

    // base case to stop recurion
    if (row === n){
      solution = _.map(board.rows(), function(row){
        return row.slice();
      });

      return;
    }

    for (var column = 0; column < n; column++){
      board.togglePiece(row, column);

      if (! board.hasAnyQueensConflicts() ){
        findSolutions(row + 1);
      }

      board.togglePiece(row, column);
    }

  };

  findSolutions(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 

  var board = new Board({n: n});

  var findSolutions = function(row){

    // base case to stop recurion
    if (row === n){
      solutionCount++;
      return;
    }

    for (var column = 0; column < n; column++){
      board.togglePiece(row, column);

      if (! board.hasAnyQueensConflicts() ){
        findSolutions(row + 1);
      }

      board.togglePiece(row, column);
    }



  };

  findSolutions(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
