const firstRow = [
  {
    lowerCase: '`',
    upperCase: '~'
  },
  {
    lowerCase: '1',
    upperCase: '!'
  },
  {
    lowerCase: '2',
    upperCase: '@'
  },
  {
    lowerCase: '3',
    upperCase: '#'
  },
  {
    lowerCase: '4',
    upperCase: '$'
  },
  {
    lowerCase: '5',
    upperCase: '%'
  },
  {
    lowerCase: '6',
    upperCase: '^'
  },
  {
    lowerCase: '7',
    upperCase: '&'
  },
  {
    lowerCase: '8',
    upperCase: '*'
  },
  {
    lowerCase: '9',
    upperCase: '('
  },
  {
    lowerCase: '0',
    upperCase: ')'
  },
  {
    lowerCase: '-',
    upperCase: '_'
  },
  {
    lowerCase: '=',
    upperCase: '+'
  },
  {
    lowerCase: 'Backspace',
    upperCase: 'Backspace',
    deleteKey: true,
    key: ''
  }
]

const secondRow = [
  {
    lowerCase: 'Tab',
    upperCase: 'Tab',
    tabKey: true
  },
  {
    lowerCase: 'q',
    upperCase: 'Q'
  },
  {
    lowerCase: 'w',
    upperCase: 'W'
  },
  {
    lowerCase: 'e',
    upperCase: 'E'
  },
  {
    lowerCase: 'r',
    upperCase: 'R'
  },
  {
    lowerCase: 't',
    upperCase: 'T'
  },
  {
    lowerCase: 'y',
    upperCase: 'Y'
  },
  {
    lowerCase: 'u',
    upperCase: 'U'
  },
  {
    lowerCase: 'i',
    upperCase: 'I'
  },
  {
    lowerCase: 'o',
    upperCase: 'O'
  },
  {
    lowerCase: 'p',
    upperCase: 'P'
  },
  {
    lowerCase: '[',
    upperCase: '{'
  },
  {
    lowerCase: ']',
    upperCase: '}'
  },
  {
    lowerCase: '\\',
    upperCase: '|'
  }
]

const thirdRow = [
  {
    lowerCase: 'CapsLock',
    upperCase: 'CapsLock',
    capsLockKey: true
  },
  {
    lowerCase: 'a',
    upperCase: 'A'
  },
  {
    lowerCase: 's',
    upperCase: 'S'
  },
  {
    lowerCase: 'd',
    upperCase: 'D'
  },
  {
    lowerCase: 'f',
    upperCase: 'F'
  },
  {
    lowerCase: 'g',
    upperCase: 'G'
  },
  {
    lowerCase: 'h',
    upperCase: 'H'
  },
  {
    lowerCase: 'j',
    upperCase: 'J'
  },
  {
    lowerCase: 'k',
    upperCase: 'K'
  },
  {
    lowerCase: 'l',
    upperCase: 'L'
  },
  {
    lowerCase: ';',
    upperCase: ':'
  },
  {
    lowerCase: "'",
    upperCase: '"'
  },
  {
    lowerCase: 'Enter',
    upperCase: 'Enter',
    enterKey: true
  },
]

const fourthRow = [
  {
    lowerCase: 'Shift',
    upperCase: 'Shift',
    shiftKey: true
  },
  {
    lowerCase: 'z',
    upperCase: 'Z'
  },
  {
    lowerCase: 'x',
    upperCase: 'X'
  },
  {
    lowerCase: 'c',
    upperCase: 'C'
  },
  {
    lowerCase: 'v',
    upperCase: 'V'
  },
  {
    lowerCase: 'b',
    upperCase: 'B'
  },
  {
    lowerCase: 'n',
    upperCase: 'N'
  },
  {
    lowerCase: 'm',
    upperCase: 'M'
  },
  {
    lowerCase: ',',
    upperCase: '<'
  },
  {
    lowerCase: '.',
    upperCase: '>'
  },
  {
    lowerCase: '/',
    upperCase: '?'
  },
  {
    lowerCase: 'rShift',
    upperCase: 'rShift',
    shiftKey: true
  }
]

const fifthRow = [
  {
    lowerCase: 'Ctrl',
    upperCase: 'Ctrl',
    ctrlKey: true,
    key: 'Control'
  },
  {
    lowerCase: 'fn',
    upperCase: 'fn',
    fnKey: true
  },
  {
    lowerCase: 'win',
    upperCase: 'win',
    winKey: true,
    key: 'Meta'
  },
  {
    lowerCase: 'Alt',
    upperCase: 'Alt',
    altKey: true
  },
  {
    lowerCase: 'space',
    upperCase: 'space',
    spaceBarKey: true
  },
  {
    lowerCase: 'rAlt',
    upperCase: 'rAlt',
    altKey: true
  },
  {
    lowerCase: 'rCtrl',
    upperCase: 'rCtrl',
    ctrlKey: true,
    key: 'Control'
  }
]

const allRows = [...firstRow, ...secondRow, ...thirdRow, ...fourthRow, ...fifthRow]

const allLowerCases = allRows.map(item => item.lowerCase)

module.exports = { firstRow, secondRow, thirdRow, fourthRow, fifthRow, allLowerCases }