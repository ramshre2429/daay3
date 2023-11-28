let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function () {
    let val = JSON.parse(xhr.responseText)
    for (let ind in val) {
        console.log(val[ind].flags)
    }
}


