const client = new (require("discord.js").Client);
const { DiscordUNO } = require("discord-uno");
const { token } = require("./config.json")
const discordUNO = new DiscordUNO(client);
const prefix = "!";

client.on("ready", () => {
    console.log("ready")
});

client.on("message", async message => {
    if (message.content.toLowerCase() === "!creategame")
        await discordUNO.createGame(message);

    else if (message.content.toLowerCase() === "!join")
        await discordUNO.addUser(message); 

    else if (message.content.toLowerCase() === "!leave")
        await discordUNO.removeUser(message);

    else if (message.content.toLowerCase() === "!hand")
        await discordUNO.viewCards(message);

    else if (message.content.toLowerCase() === "!startgame")
        await discordUNO.startGame(message);

    else if (message.content.toLowerCase().startsWith("!play"))
        await discordUNO.playCard(message);

    else if (message.content.toLowerCase() === "!closegame") 
        await discordUNO.closeGame(message);

    else if (message.content.toLowerCase() === "!endgame") 
        await discordUNO.endGame(message);

    else if (message.content.toLowerCase() === "!draw") 
        await discordUNO.draw(mssage);

    else if (message.content.toLowerCase().startsWith("!settings")) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const setting = args[1];
        const onOff = args[2];
        const set = onOff === "on" ? true : onOff === "off" ? false : undefined;

        await discordUNO.updateSettings(message, setting, set)
    }
    
});

client.login(token);