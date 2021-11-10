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
        X:520,
        Y:650
    },
    dataD : { 
        X:220,
        Y:690
    },
    dataExp : { 
        X:200,
        Y:490
    },
}

// earth data

var dataEarth;
var dataEarthURL = "https://api.nasa.gov/EPIC/api/natural?api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS"
var imageList = [];
var imageNum;
var today;
var todayArr;
var apiKey = "";
var earthImage;
var dateList = [];
var dateCurrent;
var title;
var titleDate;
var title2;

// next button

var nextB;


function preload() {
    bg = loadImage('assets/bg.png');
    
}



function setup() {
    createCanvas(1280,768);
    background(bg);

    dataEarth = loadJSON(dataEarthURL,gotData);

    // img = createImg('assets/bg.png','background');
    // img.position(0,0);
    // img.size(canvasW ,canvasH);

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
    // create a list of all photos
    imageNum = Object.values(dataEarth).length;
    today = Object.values(dataEarth)[0].date;
    todayArr = split(today, '-');
    console.log(todayArr);
    for (var i = 0; i<imageNum; i++) {
        imageList[i] = Object.values(dataEarth)[i].image
    }

    for (var i = 0; i<imageNum; i++) {
        dateList[i] = Object.values(dataEarth)[i].date.substring(12);
    }

    titleDate = String(Object.values(dataEarth)[0].date);
    titleDate = titleDate.substring(0,10)
}

function draw() {

    button = createButton("Back");
    button.position(60,90);
    button.mousePressed(openMainLink)



    for (var i = 0; i<imageNum; i++) {
        var imageURL = `https://api.nasa.gov/EPIC/archive/natural/${todayArr[0]}/${todayArr[1]}/${todayArr[2].substring(0,2)}/png/${imageList[i]}.png?api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS`;
        // console.log(imageURL);
        earthImage = createImg(imageURL,"image");
        dateCurrent = createElement('h5',dateList[i]);
        earthImage.size(180,180);
        if (i < 6) {
            dateCurrent.position(i*190+150,360);
            earthImage.position(i*190+80,200);

        } else {
            dateCurrent.position((i-6)*190+150,610);
            earthImage.position((i-6)*190+80,450);
        }
    }
    
    // title = createElement('h1', `View of Earth from Space on ${today}`);
    // title.position(300,680)


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
  
    mouseStar.position(x+20,y);
    mouseStar.size(20,20);


    // nextB = createButton("Next");
    // nextB.position(600,600);
    // nextB.size(200,100);


    // var imageURL = `https://api.nasa.gov/EPIC/archive/natural/${todayArr[0]}/${todayArr[1]}/${todayArr[2].substring(0,2)}/png/${imageList[0]}.png?api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS`;
    // earthImage = createImg(imageURL,"image");
    // earthImage.size(200,200);
    // earthImage.position(i*200,100);

    // nextB.mouseClicked(changeToNext)

    // use if statement to aviod undefined
    if (titleDate) {
        title = createElement('h1', `Photos of the Earth from Space on ${titleDate}`);
        title.position(360,680)
    }

}

// function changeToNext() {

// }

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
