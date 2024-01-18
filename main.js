var score=0;

function decrease(){
    score=score-20;
document.getElementById("box").textContent=score;
}
function increase(){
    score=score+20;
    document.getElementById("box").textContent=score;
}