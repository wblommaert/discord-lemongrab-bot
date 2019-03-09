const auth = require('./auth.json');
const Discord = require("discord.js");
const client = new Discord.Client();
const general_channel_id = '245287480134205441';
const raid_channel_id = '493415163765063680';

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content.startsWith("!ping")) {
        message.channel.send("All hail my creator Will. Also, pong!");
    } else if (message.content.startsWith("!joke")) {
        message.channel.send("Tim is \"good\" at DPS");
    } else if (message.content.startsWith("!unacceptable")) {
        let channel = client.channels.get(general_channel_id);
        channel.join().then(connection => {
            const dispatcher = connection.playFile('./unacceptable.mp3');

            dispatcher.setVolume(0.75);
            dispatcher.on('end', () => {
                console.log('Finished telling off the raid');
                connection.disconnect();
            });
        });
    } else if (message.content.startsWith("!turtle")) {
        let channel = client.channels.get(general_channel_id);
        channel.join().then(connection => {
            const dispatcher = connection.playFile('./turtle.mp3');

            dispatcher.setVolume(0.75);
            dispatcher.on('end', () => {
                console.log('A turtle made it to the water');
                connection.disconnect();
            });
        });
    } else if (message.content.startsWith("!illusion")) {
        let channel = client.channels.get(general_channel_id);
        channel.join().then(connection => {
            const dispatcher = connection.playFile('./illusion.mp3');

            dispatcher.setVolume(0.75);
            dispatcher.on('end', () => {
                console.log('An illusion? What are you hiding?');
                connection.disconnect();
            });
        });
    } else if (message.content.startsWith("!mad")) {
        let channel = client.channels.get(general_channel_id);
        channel.join().then(connection => {
            const dispatcher = connection.playFile('./onlygame.mp3');

            dispatcher.setVolume(0.75);
            dispatcher.on('end', () => {
                console.log('Only game!');
                connection.disconnect();
            });
        });
    }

});

client.on("voiceStateUpdate", (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    if (oldUserChannel === undefined && newUserChannel !== undefined) {
        if (newMember.user.username.toLowerCase() === 'will') {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./cena.mp3');

                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        } else if (newMember.user.username.toLowerCase() === 'zer0logix') {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./march.mp3');

                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        } else if (newMember.user.username.toLowerCase() === 'ecireth') {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./brooklyn99.mp3');
                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        } else if (newMember.user.username.toLowerCase() === 'ghizm00') {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./bart.mp3');
                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        } else if (newMember.user.username.toLowerCase() === 'drakesdance') {
            newUserChannel.join().then(connection => {
                const dispatcher = connection.playFile('./lionking.mp3');
                dispatcher.setVolume(0.75);
                dispatcher.on('end', () => {
                    console.log('Finished playing!');
                    connection.disconnect();
                });
            });
        }
    }
    /*else if (newUserChannel === undefined) {
        console.log('User left voice channel');
    }*/
});

client.login(auth.token);