/*eslint-disable*/
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import responseExchanger from './js/currapi.js';
import CurrExchanger from './js/currapi.js';
// Currencies used, EURO, Peso, CAN, AUS, CHI, Korean, Rubles
// Intake USD into converter and have functions for each response
// Will intake $ from input on HTML and output converted response depending on which button is pressed

function getRateEUR(response) {
  let userUSD = parseFloat($("").val());
  if (response.conversion_rates){

  } else {
    // errors
  }
}
function getRateMXN(response) {
  let userUSD = parseFloat($("").val());
  if (response.conversion_rates){

  } else {
    // errors
  }
}
function getRateCAD(response) {
  let userUSD = parseFloat($("").val());
  if (response.conversion_rates){

  } else {
    // errors
  }
}
function getRateAUD(response) {
  let userUSD = parseFloat($("").val());
  if (response.conversion_rates){

  } else {
    // errors
  }
}
function getRateCNY(response) {
  let userUSD = parseFloat($("").val());
  if (response.conversion_rates){

  } else {
    // errors
  }
}
function getRateKRW(response) {
  let userUSD = parseFloat($("").val());
  if (response.conversion_rates){

  } else {
    // errors
  }
}
function getRateRUB(response) {
  let userUSD = parseFloat($("").val());
  if (response.conversion_rates){

  } else {
    // errors
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

$(document).ready(function() {
  $("#TEMPNAME").click(function() {
    event.preventDefault;
    let userUSD = parseFloat($("#TEMPNAME").val());
  })
})