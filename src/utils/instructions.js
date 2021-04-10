import Discord from "discord.js"
export default new Discord.MessageEmbed()
  .setTitle("Commands list")
  .setColor("#DAF7A6")
  .addField(
    'Paragraphs',
    '`/lorem paragraphs=2`'
  )
  .addField(
    'Sentences',
    '`/lorem sentences=2`'
  )
  .addField(
    'Words',
    '`/lorem words=2`'
  )
  .addField(
    'Config paragraphs',
    '`/lorem  { sentencesPerParagraph: { max: 4, min: 3 } } paragraphs=2`'
  )
  .addField(
    'Config sentences',
    '`/lorem  { wordsPerSentence: { max: 5, min: 6 } } sentences=2`'
  )
  .addField(
    '⚠️ Warning!',
    "Commands can't have spaces\n`❌ /lorem paragraphs = 10`\n`✔️ /lorem paragraphs=10`"
  )
  .addField(
    'Examples',
    'https://github.com/Tashima42/lorem-ipsum-discord/blob/main/README.md'
  )
