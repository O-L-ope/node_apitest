const axios = require('axios');

axios.get('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')
    .then(response => {
        
        
        console.log(response.data);
    })
    .catch(error => {
        console.log("Error: " + error.message + "....");
    });


    // .[
    //     {currency: 'dolar amerykański', code: "USD", mid: 4.3269},
    //     {currency: 'euro', code: 'EUR', mid: 4.6069},
    //     {currency: 'funt szterling', code: 'GBP', mid: 5.302}
    // ]