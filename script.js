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
  
        let pictureSelected = portfolioGallery.querySelector('.portfolio-img--selected')

        console.log(pictureSelected)
        event.target.parentNode.classList.add('portfolio-img--selected');
        console.log(pictureSelected)
        if (pictureSelected) {
            pictureSelected.classList.remove('portfolio-img--selected');
        }

})

// ====================================================
