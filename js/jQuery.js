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
  var element = '#' + cats[i].elementName;
  $(element).append(formattedHTMLTitle, formattedHTMLImg);
  $(element).on('click', (function(){
    cats[i].numOfClicks++;
    return function() {    
      $(element).text("clicked " + cats[i].numOfClicks + " times");
    };
  })());
}


