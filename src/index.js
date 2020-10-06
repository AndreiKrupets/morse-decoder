const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};

function decode(expr) {
    let decades = expr.length / 10;
    let list = [];
    for (i = 0; i< decades; i++) {
        list.push(expr.slice(i*10, i*10 + 10));
    }
    for (i=0; i<list.length; i++) {
        if (list[i] === "**********") {
            list[i] = ' ';
        }
        else {
            list[i] = list[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
        }
    
    }

    return list.map(symb => MORSE_TABLE[symb]).join('')
}

module.exports = {
    decode
}