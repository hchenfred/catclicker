// cat class
var Cat = function(img, numOfClicks, elementName) {
    this.img = img;
    this.numOfClicks = numOfClicks;
    this.elementName = elementName;
};

// create two cats
var cat1 = new Cat("img/mycat1.jpg", 0, "cat1");
var cat2 = new Cat("img/mycat2.jpg", 0, "cat2");

var cats = [cat1, cat2];

var htmlTitle = "<h1>Clicked %data% times</h1>";
var htmlImg = "<button id=%element%><img src=%data% alt='a picture of a cat'></button>";
var data = "%data%";


for (var i = 0; i < cats.length; i++) {
  var formattedHTMLTitle = htmlTitle.replace(data, cats[i].numOfClicks);
  var formattedHTMLImg = htmlImg.replace(data, cats[i].img).replace("%element%", cats[i].elementName);
  //element is not in the environment of the closure for return function()
  var element = '#' + cats[i].elementName;
  $(element).append(formattedHTMLTitle, formattedHTMLImg);
  $(element).on('click', (function(x){
    // the parameter x is in the enviroment of the closure for the inner function
    return function() {    
      cats[x].numOfClicks++;
      console.log($(element).val());
      $('#' + cats[x].elementName).find('h1').text("clicked " + cats[x].numOfClicks + " times");
    };
  })(i));
}


