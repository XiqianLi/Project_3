var img;
var starOne, starTwo, starThree;
var headerBg;
var navOne;
var navTwo;
var navThree;
var navFour;
var logo;
var global;
var h1;
var h5;
var blink;
var planet, planetRing;
var pH, pW, pX, pY;
var mX = 1;
var mY = 1;
var x = 1;
var y = 1;
var easing = 0.2;
var mouseStar;
var bg;

var canvasW = 1280;
var canvasH = 786

var angle = 0;

var imageGroup = {
  navOne : { 
      X:200,
      Y:90
  },
  navTwo : { 
      X:360,
      Y:90
  },
  navThree : { 
      X:520,
      Y:90
  },
  navFour : { 
      X:720,
      Y:90
  },
  navFive : { 
      X:880,
      Y:90
  },
  navSix : { 
      X:1040,
      Y:90
  },
  logo : {
      X:578,
      Y:60,
      W:120,
      H:76
  },
  global : {
      X:390,
      Y:200,
      W:500,
      H:500
  },
  h1 : { 
      X:580,
      Y:320
  },
  h5 : { 
      X:410,
      Y:380
  },
  headerBg : {
      X:140,
      Y:80,
      W:1000,
      H:40
  }
}

var interstellarImg, martianImg, Raleway, title, subTitle, takeawayInt, takeawayMar,linkInt,linkMar;



function preload() {
  interstellarImg = loadImage('assets/Interstellar2.jpeg');
  martianImg = loadImage('assets/Martian2.jpeg');
  Raleway = loadFont('assets/Raleway-VariableFont_wght.ttf');
}

function setup() {
   createCanvas(1280,768);
   bg = loadImage('assets/bg.png');

    headerBg = createImg('assets/headerBg.png','header');
    logo = createImg('assets/logo.png','logo');
    // global = createImg('assets/global.png','global');
    mouseStar = createImg('assets/mouseStar.png','mouseStar');

    //create buttons
    //create buttons
    navOne = createButton('APOD');
    navTwo = createButton('Earth');
    navThree = createButton('Mars');
    navFour = createButton('Meteorite');
    navFive = createButton('Solar System');
    navSix = createButton('Sci-Fi');

    navOne.mouseClicked(openLinkNavOne);
    navTwo.mouseClicked(openLinkNavTwo);
    navThree.mouseClicked(openLinkNavThree);
    navFour.mouseClicked(openLinkNavFour);
    navFive.mouseClicked(openLinkNavFive);
    navSix.mouseClicked(openLinkNavSix);

    navOne.position(imageGroup.navOne.X, imageGroup.navOne.Y);
    navTwo.position(imageGroup.navTwo.X, imageGroup.navTwo.Y);
    navThree.position(imageGroup.navThree.X, imageGroup.navThree.Y);
    navFour.position(imageGroup.navFour.X, imageGroup.navFour.Y);
    navFive.position(imageGroup.navFive.X, imageGroup.navFive.Y);
    navSix.position(imageGroup.navSix.X, imageGroup.navSix.Y);


    headerBg.position(imageGroup.headerBg.X,imageGroup.headerBg.Y);
    headerBg.size(imageGroup.headerBg.W,imageGroup.headerBg.H);

    logo.position(imageGroup.logo.X,imageGroup.logo.Y);
    logo.size(imageGroup.logo.W,imageGroup.logo.H);

    title = createElement('h1','Movie Suggestions');
    title.position(0,150)

    subTitle = createElement('h4','Enjoying more realist science movie to inspire space exploration.');
    subTitle.position(0,200)

    takeawayInt = createDiv("In the film the depiction of the black hole is accurate, as according to Einstein it would take an infinite amount of time to cross the threshold of a black hole's event horizon, as seen by a distant observer. The person crossing the threshold, however, would notice no change in the flow of time.");
    takeawayMar = createDiv("When watching this film keep in mind the real life research and knowledge we have gained and how it applies itself in the film. There is a lot about space we do not know today. With that, taking into account what we do know is that Mars once was similar to Earth. Mars once had water (still has briny water flowing). Which in theory could allow those who inhabit the opportunity to farm and begin food production. ");
    takeawayInt.position(140, 530);
    takeawayMar.position(660, 530);

    linkInt = createA('https://www.bing.com/search?q=watch+the+martian+2015&filters=dtbk:%22MCFvdmVydmlldyF3YXRjaCE2MjIzMjZiZC01Zjk5LTk3ZGEtYTlkZi0wZWQ0NDNhOTI4M2I%3d%22&FORM=DEPNAV','Watch Interstellar');
    linkInt.position(140,700);
    linkMar = createA('https://www.bing.com/search?q=watchinterstellar&qs=n&form=QBRE&sp=-1&ghc=2&pq=watchinterstella&sc=6-16&sk=&cvid=18CC9B2ADD884EBB8918915183DD088E','Watch Martian');
    linkMar.position(660,700);


}

function draw() {

    background(bg);
    let fr = 30;
    // blinking star
    frameRate(fr);

    button = createButton("Home");
    button.position(60,90);
    button.mousePressed(openMainLink)

    image(interstellarImg,140, 260, 480, 270);
    image(martianImg, 660, 260, 480, 270);

    // fill(0);
    // rect(150, 580, 450, 150, 10);
    // rect(650, 580, 450, 150, 10);





// think about hide outside canvas

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;
  
    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
  
    mouseStar.position(x+20,y);
    mouseStar.size(20,20);



 


}

function openMainLink() {
  window.open("./XindexMainTemp.html","_self");
}

function openLinkNavOne() {
  window.open("./XindexNavOneTemp.html","_self");
}

function openLinkNavTwo() {
  window.open("./XindexNavTwoTemp.html","_self");
}

function openLinkNavThree() {
  window.open("./XindexNavThreeTemp.html","_self");
}

function openLinkNavFour() {
  window.open("./XindexNavFourTemp.html","_self");
}

function openLinkNavFive() {
  window.open("./XindexNavFiveTemp.html","_self");
}

function openLinkNavSix() {
  window.open("./XindexNavSixTemp.html","_self");
}