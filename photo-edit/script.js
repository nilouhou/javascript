const controls = document.querySelectorAll(".control input");
function updateHandle(){
 const suffix = this.dataset.sizing || '' ;
 document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

controls.forEach(control => control.addEventListener("change", updateHandle));
controls.forEach(control => control.addEventListener("mousemove", updateHandle));