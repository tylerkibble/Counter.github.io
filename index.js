// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0



function increment() {
    count += 1
    countEl.innerText = count
}
let dash = " - "

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    saveEl.innerText += " " + count + dash
    console.log("this is the updated count")
    console.log(count)
    count = 0
}




