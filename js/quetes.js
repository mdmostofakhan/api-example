const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote =>{
    const blockQuout = document.getElementById('quete')
    console.log(quote);
    blockQuout.innerHTML = quote.quote;
    }

// loadQuote();