let quoteObject = { quote: "The trophy is earned in the hours that no one is watching.", author: "Anonymous" };

chrome.storage.sync.set({quote: quoteObject.quote}, ()=>
{

    console.log("Value is set to ", quoteObject.quote)
});
chrome.storage.sync.set({author: quoteObject.author}, ()=>
{

    console.log("Value is set to ", quoteObject.author)
})