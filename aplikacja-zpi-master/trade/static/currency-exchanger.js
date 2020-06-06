//GLOBAL VARIABLES
const addCurrencyBtn = document.querySelector('.add-currency-btn');
const addCurrencyListContainer = document.querySelector('.add-currency-list-container');
const addCurrencyList = document.querySelector('#add-currency-list');
const currencyList = document.querySelector('.currencies');
const closeCurrencyListItem = document.querySelector('.close');

const proxyURL = "https://cors-anywhere.herokuapp.com/";
const baseURL = 'https://api.exchangeratesapi.io/latest';

const defaultCurrencies = ['USD', 'EUR', 'PLN'];
let baseCurrency;
let baseCurrencyValue;

let currencies = [
    {
        name: "Euro",
        abbreviation: "EUR",
        symbol: "\u20AC",
        flagURL: "https://www.countryflags.io/eu/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/EUR.csv",
    },
    {
        name: "Polish Zloty",
        abbreviation: "PLN",
        symbol: "\u007A\u0142",
        flagURL: "https://www.countryflags.io/pl/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/PLN.csv",
    },
    {
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/us/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/USD.csv",
    },
   
    {
        name: "British Pound",
        abbreviation: "GBP",
        symbol: "\u00A3",
        flagURL: "https://www.countryflags.io/gb/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/GBP.csv",
    },
    {
        name: "Czech Koruna",
        abbreviation: "CZK",
        symbol: "\u004B\u010D",
        flagURL: "https://www.countryflags.io/cz/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/CZK.csv",
    },
    {
        name: "Russian Ruble",
        abbreviation: "RUB",
        symbol: "\u20BD",
        flagURL: "https://www.countryflags.io/ru/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/RUB.csv",
    },
    
    {
        name: "Swiss Franc",
        abbreviation: "CHF",
        symbol: "\u0043\u0048\u0046",
        flagURL: "https://www.countryflags.io/ch/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/CHF.csv",
    },
   
    {
        name: "Swedish Krone",
        abbreviation: "SEK",
        symbol: "\u006B\u0072",
        flagURL: "https://www.countryflags.io/se/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/SEK.csv",
    },
    {
        name: "Norwegian Krone",
        abbreviation: "NOK",
        symbol: "\u006B\u0072",
        flagURL: "https://www.countryflags.io/no/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/NOK.csv",
    },
    {
        name: "Danish Krone",
        abbreviation: "DKK",
        symbol: "\u006B\u0072",
        flagURL: "https://www.countryflags.io/dk/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/DKK.csv",
    },
    {
        name: "Croatian Kuna",
        abbreviation: "HRK",
        symbol: "\u006B\u006E",
        flagURL: "https://www.countryflags.io/hr/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/HRK.csv",
    },
    {
        name: "Hungarian Forint",
        abbreviation: "HUF",
        symbol: "\u0046\u0074",
        flagURL: "https://www.countryflags.io/hu/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/HUF.csv",
    },
    {
        name: "Icelandic Krona",
        abbreviation: "ISK",
        symbol: "\u006B\u0072",
        flagURL: "https://www.countryflags.io/is/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/ISK.csv",
    },
    {
        name: "Bulgarian Lev",
        abbreviation: "BGN",
        symbol: "\u043B\u0432",
        flagURL: "https://www.countryflags.io/bg/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/BGN.csv",
    },
    {
        name: "Romanian Leu",
        abbreviation: "RON",
        symbol: "\u006C\u0065\u0069",
        flagURL: "https://www.countryflags.io/ro/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/RON.csv",
    },
      
    {
        name: "Australian Dollar",
        abbreviation: "AUD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/au/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/AUD.csv",
    },
    {
        name: "New Zealand Dollar",
        abbreviation: "NZD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/nz/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/NZD.csv",
    },
    {
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/ca/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/CAD.csv",
    },
    {
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "https://www.countryflags.io/jp/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/JPY.csv",
    },
    {
        name: "Chinese Yuan Renminbi",
        abbreviation: "CNY",
        symbol: "\u00A5",
        flagURL: "https://www.countryflags.io/cn/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/CNY.csv",
    },
    
    {
        name: "Mexican Peso",
        abbreviation: "MXN",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/mx/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/MXN.csv",
    },
    {
        name: "Singapore Dollar",
        abbreviation: "SGD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/sg/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/SGD.csv",
    },
    {
        name: "Hong Kong Dollar",
        abbreviation: "HKD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/hk/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/HKD.csv",
    },
    
    {
        name: "South Korean Won",
        abbreviation: "KRW",
        symbol: "\u20A9",
        flagURL: "https://www.countryflags.io/kr/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/KRW.csv",
    },
    {
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "https://www.countryflags.io/tr/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/TRY.csv",
    },
    
    {
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "https://www.countryflags.io/in/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/INR.csv",
    },
    {
        name: "Brazilian Real",
        abbreviation: "BRL",
        symbol: "\u0052\u0024",
        flagURL: "https://www.countryflags.io/br/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/BRL.csv",
    },
    {
        name: "South African Rand",
        abbreviation: "ZAR",
        symbol: "\u0052",
        flagURL: "https://www.countryflags.io/za/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/ZAR.csv",
    },
    {
        name: "Philippine Peso",
        abbreviation: "PHP",
        symbol: "\u20B1",
        flagURL: "https://www.countryflags.io/ph/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/PHP.csv",
    },
    
    {
        name: "Indonesian Rupiah",
        abbreviation: "IDR",
        symbol: "\u0052\u0070",
        flagURL: "https://www.countryflags.io/id/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/IDR.csv",
    },
    {
        name: "Malaysian Ringgit",
        abbreviation: "MYR",
        symbol: "\u0052\u004D",
        flagURL: "https://www.countryflags.io/my/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/MYR.csv",
    },
    
    {
        name: "Thai Baht",
        abbreviation: "THB",
        symbol: "\u0E3F",
        flagURL: "https://www.countryflags.io/th/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/THB.csv",
    },
    {
        name: "Israeli Shekel",
        abbreviation: "ILS",
        symbol: "\u20AA",
        flagURL: "https://www.countryflags.io/il/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/ILS.csv",
    }
];




//POPULATE FUNCTIONS
const populateAddCurrencyList = () => {
    for(let i=0; i<currencies.length; i++){
        document.querySelector("#add-currency-list").insertAdjacentHTML('beforeend', `<li data-currency='${currencies[i].abbreviation}' class="currency-element">
        <div class="img-container-list">
        <img src="${currencies[i].flagURL}" alt="${currencies[i].abbreviation} flag"
            class="flag">
    </div>
    <div class="marks">
        <p class="currency-acronyme">${currencies[i].abbreviation}</p>
        <p class="currency-name">${currencies[i].name}</p>
    </div>
    </li>`) 
    }
}

const populateCurrencyList = () => {
    for(let i=0; i<defaultCurrencies.length; i++){
        const currency = currencies.find(curr => curr.abbreviation === defaultCurrencies[i]);
        if(currency) addCurrencyListItem(currency);
    }
}

const addCurrencyListItem = (currency) => {
    if(currencyList.childElementCount === 0){
        baseCurrency = currency.abbreviation;
        baseCurrencyValue = 0;
    }
    addCurrencyList.querySelector(`[data-currency='${currency.abbreviation}']`).classList.add('added');
    const baseCurrencyRate = currencies.find(curr => curr.abbreviation === baseCurrency).rate;
    const exchangeRate = currency.abbreviation === baseCurrency ? 1 : (currency.rate / baseCurrencyRate).toFixed(2);

    currencyList.insertAdjacentHTML('beforeend', `
                    <li class="currency-element ${currency.abbreviation === baseCurrency ? "base-currency" : ""}" id="${currency.abbreviation}">
                        <div class="img-container">
                            <img src="${currency.flagURL}" alt="${currency.abbreviation}">
                        </div>
                        <div class="marks">
                            <p class="currency-acronyme">${currency.abbreviation}</p>
                            <p class="currency-name">${currency.name}</p>
                        </div>
                        <div class="currency-calculations">
                            <p class="input">
                                <span class="currency-symbol">${currency.symbol}</span>
                                <input placeholder="0.0000" type="number">
                            </p>
                            <p class="base-currency-value"><span class="base-currency-comparison">1 ${baseCurrency}</span> = ${exchangeRate} ${currency.abbreviation}
                            </p>
                        </div>
                        <span class="close">&times;</span>
                    </li>
    `)
}

//EVENT LISTENERS
addCurrencyBtn.addEventListener('click', ()=>{
    addCurrencyListContainer.classList.toggle('open');
    addCurrencyBtn.classList.toggle('activated-button');
});

const addCurrencyListItemClick = (event) => {
    const clickedAddListItem = event.target.closest('li');
    if(!clickedAddListItem.classList.contains('added')){
        const currency = currencies.find(curr => curr.abbreviation === clickedAddListItem.getAttribute(["data-currency"]));
        if(currency) addCurrencyListItem(currency);
    }
}

const currencyListClick = (event) => {
    if(event.target.classList.contains('close')){
        const parentNode = event.target.parentNode;
        parentNode.remove();
        addCurrencyList.querySelector(`[data-currency='${parentNode.id}']`).classList.remove('added');
        if(parentNode.classList.contains('base-currency')){
            const newBaseCurrencyListItem = currencyList.firstElementChild;
            if(newBaseCurrencyListItem){
                setNewBaseCurrency(newBaseCurrencyListItem);
                baseCurrencyValue = Number(newBaseCurrencyListItem.querySelector('.input input').value);
            }
        }
    }
}

const setNewBaseCurrency = (newBaseCurrencyListItem) => {
    newBaseCurrencyListItem.classList.add('base-currency');
    baseCurrency = newBaseCurrencyListItem.id;
    const baseCurrencyRate = currencies.find(curr => curr.abbreviation === baseCurrency).rate;
    currencyList.querySelectorAll('.currency-element').forEach(currencyListItem => {
        const currencyRate = currencies.find(curr => curr.abbreviation === currencyListItem.id).rate;
        const exchangeRate = currencyListItem.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(2);
        currencyListItem.querySelector('.base-currency-value').innerHTML = `<span class="base-currency-comparison">1 ${baseCurrency}</span> = ${exchangeRate} ${currencyListItem.id}`;
    });
}

const currencyListInputChange = (event) => {
    const isNewBaseCurrency = event.target.closest('li').id !== baseCurrency;
    if(isNewBaseCurrency){
        currencyList.querySelector(`#${baseCurrency}`).classList.remove('base-currency');
        setNewBaseCurrency(event.target.closest('li'));
    }
    const newBaseCurrencyValue = isNaN(event.target.value) ? 0 : Number(event.target.value); 
    if(baseCurrencyValue !== newBaseCurrencyValue || isNewBaseCurrency){
        baseCurrencyValue = newBaseCurrencyValue;
        const baseCurrencyRate = currencies.find(curr => curr.abbreviation === baseCurrency).rate;
        currencyList.querySelectorAll('.currency-element').forEach(currencyListItem => {
            if(currencyListItem.id !== baseCurrency){
                const currencyRate = currencies.find(curr => curr.abbreviation === currencyListItem.id).rate;
                const exchangeRate = currencyListItem.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(2);
                currencyListItem.querySelector('.input input').value = (exchangeRate*baseCurrencyValue) !== 0 ? (exchangeRate*baseCurrencyValue).toFixed(2) : "";
            }
        });
        
    }
    
}

addCurrencyList.addEventListener('click', addCurrencyListItemClick);

currencyList.addEventListener('click', currencyListClick);

currencyList.addEventListener('input', currencyListInputChange);

currencyList.addEventListener('click', (event) => {
    event.target.select();
});

currencyList.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') event.target.blur();
})

currencyList.addEventListener('focusout', (event) => {
    const inputValue = event.target.value;
    if(Number(inputValue == 0) || isNaN(inputValue)){
        event.target.value = '';
    }else{
        event.target.value = Number(inputValue).toFixed(2);
    }
})


//FETCH
fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.current-date').textContent = `latest update: ${data.date}`
        // document.querySelector('.current-date').textContent = data.date.split("-").reverse().join("-");
        data.rates['EUR'] = 1;
        currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
        currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation])
        populateAddCurrencyList();
        populateCurrencyList();
    })
    .catch(error => console.log('problem'))

// //EXECUTE
// populateAddCurrencyList();
// populateCurrencyList();



