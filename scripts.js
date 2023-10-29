const convertButton = document.querySelector(".convert-button");
const currencyConverted= document.querySelector(".currency-converted");
const currencySelectConvert = document.querySelector(".currency-select-convert");


function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");
  result = 1;

  
  const dolarToday = 5.0;
  const realToday = 1.0;
  const euroToday = 5.3;
  const libraToday = 6.1;
  const bitcoinToday = 145.0;


  if (currencySelectConvert.value == "real-convert") 
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
    result = inputCurrencyValue * realToday;
  

  if (currencySelectConvert.value == "dolar-convert") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
    result = inputCurrencyValue * dolarToday;
  }
  if (currencySelectConvert.value == "euro-convert") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
    result = inputCurrencyValue * euroToday;
  }
  if (currencySelectConvert.value == "libra-convert") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
    result = inputCurrencyValue * libraToday;
  }

  if (currencySelectConvert.value == "bitcoin-convert") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue);
    result = inputCurrencyValue * bitcoinToday;
  }
//
  if (currencyConverted.value == "real-converted")
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result / realToday);


  if (currencyConverted.value == "dolar-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(result / dolarToday);
  }

  if (currencyConverted.value == "euro-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(result / euroToday);
  }

  if (currencyConverted.value == "libra-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(result / libraToday);
  }

  if (currencyConverted.value == "bitcoin-converted") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(result / bitcoinToday);
  }
}

function changeCurrencySelectConvert() {
  //*console.log("Trocou de moeda")
  
  const currencyName = document.getElementById("currency-name-convert");
  const currencyImage = document.querySelector(".img-currency-convert");


  if (currencySelectConvert.value == "real-convert") {
    currencyName.innerHTML = "Real brasileiro";
    currencyImage.src = "./assets/real.png";
  }
  if (currencySelectConvert.value == "dolar-convert") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }
  if (currencySelectConvert.value == "euro-convert") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }
  if (currencySelectConvert.value == "libra-convert") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }
  if (currencySelectConvert.value == "bitcoin-convert") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }
}

function changeCurrency() {
  //*console.log("Trocou de moeda")

  const currencyNameConverted = document.getElementById("currency-name-converted");
  const currencyImageConverted = document.querySelector(".img-currency-converted");


  if (currencyConverted.value == "dolar-converted") {
    currencyNameConverted.innerHTML = "Dólar americano";
    currencyImageConverted.src = "./assets/dolar.png";
  }
  if (currencyConverted.value == "real-converted") {
    currencyNameConverted.innerHTML = "Real brasileiro";
    currencyImageConverted.src = "./assets/real.png";
  }
  if (currencyConverted.value == "euro-converted") {
    currencyNameConverted.innerHTML = "Euro";
    currencyImageConverted.src = "./assets/euro.png";
  }
  if (currencyConverted.value == "libra-converted") {
    currencyNameConverted.innerHTML = "Libra";
    currencyImageConverted.src = "./assets/libra.png";
  }
  if (currencyConverted.value == "bitcoin-converted") {
    currencyNameConverted.innerHTML = "Bitcoin";
    currencyImageConverted.src = "./assets/bitcoin.png";
  }

  convertValues();

}

currencySelectConvert.addEventListener("change", changeCurrencySelectConvert);
currencySelectConvert.addEventListener("change", changeCurrency)
currencyConverted.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

