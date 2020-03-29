// ========== header navbar ==================
const links = document.getElementsByClassName('list-link');
for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('list-link--active');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" list-link--active", " ");
        }
        this.className += ' list-link--active';
    })

}
// ======================================================

// ========================= slider =====================
const sliderLeft = document.querySelector('.slider-leftbtn');
const sliderRight = document.querySelector('.slider-rightbtn');
const turnVerticalPhone = document.querySelector('.vertical-iPhone');
const turnHorizontalPhone = document.querySelector('.horizontal-iPhone');
const changeVerticalPhoneBG = document.querySelector('.bg-verticalscreen');
const changeHorizontalPhoneBG = document.querySelector('.bg-horizontalscreen');

let indexPosition = 0;

sliderLeft.addEventListener('click', function () {
    if (changeVerticalPhoneBG.classList !== 'display-none' || changeHorizontalPhoneBG.classList !== 'display-none') {
        changeVerticalPhoneBG.classList.add('display-none')
        changeHorizontalPhoneBG.classList.add('display-none')
    }
    let slider = document.querySelector('.slider-polosa');
    console.log(slider)
    indexPosition = indexPosition - 1020;
    if (indexPosition < -1020) {
        indexPosition = 0;
    }
    slider.style.left = indexPosition + 'px';
})

sliderRight.addEventListener('click', function () {
    if (changeVerticalPhoneBG.classList !== 'display-none' || changeHorizontalPhoneBG.classList !== 'display-none') {
        changeVerticalPhoneBG.classList.add('display-none')
        changeHorizontalPhoneBG.classList.add('display-none')
    }
    let slider = document.querySelector('.slider-polosa');
    console.log(slider)
    if (indexPosition === -1020) {
        indexPosition = indexPosition + 1020;
    } else {
        indexPosition = indexPosition - 1020;
    }

    slider.style.left = indexPosition + 'px';
})


turnVerticalPhone.addEventListener('click', function () {
    changeVerticalPhoneBG.classList.toggle('display-none')
})

turnHorizontalPhone.addEventListener('click', function () {
    changeHorizontalPhoneBG.classList.toggle('display-none')
})
// ======================================================

// =================== Portfolio navButton ============
const portfolioButtons = document.getElementsByClassName('nav-button');
let portfolioGallery = document.querySelector('.portfolio-img-conteiner');
console.log(portfolioGallery)

for (let i = 0; i < portfolioButtons.length; i++) {

    portfolioButtons[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('nav-button--active');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" nav-button--active", " ");
        }
        this.className += ' nav-button--active';

        let pictures = [...document.querySelectorAll('.portfolio-img-conteiner>.img-item')];
        console.log(pictures)
        let shuffledPictures = pictures.slice();

        shuffledPictures.sort(() => (Math.random() - 0.5));
        shuffledPictures.forEach(el => portfolioGallery.append(el))

        console.log(shuffledPictures)
    })
}

portfolioGallery.addEventListener('click', function (event) {
    if (event.target.tagName !== 'IMG') return
    let pictureSelected = portfolioGallery.querySelector('.portfolio-img--selected')

    console.log(pictureSelected)
    event.target.parentNode.classList.add('portfolio-img--selected');
    console.log(pictureSelected)
    if (pictureSelected) {
        pictureSelected.classList.remove('portfolio-img--selected');
    }

})

// ====================================================

// ==================== Form ===========================
const form = document.querySelector('.quote-form');
const formButtonSubmit = document.querySelector('.form-button')
const modalWindow = document.querySelector('.modal');
console.log(form)
form.addEventListener('submit', (event) => event.preventDefault())

formButtonSubmit.addEventListener('click', function () {
    const fieldName = document.querySelector('.form-name');
    const fieldEmail = document.querySelector('.form-email');
    console.log(fieldEmail, fieldName)
    if (fieldName.validity.valid && fieldEmail.validity.valid) {
        modalWindow.classList.remove('display-none');

        const fieldSubject = document.querySelector('.form-subject').value.toString();
        const fieldTextarea = document.querySelector('.form-textarea').value.toString();
        const textModalSubject = document.querySelector('.modal-subject');
        const textModalDescribe = document.querySelector('.modal-describe');

        textModalSubject.innerText = fieldSubject == false ? "Без темы" : `Тема: ${fieldSubject}`;
        textModalDescribe.innerText = fieldTextarea == false ? "Без описания" : `Описание: ${fieldTextarea}`

    }
})

const modalBtnOk = document.querySelector('.modal-button');
modalBtnOk.addEventListener('click', function () {
    modalWindow.classList.add('display-none')
    form.reset()
})

// =====================================================

// ================  BURGER-MENU ========================
const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-wrapper');

burgerIcon.addEventListener('click', function (event) {
    event.preventDefault();
    burgerMenu.classList.remove('display-none');
})

burgerMenu.addEventListener('click', function (event) {
    let target = event.target;
    console.log(target.classList)
    if (target.classList.value == 'icon-item' || target.classList.value == 'burger-icon' || target.classList.value == 'burger-wrapper' || target.classList.value == 'list-link list-link--active') {
        burgerMenu.classList.add('display-none');
    }
})