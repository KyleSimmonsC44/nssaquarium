export const quotesHTML = (quoteObj) =>{
    return`
    <div class="quotes">
                        <p class="quote__text">${quoteObj.text}</p>
                        <p class="quote__author">${quoteObj.author}</p>
                        <p class="quote__location">${quoteObj.location}</p>
                    </div>
                    `
}