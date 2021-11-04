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


// var url = ""

function preload() {
    mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibGl4aXFpYW4iLCJhIjoiY2t2OG1qNTNkOXczbzJvbW44eGhyazR0diJ9.GaZGveNkHOP4inFpmmkSow")

}


function setup() {
    createCanvas(1024,512);
    loadJSON("./data.json",gotData);


// change to center
    translate(width/2,height/2)
    imageMode(CENTER);
    image(mapImg,0,0);



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
    translate(width/2,height/2);
    var cx = mercX(clon);
    var cy = mercY(clat);
    console.log("test")
    for (var i = 0; i <ndata.length; i++) {
        fill(255);

        if (ndata[i].geolocation) {
        var lat = float(ndata[i].geolocation.latitude);
        var lon = float(ndata[i].geolocation.longitude);
        var x = mercX(lon) - cx;
        var y = mercY(lat) - cy;
        console.log(x);
        noStroke()
        ellipse(x,y,5,5);
        }
    }

// meotor effect
    // for (var i = 0; i <50; i++) {
    //     fill(255,i*0.1);
    //     ellipse(x+i,x+1+i,5,5);
    // }

    button = createButton("Back");
    button.position(100,100);
    button.mousePressed(openMainLink)
}

function openMainLink() {
    window.open("./indexMain.html","_self");
}


// console.log("test");

// var Twit = require('twit')

// var config = require('./config');
// console.log(config);
// var T = new Twit({

// //   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
// //   strictSSL:            true,     // optional - requires SSL certificates to be valid.
// });



// // var tData;

// // function setup() {
// //     createCanvas(200,200);
// //     loadJSON("http://api.open-notify.org/astros.json",gotData,'jsonp')
// // }

// // function gotData(data) {
// //     tData = data;
// // }

// // function draw() {
// //     background(0);
// //     if(tData) {
// //     for (var i = 0; i <tData.number; i++) {
// //         fill(255);
// //         ellipse(random(width),random(height),16,16);
// //     }
// // }
// // }