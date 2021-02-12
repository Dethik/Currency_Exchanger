/*eslint-disable*/
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrExchanger from './js/currapi.js';
// Currencies used, EURO, Peso, CAN, AUS, CHI, Korean, Rubles
// Intake USD into converter and have functions for each response
// Will intake $ from input on HTML and output converted response depending on which button is pressed

function getRateEUR(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $("#output").html(`Your USD's will convert into ${response.conversion_rates.EUR * userUSD} Euro's.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateMXN(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $("#output").html(`Your USD's will convert into ${response.conversion_rates.MXN * userUSD} Peso's.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateCAD(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $("#output").html(`Your USD's will convert into ${response.conversion_rates.CAD * userUSD} Canadian Dollars.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateAUD(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $("#output").html(`Your USD's will convert into ${response.conversion_rates.AUD * userUSD} Australian Dollars`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateCNY(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $("#output").html(`Your USD's will convert into ${response.conversion_rates.CNY * userUSD} Renminbi.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateKRW(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $("#output").html(`Your USD's will convert into ${response.conversion_rates.KRW * userUSD} South Korean Won.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
function getRateRUB(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $("#output").html(`Your USD's will convert into ${response.conversion_rates.RUB * userUSD} Rubles.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response}`);
  }
}
async function apiDataEUR() {
  const response = await CurrExchanger.getUSD();
  getRateEUR(response)
}
async function apiDataMXN() {
  const response = await CurrExchanger.getUSD();
  getRateMXN(response)
}
async function apiDataCAD() {
  const response = await CurrExchanger.getUSD();
  getRateCAD(response)
}
async function apiDataAUD() {
  const response = await CurrExchanger.getUSD();
  getRateAUD(response)
}
async function apiDataCNY() {
  const response = await CurrExchanger.getUSD();
  getRateCNY(response)
}
async function apiDataKRW() {
  const response = await CurrExchanger.getUSD();
  getRateKRW(response)
}
async function apiDataRUB() {
  const response = await CurrExchanger.getUSD();
  getRateRUB(response)
}
console.log(apiDataEUR());
console.log(getRateEUR());

$(document).ready(function() {
  $("#exchRates").click(function() {
    event.preventDefault;
    let userUSD = parseFloat($("#usdInput").val());
    $("#output").html(userUSD);
    $("#convertEUR").click(function() {
      event.preventDefault;
      apiDataEUR();
    });
    $("#convertMXN").click(function() {
      event.preventDefault;
      apiDataMXN();
    });
    $("#convertCAD").click(function() {
      event.preventDefault;
      apiDataCAD();
    });
    $("#convertAUD").click(function() {
      event.preventDefault;
      apiDataAUD();
    });
    $("#convertCNY").click(function() {
      event.preventDefault;
      apiDataCNY();
    });
    $("#convertKRW").click(function() {
      event.preventDefault;
      apiDataKRW();
    });
    $("#convertRUB").click(function() {
      event.preventDefault;
      apiDataRUB();
    });
  });
});