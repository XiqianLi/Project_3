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

var canvasW = 1280;
var canvasH = 786

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
    },
    APOD : { 
        X:420,
        Y:180
    },
    dataTitle : { 
        X:120,
        Y:700
    },
    dataD : { 
        X:220,
        Y:680
    },
    dataExp : { 
        X:100,
        Y:580
    },
}



function preload() {
}



function setup() {
    createCanvas(1280,768);

    img = createImg('assets/bg.png','background');
    img.position(0,0);
    img.size(canvasW ,canvasH);

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
    APOD = createImg(data.url,'image of the day');

    
    if (APOD.width >= APOD.height) {
        APOD.addClass("APOD_h")

    } else {
        APOD.addClass("APOD_v");
        console.log(APOD.width)
        console.log(APOD.height)
    }



    // dataD = createP(data.date);

    dataTitle = createElement('h2',`${data.title} - Astronmy Picture of the Day on ${data.date}`);
    dataTitle.position(imageGroup.dataTitle.X,imageGroup.dataTitle.Y);


    dataExp = createP(data.explanation);

    // dataD.position(imageGroup.dataD.X,imageGroup.dataD.Y);
    dataExp.position(imageGroup.dataExp.X,imageGroup.dataExp.Y);

    // h2 = createElement('h2','Astronomy Picture of the Day');
    // h2.position(350,420);

    // h5 = createElement('h5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nisl est.');
    // h5.position(300,280);

    APOD.center();
}

function draw() {

    button = createButton("Back");
    button.position(60,90);
    button.mousePressed(openMainLink)


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
