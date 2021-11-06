let x = 640;
let y = 384;
let d = 20;
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
    spd:47
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



function setup() {
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






  // mSpeed = 0.036 / 10;
  // bSpeed = 0.067 / 10;
  // cSpeed = 0.093 / 10;
}

function draw() {
  background(30);
  noFill(); //rings
  strokeWeight(0.25);
  
  // orbit circles
  stroke("white");
  circle(x, y, d);
  circle(x, y, d * pdata.v.dis);
  circle(x, y, d * pdata.e.dis);
  circle(x, y, d * pdata.ma.dis);
  circle(x, y, d * pdata.j.dis);
  circle(x, y, d * pdata.s.dis);
  circle(x, y, d * pdata.u.dis);
  circle(x, y, d * pdata.n.dis);
  
  // center planet -sun
  noStroke();
  fill(r,g,h);
  circle(x, y, 8);

  translate(x, y);
  
  push();
  //rotate(a); //make moons to revolve automatically
  //let b = map(mouseX, 0, width, 0, 4 * PI); //control moons movement by mouseX
  //rotate(b);
  //let c = map(mouseY, 0, height, 0, 4 * PI); //control moons movement by mouse
  //rotate(c);
  

  push();
  rotate(m);
  fill(50, 200, 200); //moons
  circle(0, d/2, radi);
  pop();
  
  // v
  push();
  rotate(v);
  fill(r, g, h); 
  circle((d * pdata.v.dis) / 2, 0, radi*pdata.v.radi);  
  pop();
  
  //rotate(a); //make the third moon rotate faster
  
  // e
  push();
  rotate(e);
  fill(r, g, h);
  circle(0,(d * pdata.e.dis) / 2, radi*pdata.e.radi);
  pop();
  
  // ma
  push();
  rotate(ma);
  fill(r, g, h);
  circle(0,(d * pdata.ma.dis) / 2, radi*pdata.ma.radi);
  pop();

  // j
  push();
  rotate(j);
  fill(r, g, h);
  circle(0,(d * pdata.j.dis) / 2, radi*pdata.j.radi);
  pop();

  // s
  push();
  rotate(s);
  fill(r, g, h);
  circle(0,(d * pdata.s.dis) / 2, radi*pdata.s.radi);
  pop();
// u
push();
rotate(u);
fill(r, g, h);
circle(0,(d * pdata.u.dis) / 2, radi*pdata.u.radi);
pop();

// n
push();
rotate(n);
fill(r, g, h);
circle(0,(d * pdata.n.dis) / 2, radi*pdata.n.radi);
pop();



  // updates the state of the solar system
  m = m + pdata.m.spd * 0.001;
  v = v + pdata.v.spd* 0.001;
  e = e + pdata.e.spd* 0.001;
  ma = ma + pdata.ma.spd* 0.001;
  j = j + pdata.j.spd* 0.001;
  s = s + pdata.s.spd* 0.001;
  u = u + pdata.u.spd* 0.001;
  n = n + pdata.n.spd* 0.001;
  
  
}