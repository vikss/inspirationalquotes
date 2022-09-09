let quoteElem = document.getElementById("quoteId");
let authorElem = document.getElementById("authorId");

async function getQuote() {

    let result = await fetch("https://api.goprogram.ai/inspiration")
    let data = await result.json();

    try{
    if (data) {
        console.log(data)
        let textNode = document.createTextNode(data.quote)
        quoteElem.append(textNode)
        let authorName = document.createTextNode("-" + data.author)
        authorElem.append(authorName)
    }
}
    catch (error) {
        chrome.storage.sync.get(['quote', "author"], (data) => {
            console.log(data.quote)
            console.log(data.author)
            let textNode = document.createTextNode(data.quote)
            quoteElem.append(textNode)
            let authorName = document.createTextNode("- " + data.author)
            authorElem.append(authorName)


        });
    }

}

getQuote();
