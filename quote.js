let quoteElem = document.getElementById("quoteId");
let authorElem = document.getElementById("authorId");


async function getQuote() {

    let result = await fetch("https://api.goprogram.ai/inspiration").catch(function (err) {
        chrome.storage.sync.get(['quote', "author"], (data) => {
            console.log(data.quote)
            console.log(data.author)
            let textNode = document.createTextNode(data.quote)
            let authorName = document.createTextNode("-" + data.author)
            quoteElem.append(textNode)
            authorElem.append(authorName)


        });
    })
    let data = await result.json();


    if (data) {
        console.log(data)
        let textNode = document.createTextNode(data.quote)
        let authorName = document.createTextNode("-" + data.author)

        quoteElem.append(textNode)
        authorElem.append(authorName)
    }



}

getQuote();
