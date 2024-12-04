// Array thaht store a list of quotes and their author 
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" }
];

//get html element by id
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const newQuoteButton = document.getElementById('new-quote')

//function to generate a random quote
function generateQuote(){

    //get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]

    //update the quotes text and author in element html
    quoteText.textContent = `"${randomQuote.text}"`
    quoteAuthor.textContent = `-${randomQuote.author}`
    
}

//event listener for button
newQuoteButton.addEventListener('click', generateQuote)

//call generate quote when page first load
generateQuote()