const burger = () => {
    const btnMenu = document.querySelector('.burger svg')
    const modal = document.querySelector('.modalMenu')
    const btnClose = document.querySelector('.modalMenu header svg')
    
    btnMenu.addEventListener('click', () => {
        modal.classList.add('active')
    })

    btnClose.addEventListener('click', () => {
        modal.classList.remove('active')
    })
}

burger()



const  tabs = () => {
    const items = document.querySelectorAll('.tabs .left ul:nth-child(1) li')
    const contents = document.querySelectorAll('.tabs .left ul:nth-child(2) li')

    function removeActive(array) {
        for (const elem of array) {
            elem.classList.remove('active')
        }
    }
    
    for (const item of items) {
        item.addEventListener('click', () => {

            removeActive(items)

            item.classList.add('active')

            removeActive(contents)
            
            contents[item.dataset.id].classList.add('active')
        })
    }
    
}

tabs()