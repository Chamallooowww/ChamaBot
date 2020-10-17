//----------------------//
//                      //
//CHAMABOT - Public Code//
//                      //
//----------------------//

const config = require("./config.json");

const Discord = require('discord.js');
const message = require('discord.js');
const member = require('discord.js');
const bot = new Discord.Client();

bot.login(config.token);

bot.on('ready', () =>{
        console.log('Le bot est online !')
        console.log('ChamaBot - Version ' + config.version)
        bot.user.setActivity(`infernia.fr/chamaa`, { type: 'WATCHING'});
})

bot.on('message', msg=>{
    if(msg.content === "Salut"){
        msg.reply('salutations !')
    }
})
bot.on('message', msg=>{
    if(msg.content === "salut"){
        msg.reply('bonjour à toi jeune entrepreneur !')
    }
})
bot.on('message', msg=>{
    if(msg.content === "bonjour"){
        msg.reply('bonjour !')
    }
})
bot.on('message', msg=>{
    if(msg.content === "Bonjour"){
        msg.reply('salut !')
    }
})
bot.on('message', message=>{
    if(message.content === "Au revoir"){
        message.channel.send("https://tenor.com/view/au-revoir-giscard-ciao-aplus-att-gif-4737220")
    }
})
bot.on('message', message=>{
    if(message.content === "au revoir"){
        message.channel.send("https://tenor.com/view/au-revoir-giscard-ciao-aplus-att-gif-4737220")
    }
})
bot.on('message', message=>{
    if(message.content === "aller j'y vais"){
        message.channel.send("https://tenor.com/view/au-revoir-giscard-ciao-aplus-att-gif-4737220")
    }
})
bot.on('message', message=>{
    if(message.content === "bye"){
        message.channel.send("https://tenor.com/view/au-revoir-giscard-ciao-aplus-att-gif-4737220")
    }
})
bot.on('message', message=>{
    if(message.content === "++"){
        message.channel.send("https://tenor.com/view/au-revoir-giscard-ciao-aplus-att-gif-4737220")
    }
})
bot.on('message', message=>{
    if(message.content === "gn"){
        message.channel.send("https://tenor.com/view/au-revoir-giscard-ciao-aplus-att-gif-4737220")
    }
})
bot.on('message', message=>{
    if(message.content === "C'est quand la prochaine vidéo ?"){
        message.reply('la prochaine vidéo sortira vendredi à 18h :grin:')
    }
})
//--------------//
//              //
//  COMMANDES   //
//              //
//--------------//
bot.on('message', message=>{

    let args = message.content.substring(config.prefix.length).split(" ");

    switch(args[0]){
        case 'mp':
            message.author.send(args[1]);
            break;
        case 'ping':
            message.reply('Commande désactivée.');
            message.channel.bulkDelete(1);
            break;
        case 'youtube':
            message.channel.send("Voici le lien de la chaîne Youtube : https://www.youtube.com/channel/UCmOefLL4aTpBOmJnC8Rp5Jg");
            message.channel.bulkDelete(1);
            break;
        case 'twitch':
            message.channel.send("Voici le lien de la chaîne Twitch : https://twitch.tv/Chamallooowww");
            message.channel.bulkDelete(1);
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version du bot : ' + config.version)
            }else{
                message.channel.send('Arguments invalides. Essayez avec ``!info version`` !')
            }
        break;
        case 'clear':
            if (message.member.roles.cache.has(config.AdminRankID)) {
                if(!args[1]) return message.reply('il me faut un nombre de messages à effacer. Syntaxe : ``!clear Nombre`` !')
                message.channel.bulkDelete(1);
                message.channel.bulkDelete(args[1]);
            }else{
                message.channel.bulkDelete(1);
                message.reply('permissions manquantes :(');
            }
            break;
        case 'kick':
            if (message.member.roles.cache.has(config.AdminRankID)) {
                const UserToKick = message.mentions.users.first();
                if(UserToKick){
                    const UserToKickMember = member.guild.member(UserToKick);
                    if(UserToKickMember){
                        member.kick('Tu as été expulsé du serveur par un administrateur.').then(() =>{
                            message.reply(`${UserToKick.tag} a bien été expulsé.`)
                        }).catch(err =>{
                            message.reply("je n'ai pas pu expulser cette personne. Est-elle plus haut gradée que vous ?");
                            console.log(err);
                        })
                    }else{
                        message.reply(`cet utilisateur n'est pas dans le serveur ou n'existe pas.`)
                    }
                }else{
                    message.reply("il me faut un joueur à expulser. Syntaxe : ``!kick @Pseudo`` !")
                }
            }else{
                message.reply('permissions manquantes :(');
            }
            break;
        case 'planning':
            message.channel.bulkDelete(1);
            message.reply('la prochaine vidéo sortira vendredi à 18h :grin:')
            break;
//COMMANDES GIF
        case 'pika':
            message.channel.send('https://tenor.com/view/pikachu-pokemon-cute-smile-happy-gif-8235878');
            message.channel.bulkDelete(1);
            break;
        case 'sonic':
            message.channel.send('https://tenor.com/view/sonic-floss-sonic-flossing-sonic-the-hedgehog-movie-gif-16310252');
            message.channel.bulkDelete(1);
            break;
        case 'what':
            message.channel.send('https://tenor.com/view/confused-what-huh-gif-14742755');
            message.channel.bulkDelete(1);
            break;
        case 'fanta':
            message.channel.send('https://tenor.com/view/pas-toi-qui-decide-thefantasio974-thefantasio-fantasio-fanta-gif-13854472');
            message.channel.bulkDelete(1);
            break;
        case "dafuq":
            message.channel.send('https://i.ibb.co/VLqwrPB/dafuq.jpg');
            message.channel.bulkDelete(1);
            break;
        case 'wow':
            message.channel.send('https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882');
            message.channel.bulkDelete(1);
            break;
        case 'siphano':
            message.channel.bulkDelete(1);
            message.channel.send('Ah');
            message.channel.send('Ah ouais');
            message.channel.send("Donc finalement qui est le plus con dans l'histoire ? :thinking:");
            break;
        case 'siphano2':
            message.channel.bulkDelete(1);
            message.channel.send("Moi j'ai touché le chèque ! :moneybag:");
            break;
        case 'siphano3':
            message.channel.bulkDelete(1);
            message.channel.send("J'EN AI RIEN A FOUTRE ! :face_with_symbols_over_mouth:");
            break;
    }
})
//COULEURS
bot.on('message', message=>{
    let args = message.content.substring(config.colorprefix.length).split(" ");
    switch(args[0]){
        case "bleu":
            message.reply('rôle donné.');
            message.member.roles.add('737231835183972383');
            break;
        case "rouge":
            message.reply('rôle donné.');
            message.member.roles.add('737231905526775839');
            break;
        case "jaune":
            message.reply('rôle donné.');
            message.member.roles.add('737232004718002227');
            break;
        case "vert":
            message.reply('rôle donné.');
            message.member.roles.add('737231973608849479');
            break;
        case "rose":
            message.reply('rôle donné.');
            message.member.roles.add('737232060426747934');
            break;
        case "violet":
            message.reply('rôle donné.');
            message.member.roles.add('737232139644567563');
            break;
        case "noir":
            message.reply('rôle donné.')
            message.member.roles.add('737232205834747956');
            break;
    }
})

bot.on('guildMemberAdd', (member) => {
    const WelcomeChannel = member.guild.channels.cache.get(config.WelcomeChannelID);
    WelcomeChannel.send(`Bienvenue à <@${member.id}> sur le serveur :tada: ! Va voir les ${member.guild.channels.cache.get(config.RulesChannelID).toString()} !`)
})
bot.on('guildMemberRemove', (member) => {
    const WelcomeChannel = member.guild.channels.cache.get(config.WelcomeChannelID);
    WelcomeChannel.send(`<@${member.tag}> a quitté le serveur :cry:`)
})