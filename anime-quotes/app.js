const quoteText = document.querySelector(".quote");
const quoteButton = document.querySelector("button");
const authorName = document.querySelector(".name");
const animeName = document.querySelector(".anime");
const speechButton = document.querySelector(".sound");
const copyButton = document.querySelector(".copy");
const twitterButton = document.querySelector(".twitter");
const synth = document.querySelector(".sound");

const URL = "https://animechan.vercel.app/api/random";

speechButton.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText} from ${animeName.innerText} `
  );
  speechSynthesis.speak(utterance);
});

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterButton.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});

quoteButton.addEventListener("click", randomQuote);

async function randomQuote() {
  quoteButton.classList.add("loading");
  quoteButton.innerText = "Loading Quote...";

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      quoteText.innerText = result.quote;
      authorName.innerText = result.character;
      animeName.innerText = result.anime;
      quoteButton.classList.remove("loading");
      quoteButton.innerText = "New Quote";
    });
}
