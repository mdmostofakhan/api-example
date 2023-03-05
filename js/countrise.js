const loadCountrise = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountrise(data))
}

const displayCountrise = countries =>{
    // console.log(countries);
    const countryContainer = document.getElementById('all-countrise')
    // for(let country of countries){
    //     console.log(country);
    // }
 countries.forEach(country => {
    console.log(country.cca2)
    const countryDiv = document.createElement('div')
    countryDiv.classList.add('country')
    countryDiv.innerHTML = `
         <h3> Name: ${country.name.common} </h3>
         <p> capital: ${country.capital ? country.capital[0] : 'no capital'} 
         <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `;

        countryContainer.appendChild(countryDiv);

    });

}

const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));
}

const showCountryDetails = (country) => {
    console.log(country);
    const countryDetails = document.getElementById('country-detail')
    countryDetails.innerHTML = `
    <h3>Name: ${country.name.common} </h3>
    <img src="${country.flags.png}">
    `
}

loadCountrise();

