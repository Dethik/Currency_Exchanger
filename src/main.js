import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrExchanger from './js/currapi.js';

function getRateEUR(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.EUR * userUSD} Euro's.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateMXN(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.MXN * userUSD} Peso's.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateCAD(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.CAD * userUSD} Canadian Dollars.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateAUD(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.AUD * userUSD} Australian Dollars`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateCNY(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.CNY * userUSD} Renminbi.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateKRW(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.KRW * userUSD} South Korean Won.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateRUB(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.RUB * userUSD} Rubles.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateINR(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.INR * userUSD} Indian Rupees.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateZAR(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.ZAR * userUSD} South African rand.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
function getRateSLL(response) {
  let userUSD = parseFloat($("#usdInput").val());
  if (response.conversion_rates){
    $(".output").html(`Your USD's will convert into ${response.conversion_rates.SLL * userUSD} Sierra Leonean Leone.`);
  } else {
    $(".outputError").html(`api error message: ${response['error-type']}`);
    $(".output").html(`API response: ${response.message}`);
  }
}
async function apiDataEUR() {
  const response = await CurrExchanger.getUSD();
  getRateEUR(response);
}
async function apiDataMXN() {
  const response = await CurrExchanger.getUSD();
  getRateMXN(response);
}
async function apiDataCAD() {
  const response = await CurrExchanger.getUSD();
  getRateCAD(response);
}
async function apiDataAUD() {
  const response = await CurrExchanger.getUSD();
  getRateAUD(response);
}
async function apiDataCNY() {
  const response = await CurrExchanger.getUSD();
  getRateCNY(response);
}
async function apiDataKRW() {
  const response = await CurrExchanger.getUSD();
  getRateKRW(response);
}
async function apiDataRUB() {
  const response = await CurrExchanger.getUSD();
  getRateRUB(response);
}
async function apiDataINR() {
  const response = await CurrExchanger.getUSD();
  getRateINR(response);
}
async function apiDataZAR() {
  const response = await CurrExchanger.getUSD();
  getRateZAR(response);
}
async function apiDataSLL() {
  const response = await CurrExchanger.getUSD();
  getRateSLL(response);
}

$(document).ready(function() {
  $(".outputUSD").hide();
  $("#exchRates").click(function() {
    event.preventDefault();
    $(".outputUSD").fadeIn(100);
    let userUSD = parseFloat($("#usdInput").val());
    $(".outputUSD").html(`$` + userUSD);
    $("#convertEUR").click(function() {
      event.preventDefault();
      apiDataEUR();
      $(".output").fadeIn(100);
    });
    $("#convertMXN").click(function() {
      event.preventDefault();
      apiDataMXN();
      $(".output").fadeIn(100);
    });
    $("#convertCAD").click(function() {
      event.preventDefault();
      apiDataCAD();
      $(".output").fadeIn(100);
    });
    $("#convertAUD").click(function() {
      event.preventDefault();
      apiDataAUD();
      $(".output").fadeIn(100);
    });
    $("#convertCNY").click(function() {
      event.preventDefault();
      apiDataCNY();
      $(".output").fadeIn(100);
    });
    $("#convertKRW").click(function() {
      event.preventDefault();
      apiDataKRW();
      $(".output").fadeIn(100);
    });
    $("#convertRUB").click(function() {
      event.preventDefault();
      apiDataRUB();
      $(".output").fadeIn(100);
    });
    $("#convertINR").click(function() {
      event.preventDefault();
      apiDataINR();
      $(".output").fadeIn(100);
    });
    $("#convertZAR").click(function() {
      event.preventDefault();
      apiDataZAR();
      $(".output").fadeIn(100);
    });
    $("#convertSLL").click(function() {
      event.preventDefault();
      apiDataSLL();
      $(".output").fadeIn(100);
    });
  });
});