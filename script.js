fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => check(data));

function check(data) {
  const mainArea = document.getElementById("area");
  for (let i = 0; i < data.length; i++) {
    const item = data[i].name;
    const div = document.createElement("div");
    div.classList.add("name");
    const info = `
    <h3> ${item} </h3>
    <p> ${data[i].capital} </p>
    <button onClick="CallAFunction('${item}')"> Details </button>
    `;
    div.innerHTML = info;
    mainArea.appendChild(div);
  }
}
const CallAFunction = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => DetailsShow(data));
};
function DetailsShow(country) {
  const countrySelect = document.getElementById("country");

  const info = `
    <h2> ${country[0].name}</h2>
    <p>Population : ${country[0].population}</p>
    <p>Area : ${country[0].area}</p>
    <img src="${country[0].flag}">
    `;
  countrySelect.innerHTML = info;
}
