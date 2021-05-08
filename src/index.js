import "./styles.css";
const RegexArr = [];

let RegString = "ravi 92822 bhavs 48884";
var RegExp = /\d+/g;
let RegResult = RegString.match(RegString);
RegexArr.push({ RegExp, RegString, RegResult, res: { RegResult } });

RegString = "This talara Ravi kumar";
RegExp = /\b\w{4}\b/g;
// all 4 letter words
RegResult = RegString.match(RegExp);
RegexArr.push({ RegExp, RegString, RegResult, res: { RegResult } });

RegString = "This Colour Ravi color";
RegExp = /colou?rs?/gi;
// u , s are optional
RegResult = RegString.match(RegExp);
RegexArr.push({ RegExp, RegString, RegResult, res: { RegResult } });

RegString = "This Colour Ravi I color";
RegExp = /\b[A-Z][a-z]+\b/g;
// all cpital letter words
RegResult = RegString.match(RegExp);
RegexArr.push({ RegExp, RegString, RegResult, res: { RegResult } });

RegString = "This Colour Ravi I color";
RegExp = /\b[A-Z][a-z]*\b/g;

// all cpital letter words includes single letter words
RegResult = RegString.match(RegExp);
RegexArr.push({ RegExp, RegString, RegResult, res: { RegResult } });

RegString = "This Lynk Link Lyink color";
RegExp = /L[yi]nk/g;
// L[second letter can be y i]nk
RegResult = RegString.match(RegExp);
RegexArr.push({ RegExp, RegString, RegResult, res: { RegResult } });

let innerHtm = "";

RegexArr.forEach((objval) => {
  innerHtm =
    innerHtm +
    `<div><div>String :  ${objval.RegString}</div><div>Expression :  ${objval.RegExp}</div><div>Result:  ${objval.RegResult}</div></div>`;
});

//console.log(innerHtm);

document.getElementById("app").innerHTML = innerHtm;
