"use strict";

var USD = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" });
var BRL = new Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" });

console.log(USD.format(191919191.40));
console.log(BRL.format(191919191.40));
