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
var x = 640;
var y = 393;
var easing = 0.2;
var mouseStar;
var ape;
var funFactEle;
var closeB;

var canvasW = 1280;
var canvasH = 786

var angle = 0;

var funFactActive = false;

var rand = 1;

var trigger;


// var funFact = {
//     funFact1: "Space is completely silent. There is no atmosphere in space, which means that sound has no medium or way to travel to be heard.",
//     funFact2: "Venus is the hottest planet in the solar system and has an average surface temperature of around 450° C. Did you know that Venus isn't the closest planet to the sun?  That is Mercury.",
//     funFact3: "While the entire NASA space suit costs a cool $12m, 70% of that cost is for the backpack and control module. However, the space suits that NASA uses were built in 1974."
// }

var funFact = [
    "Space is completely silent. There is no atmosphere in space, which means that sound has no medium or way to travel to be heard.",
    "Venus is the hottest planet in the solar system and has an average surface temperature of around 450° C. Did you know that Venus isn't the closest planet to the sun?  That is Mercury.",
    "While the entire NASA space suit costs a cool $12m, 70% of that cost is for the backpack and control module. However, the space suits that NASA uses were built in 1974.",
    "The Sun accounts for 99.86% of the mass in our solar system with a mass of around 330,000 times that of Earth. Did you know that the Sun is made up of mostly hydrogen (three quarters worth) with the rest of its mass attributed to helium.  If the Sun had a voice would it be high and squeaky from all that helium?",
    "The Sun is large enough that approximately 1.3 million Earths could fit inside (if squashed in) or if the Earths retained their spherical shape then 960,000 would fit. But can you visualise that number of Earths? ",
    "Just as colors are made more dramatic in sunsets on Earth, sunsets on Mars, according to NASA,  would appear bluish to human observers watching from the red planet. Fine dust makes the blue near the Sun's part of the sky much more visibilke, while normal daylight makes the Red Planet's familiar rusty dust color the most perceptible to the human eye.",
    'There’s a planet made of diamonds twice the size of earth The "super earth," aka 55 Cancri e, is most likely covered in graphite and diamond.  Paying a visit to that planet would probably pay for the $12 million dollar space suit needed to get there!',
    "There are more stars in the universe than grains of sand on all the beaches on Earth. That’s at least a billion trillion!",
    "Space junk is any human-made object orbiting Earth that no longer serves a useful purpose. Scientists estimate there are about 500,000 pieces of space junk today, including fragments from rockets and satellites, and everyday items like spanners dropped during construction of the International Space Station!",
    "Comets are leftovers from the creation of our solar system about 4.5 billion years ago – they consist of sand, ice and carbon dioxide."
]

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
        X:0,
        Y:300
    },
    h5 : { 
        X:265,
        Y:380
    },
    headerBg : {
        X:140,
        Y:80,
        W:1000,
        H:40
    }
}



function preload() {
}

function setup() {
    createCanvas(1280,768);

    // push();
    // translate(200,200);

    img = createImg('assets/bg.png','background');
    img.position(0,0);
    img.size(canvasW,canvasH);

    ape = createImg('assets/ape.png','ape');
    ape.position(1000,590);
    ape.size(150,150);
    ape.mouseClicked(showFunFact);

    headerBg = createImg('assets/headerBg.png','header');
    logo = createImg('assets/logo.png','logo');
    global = createImg('assets/global.png','global');
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

    global.position(imageGroup.global.X,imageGroup.global.Y);
    global.size(imageGroup.global.W,imageGroup.global.H);


    // title
    h1 = createElement('h1','SpacED');
    h1.position(imageGroup.h1.X,imageGroup.h1.Y);

    h5 = createElement('h3','Welcome to SpacEd, an immersive site focused on educating its users on  all things space. Built to bring comfort and knowledge around space exploration, SpacEd is a great place to become familiar with space with data visualizations, photos, fun facts, an interactive solar system and much more.');
    h5.position(imageGroup.h5.X,imageGroup.h5.Y);

    blink = 0;
    pH = 60;
    pW = 60;
    pX = random(0,400);
    pY = random(0,400);


    funFactEle = createDiv(funFact[rand]);
    closeB = createButton('CLOSE');
    funFactEle.position(410,600);
    closeB.position(420,610);
    // funFactEle.hide();
    closeB.hide()


    closeB.mouseClicked(closeFunFact);

    trigger = createElement("h4","Hi! I am Albert II, a rhesus monkey, was the first primate and first mammal in space. Click me for more space fun facts!");
    trigger.position(620,590);

}

function draw() {
    if (funFactActive) {
        trigger.hide();
        funFactEle.html(funFact[rand])
        funFactEle.show();
        closeB.show();
        funFactEle.position(410,600);
        closeB.position(420,610);
    } 
    else {
        funFactEle.hide();
        closeB.hide();
        trigger.show();
    }



    // console.log(funFactActive);


// think about hide outside canvas

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;
  
    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
  
    mouseStar.position(x+20,y);
    mouseStar.size(20,20);

    // rotate(angle);
    // global.position(imageGroup.global.X,imageGroup.global.Y);
    // global.size(imageGroup.global.W,imageGroup.global.H);
    // angle++;
    // pop();

        // funFactEle = createDiv(random(funFact));
        // funFactEle.position(600,620);
        // closeB = createButton('CLOSE')
        // closeB.position(600,620);
    



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

function showFunFact() {
    funFactActive = true;
    rand = floor(random(10));
    // console.log(floor(rand))
}

function closeFunFact() {
    funFactActive = false;
}