const string = document.getElementById('string');
const counter = document.getElementById('counterFooter');
const tweetBtn = document.getElementById('btn');

string.addEventListener("keydown", function() {
  let currentChar = this.value.length;
  const maxChar = 140;
  let remainChar = maxChar - currentChar;
  counter.innerHTML = remainChar + "/" + maxChar;
  if (remainChar <= 20) {
    counter.style.color = "#ff0000";

    if (remainChar <= 0) {
      tweetBtn.disabled = true;
      tweetBtn.classList.add("buttonDisabled");
    } else {
      tweetBtn.disabled = false;
      tweetBtn.classList.remove("buttonDisabled");
    }

  } else {
    counter.style.color = "#fff";

  }

});

// tweeting

tweetBtn.addEventListener("click", function() {
  window.open(`https://twitter.com/intent/tweet?text=${string.value}`, "_blank");
});