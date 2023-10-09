const jokeButton = document.getElementById("joke-btn");
const jokeElement = document.getElementById("joke");

function generateJoke() {
  const request = new XMLHttpRequest();

  request.open("GET", "https://api.chucknorris.io/jokes/random");

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      jokeElement.innerHTML = JSON.parse(this.responseText).value;
    } else {
      jokeElement.innerHTML = "Something Went Wrong (Not Funny)";
    }
  };

  request.send();
}

jokeButton.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
