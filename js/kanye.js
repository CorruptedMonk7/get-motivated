const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayFunction(data))
}
const displayFunction = quotes => {
    const newBlockQuote = document.getElementById("quote")
    newBlockQuote.innerText = quotes.quote;
}
