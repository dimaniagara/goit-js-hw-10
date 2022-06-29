export const listCountry = countries => {
  return countries
    .map(
      country => `
		 <li>
			  <img src=${country.flags.svg} height=12/>
			  <span >${country.name.official}</span>
		 </li>`
    )
    .join('');
};
