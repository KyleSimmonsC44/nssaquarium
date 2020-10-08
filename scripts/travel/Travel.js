export const TravelHtml = (travelObj) =>{
    return `
    <div class="location">
    <p class="location__name">${travelObj.city}</p>
    <img class="location__img"
        src=${travelObj.image} alt="">
    <p class="location__geo">${travelObj.country}</p>
    </div>
    `
}