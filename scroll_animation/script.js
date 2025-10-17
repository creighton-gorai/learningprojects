const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    console.log(window.innerHeight)
    const triggerBottom = window.innerHeight

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}