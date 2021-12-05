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
var mouseStarX = 1;
var mouseStarY = 1;

// mars data
var dataCURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS";
var dataSURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS";
var dataOURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS";
var dataC, dataS, dataO; 
var imageCList = [];
var imageSList = [];
var imageOList = [];
var image1,image2,image3,image4,image5,image6;
var statusC = true;
var statusS = false;
var statusO = false;
var h2;
var activeS = true;
var cButton, sButton, oButton;
var col = '#FFFFFF';
var col1 = "#373255";
var img;
var imageSize = 220;
var imageXSpacing = 320;
var imageYSpacing = 230;
var title
var subtitleC = "Landing on Mars is no easy feat. For my landing, I had the help of temperature & pressure sensors that collected data about entry & landing conditions. Engineer Alex Scammell can tell you more about this important piece that helped me land safely.";
var ape;
var funFactEle, closeB, rand, closeFunFact,showFunFact,funFactActive;
var funFact = [
    "Even though Mars has only 15% of the Earth’s volume and just over 10% of the Earth’s mass, around two thirds of the Earth’s surface is covered in water. Martian surface gravity is only 37% of the Earth’s.",
    "Olympus Mons, a shield volcano, is 21km high and 600km in diameter. Despite having formed over billions of years, evidence from volcanic lava flows is so recent many scientists believe it could still be active.",
    "They can last for months and cover the entire planet. The seasons are extreme because its elliptical (oval-shaped) orbital path around the Sun is more elongated than most other planets in the solar system.",
    "At the closest point to the Sun, the Martian southern hemisphere leans towards the Sun, causing a short, intensely hot summer, while the northern hemisphere endures a brief, cold winter.",
    "Scientists have found tiny traces of Martian atmosphere within meteorites violently ejected from Mars, then orbiting the solar system amongst galactic debris for millions of years, before crash landing on Earth. This allowed scientists to begin studying Mars prior to launching space missions.",
    "For years Mars has been known to have water in the form of ice. The first signs of trickling water are dark stripes or stains on crater wall and cliffs seen in satellite images. Due to Mars’ atmosphere this water would have to be salty to prevent it from freezing or vaporising.",
];



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
}

// earth data



// next button



function preload() {
    bg = loadImage('assets/bg.png');
    
}



function setup() {
    createCanvas(1280,768);
    background(bg);
    fill(0);
    rect(140,160,1000,550,20);

    dataC = loadJSON(dataCURL,gotData);
    dataS = loadJSON(dataSURL,gotData);
    dataO = loadJSON(dataOURL,gotData);

    cButton = createButton("Curiosity");
    cButton.position(240,230);
    cButton.mouseClicked(changeStatusC);
    cButton.style('background-color', col);
    cButton.addClass('buttonClass')

    sButton = createButton("Spirit");
    sButton.position(560,230);
    sButton.mouseClicked(changeStatusS);
    sButton.addClass('buttonClass')

    oButton = createButton("Opportunity");
    oButton.position(880,230);
    oButton.mouseClicked(changeStatusO);
    oButton.addClass('buttonClass')

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

    title = createElement('h1','Mars Rover Photos');
    title.position(0,150)

    let subtitle = createElement('h4',subtitleC);
    subtitle.position(140,510);

    ape = createImg('assets/ape.png','ape');
    ape.position(1000,620);
    ape.size(100,100);
    ape.mouseClicked(showFunFact);

    funFactEle = createDiv(funFact[rand]);
    closeB = createButton('CLOSE');
    funFactEle.hide();
    closeB.hide()

    closeB.mouseClicked(closeFunFact);

}

function gotData() {

    for (var i = 0; i<3 ; i++) {
        imageCList[i] = dataC.photos[i].img_src
    }

    for (var i = 0; i<3 ; i++) {
        imageSList[i] = dataS.photos[i].img_src
    }
    // console.log(imageCList)
    console.log(imageSList)

    for (var i = 0; i<3 ; i++) {
        imageOList[i] = dataO.photos[i].img_src
    }
    // console.log(imageCList)
    // createP(dataC.explanation);
}

function draw() {
    
    if (funFactActive) {
        funFactEle.html(funFact[rand])
        funFactEle.show();
        closeB.show();
        funFactEle.position(480,610);
        closeB.position(490,620);
    } 
    else {
        funFactEle.hide();
        closeB.hide();
    }




    // let fr = 30;
    // // blinking star
    // frameRate(fr);

    // // star One
    // starOne.position(100,300);
    // starOne.size(10,10);

    // // star Two
    // starTwo.position(700,200);
    // starTwo.size(8,8);

    // starThree.position(900,400);
    // starThree.size(12,12);


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

    if (statusC) {
        image1 = createImg(imageCList[0],"image");
        image2 = createImg(imageCList[1],"image");
        image3 = createImg(imageCList[2],"image");
        // image4 = createImg(imageCList[3],"image");
        // image5 = createImg(imageCList[4],"image");
        // image6 = createImg(imageCList[5],"image");
        cButton.style('background-color', col);
        sButton.style('background-color', col1);
        oButton.style('background-color', col1);
    }

    if (statusS) {
        image1 = createImg(imageSList[0],"image");
        image2 = createImg(imageSList[1],"image");
        image3 = createImg(imageSList[2],"image");
        // image4 = createImg(imageSList[3],"image");
        // image5 = createImg(imageSList[4],"image");
        // image6 = createImg(imageSList[5],"image");
        sButton.style('background-color', col);
        cButton.style('background-color', col1);
        oButton.style('background-color', col1);

    }

    if (statusO) {
        image1 = createImg(imageOList[0],"image");
        image2 = createImg(imageOList[1],"image");
        image3 = createImg(imageOList[2],"image");
        // image4 = createImg(imageOList[3],"image");
        // image5 = createImg(imageOList[4],"image");
        // image6 = createImg(imageOList[5],"image");
        oButton.style('background-color', col);
        sButton.style('background-color', col1);
        cButton.style('background-color', col1);
    }

    image1.size(imageSize,imageSize);
    image2.size(imageSize,imageSize);
    image3.size(imageSize,imageSize);
    // image4.size(imageSize,imageSize);
    // image5.size(imageSize,imageSize);
    // image6.size(imageSize,imageSize);

    image1.position(200,300);
    // image2.position(200,180 + imageYSpacing);
    image2.position(200 + imageXSpacing, 300);
    // image4.position(200 + imageXSpacing, 180 + imageYSpacing);
    image3.position(200 + imageXSpacing*2,300);
    // image6.position(200 +imageXSpacing*2,180 + imageYSpacing);

    button = createButton("Home");
    button.position(60,90);
    button.mousePressed(openMainLink)

    // if (activeC) {
    //     h2 = createElement('h2',subtitle);
    //     h2.position(0,100);
    // }


        

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

function changeStatusC() {
    statusC = true;
    statusS = false;
    statusO = false;
}

function changeStatusS() {
    statusS = true;
    statusC = false;
    statusO = false;
}

function changeStatusO() {
    statusO = true;
    statusC = false;
    statusS = false;
}

function showFunFact() {
    funFactActive = true;
    rand = floor(random(6));
    // console.log(floor(rand))
}

function closeFunFact() {
    funFactActive = false;
}