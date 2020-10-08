import {Fish} from "./Fish.js"
import{ useFish } from "./FishDataProvider.js"



export const FishList = () =>{
    const contentElement=document.querySelector(".containerLeft")

    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }


    contentElement.innerHTML +=`
    <h3>Meet the Fish!</h3>
    <section class="fishList">
       ${fishHTMLRepresentations}
    </section>
    `
}