import { travelArray } from './TravelDataProvider.js'
import { TravelHtml } from './Travel.js'

export const TravelHtmlFinal = () =>{
    const contentElement = document.querySelector(".travel__location")

    const travelLoop = travelArray()

    let travelHTMLRep = ""
    for (const travelObject of travelLoop){
        travelHTMLRep += TravelHtml(travelObject)
    }

contentElement.innerHTML +=`

    ${travelHTMLRep}

`
}