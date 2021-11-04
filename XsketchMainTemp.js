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
    global = createImg('assets/global.png','global');
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
    logo.position(450,30);
    logo.size(120,75);

    global.position(350,150);
    global.size(300,300);

    // title
    h1 = createElement('h1','SpacEd');
    h1.position(450,220);

    h5 = createElement('h5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nisl est.');
    h5.position(300,280);

    blink = 0;
    pH = 60;
    pW = 60;
    pX = random(0,400);
    pY = random(0,400);
}

function draw() {

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