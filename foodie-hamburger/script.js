const closeIcon = document.querySelector('.close-icon')
const navBar = document.querySelector("#header > div > nav")
const navOptions = document.querySelectorAll(".vis-off")
let activate = false;
closeIcon.addEventListener('click', () => {
    navBar.classList.toggle('transform-nav')

    navOptions.forEach((option) => {
        option.classList.toggle('vis-off')
    })

    if (activate == false) {
        closeIcon.innerHTML = '&times;'
    }
    else {
        closeIcon.innerHTML = '&#9776;'
    }

    activate = !activate
})
























