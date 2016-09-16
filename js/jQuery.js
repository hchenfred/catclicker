var numOfClicks = 0;
$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
  //alert("enterhere");
  numOfClicks++;
  $('h1').text("clicked " + numOfClicks + " times");
});
