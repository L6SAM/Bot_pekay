const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ("*")

client.on('message', message => {
            if(message.content.startsWith(prefix + 'rand')) {
            message.delete()
var randomNumber = Math.floor(Math.random() * 1000) + 0;

function getRandomArbitary(min, max)
{

return Math.floor(Math.random() * 1000) + 0
}
message.channel.send(randomNumber)

}});
Client.login("NDgzOTk4ODI5NTQ1NTIxMTYy.DsHbDw.pZ-thLpLENXrAAQ_7RJEDF2Fa2g")