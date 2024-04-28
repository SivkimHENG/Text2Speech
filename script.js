const synth = window.speechSynthesis; 

const buttons = document.getElementById("btnCTS");
const voiceSelect = document.getElementById("voice");



function speak(){
   const tArea = document.getElementById("tarea").value;
   const utterance = new SpeechSynthesisUtterance(tArea);
   synth.speak(utterance);   
}

buttons.addEventListener("click",() => {
   return speak();
});

