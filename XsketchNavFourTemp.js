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
var pageTitle

var mouseStarX = 1;
var mouseStarY = 1;



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

// meteorite
var mapImg;

var clat = 0;
var clon = 0;

// N is +lat, S is -lat, E is +lon, W is -lon
var lat;
var lon;

var zoom = 1;

var meteor;

var data;

var sAlpha;
var sX;
var sY;
var ndata;



function preload() {
    mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibGl4aXFpYW4iLCJhIjoiY2t2OG1qNTNkOXczbzJvbW44eGhyazR0diJ9.GaZGveNkHOP4inFpmmkSow")
    bg = loadImage('assets/bg.png');
}

function setup() {
    createCanvas(1280,768);

    background(bg);

    loadJSON("./data.json",gotData);

    pageTitle = createElement('h1','There were 45,700 Meteorite Landings on the Earth Before June 27, 2018');

    // meteorite change to center
    translate(width/2,height/2)
    imageMode(CENTER);
    image(mapImg,0,0);


    // push();
    // translate(200,200);

    // img = createImg('assets/bg.png','background');


    starOne = createImg('assets/star.png','star');
    starTwo = createImg('assets/star.png','star');
    starThree = createImg('assets/star.png','star');

    // planet = createImg('assets/planet.png','planet');
    // planetRing = createImg('assets/planetRing.png','planetRing');

    headerBg = createImg('assets/headerBg.png','header');
    logo = createImg('assets/logo.png','logo');
    // global = createImg('assets/global.png','global');
    mouseStar = createImg('assets/mouseStar.png','mouseStar');

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

    // global.position(imageGroup.global.X,imageGroup.global.Y);
    // global.size(imageGroup.global.W,imageGroup.global.H);


    // title
    // h1 = createElement('h1','SpacEd');
    // h1.position(imageGroup.h1.X,imageGroup.h1.Y);

    // h5 = createElement('h5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nisl est.');
    // h5.position(imageGroup.h5.X,imageGroup.h5.Y);

    blink = 0;
    pH = 60;
    pW = 60;
    pX = random(0,400);
    pY = random(0,400);


}

function meotor(x) {
    for (var i = 0; i <50; i++) {
        fill(255,i*0.1);
        ellipse(x+i,x+1+i,5,5);
    }
    x = 0;
}

function gotData(data) {

    ndata = data;

}

// mapbox use tiles 512*521, so change 128 to 256
function mercX(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2,zoom);
    var b = lon + PI;
    return a * b;
}

function mercY(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2,zoom);
    var b = tan (PI/4 + lat/2)
    var c = PI - log(b);
    return a * c;
}


function draw() {

    button = createButton("Back");
    button.position(60,90);
    button.mousePressed(openMainLink)



    pageTitle.position(160,680);

    let fr = 30;
    // blinking star
    frameRate(fr);

    // star One
    starOne.position(100,300);
    starOne.size(10,10);
    if (blink % 5 == 0) {
        starOne.position(98,298);
        starOne.size(15,15);
    }

    // star Two
    starTwo.position(700,200);
    starTwo.size(8,8);


    
    // if (blink % 3 == 0) {
    //     starTwo.position(698,198);
    //     starTwo.size(10,10);
    // }

    // star Two
    starThree.position(900,400);
    starThree.size(12,12);
    // if (blink % 4 == 0) {
    //     starThree.position(898,398);
    //     starThree.size(15,15);
    // }
    // blink += 10;

    // planetRing.position(pX,pY);
    // if (pH > 0 && pW > 0) {
    //     planetRing.size(pH,pW);
    //     pH -=0.5;
    //     pW -=0.5;
    // } else {
    //     pH = 60;
    //     pW = 60;
    //     pX = random(1000);
    //     pY = random(1000);
    // }


    // planetRing.position(100,200);
    // planetRing.size(50,50);
    // planet.position(800,400);


// think about hide outside canvas

    let targetX = mouseX;
    let dx = targetX - mouseStarX;
    mouseStarX += dx * easing;
  
    let targetY = mouseY;
    let dy = targetY - mouseStarY;
    mouseStarY += dy * easing;
  
    mouseStar.position(mouseStarX+20,mouseStarY);
    mouseStar.size(20,20);

    // rotate(angle);
    // global.position(imageGroup.global.X,imageGroup.global.Y);
    // global.size(imageGroup.global.W,imageGroup.global.H);
    // angle++;
    // pop();


    //

    translate(width/2,height/2);
    var cx = mercX(clon);
    var cy = mercY(clat);
    // console.log("test")

    for (var i = 0; i <ndata.length; i++) {
        fill(255);

        if (ndata[i].geolocation) {
        var lat = float(ndata[i].geolocation.latitude);
        var lon = float(ndata[i].geolocation.longitude);
        var x = mercX(lon) - cx;
        var y = mercY(lat) - cy;
        // console.log(x);
        noStroke()
        ellipse(x,y,5,5);
        }
    }

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