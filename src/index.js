const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    };
    
    function decode(expr) {
    
    let morseСode = []
    let inputArr = expr.split('')
    let arrToExplore = []
    for(let i = 0 ; i < inputArr.length ; i = i + 10) {
    arrToExplore.push((inputArr.slice(i , i + 10)).join(''))
    }
    let arrToExploreWithout0 = arrToExplore.map(function(item) {
      return item = item.replace(/^0+/, '');
    })
    arrToExploreWithout0.forEach((function(item) { if(item === '**********') {morseСode.push(' ');
    } else {
      let morseChar = '';
      for(let i = 0 ; i < item.length ; i = i + 2) {
        let ell = item.slice(i , i + 2); 
      if(ell === '10') {morseChar += '.'} else {
        morseChar += '-'}
      }
     morseСode.push(morseChar);
    }
     }));
    
      let result = morseСode.map((function(item) { if(item === ' ') {return ' '} else {
         return item = MORSE_TABLE[item]}
      }))
    return result.join('')
    
    
    }

module.exports = {
    decode
}