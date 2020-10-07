const fishCollection = [
    {
        name: "Frank",
        food: "Smaller Fish",
        species: "Lutjanus campechanus",
        length: 24,
        location: "Atlantic Ocean",
        image: "https://tse3.mm.bing.net/th?id=OIP.KJBZ52AI5-3S8n4-9vN-jAHaD9&pid=Api&P=0&w=301&h=162"
    }
    {
        name: "John",
        food: "Smaller Fish",
        species: "Lutjanus campechanus",
        length: 24,
        location: "Atlantic Ocean",
        image: "http://inventivefishing.com/posts/wp-content/uploads/2016/04/Red-snapper-95.jpg"
    }
    {
        name: "Chris",
        food: "Smaller Fish",
        species: "Seriola dumerili",
        length: 10,
        location: "Atlantic Ocean",
        image: "http://spacecoastdaily.com/wp-content/uploads/2015/12/AMBERJACK-580.jpg"
    }
    {
        name: "Drew",
        food: "Smaller Fish",
        species: "Xiphias thermaicus",
        length: 180,
        location: "Atlantic Ocean and  Mediterranean Sea",
        image: "http://catalinaop.com/wp-content/uploads/2013/11/Pacific-swordfish_photo-credit-Britannica-Kids.jpg"
    }
]
export const useFish= () =>{
    return fishCollection.slice()
}