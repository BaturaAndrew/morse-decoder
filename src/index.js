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
    let arrResult = [];
    for (let i = 0; i < expr.length; i += 10) {
        arrResult.push(decodedSymbol(decryptedSymbol(getSymbol(expr, i))));
    }
    return arrResult.join('');
}

// get array of 00 11
function getSymbol(expr, start) {
    let strSymbol = expr.slice(start, start + 10);
    return strSymbol.split('');
}

// return string of . - 
function decryptedSymbol(arrSymbol) {
    let decryptedSymbol = [];
    for (let i = 0; i < arrSymbol.length; i += 2) {
        let strSign = arrSymbol[i] + arrSymbol[i + 1];
        if (strSign == '10') {
            decryptedSymbol.push('.')
        }
        if (strSign == '11') {
            decryptedSymbol.push('-')
        }
        if (strSign == '**') {
            decryptedSymbol.push(' ')
        }
    }
    return decryptedSymbol.join('');
}

// return decoded symbol
function decodedSymbol(strDecryptedSymbol) {
    for (let key in MORSE_TABLE) {
        if (strDecryptedSymbol == key) {
            return MORSE_TABLE[key];
        }
    }
    return ' ';
}

module.exports = {
    decode
}