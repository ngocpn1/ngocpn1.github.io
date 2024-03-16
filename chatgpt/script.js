const apiUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=co&api_key=jHiO1R5Cxohjya05TtDkkoNDf40W3c5NmHuFlDpd';
let alldata = [];
var k = 0;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
   
    const parks = data.data;
    const parksList = document.getElementById('parks-list');
    parks.forEach(park => {
      const parkItem = document.createElement('li');
      parkItem.innerHTML = `<h2>${park.fullName}</h2><p>${park.description}</p><p><a href=${park.images[0].url}><img src=${park.images[0].url}></a>`;
      parksList.appendChild(parkItem);
      alldata[k] = parks;
      k++;
    });
  })
  .catch(error => console.log(error));


let output = document.querySelector('#parks');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

  let i = 0;
function canShow(plusMinus) {
    output.innerHTML = `<h2>${alldata[i].fullName}</h2><p>${alldata[i].description}</p><p><a href=${alldata[i].images[0].url}><img src=${alldata[i].images[0].url}></a>`;
    i += plusMinus;
    if (i==alldata.length) {
        i = 0;
    }
    if (i<0) {
        i = alldata.length - 1;
    }
}

next.onclick = function () {
    canShow(1);
}
previous.onclick = function () {
    canShow(-1);
}

console.log(alldata);