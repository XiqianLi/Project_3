var dataEarth;
var dataEarthURL = "https://api.nasa.gov/EPIC/api/natural?api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS"
var imageList = [];
var imageNum;
var today;
var todayArr;
var apiKey = "";
var earthImage;

function setup() {
    noCanvas();
    dataEarth = loadJSON(dataEarthURL,gotData);

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
        var imageURL = `https://api.nasa.gov/EPIC/archive/natural/${todayArr[0]}/${todayArr[1]}/${todayArr[2].substring(0,2)}/png/${imageList[i]}.png?api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS`;
        console.log(imageURL);
        earthImage = createImg(imageURL,"image");
        earthImage.size(200,200);
        earthImage.position(i*200,100);
    }
}

function draw() {

    "${ song }"
    

}