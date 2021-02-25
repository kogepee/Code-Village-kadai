const addButton    = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list         = document.querySelector('#list')

addButton.addEventListener('click', (event) => {
    // const items   = document.querySelectorAll('#list li　img span')
    const newLi = document.createElement('li')
    const newImg  = document.createElement('img')
    const newSpan = document.createElement('span')
    // newItem.textContent = 'アイテム' + (list.children.length + 1)
    newImg.src = "http://placehold.it/64x64"
    newImg.alt = 'アイテム' + (list.children.length + 1)
    newSpan.textContent = 'アイテム' + (list.children.length + 1)
    list.appendChild(newLi)
    newLi.appendChild(newImg)
    newLi.appendChild(newSpan)
})
removeButton.addEventListener('click', (event) => {
    let i = 0
    if (i < list.children.length) {
    list.removeChild(list.lastElementChild)
} else{    
}
})

