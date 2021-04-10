import { LoremIpsum } from "lorem-ipsum"

export default function (options) {
  const { sentencesPerParagraph, wordsPerSentence } = options
  const createOptions = {
    sentencesPerParagraph: {
      max: sentencesPerParagraph && sentencesPerParagraph.max
        ? sentencesPerParagraph.max
        : 8,
      min: sentencesPerParagraph && sentencesPerParagraph.min
        ? sentencesPerParagraph.min
        : 4
    },
    wordsPerSentence: {
      max: wordsPerSentence && wordsPerSentence.max
        ? wordsPerSentence.max
        : 8,
      min: wordsPerSentence && wordsPerSentence.min
        ? wordsPerSentence.min
        : 4
    }
  }
  return new LoremIpsum(createOptions)
}
