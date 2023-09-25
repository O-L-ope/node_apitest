const axios = require('axios');
const express = require('express');
const app = express();

let nbp_data = null;
function getValue() {
    axios.get('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')
.then(response => {
    // console.log(response.data[0].rates);
    let data = response.data[0].rates;
    let filtered_data = data.filter((item) => {
        return item.code == 'USD' || item.code == 'EUR' || item.code == 'GBP';
    });
    nbp_data = filtered_data;
    console.log(filtered_data);
})
.catch(error => {
    console.log("error");
});
}

getValue(); 

app.get('/dolar', (require, response) => {
    getValue();
    response.json(nbp_data[0].mid);
});
app.get('/euro', (require, response) => {
    getValue();
    response.json(nbp_data[1].mid);
});
app.get('/gbp', (require, response) => {
    getValue();
    response.json(nbp_data[2].mid);
});

app.listen(8080, () => {
    console.log('serwer wstał');
})