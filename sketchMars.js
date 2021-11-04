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
var col = '#FFFF00';
var white = "FFFFFF";
var img;

function setup() {
    noCanvas();

    img = createImg('assets/bg.png','background');
    img.position(0,0);
    img.size(1024,512);

    dataC = loadJSON(dataCURL,gotData);
    dataS = loadJSON(dataSURL,gotData);
    dataO = loadJSON(dataOURL,gotData);
    createElement('h1','Mars Hover Photos');


    cButton = createButton("Curiosity");
    cButton.position(100,600);
    cButton.mousePressed(changeStatusC);
    cButton.style('background-color', col);

    sButton = button = createButton("Spirit");
    sButton.position(300,600);
    sButton.mousePressed(changeStatusS)

    oButton = button = createButton("Opportunity");
    oButton.position(600,600);
    oButton.mousePressed(changeStatusO)


}

function gotData() {
    // createElement('h1',dataC.photo[1].img_src);
    // createP(dataC.date);
    // console.log(dataC.photos[0].img_src)
    for (var i = 0; i<6 ; i++) {
        imageCList[i] = dataC.photos[i].img_src
    }

    for (var i = 0; i<6 ; i++) {
        imageSList[i] = dataS.photos[i].img_src
    }
    // console.log(imageCList)
    console.log(imageSList)

    for (var i = 0; i<6 ; i++) {
        imageOList[i] = dataO.photos[i].img_src
    }
    // console.log(imageCList)
    // createP(dataC.explanation);
}

function openMarsLink() {
    window.open("./indexMars.html","_self");
}

function draw() {
    background(0);
    if (statusC) {
        image1 = createImg(imageCList[0],"image");
        image2 = createImg(imageCList[1],"image");
        image3 = createImg(imageCList[2],"image");
        image4 = createImg(imageCList[3],"image");
        image5 = createImg(imageCList[4],"image");
        image6 = createImg(imageCList[5],"image");
        cButton.style('background-color', col);
        sButton.style('background-color', white);
        oButton.style('background-color', white);
    }

    if (statusS) {
        image1 = createImg(imageSList[0],"image");
        image2 = createImg(imageSList[1],"image");
        image3 = createImg(imageSList[2],"image");
        image4 = createImg(imageSList[3],"image");
        image5 = createImg(imageSList[4],"image");
        image6 = createImg(imageSList[5],"image");
        sButton.style('background-color', col);
        cButton.style('background-color', white);
        oButton.style('background-color', white);

    }

    if (statusO) {
        image1 = createImg(imageOList[0],"image");
        image2 = createImg(imageOList[1],"image");
        image3 = createImg(imageOList[2],"image");
        image4 = createImg(imageOList[3],"image");
        image5 = createImg(imageOList[4],"image");
        image6 = createImg(imageOList[5],"image");
        oButton.style('background-color', col);
        sButton.style('background-color', white);
        cButton.style('background-color', white);
    }

    image1.size(200,200);
    image2.size(200,200);
    image3.size(200,200);
    image4.size(200,200);
    image5.size(200,200);
    image6.size(200,200);

    image1.position(100,200);
    image2.position(100,400);
    image3.position(300,200);
    image4.position(300,400);
    image5.position(500,200);
    image6.position(500,400);

    button = createButton("Back");
    button.position(100,100);
    button.mousePressed(openMainLink)

    // if (activeC) {
    //     h2 = createElement('h2',subtitle);
    //     h2.position(0,100);
    // }


        
}

function openMainLink() {
    window.open("./indexMain.html","_self");
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