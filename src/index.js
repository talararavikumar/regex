import "./styles.css";

const str = "ravi 92822 bhavs 48884";
const str2 = str.match(/\[a-z]/g);
console.log(str2);

const str3 = "This talara Ravi kumar";
// all 4 letter words
const str4 = str3.match(/\b\w{4}\b/g);
console.log(str4);

const str5 = "This Colour Ravi color";
// u , s are optional
const str6 = str5.match(/colou?rs?/gi);
console.log(str6);

const str7 = "This Colour Ravi I color";
// all cpital letter words
const str8 = str7.match(/\b[A-Z][a-z]+\b/g);
console.log(str8);

const str9 = "This Colour Ravi I color";

// all cpital letter words includes single letter words
const str10 = str9.match(/\b[A-Z][a-z]*\b/g);
console.log(str10);

const str11 = "This Lynk Link Lyink color";
// L[second letter can be y i]nk
const str12 = str11.match(/L[yi]nk/g);
console.log(str12);

const innerHtm = "<ul><li>Hi</li></ul>";

document.getElementById("app").innerHTML = innerHtm;
