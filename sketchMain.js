var dataURL = "https://api.nasa.gov/planetary/apod?api_key=LiLbT8JdAtz4aX1r9ezrCnCo2o0DBNHb47LAEhvS";
var data;

function setup() {
    noCanvas();
    data = loadJSON(dataURL,gotData);
    button = createButton("Mars Hover Photo");
    button.position(100,300);
    button.mousePressed(openMarsLink)

    button = createButton("Meteor Landed on Earth");
    button.position(100,400);
    button.mousePressed(openMeteorLink)
}

function gotData() {
    createElement('h1',data.title);
    createP(data.date);
    createImg(data.url,'image of the day');
    createP(data.explanation);
}

function openMarsLink() {
    window.open("./indexMars.html","_self");
}

function openMeteorLink() {
    window.open("./indexMeotor.html","_self");
}