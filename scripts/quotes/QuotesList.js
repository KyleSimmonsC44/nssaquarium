import {quotesArray} from './QuotesDataProvider.js'
import {quotesHTML} from './Quotes.js'

export const QuotesFinalHTML = () =>{
    // where do we want to add the html??
    const contentElement = document.querySelector(".travel__quotes")
    // we need to add the data now, to start we have to assign it to a variable
    const quoteLoop = quotesArray()
    // now make an empty string to store the html
    let quotesHtmlRep = ""

    for (const quote of quoteLoop){
        quotesHtmlRep += quotesHTML(quote)
    }

    contentElement.innerHTML +=
    `${quotesHtmlRep}`
}

