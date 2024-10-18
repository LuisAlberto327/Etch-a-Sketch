const container = document.querySelector(".container");
const sliderText = document.querySelector(".sliderValue");
const slider = document.querySelector("#slider");
const colorMode = document.querySelector("#colorMode");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");


let numOfSquares = slider.value*slider.value;
let sideMeasure = 500/slider.value.toString();
let mode = "colorMode";

for(i=0;i<numOfSquares;i++){
  const squares = document.createElement("div");
  squares.style.width=(sideMeasure+"px");
  squares.style.height=(sideMeasure+"px");
  container.appendChild(squares);
}

slider.addEventListener("input",()=>{
  sliderText.textContent = slider.value+"x"+slider.value;
});

slider.addEventListener("click",()=>{ 
  container.replaceChildren(); 
  //replaceChildren erases the existing squares
  numOfSquares = slider.value*slider.value;
  sideMeasure = 500/slider.value.toString();
  //500 because the container measures 500x500 pixels
  for(i=0;i<numOfSquares;i++){
    const squares = document.createElement("div");
    squares.style.width=(sideMeasure+"px");
    squares.style.height=(sideMeasure+"px");
    container.appendChild(squares);
  }
});

container.addEventListener("mousedown",(e)=>{
    e.preventDefault(); 
    /*preventDefault fixes the error that occurs when you drag the mouse
    as you do mousedown*/
  if(e.target.className!="container"&&
    e.buttons==1){
    if(mode=="colorMode"){
      e.target.style.backgroundColor = palette.value;
    }
    else if(mode=="rainbow"){
      e.target.style.backgroundColor = randomColor();
    }
    else if(mode=="eraser"){
      e.target.style.backgroundColor = "white";
    }
  }
});

container.addEventListener("mouseover",(e)=>{
  if(e.target.className!="container"&&e.buttons==1){
    if(mode=="colorMode"){
      e.target.style.backgroundColor = palette.value;
    }
    else if(mode=="rainbow"){
      e.target.style.backgroundColor = randomColor();
    }
    else if(mode=="eraser"){
      e.target.style.backgroundColor = "white";
    }
  }
});

colorMode.addEventListener("click",(e)=>{
  if(e.buttons==0){
    mode = "colorMode";
    if(colorMode.classList.contains("buttons")){
      colorMode.classList.toggle("buttonSelected");
      colorMode.classList.toggle("buttons");
      rainbow.classList.remove("buttonSelected");
      eraser.classList.remove("buttonSelected");
      rainbow.classList.add("buttons");
      eraser.classList.add("buttons");
    }   
  }
});

rainbow.addEventListener("click",(e)=>{
  if(e.buttons==0){
    mode = "rainbow";
    if(rainbow.classList.contains("buttons")){
      rainbow.classList.toggle("buttonSelected");
      rainbow.classList.toggle("buttons");
      colorMode.classList.remove("buttonSelected");
      eraser.classList.remove("buttonSelected");
      colorMode.classList.add("buttons");
      eraser.classList.add("buttons");
    }
  }
});

eraser.addEventListener("click",(e)=>{
  if(e.buttons==0){
    mode = "eraser";
    if(eraser.classList.contains("buttons")){
      eraser.classList.toggle("buttonSelected");
      eraser.classList.toggle("buttons");
      colorMode.classList.remove("buttonSelected");
      rainbow.classList.remove("buttonSelected");
      colorMode.classList.add("buttons");
      rainbow.classList.add("buttons");
    }
  }
});

clear.addEventListener("click",(e)=>{
 if(e.buttons==0){
  container.replaceChildren();
  //replaceChildren erases the existing squares
  for(i=0;i<numOfSquares;i++){
    const squares = document.createElement("div");
    squares.style.width=(sideMeasure+"px");
    squares.style.height=(sideMeasure+"px");
    container.appendChild(squares);
  }
 }   
});

fill.addEventListener("click",(e)=>{
  if(e.buttons==0){
    container.replaceChildren();
    //replaceChildren erases the existing squares
    for(i=0;i<numOfSquares;i++){
      const squares = document.createElement("div");
      squares.style.width=(sideMeasure+"px");
      squares.style.height=(sideMeasure+"px");
      squares.style.backgroundColor = palette.value;
      container.appendChild(squares);
    }
  }
});

function randomColor(){
  let random = Math.floor(Math.random()*10);
  let color = "";
  switch (random){
    case 9: color="blue"; break;
    case 8: color="red"; break;
    case 7: color="purple"; break;
    case 6: color="cyan"; break;
    case 5: color="hotpink"; break;
    case 4: color="greenyellow"; break;
    case 3: color="saddlebrown"; break;
    case 2: color="yellow"; break;
    case 1: color="orange"; break;
    case 0: color="blue"; break;     
  }
  return color;
}