const tipsCollection[
    {
      text: "The world is a book, and those who do not travel read only one page.",
      author: "St. Augustine",
      location:"Rome",  
    },
    {
      text: "Not all those who wander are lost",
      author: "J.R.R. Tolkien",
      location: "Middle Earth",  
    },
    {
      text: "The journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
      location: "China",  
    },
    {
      text: "Wherever you go becomes a part of you somehow.",
      author: "Anita Desai",
      location: "India",  
    },
]
export const useTip= () =>{
    return tipsCollection.slice()
}