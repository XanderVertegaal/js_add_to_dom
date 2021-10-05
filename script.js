const bigButton = document.getElementsByClassName("big-five-button")

const addItem = event => {
    let target = event.target.innerHTML
    console.log('Er wordt geklikt op:', target)
    
    const newEle = document.createElement("li");
    newEle.innerHTML = target
    newEle.className = "spotted-animals-list-item"
    console.log('Created new element:', newEle)

    const parentEle = document.getElementById('spotted-animals-list');
    console.log('Parent:', parentEle)
    parentEle.appendChild(newEle); 
}

for (let button of bigButton) {
    button.addEventListener('click', addItem);
}

const removeFirstBtn = document.getElementById('remove-first-item-button')
const removeFirst = () => {
    let firstItem = document.getElementsByClassName('spotted-animals-list-item')
    firstItem[0].remove()
}
removeFirstBtn.addEventListener('click', removeFirst)

const removeAllBtn = document.getElementById('remove-all-button')
const removeAll = () => {
    // let allItems = document.querySelectorAll('.spotted-animals-list-item')
    // allItems.forEach(x => x.remove())
    let allItemsParent = document.getElementById('spotted-animals-list')
    allItemsParent.querySelectorAll('li').forEach(element => element.remove())
}
removeAllBtn.addEventListener('click', removeAll)