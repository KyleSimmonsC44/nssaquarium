import {UseTip} from './TipsDataProvider.js'
import {Tip} from './Tips.js'

export const RenderTip = () =>{
    const arrayTip = UseTip()
    const contentContainer = document.querySelector(".care__tip")
    let tipHtmlRep = ""
    for (const tip of arrayTip){
        tipHtmlRep += Tip(tip)
    }
    contentContainer.innerHTML += `
    <h3>Tips!</h3>
    ${tipHtmlRep}`
}