$board = new BoardMaker(5,8);

// place apple
$board.board[0][0] = 'o';

$(function(){

$render = function(){

  // clear board at beginning of interval
  $('.board').text('');

  // iterate through board and render each item found in arrays
  for (var i = 0; i < $board.board.length; i++) {
    $('.board').append('<span class = "row'+i+'"></span><br>')
    for (var j = 0; j < $board.board[i].length; j++) {
      $('.row'+i).append($board.board[i][j]);
    }
  }
}

// initial rendering
$render();        

// end of document ready loop
});


// use for future gravity issues:
$setter = function(callback, time){
  setTimeout(callback, time);
};

$interval = function(callback, time){
  setInterval(callback, time);
};