const overlay = document.querySelector('.overlay')
const form = document.querySelector('form')
const goBack = document.querySelector('.go-back')
const password = document.querySelector('#password')
const characters = document.querySelector('.characters')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (password.value.length < 8) {
        alert('Enter a password that has 8 characters or more')
        password.value = ''
    } else {
        overlay.classList.add('visible')

        form.reset()
    }

})

goBack.addEventListener('click', () => {
    overlay.classList.remove('visible')

})

password.addEventListener('mouseover', () => {
    characters.classList.add('visible')

})

password.addEventListener('mouseleave', () => {
    characters.classList.remove('visible')
})




