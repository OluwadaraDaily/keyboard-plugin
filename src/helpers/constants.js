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
    lowerCase: 'backspace',
    upperCase: 'backspace',
    deleteKey: true
  }
]

const secondRow = [
  {
    lowerCase: 'tab',
    upperCase: 'tab',
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
    lowerCase: 'caps lock',
    upperCase: 'caps lock',
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
    lowerCase: 'enter',
    upperCase: 'enter',
    enterKey: true
  },
]

const fourthRow = [
  {
    lowerCase: 'shift',
    upperCase: 'shift',
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
    lowerCase: 'shift',
    upperCase: 'shift',
    shiftKey: true
  }
]

const fifthRow = [
  {
    lowerCase: 'ctrl',
    upperCase: 'ctrl',
    ctrlKey: true
  },
  {
    lowerCase: 'fn',
    upperCase: 'fn',
    fnKey: true
  },
  {
    lowerCase: 'win',
    upperCase: 'win',
    winKey: true
  },
  {
    lowerCase: 'alt',
    upperCase: 'alt',
    altKey: true
  },
  {
    lowerCase: 'space',
    upperCase: 'space',
    spaceBarKey: true
  },
  {
    lowerCase: 'alt',
    upperCase: 'alt',
    altKey: true
  },
  {
    lowerCase: 'ctrl',
    upperCase: 'ctrl',
    ctrlKey: true
  },
  {
    lowerCase: 'arrows',
    upperCase: 'arrows',
  }
]

module.exports = { firstRow, secondRow, thirdRow, fourthRow, fifthRow }