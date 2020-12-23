/*For the single Element 
const keys = document.querySelector(".key");

keys.addEventListener("click", function(e){
  const noteAudio = document.querySelector("#C");
  noteAudio.play();
});

 For Array */

const keys = document.querySelectorAll(".key"); /* Array of keys */

keys.forEach(keyElement => {
  keyElement.addEventListener("click", function(e){
    const noteAudio = document.getElementById(keyElement.dataset.key);
    /* Restart file from the biging and replay it */
    noteAudio.currentTime=0; 
    noteAudio.play();
    keyElement.classList.add("active");
    /* Remove active class from the Key when the audio finished */
    noteAudio.addEventListener("ended", function(){
      keyElement.classList.remove("active");
    })
  
  });
  
  
});



