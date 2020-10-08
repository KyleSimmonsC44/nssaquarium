const travelCollection = [
    {
        city: "Florence",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-10-at-12-15-40-pm-1575998170.png",
        country: "Italy",
    },
    {
        city: "St. Petersburg",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-10-at-12-14-03-pm-1575998085.png",
        country: "Russia",
    },
    {
        city: "Capetown",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-10-at-12-24-50-pm-1575998744.png",
        country: "South Africa",
    },
    {
        city: "Hobbiton",
        image: "http://www.straytravel.com/assets/Uploads/hobbiton-4.jpg",
        country: "Middle Earth",
    },
]
export const travelArray = () =>{
   return travelCollection.slice()
}