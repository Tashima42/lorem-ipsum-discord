import Lorem from "./lorem.js"
import instructions from "./instructions.js"

export default function (msg, prefix) {
  const commandBody = getCommandBody(msg, prefix)
  const options = parseCommand(commandBody)
  const { func, loremOptions } = options
  const lorem = Lorem(loremOptions)
  let reply
  if (func) {
    switch (func.type) {
      case 'paragraphs':
        reply = lorem.generateParagraphs(parseFloat(func.number))
        break;
      case 'words':
        reply = lorem.generateWords(parseFloat(func.number))
        break;
      case 'sentences':
        reply = lorem.generateSentences(parseFloat(func.number))
        break;
      case 'help':
        return instructions
      default:
        reply = "INVALID OPTION"
    }
  } else {
    reply = "Type `" + prefix + " help` for instructions"
  }
  const replyArr = []
  separateString(reply, 0, 2000, replyArr)
  return replyArr
}

function getCommandBody(msg, prefix) {
  return msg.content.slice(prefix.length + 1)
}

function parseCommandObject(command) {
  const options = {}
  // "{ wordsPerSentence: { max: 4, min: 3 }, sentencesPerParagraph: { max: 6, min: 5 } }" // string
  const args = command.split(' ').join('').split('}}').join('').split('},')
  // [ '{wordsPerSentence:{max:4,min:3', 'sentencesPerParagraph:{max:6,min:5' ]
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    const keys = arg.split('{')
    if (keys[0] === '') keys.shift()
    keys[0] = keys[0].split(':').join('')
    // [ 'wordsPerSentence', 'max:4,min:3' ]
    const props = {}
    const rawProps = keys[1].split(',')
    // [ 'max:4', 'min:3' ]
    rawProps.forEach(prop => {
      prop = prop.split(":")
      props[prop[0]] = parseFloat(prop[1])
      // { max: 4, min: 3 }
    })
    options[keys[0]] = props
  }
  // { wordsPerSentence: { max: 4, min: 3 }, sentencesPerParagraph: { max: 6, min: 5 } } // object
  return options
}

function parseCommand(command) {
  const options = {}
  let loremOptions = {}
  if (command.split('{')[1]) {
    loremOptions = parseCommandObject(command)
  }
  const searchFor = ["help", "paragraphs=", "words=", "sentences="]
  for (let i = 0; i < searchFor.length; i++) {
    const wordIndex = command.search(searchFor[i])
    const n = command.substr(wordIndex, command.length).split(' ')[0].split('=')[1]
    if (n || searchFor[i] == "help") options.func = { type: searchFor[i].split('=').join(''), number: n }
  }
  options.loremOptions = loremOptions
  return options
}

function separateString(str, starting, jump, arr) {
  if (str.length >= jump) {
    arr.push(str.substr(starting, jump))
    let replaceStr = str.substr(jump, str.length)
    separateString(replaceStr, starting, jump, arr)
  } else {
    arr.push(str)
  }
}
