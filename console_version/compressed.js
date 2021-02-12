// MIT License

// Copyright (c) 2021 MhmCats

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
 
!function(){function r(r,e){for(let t=0;t<3;t++){if(r[0][t]===e&&r[1][t]===e&&r[2][t]===e)return!0;if(r[t][0]===e&&r[t][1]===e&&r[t][2]===e)return!0}return r[0][0]===e&&r[1][1]===e&&r[2][2]===e||r[2][0]===e&&r[1][1]===e&&r[0][2]===e}function e(e){for(let r=0;r<3;r++)for(let t=0;t<3;t++)if("-"===e[r][t])return!1;return!0!==r(e,"x")&&!0!==r(e,"o")}function t(r,e,t){if(parseInt(t)<4){if("-"!==r[0][parseInt(t)-1])return alert("Invalid Move!"),!1;r[0][parseInt(t)-1]=e}else if(parseInt(t)<7){if("-"!==r[1][parseInt(t)-4])return alert("Invalid Move!"),!1;r[1][parseInt(t)-4]=e}else{if(!(parseInt(t)<10))return alert("Invalid Move!"),!1;if("-"!==r[2][parseInt(t)-7])return alert("Invalid Move!"),!1;r[2][parseInt(t)-7]=e}return r}function n(r,e){var t=prompt(`${function(r){var e="";for(let n in r){var t="";for(let e in r[n])t+=`${r[n][e]}   `;e+=`${t}\n`}return e}(r)}${e} what is your move? (Type q to quit)`),n=["1","2","3","4","5","6","7","8","9"];for(let r in n)if(n[r]===t)return t;if("q"===t)throw new Error("Stop script");return alert("Invalid Move!"),!1}for(var a=[["-","-","-"],["-","-","-"],["-","-","-"]];;){for(var i=!1,o=!1;!1===i&&!1===o;)!1!==(i=n(a,"Player 1"))&&(!1!==(o=t(a,"x",i))||(i=!1));if(r(a=o,"x"))return alert("Player 1 won!");if(e(a))return alert("It was a draw!");for(i=!1,o=!1;!1===i&&!1===o;)!1!==(i=n(a,"Player 2"))&&(!1!==(o=t(a,"o",i))||(i=!1));if(r(a=o,"o"))return alert("Player 2 won!");if(e(a))return alert("It was a draw!")}}();

// I used the website https://javascript-minifier.com/ to do this. It is completely unreadable so that is why I have included a readable version.