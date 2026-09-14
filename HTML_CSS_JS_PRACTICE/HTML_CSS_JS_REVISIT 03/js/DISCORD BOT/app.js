import {Client,Events,GatewayIntentBits} from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
const client = new Client({intents:[GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
]})
client.on("messageCreate",(message)=>{
    console.log(message.content);
    if(message.author.bot) return;
    message.reply({
        content:"Hi from Broken Bot!"
    })
});
client.login(process.env)