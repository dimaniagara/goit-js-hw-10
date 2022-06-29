import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { listCountry } from './listCountry';
import { cardCountry } from './cardCountry';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('ul');
const countryInfo = document.querySelector('div');

searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
// _.debounce(onSearch,DEBOUNCE_DELAY),

function onSearch(evt) {
  evt.preventDefult;

  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  const name = searchBox.value.trim();

  fetchCountries(name)
    .then(countries => {
      const countOfContries = countries.length;

      if (countOfContries === 1) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = cardCountry(countries);
      } else if (countOfContries > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else {
        countryInfo.innerHTML = '';

        countryList.style.listStyle = 'none';
        countryList.innerHTML = listCountry(countries);
      }
    })
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
}
