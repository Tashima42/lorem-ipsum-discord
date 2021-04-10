"use strict"

import "dotenv/config.js"
import server from "./utils/server.js"
server()
import discord from "./utils/discord.js"
const client = discord()
import parsers from "./utils/parsers.js"
const prefix = "/lorem"

client.on('message', async (msg) => {
  if (msg.author.but) return
  if (!msg.content.startsWith(prefix)) return
  const messages = parsers(msg, prefix)
  if (Array.isArray(messages)) {
    messages.forEach(text => {
      msg.channel.send(text)
    })
  } else {
    msg.channel.send(messages)
  }
})
