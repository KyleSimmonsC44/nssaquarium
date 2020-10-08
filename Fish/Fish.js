export const Fish=(fishObj)=>{
    return`
    <div class="fish">
                    <p class="fish__name">${fishObj.name}</p>
                    <img class="fish__img" src="${fishObj.image}"
                        alt="">
                    <p class="fish__species">Species: ${fishObj.species}</p>
                    <p class="fish__location">Location: ${fishObj.location}</p>
                    <p class="fish__length">Length in inches: ${fishObj.length}</p>
                    <p class="fish__diet">Diet: ${fishObj.food}</p>
                </div>`
}