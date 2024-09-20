const textArea = document.querySelectorAll('textarea')
const checkBox = document.querySelectorAll('.checkbox')
const loadingBar = document.querySelector('.progressBarLoading')
const loadingBarText = document.querySelector('.insideLoadingText')
const motivationalText = document.querySelector(".motivationalText")
const errorText = document.querySelector(".errorText")

textArea[0].addEventListener('keydown', (e) => {
    e.target.maxLength = '100';
    const textInput = textArea[0].value;
    textArea[0].innerText = `${textInput}`
    if (e.target.value != '') {
        if (e.key == 'Enter') {
            e.target.readOnly = 'true';
            textArea[0].style.fontWeight = '500';
            checkBox[0].style.border = '3px solid #61481C';
            if (textArea[0].style.fontWeight == '500' && textArea[1].style.fontWeight == '500' && textArea[2].style.fontWeight == '500') {
                errorText.style.cssText = `visibility: hidden;`
            }
        }
    }
})
textArea[1].addEventListener('keydown', (e) => {
    e.target.maxLength = '100';
    const textInput = textArea[1].value;
    textArea[1].innerText = `${textInput}`
    if (e.target.value != '') {
        if (e.key == 'Enter') {
            e.target.readOnly = 'true';
            textArea[1].style.fontWeight = '500';
            checkBox[1].style.border = '3px solid #61481C';
            if (textArea[0].style.fontWeight == '500' && textArea[1].style.fontWeight == '500' && textArea[2].style.fontWeight == '500') {
                errorText.style.cssText = `visibility: hidden;`
            }
        }
    }
})
textArea[2].addEventListener('keydown', (e) => {
    e.target.maxLength = '100';
    const textInput = textArea[2].value;
    textArea[2].innerText = `${textInput}`
    if (e.target.value != '') {
        if (e.key == 'Enter') {
            e.target.readOnly = 'true';
            textArea[2].style.fontWeight = '500';
            checkBox[2].style.border = '3px solid #61481C';
            if (textArea[0].style.fontWeight == '500' && textArea[1].style.fontWeight == '500' && textArea[2].style.fontWeight == '500') {
                errorText.style.cssText = `visibility: hidden;`
            }
        }
    }
})
// ---------------------------------------------------
textArea[0].addEventListener('focus', () => {
    checkBox[0].checked = false
})
textArea[1].addEventListener('focus', () => {
    checkBox[1].checked = false
})
textArea[2].addEventListener('focus', () => {
    checkBox[2].checked = false
})

checkBox[0].addEventListener('click', () => {
    if (textArea[0].style.fontWeight == '500' && textArea[1].style.fontWeight == '500' && textArea[2].style.fontWeight == '500') {

        if (checkBox[0].checked == false) {
            console.log('false')
            textArea[0].style.cssText = `font-weight:500;`
            checkBox[0].style.cssText = `border:3px solid #61481C;`
            if (checkBox[1].checked == false) {
                if (checkBox[2].checked == false) {
                    loadingBar.style.cssText = `animation: progress1Backwards 0.4s linear 0s forwards;`
                    loadingBarText.style.cssText = `animation:text0-100reverse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-out(false)
                }
                else {
                    loadingBar.style.cssText = `animation: progress2Backwards 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '1/3 Completed'
                    loadingBarText.style.cssText = `animation:text0-100ForOneDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                    motivationalText.innerText = 'Raise the bar by completing your goals!'
                }
            }
            else if (checkBox[2].checked == false) {
                loadingBar.style.cssText = `animation: progress2Backwards 0.4s linear 0s forwards;`
                loadingBarText.innerText = '1/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForOneDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.innerText = 'Raise the bar by completing your goals!'
            }

            else {
                loadingBar.style.cssText = `animation: progress3Backwards 0.4s linear 0s forwards;`
                loadingBarText.innerText = '2/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForOneDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.innerText = 'Just a step away, keep going!'
            }


        }

        else if (checkBox[0].checked == true) {
            console.log('true')
            textArea[0].style.cssText = `text-decoration: line-through 1px solid #48A300; color:#48A300; font-weight:500;`
            checkBox[0].style.border = ''
            checkBox[0].checked = true
            if (checkBox[1].checked == true) {
                if (checkBox[2].checked == true) {
                    loadingBar.style.cssText = `animation: progress66-100 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '3/3 Completed Finished!'
                    loadingBarText.style.cssText = `animation:text0-100ForOneDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.innerText = 'Missions completed.'


                }
                else {
                    loadingBar.style.cssText = `animation: progress33-66 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '2/3 Completed'
                    loadingBarText.style.cssText = `animation:text0-100ForOneDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.innerText = 'Just a step away, keep going!'


                }
            }
            else if (checkBox[2].checked == true) {
                loadingBar.style.cssText = `animation: progress33-66 0.4s linear 0s forwards;`
                loadingBarText.innerText = '2/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForOneDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                motivationalText.innerText = 'Just a step away, keep going!'
            }

            else {
                loadingBar.style.cssText = `animation: progress0-33 0.4s linear 0s forwards;`
                loadingBarText.innerText = '1/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForOneDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)

            }


        }
    }
}

)
checkBox[1].addEventListener('click', () => {
    if (textArea[0].style.fontWeight == '500' && textArea[1].style.fontWeight == '500' && textArea[2].style.fontWeight == '500') {

        if (checkBox[1].checked == false) {
            console.log('false')
            textArea[1].style.cssText = `font-weight:500;`
            checkBox[1].style.cssText = `border:3px solid #61481C;`
            if (checkBox[0].checked == false) {
                if (checkBox[2].checked == false) {
                    loadingBar.style.cssText = `animation: progress1Backwards 0.4s linear 0s forwards;`
                    loadingBarText.style.cssText = `animation:text0-100reverse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-out(false)


                }
                else {
                    loadingBar.style.cssText = `animation: progress2Backwards 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '1/3 Completed'
                    loadingBarText.style.cssText = `animation:text0-100ForTwoDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                    motivationalText.innerText = 'Raise the bar by completing your goals!'
                }
            }
            else if (checkBox[2].checked == false) {
                loadingBar.style.cssText = `animation: progress2Backwards 0.4s linear 0s forwards;`
                loadingBarText.innerText = '1/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForTwoDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.innerText = 'Raise the bar by completing your goals!'
            }

            else {
                loadingBar.style.cssText = `animation: progress3Backwards 0.4s linear 0s forwards;`
                loadingBarText.innerText = '2/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForTwoDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.innerText = 'Just a step away, keep going!'
            }

        }

        else if (checkBox[1].checked == true) {

            console.log('true')
            textArea[1].style.cssText = `text-decoration: line-through 1px solid #48A300; color:#48A300; font-weight:500;`
            checkBox[1].style.border = ''
            checkBox[1].checked = true
            loadingBarText.style.cssText = ``

            if (checkBox[0].checked == true) {

                if (checkBox[2].checked == true) {
                    loadingBar.style.cssText = `animation: progress66-100 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '3/3 Completed Finished!'
                    loadingBarText.style.cssText = `animation:text0-100ForTwoDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.innerText = 'Missions completed.'


                }
                else {
                    loadingBar.style.cssText = `animation: progress33-66 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '2/3 Completed'
                    loadingBarText.style.cssText = `animation:text0-100ForTwoDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.innerText = 'Just a step away, keep going!'

                }
            }
            else if (checkBox[2].checked == true) {
                loadingBar.style.cssText = `animation: progress33-66 0.4s linear 0s forwards;`
                loadingBarText.innerText = '2/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForTwoDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                motivationalText.innerText = 'Just a step away, keep going!'

            }

            else {
                loadingBar.style.cssText = `animation: progress0-33 0.4s linear 0s forwards;`
                loadingBarText.innerText = '1/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForTwoDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)

            }


        }
    }
}
)
checkBox[2].addEventListener('click', () => {
    if (textArea[0].style.fontWeight == '500' && textArea[1].style.fontWeight == '500' && textArea[2].style.fontWeight == '500') {

        if (checkBox[2].checked == false) {
            console.log('false')
            textArea[2].style.cssText = `font-weight:500;`
            checkBox[2].style.cssText = `border:3px solid #61481C;`
            if (checkBox[0].checked == false) {
                if (checkBox[1].checked == false) {
                    loadingBar.style.cssText = `animation: progress1Backwards 0.4s linear 0s forwards;`
                    loadingBarText.style.cssText = `animation:text0-100reverse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-out(false)


                }
                else {
                    loadingBar.style.cssText = `animation: progress2Backwards 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '1/3 Completed'
                    loadingBarText.style.cssText = `animation:text0-100ForThreeDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                    motivationalText.innerText = 'Raise the bar by completing your goals!'

                }
            }
            else if (checkBox[1].checked == false) {
                loadingBar.style.cssText = `animation: progress2Backwards 0.4s linear 0s forwards;`
                loadingBarText.innerText = '1/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForThreeDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.innerText = 'Raise the bar by completing your goals!'

            }

            else {
                loadingBar.style.cssText = `animation: progress3Backwards 0.4s linear 0s forwards;`
                loadingBarText.innerText = '2/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForThreeDoneFalse 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneFalse 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(false)
                motivationalText.innerText = 'Just a step away, keep going!'

            }

        }

        else if (checkBox[2].checked == true) {
            console.log('true')
            textArea[2].style.cssText = `text-decoration: line-through 1px solid #48A300; color:#48A300; font-weight:500;`
            checkBox[2].style.border = ''
            checkBox[2].checked = true
            if (checkBox[0].checked == true) {
                if (checkBox[1].checked == true) {
                    loadingBar.style.cssText = `animation: progress66-100 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '3/3 Completed Finished!'
                    loadingBarText.style.cssText = `animation:text0-100ForThreeDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.innerText = 'Missions completed.'


                }
                else {
                    loadingBar.style.cssText = `animation: progress33-66 0.4s linear 0s forwards;`
                    loadingBarText.innerText = '2/3 Completed'
                    loadingBarText.style.cssText = `animation:text0-100ForThreeDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                    motivationalText.innerText = 'Just a step away, keep going!'

                }
            }
            else if (checkBox[1].checked == true) {
                loadingBar.style.cssText = `animation: progress33-66 0.4s linear 0s forwards;`
                loadingBarText.innerText = '2/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForThreeDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                motivationalText.style.cssText = `animation:text0-100ForOneDoneTrue 0.2s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)
                motivationalText.innerText = 'Just a step away, keep going!'

            }

            else {
                loadingBar.style.cssText = `animation: progress0-33 0.4s linear 0s forwards;`
                loadingBarText.innerText = '1/3 Completed'
                loadingBarText.style.cssText = `animation:text0-100ForThreeDoneTrue 0.4s cubic-bezier(0.54, -0.03, 1, 1) 0s forwards;`//fade-in(true)

            }


        }
    }
}


)





