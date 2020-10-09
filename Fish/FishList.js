import {Fish} from "./Fish.js"
import{ useFish, mostHolyFish, otherFish, soldier } from "./FishDataProvider.js"

const buildFishContainerHTML = (arrayOfFish) =>{
    
    let fishHTMLRepresentations = ""

    for (const fish of arrayOfFish) {

        fishHTMLRepresentations += Fish(fish)

    }
    return fishHTMLRepresentations
}

export const FishList = () =>{
    const contentElement=document.querySelector(".containerLeft")

    const holyFishes = mostHolyFish()

    const holyFishHTML = buildFishContainerHTML(holyFishes)

    const soldierFishes = soldier()

    const soldierFishHTML = buildFishContainerHTML(soldierFishes)

    const otherFishes = otherFish()

    const otherFishesHTML = buildFishContainerHTML(otherFishes)



    contentElement.innerHTML +=`
    <h3>Meet the Fish!</h3>
    <section class="fishList">
    <p class="holyFish">Holy Fish</p>
       ${holyFishHTML}
    <p class="holyFish">Soldier Fish</p>
       ${soldierFishHTML}
    <p class="holyFish">Other Fish</p>
       ${otherFishesHTML}
    </section>
    `
}