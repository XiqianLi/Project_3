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

let sX = 640;
let sY = 440;
let d = 18;
let radi = 3;
// let m = 0;
// let b = 0;
// let c = 0;
let mSpeed;
let bSpeed;
let cSpeed;
let m, v, e, ma, j, s, u, n;

let pdata = {
  m : {
    dis : 1,
    radi : 1,
    spd:47,
  },
  v : {
    dis : 1.86,
    radi : 2.5,
    spd:35
  },
  e : {
    dis : 2.58,
    radi : 2.6,
    spd:30
  },
  ma : {
    dis : 3.94,
    radi : 1.4,
    spd:24
  },
  j : {
  //     dis : 13.44,
    dis : 6.44,
    // radi : 29,
    radi : 12,
    spd:13
  },
  s : {
    // dis : 25,
    dis : 11,
    // radi : 24,
    radi : 8,
    spd:10
  },
  u : {
    //dis : 50,
    dis : 20,
    // radi : 10.4,
    radi : 5,
    spd:7
  },
  n : {
  //dis : 77.6,
    dis : 30.6,
    // radi : 10,
    radi : 4,
    spd:5
  },
}



function preload() {
}

function setup() {
   createCanvas(1280,768);
   bg = loadImage('assets/bg.png');


    // push();
    // translate(200,200);

    // img = createImg('assets/bg.png','background');
    // img.position(0,0);
    // img.size(canvasW,canvasH);

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

    // global.position(imageGroup.global.X,imageGroup.global.Y);
    // global.size(imageGroup.global.W,imageGroup.global.H);


    // title
    // h1 = createElement('h1','SpacEd');
    // h1.position(imageGroup.h1.X,imageGroup.h1.Y);

    // h5 = createElement('h5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nisl est.');
    // h5.position(imageGroup.h5.X,imageGroup.h5.Y);

    // blink = 0;
    // pH = 60;
    // pW = 60;
    // pX = random(0,400);
    // pY = random(0,400);

    createCanvas(1280,768);
    r = random(255); 
    g = random(255); 
    h = random(255);
  
    m = random(TWO_PI);
    b = random(TWO_PI);
    c = random(TWO_PI);
  
  
    m, v, e, ma, j, s, u, n;
  
    m = random(TWO_PI);
    v = random(TWO_PI);
    e = random(TWO_PI);
    ma = random(TWO_PI);
    j = random(TWO_PI);
    s = random(TWO_PI);
    u = random(TWO_PI);
    n = random(TWO_PI);
}

function draw() {

    background(bg);
    let fr = 30;
    // blinking star
    frameRate(fr);

    button = createButton("Back");
    button.position(60,90);
    button.mousePressed(openMainLink)

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


    planetRing.position(100,200);
    planetRing.size(50,50);
    planet.position(1000,400);


// think about hide outside canvas

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;
  
    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
  
    mouseStar.position(x,y);
    mouseStar.size(20,20);

    // rotate(angle);
    // global.position(imageGroup.global.X,imageGroup.global.Y);
    // global.size(imageGroup.global.W,imageGroup.global.H);
    // angle++;
    // pop();



    // draw solar


    noFill(); //rings
    strokeWeight(0.5);
    
    // orbit circles
    stroke("white");
    circle(sX, sY, d);
    circle(sX, sY, d * pdata.v.dis);
    circle(sX, sY, d * pdata.e.dis);
    circle(sX, sY, d * pdata.ma.dis);
    circle(sX, sY, d * pdata.j.dis);
    circle(sX, sY, d * pdata.s.dis);
    circle(sX, sY, d * pdata.u.dis);
    circle(sX, sY, d * pdata.n.dis);
    
    // center planet -sun
    noStroke();
    fill(255,246,51);
    circle(sX, sY, 8);
  
    translate(sX, sY);
    
    push();

    push();
  rotate(m);
  fill(255, 135, 51); //moons
  circle(0, d/2, radi);
  pop();
  
  // v
  push();
  rotate(v);
  fill(217, 255, 51); 
  circle((d * pdata.v.dis) / 2, 0, radi*pdata.v.radi);  
  pop();
  
  //rotate(a); //make the third moon rotate faster
  
  // e
  push();
  rotate(e);
  fill(51, 255, 212);
  circle(0,(d * pdata.e.dis) / 2, radi*pdata.e.radi);
  pop();
  
  // ma
  push();
  rotate(ma);
  fill(255, 51, 51);
  circle(0,(d * pdata.ma.dis) / 2, radi*pdata.ma.radi);
  pop();

  // j
  push();
  rotate(j);
  fill(255, 157, 116);
  circle(0,(d * pdata.j.dis) / 2, radi*pdata.j.radi);
  pop();

  // s
  push();
  rotate(s);
  fill(166, 202, 193);
  circle(0,(d * pdata.s.dis) / 2, radi*pdata.s.radi);
  pop();
// u
push();
rotate(u);
fill(132, 121, 255);
circle(0,(d * pdata.u.dis) / 2, radi*pdata.u.radi);
pop();

// n
push();
rotate(n);
fill(93, 195, 255);
circle(0,(d * pdata.n.dis) / 2, radi*pdata.n.radi);
pop();

 // updates the state of the solar system
 m = m + pdata.m.spd * 0.003;
 v = v + pdata.v.spd* 0.003;
 e = e + pdata.e.spd* 0.003;
 ma = ma + pdata.ma.spd* 0.003;
 j = j + pdata.j.spd* 0.003;
 s = s + pdata.s.spd* 0.003;
 u = u + pdata.u.spd* 0.003;
 n = n + pdata.n.spd* 0.003;
 


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