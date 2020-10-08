export const Tip = (tipObj) =>{
    return `
    <div class="tip">
                <h4 class="tip__topic">${tipObj.topic}</h4>
                <p class="tip__text">${tipObj.text}
                </p>
            </div>
            `
}