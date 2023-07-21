// Roman Numeral Converter
/** Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) 
{
  let romans = 
  [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], 
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX","XC"], 
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["M"],
  ];

  let split = num.toString().split('').reverse();

  return split.map((n, i) => i === 3 ? `${romans[i][0].repeat(parseInt(n))}`: n > 0 ? romans[i][parseInt(n) - 1] : '').reverse().join('');

}