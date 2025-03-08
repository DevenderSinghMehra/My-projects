let allCountriesData = JSON.parse(localStorage.getItem('allCountries'))
let currentCountriesData = allCountriesData

const searchBar = document.querySelector('.search-bar')
const searchBarButton = document.querySelector('.search-bar__button')
const searchBarInput = document.querySelector('.search-bar__input')
const navThemeChangerButton = document.querySelector('.nav__theme-changer')
const navThemeChangerButtonIcon = document.querySelector('.nav__theme-changer-icon')
const filterToggleContainer = document.querySelector('.filter-toggle--container')
const filterToggle = document.querySelector('.filter-toggle')
const filterToggleTitle = document.querySelector('.filter-toggle>div')
const filterToggleList = document.querySelector('.filter-toggle__list')
const filterToggleCaret = document.querySelector('.filter-toggle__caret')
const filterToggleCloseButton = document.querySelector('.filter-toggle__close-button')
const countriesContainer = document.querySelector('.countries-card--container')
const filterToggleOptions = document.querySelectorAll('.filter-toggle__list>option')
/* whenever user starts to type some where it should get straight into input bar ,scroll bar is getting hidden whenever i am i search something that does not exist., arrange everything in alphabetical order */
if (localStorage.getItem('theme')) {
    document.body.classList.add("dark-mode")
    navThemeChangerButtonIcon.classList.replace("fa-regular", "fa-solid")
}
if (allCountriesData) {
    // console.log('data is injected')
    renderCountries(allCountriesData)

} else {
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('allCountries', JSON.stringify(data))
            allCountriesData = JSON.parse(localStorage.getItem('allCountries'))
            currentCountriesData = allCountriesData
            renderCountries(data)
        })
}


function renderCountries(data) {
    countriesContainer.innerHTML = ''
    data.forEach(country => {
        const countryCard = document.createElement('a')
        countryCard.href = `/country-detailed.html?name=${country.name.common}`
        countryCard.classList.add('country-card')
        countryCard.innerHTML = `   
            <img src="${country.flags.svg}" alt="${country.flags.alt}">
            <div class="country-card__information">
                <h1>${country.name.common}</h1>
                <p>population:&nbsp;<span>${country.population.toLocaleString("en-IN")}</span></p>
                <p>Region:&nbsp;<span>${country.region}</span></p>
                <p>Capital:&nbsp;<span>${country.capital}</span></p>
            </div>`
        countriesContainer.append(countryCard)
    });
}
document.addEventListener('click', (e) => {
    if (!filterToggleContainer.contains(e.target)) {
        filterToggleCaret.classList.remove('filter-toggle__caret--open')
        filterToggleList.classList.remove('filter-toggle__list--activated')
    }
})

navThemeChangerButton.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode')
        navThemeChangerButtonIcon.classList.replace("fa-regular", "fa-solid")
    } else {
        localStorage.removeItem('theme')
        navThemeChangerButtonIcon.classList.replace("fa-solid", "fa-regular")
    }
})

searchBar.addEventListener('mouseenter', () => {
    searchBarButton.classList.add('search-bar__button--hover')
})
searchBar.addEventListener('mouseleave', () => {
    searchBarButton.classList.remove('search-bar__button--hover')
})
searchBarInput.addEventListener('focus', () => {
    searchBarButton.classList.add('search-bar__button--activated')
})
searchBarInput.addEventListener('blur', () => {
    searchBarButton.classList.remove('search-bar__button--activated')
})
searchBarInput.addEventListener('input', (e) => {
    console.log(e.target.value.toLowerCase())
    const filteredCountries = currentCountriesData.filter((country) => {
        return country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    })
    renderCountries(filteredCountries)

})


filterToggleCaret.addEventListener("click", () => {
    filterToggleCaret.classList.toggle('filter-toggle__caret--open')
    filterToggleList.classList.toggle('filter-toggle__list--activated')
})

filterToggleCloseButton.addEventListener('click', () => {
    filterToggleTitle.innerText = `Filter by Region`
    filterToggle.classList.remove('filter-toggle--border-left-activated')
    filterToggleCaret.classList.remove('filter-toggle__caret--open')
    filterToggleList.classList.remove('filter-toggle__list--activated')
    filterToggleCloseButton.classList.remove('filter-toggle__close-button--activated')
    searchBarInput.value = ''
    setTimeout(() => {
        renderCountries(allCountriesData)
        currentCountriesData = allCountriesData
    }, 300);
})

filterToggleOptions.forEach((region) => {
    region.addEventListener('click', () => {
        filterToggleTitle.innerText = region.value
        filterToggle.classList.add('filter-toggle--border-left-activated')
        filterToggleList.classList.toggle('filter-toggle__list--activated')
        filterToggleCaret.classList.toggle('filter-toggle__caret--open')
        filterToggleCloseButton.classList.add('filter-toggle__close-button--activated')
        searchBarInput.value = ''
        setTimeout(() => {
            const regionCountryDetails = allCountriesData.filter((country) => {
                return country.region.includes(region.value)
            })
            renderCountries(regionCountryDetails)
            localStorage.setItem('regionCountries', JSON.stringify(regionCountryDetails))
            currentCountriesData = JSON.parse(localStorage.getItem('regionCountries'))
        }, 300)
    });
})
// })


