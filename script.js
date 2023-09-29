const img = document.querySelector("img");
const button = document.querySelector("button");
const search = document.querySelector("input");
const div = document.querySelector(".wrapper");
const controls = document.querySelector("#controls");
const spans = document.querySelectorAll("span");
const first = document.querySelector("#first-letter");
const heading = document.querySelector(".heading");
const body = document.querySelector("body");
const icon = document.querySelector("#controls>i");
const errorText = document.querySelector("#error");

button.addEventListener("click", getGif);

async function getGif() {
  errorText.textContent = "";
  try {
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=HoD2pa83gqhBgOyTwrRksdv4jRni17Mv&s=${search.value}`;
    const response = await fetch(url, { mode: "cors" });
    const json = await response.json();
    img.src = json.data.images.original.url;
    getGifStyles();
  } catch (error) {
    errorText.textContent = "Couldn't find any gifs...";
    errorText.style.color = "red";
    console.error("An error occurred:", error);
  }
}

function getGifStyles() {
  img.style.display = "block";
  spans.forEach((span) => (span.style.fontSize = "40px"));
  first.style.fontSize = "50px";
  div.style.cssText = "margin-bottom: -30px;";

  if (body.clientWidth > 800) {
    div.style.cssText = "flex-direction:row; justify-content: center;";
    controls.style.cssText = "flex-direction: row; padding-top: 21px;";
    icon.style.top = "0px";
    icon.style.right = "0px";
    icon.style.left = "65px";
  }
}

heading.addEventListener("click", () => {
  location.reload();
});
