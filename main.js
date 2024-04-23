quick_draw_data_set=['pen', 'paper', 'book', 'bottle', 'airplane', 'alarmcock'];
random_number = Math.floor(Math.random() * quick_draw_data_set.length);
Element_of_array = array_1[random_no];
document.getElementById("sketch_to_be_drawn").innerHTML="sketch to be drawn:"+Element_of_array;

function setup(){
    canvas=createCanvas(280 ,280 );
    canvas.center()
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function clear_canvas(){
background("white");
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function draw(){
    strokeWeight(10);
    stroke('black');
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
function gotResult(error, result){
if (error){
    console.error(error);   
}
console.log(result);
document.getElementById('label').innerHTML='label: '+result[0].label;
document.getElementById('confidence').innerHTML='confidence: '+Math.round(result[0].confidence*100)+"%";

utterthis=new SpeechSynthesisUtterance(result[0].label);
synth.Speak(utterthis);
}
