var img;
var starOne, starTwo, starThree;
var headerBg;
var navOne;
var navTwo;
var navThree;
var navFour;
var logo;
var global;
var h2;
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
var dataURL = "https://api.nasa.gov/planetary/apod?api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS";
var data;
var APOD;
var dataTitle;
var dataExp;
var dataD;




function preload() {
}



function setup() {
    noCanvas();

    img = createImg('assets/bg.png','background');
    img.position(0,0);
    img.size(1024,700);

    starOne = createImg('assets/star.png','star');
    starTwo = createImg('assets/star.png','star');
    starThree = createImg('assets/star.png','star');

    planet = createImg('assets/planet.png','planet');
    planetRing = createImg('assets/planetRing.png','planetRing');

    headerBg = createImg('assets/headerBg.png','header');
    logo = createImg('assets/logo.png','logo');
    // global = createImg('assets/global.png','global');
    mouseStar = createImg('assets/mouseStar.png','mouseStar');

    //create buttons
    navOne = createButton('APOD');
    navTwo = createButton('Earth');
    navThree = createButton('Mars');
    navFour = createButton('Meteor');
    navOne.mouseClicked(openLinkNavOne);

    navOne.position(150, 60);
    navTwo.position(300, 60);
    navThree.position(650, 60);
    navFour.position(800, 60);

    headerBg.position(100,50);
    // headerBg.size(800,100);
    logo.position(450,30);
    logo.size(120,75);

    // global.position(350,150);
    // global.size(300,300);

    // title


    blink = 0;
    pH = 60;
    pW = 60;
    pX = random(0,400);
    pY = random(0,400);

    data = loadJSON(dataURL,gotData);
}

function gotData() {
    // dataTitle = createElement('h2',data.title);


    APOD = createImg(data.url,'image of the day');
    APOD.position(300,150);
    APOD.id("APOD");



    dataTitle = createElement('h2',data.title);
    dataTitle.position(350,600);

    dataD = createP(data.date);
    dataExp = createP(data.explanation);

    dataD.position(70,640);
    dataExp.position(100,440);

    // h2 = createElement('h2','Astronomy Picture of the Day');
    // h2.position(350,420);

    // h5 = createElement('h5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nisl est.');
    // h5.position(300,280);
}

function draw() {



    let fr = 30;
    // blinking star
    frameRate(fr);

    // star One
    starOne.position(100,300);
    starOne.size(10,10);

    // star Two
    starTwo.position(700,200);
    starTwo.size(8,8);

    starThree.position(900,400);
    starThree.size(12,12);


    planetRing.position(100,200);
    planetRing.size(50,50);
    planet.position(800,400);


// think about hide outside canvas

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;
  
    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
  
    mouseStar.position(x,y);
    mouseStar.size(20,20);


    

}

function openLinkNavOne() {
    window.open("./XindexNavOneTemp.html","_self");
}

