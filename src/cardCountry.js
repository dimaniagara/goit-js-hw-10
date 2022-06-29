import './css/styles.css';

export const cardCountry = countries => {
  return countries
    .map(
      country => `
    <ul>
        <li>
            <img src=${country.flags.svg} height=25/>
            <span class = 'nameCountry'><b>${country.name.official}</b></span>
        </li>
        <li> 
            <span><b>Capital:</b></span> <span>${country.capital}</span>
        </li>
        <li>
            <span><b>Population:</b></span> <span>${country.population}</span>
        </li>
        <li>       
            <span><b>Languages:</b></span> <span>${Object.values(
              country.languages
            )}</span>
        </li>
    </ul>`
    )
    .join('');
};
