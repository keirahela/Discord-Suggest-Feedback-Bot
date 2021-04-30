const Discord = require('discord.js')
const { suggestId } = require('../data/channelIDs.json')
module.exports = {
    name: "suggest",
    description: "suggestion command (embed style)",

    async run (bot, message, args) {

        if(!args[0]) return message.reply('Please add a reason to suggestion!')

        message.reply(`✉ | ${message.author.username}, Thanks for the suggestion! :)`)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Suggestion:`)
        .setDescription(`${args}`)
        .addField("On the server:", `${message.guild.name}`)
        .addField("Server ID:", `${message.guild.id}`)

        
        bot.channels.cache.get(suggestId).send(embed)
    }
}