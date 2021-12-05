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

var inp;
var dateB;
var mData;
var massFilter;
var yearFilter
var r,g,b;


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

var yearSlider;



function preload() {
    mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibGl4aXFpYW4iLCJhIjoiY2t2OG1qNTNkOXczbzJvbW44eGhyazR0diJ9.GaZGveNkHOP4inFpmmkSow")
    bg = loadImage('assets/bg.png');

    data = loadJSON("https://data.nasa.gov/resource/gh4g-9sfh.json",gotData);
    function gotData(data) {
        ndata = data;
    }

}

function setup() {
    createCanvas(1280,768);



    yearSlider = createSlider(1500,2000,1500);
    yearSlider.position(120,670);
    yearSlider.size(1040,20);




    pageTitle = createElement('h1','There were 45,700 Meteorite Landings on the Earth Before June 27, 2018');

    // meteorite change to center



    // push();
    // translate(200,200);

    // img = createImg('assets/bg.png','background');


    // starOne = createImg('assets/star.png','star');
    // starTwo = createImg('assets/star.png','star');
    // starThree = createImg('assets/star.png','star');

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

}

function meotor(x) {

    // massFilter = massSlider.value();

    for (var i = 0; i <50; i++) {
        fill(255,i*0.1);
        ellipse(x+i,x+1+i,5,5);
    }
    x = 0;
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

    background(bg);
    translate(width/2,height/2)
    imageMode(CENTER);
    image(mapImg,0,0);

    button = createButton("Home");
    button.position(60,90);
    button.mousePressed(openMainLink)



    pageTitle.position(240,550);

    yearFilter = yearSlider.value();

    for (let i=0; i<6; i++) {
        var sliderScale = createElement('h5',1500+i*100);
        sliderScale.position(130+i*200,680);
    }
    // var sliderScale = createElement('h5',"Time Scale");
    // sliderScale.position(130,620);



// think about hide outside canvas

    let targetX = mouseX;
    let dx = targetX - mouseStarX;
    mouseStarX += dx * easing;
  
    let targetY = mouseY;
    let dy = targetY - mouseStarY;
    mouseStarY += dy * easing;
  
    mouseStar.position(mouseStarX+20,mouseStarY);
    mouseStar.size(20,20);


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
        var mass = int(ndata[i].mass) * 0.1;
        var x = mercX(lon) - cx;
        var y = mercY(lat) - cy;

        if (ndata[i].year) {
            var year = int(ndata[i].year.substring(0, 4));
        }
            if ( year < yearFilter) {
                massFilter(mass);
                stroke(r,g,b)
                fill(r,g,b,80);
                ellipse(x-640,y-393,10,10);
            }

    }
        }

    stroke(255,204,0)
    fill(255,204,0);
    circle(-100,-180,20);

    stroke(253,206,3)
    fill(253,206,3);
    circle(-100,-230,20);

    stroke(253,154,1);
    fill(253,154,1);
    circle(-100,-280,20);

    stroke(253,97,4);
    fill(253,97,4);
    circle(-100,-330,20);

    stroke(253,44,5);
    fill(253,44,5);
    circle(-100,-380,20);

    stroke(240,5,5);
    fill(240,5,5);
    circle(-100,-430,20);

    sideScale = createElement('h5','Fell in year')
    sideScale.position(120,620)

    sideScale = createElement('h5','Mass in grams')
    sideScale.position(1160,260)

    sideScale = createElement('h5','> 10000')
    sideScale.position(1200,300)

    sideScale = createElement('h5','< 10000')
    sideScale.position(1200,350)

    sideScale = createElement('h5','< 5000')
    sideScale.position(1200,400)

    sideScale = createElement('h5','< 1000')
    sideScale.position(1200,450)

    sideScale = createElement('h5','< 100')
    sideScale.position(1200,500)

    sideScale = createElement('h5','< 10')
    sideScale.position(1200,550)

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

function dateSubmit() {
    targetD = inp.value();
  }

function massFilter(x) {
    if (x < 10) {
        r = 255;
        g = 204;
        b = 0;
    } else if (x<100) {
        r = 255;
        g = 206;
        b = 3;
    }  else if (x<1000) {
        r = 253;
        g = 154;
        b = 1;
    }   else if (x<5000) {
        r = 253;
        g = 97;
        b = 4;
    } else if (x<10000) {
        r = 253;
        g = 44;
        b = 5;
    } else {
        r = 240;
        g = 5;
        b = 5;
    }
}
