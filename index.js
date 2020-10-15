// Created By TheDutchFinalGamer (Dont Use my bot whitout permission from me)


const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

// Competetife RANKING ROLES

const Silver_1 = '742504030508679291';
const Silver_2 = '742504089191055391';
const Silver_3 = '742504120765775912';
const Silver_4 = '742504168521990195';
const Silver_Elite = '742504189112090664';
const Silver_Elite_Master = '742504214227452054';
const Gold_Nova_1 = '742504341029650466';
const Gold_Nova_2 = '742504393504587836';
const Gold_Nova_3 = '742504420704649279';
const Gold_Nova_Master = '742504458163978351';
const Master_Guardian_1 = '742504737341046805';
const Master_Guardian_2 = '742504830660116480';
const Master_Guardian_Elite = '742504893079748620';
const Distinguished_Master_Guardian = '742504917876474007';
const Legendary_Eagle = '742505091491168326';
const Legendary_Eagle_Master = '742505198974402640';
const Supreme_Master_First_Class = '742505223393640480';
const The_Global_Elite = '742505294495613029';
const Unranked = '742776182939975850';
const wingman_Silver_1 = '757953456597368883';
const wingman_Silver_2 = '757953746528632842';
const wingman_Silver_3 = '757953758033608795';
const wingman_Silver_4 = '757953759342231594';
const wingman_Silver_Elite = '757953760550191124';
const wingman_Silver_Elite_Master = '757953761212891314';
const wingman_Gold_Nova_1 = '757953762496217089';
const wingman_Gold_Nova_2 = '757953763569827851';
const wingman_Gold_Nova_3 = '757953764652089515';
const wingman_Gold_Nova_Master = '757953765667242097';
const wingman_Master_Guardian_1 = '757953766715818074';
const wingman_Master_Guardian_2 = '757953767663599707';
const wingman_Master_Guardian_Elite = '742504893079748620';
const wingman_Distinguished_Master_Guardian = '757953769622470777';
const wingman_Legendary_Eagle = '757953770234839051';
const wingman_Legendary_Eagle_Master = '757953771270832300';
const wingman_Supreme_Master_First_Class = '757953772340248608';
const wingman_The_Global_Elite = '757953773565116527';
const wingman_Unranked = '757966048992428096';

// wingman RANKING ROLES



// Danger Zone RANKING ROLES



// Danger Zone RANKING ROLES

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

        if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }   else if (message.content === `${prefix}add silver 1`) {
            message.member.roles.add(Silver_1);
            message.channel.send('***:white_circle: Je bent nu Silver 1 :white_circle:***');

    }   else if (message.content === `${prefix}add silver 2`) {
            message.member.roles.add(Silver_2);
            message.channel.send('***:white_circle: Je bent nu Silver 2 :white_circle:***');

    }   else if (message.content === `${prefix}add silver 3`) {
            message.member.roles.add(Silver_3);
            message.channel.send('***:white_circle: Je bent nu Silver 3 :white_circle:***');

    }   else if (message.content === `${prefix}add silver 4`) {
            message.member.roles.add(Silver_4);
            message.channel.send('***:white_circle: Je bent nu Silver 4 :white_circle:***');

    }   else if (message.content === `${prefix}add silver elite`) {
            message.member.roles.add(Silver_Elite);  
            message.channel.send('***:white_circle: Je bent nu Silver Elite :white_circle:***');

    }   else if (message.content === `${prefix}add silver elite master`) {
            message.member.roles.add(Silver_Elite_Master);
            message.channel.send('***:white_circle: Je bent nu Silver Elite Master :white_circle:***');

    }   else if (message.content === `${prefix}add gold nova 1`) {
            message.member.roles.add(Gold_Nova_1);
            message.channel.send('***:yellow_circle: Je bent nu Gold Nova 1 :yellow_circle:***');

    }   else if (message.content === `${prefix}add gold nova 2`) {
            message.member.roles.add(Gold_Nova_2);
            message.channel.send('***:yellow_circle: Je bent nu Gold Nova 2 :yellow_circle:***');

    }   else if (message.content === `${prefix}add gold nova 3`) {
            message.member.roles.add(Gold_Nova_3);
            message.channel.send('***:yellow_circle: Je bent nu Gold Nova 3 :yellow_circle:***');
            
    }   else if (message.content === `${prefix}add gold nova master`) {
            message.member.roles.add(Gold_Nova_Master);
            message.channel.send('***:yellow_circle: Je bent nu Gold Nova Master :yellow_circle:***');

    }   else if (message.content === `${prefix}add master guardian 1`) {
            message.member.roles.add(Master_Guardian_1);
            message.channel.send('***:yellow_circle: Je bent nu Master Guardian 1 :yellow_circle:***');

    }   else if (message.content === `${prefix}add master guardian 2`) {
            message.member.roles.add(Master_Guardian_2);
            message.channel.send('***:yellow_circle: Je bent nu Master Guardian 2 :yellow_circle:***');

    }   else if (message.content === `${prefix}add Mmaster guardian elite`) {
            message.member.roles.add(Master_Guardian_Elite);
            message.channel.send('***:yellow_circle: Je bent nu Master Guardian Elite :yellow_circle:***');

    }   else if (message.content === `${prefix}add distinguished master guardian`) {
            message.member.roles.add(Distinguished_Master_Guardian);
            message.channel.send('***:yellow_circle: Je bent nu Distinguished Master Guardian :yellow_circle:***');

    }   else if (message.content === `${prefix}add legendary eagle`) {
            message.member.roles.add(Legendary_Eagle);
            message.channel.send('***:purple_circle: Je bent nu Legendary Eagle :purple_circle:***');

    }   else if (message.content === `${prefix}add legendary eagle master`) {
            message.member.roles.add(Legendary_Eagle_Master);
            message.channel.send('***:purple_circle: Je bent nu Legendary Eagle Master :purple_circle:***');

    }   else if (message.content === `${prefix}add supreme master first class`) {
            message.member.roles.add(Supreme_Master_First_Class);
            message.channel.send('***:purple_circle: Je bent nu Supreme Master First Class :purple_circle:***');

    }   else if (message.content === `${prefix}add the global elite`) {
            message.member.roles.add(The_Global_Elite);
            message.channel.send('***:purple_circle: Je bent nu The Global Elite :purple_circle:***');

    }   else if (message.content === `${prefix}add unranked`) {
            message.member.roles.add(Unranked);
            message.channel.send('***:green_circle: Je bent nu Unranked :green_circle:***');

    }   else if (message.content === `${prefix}remove silver 1`) {
            message.member.roles.remove(Silver_1);
            message.channel.send('*** Je bent geen Silver 1 meer ***');

    }   else if (message.content === `${prefix}remove silver 2`) {
            message.member.roles.remove(Silver_2);
            message.channel.send('*** Je bent geen Silver 2 meer ***');

    }   else if (message.content === `${prefix}remove silver 3`) {
            message.member.roles.remove(Silver_3);
            message.channel.send('*** Je bent geen Silver 3 meer ***');

    }   else if (message.content === `${prefix}remove silver 4`) {
            message.member.roles.remove(Silver_4);
            message.channel.send('*** Je bent geen Silver 4 meer ***');

    }   else if (message.content === `${prefix}remove silver elite`) {
            message.member.roles.remove(Silver_Elite);
            message.channel.send('*** Je bent geen Silver Elite meer ***');   

    }   else if (message.content === `${prefix}remove silver elite master`) {
            message.member.roles.remove(Silver_Elite_Master);
            message.channel.send('*** Je bent geen Silver Elite Master meer ***');

    }   else if (message.content === `${prefix}remove gold nova 1`) {
            message.member.roles.remove(Gold_Nova_1);
            message.channel.send('*** Je bent geen Gold Nova 1 meer ***');

    }   else if (message.content === `${prefix}remove gold nova 2`) {
            message.member.roles.remove(Gold_Nova_2);
            message.channel.send('*** Je bent geen Gold Nova 2 meer ***');

    }   else if (message.content === `${prefix}remove gold nova 3`) {
            message.member.roles.remove(Gold_Nova_3);
            message.channel.send('*** Je bent geen Gold Nova 3 meer ***');

    }   else if (message.content === `${prefix}remove gold nova master`) {
            message.member.roles.remove(Gold_Nova_Master);
            message.channel.send('*** Je bent geen Gold Nova Master meer ***');

    }   else if (message.content === `${prefix}remove master guardian 1`) {
            message.member.roles.remove(Master_Guardian_1);
            message.channel.send('*** Je bent geen Master Guardian 1 meer ***');

    }   else if (message.content === `${prefix}remove master guardian 2`) {
            message.member.roles.remove(Master_Guardian_2);
            message.channel.send('*** Je bent geen Master Guardian 2 meer ***');

    }   else if (message.content === `${prefix}remove master guardian Elite`) {
            message.member.roles.remove(Master_Guardian_Elite);
            message.channel.send('*** Je bent geen Master Guardian Elite meer ***');

    }   else if (message.content === `${prefix}remove distinguished master guardian`) {
            message.member.roles.remove(Distinguished_Master_Guardian);
            message.channel.send('*** Je bent geen Distinguished Master Guardian meer ***');

    }   else if (message.content === `${prefix}remove legendary eagle`) {
            message.member.roles.remove(Legendary_Eagle);
            message.channel.send('*** Je bent geen Legendary Eagle meer ***');

    }   else if (message.content === `${prefix}remove legendary eagle master`) {
            message.member.roles.remove(Legendary_Eagle_Master);
            message.channel.send('*** Je bent geen Legendary Eagle Master meer ***');

    }   else if (message.content === `${prefix}remove supreme master first class`) {
            message.member.roles.remove(Supreme_Master_First_Class);
            message.channel.send('*** Je bent geen Supreme Master meer ***');

    }   else if (message.content === `${prefix}remove the global elite`) {
            message.member.roles.remove(The_Global_Elite);
            message.channel.send('*** Je bent geen Global Elite meer ***');
            
    }   else if (message.content === `${prefix}remove unranked`) {
            message.member.roles.remove(Unranked);
            message.channel.send('*** Je bent geen Unranked meer ***');

    }   else if (message.content === `${prefix}command list`) {
            message.channel.send(' **!add unranked** !add silver 1 **!add silver 2** !add silver 3 **!add silver 4** !add silver elite **!add Silver elite master** !add gold nova 1 **!add gold nova 2** !add gold nova 3 **!add gold nova master** !add master guardian 1 **!add master guardian 2** !add master guardian elite **!add distinguished master guardian** !add legendary eagle **!add legendary eagle master** !add supreme master first class **!add the global elite** !remove unranked **!remove silver 1** !remove silver 2 **!remove silver 3** !remove silver 4 **!remove silver elite** !remove silver elite master **!remove gold nova 1** !remove gold nova 2 **!remove gold nova 3** !remove gold nova Master **!remove master guardian 1** !remove master guardian 2 **!remove master guardian elite** !remove distinguished master guardian **!remove legendary eagle** !remove legendary eagle master **!remove supreme master first Class** !remove the global elite ')
    }   else if (message.content === `${prefix}add silver 1`) {
            message.member.roles.add(Silver_1);
            message.channel.send('***:white_circle: Je bent nu Silver 1 :white_circle:***');

    }   else if (message.content === `${prefix}add silver 2`) {
            message.member.roles.add(Silver_2);
            message.channel.send('***:white_circle: Je bent nu Silver 2 :white_circle:***');

    }   else if (message.content === `${prefix}add silver 3`) {
            message.member.roles.add(Silver_3);
            message.channel.send('***:white_circle: Je bent nu Silver 3 :white_circle:***');

    }   else if (message.content === `${prefix}add silver 4`) {
            message.member.roles.add(Silver_4);
            message.channel.send('***:white_circle: Je bent nu Silver 4 :white_circle:***');

    }   else if (message.content === `${prefix}add silver elite`) {
            message.member.roles.add(Silver_Elite);  
            message.channel.send('***:white_circle: Je bent nu Silver Elite :white_circle:***');

    }   else if (message.content === `${prefix}add silver elite master`) {
            message.member.roles.add(Silver_Elite_Master);
            message.channel.send('***:white_circle: Je bent nu Silver Elite Master :white_circle:***');

    }   else if (message.content === `${prefix}add gold nova 1`) {
            message.member.roles.add(Gold_Nova_1);
            message.channel.send('***:white_circle: Je bent nu Gold Nova 1 :white_circle:***');

    }   else if (message.content === `${prefix}add gold nova 2`) {
            message.member.roles.add(Gold_Nova_2);
            message.channel.send('***:white_circle: Je bent nu Gold Nova 2 :white_circle:***');

    }   else if (message.content === `${prefix}add gold nova 3`) {
            message.member.roles.add(Gold_Nova_3);
            message.channel.send('***:white_circle: Je bent nu Gold Nova 3 :white_circle:***');
            
    }   else if (message.content === `${prefix}add gold nova master`) {
            message.member.roles.add(Gold_Nova_Master);
            message.channel.send('***:white_circle: Je bent nu Gold Nova Master :white_circle:***');

    }   else if (message.content === `${prefix}add master guardian 1`) {
            message.member.roles.add(Master_Guardian_1);
            message.channel.send('***:white_circle: Je bent nu Master Guardian 1 :white_circle:***');

    }   else if (message.content === `${prefix}add master guardian 2`) {
            message.member.roles.add(Master_Guardian_2);
            message.channel.send('***:white_circle: Je bent nu Master Guardian 2 :white_circle:***');

    }   else if (message.content === `${prefix}add Mmaster guardian elite`) {
            message.member.roles.add(Master_Guardian_Elite);
            message.channel.send('***:white_circle: Je bent nu Master Guardian Elite :white_circle:***');

    }   else if (message.content === `${prefix}add distinguished master guardian`) {
            message.member.roles.add(Distinguished_Master_Guardian);
            message.channel.send('***:white_circle: Je bent nu Distinguished Master Guardian :white_circle:***');

    }   else if (message.content === `${prefix}add legendary eagle`) {
            message.member.roles.add(Legendary_Eagle);
            message.channel.send('***:white_circle: Je bent nu Legendary Eagle :white_circle:***');

    }   else if (message.content === `${prefix}add legendary eagle master`) {
            message.member.roles.add(Legendary_Eagle_Master);
            message.channel.send('***:white_circle: Je bent nu Legendary Eagle Master :white_circle:***');

    }   else if (message.content === `${prefix}add supreme master first class`) {
            message.member.roles.add(Supreme_Master_First_Class);
            message.channel.send('***:white_circle: Je bent nu Supreme Master First Class :white_circle:***');

    }   else if (message.content === `${prefix}add the global elite`) {
            message.member.roles.add(The_Global_Elite);
            message.channel.send('***:white_circle: Je bent nu The Global Elite :white_circle:***');

    }   else if (message.content === `${prefix}add unranked`) {
            message.member.roles.add(Unranked);
            message.channel.send('***:white_circle: Je bent nu Unranked :white_circle:***');

    }   else if (message.content === `${prefix}remove silver 1`) {
            message.member.roles.remove(Silver_1);
            message.channel.send('***:white_circle: Je bent geen Silver 1 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove silver 2`) {
            message.member.roles.remove(Silver_2);
            message.channel.send('***:white_circle: Je bent geen Silver 2 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove silver 3`) {
            message.member.roles.remove(Silver_3);
            message.channel.send('***:white_circle: Je bent geen Silver 3 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove silver 4`) {
            message.member.roles.remove(Silver_4);
            message.channel.send('***:white_circle: Je bent geen Silver 4 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove silver elite`) {
            message.member.roles.remove(Silver_Elite);
            message.channel.send('***:white_circle: Je bent geen Silver Elite meer :white_circle:***');   

    }   else if (message.content === `${prefix}remove silver elite master`) {
            message.member.roles.remove(Silver_Elite_Master);
            message.channel.send('***:white_circle: Je bent geen Silver Elite Master meer :white_circle:***');

    }   else if (message.content === `${prefix}remove gold nova 1`) {
            message.member.roles.remove(Gold_Nova_1);
            message.channel.send('***:white_circle: Je bent geen Gold Nova 1 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove gold nova 2`) {
            message.member.roles.remove(Gold_Nova_2);
            message.channel.send('***:white_circle: Je bent geen Gold Nova 2 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove gold nova 3`) {
            message.member.roles.remove(Gold_Nova_3);
            message.channel.send('***:white_circle: Je bent geen Gold Nova 3 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove gold nova master`) {
            message.member.roles.remove(Gold_Nova_Master);
            message.channel.send('***:white_circle: Je bent geen Gold Nova Master meer :white_circle:***');

    }   else if (message.content === `${prefix}remove master guardian 1`) {
            message.member.roles.remove(Master_Guardian_1);
            message.channel.send('***:white_circle: Je bent geen Master Guardian 1 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove master guardian 2`) {
            message.member.roles.remove(Master_Guardian_2);
            message.channel.send('***:white_circle: Je bent geen Master Guardian 2 meer :white_circle:***');

    }   else if (message.content === `${prefix}remove master guardian Elite`) {
            message.member.roles.remove(Master_Guardian_Elite);
            message.channel.send('***:white_circle: Je bent geen Master Guardian Elite meer :white_circle:***');

    }   else if (message.content === `${prefix}remove distinguished master guardian`) {
            message.member.roles.remove(Distinguished_Master_Guardian);
            message.channel.send('***:white_circle: Je bent geen Distinguished Master Guardian meer :white_circle:***');

    }   else if (message.content === `${prefix}remove legendary eagle`) {
            message.member.roles.remove(Legendary_Eagle);
            message.channel.send('***:white_circle: Je bent geen Legendary Eagle meer :white_circle:***');

    }   else if (message.content === `${prefix}remove legendary eagle master`) {
            message.member.roles.remove(Legendary_Eagle_Master);
            message.channel.send('***:white_circle: Je bent geen Legendary Eagle Master meer :white_circle:***');

    }   else if (message.content === `${prefix}remove supreme master first class`) {
            message.member.roles.remove(Supreme_Master_First_Class);
            message.channel.send('***:white_circle: Je bent geen Supreme Master meer :white_circle:***');

    }   else if (message.content === `${prefix}remove the global elite`) {
            message.member.roles.remove(The_Global_Elite);
            message.channel.send('***:white_circle: Je bent geen Global Elite meer :white_circle:***');
            
    }   else if (message.content === `${prefix}remove unranked`) {
            message.member.roles.remove(Unranked);
            message.channel.send('***:white_circle: Je bent geen Unranked meer :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman silver 1`) {
                message.member.roles.add(wingman_Silver_1);
                message.channel.send('***:white_circle: Je bent nu wingman Silver 1 :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman silver 2`) {
                message.member.roles.add(wingman_Silver_2);
                message.channel.send('***:white_circle: Je bent nu wingman Silver 2 :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman silver 3`) {
                message.member.roles.add(wingman_Silver_3);
                message.channel.send('***:white_circle: Je bent nu wingman Silver 3 :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman silver 4`) {
                message.member.roles.add(wingman_Silver_4);
                message.channel.send('***:white_circle: Je bent nu wingman Silver 4 :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman silver elite`) {
                message.member.roles.add(wingman_Silver_Elite);  
                message.channel.send('***:white_circle: Je bent nu wingman Silver Elite :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman silver elite master`) {
                message.member.roles.add(wingman_Silver_Elite_Master);
                message.channel.send('***:white_circle: Je bent nu wingman Silver Elite Master :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman gold nova 1`) {
                message.member.roles.add(wingman_Gold_Nova_1);
                message.channel.send('***:white_circle: Je bent nu wingman Gold Nova 1 :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman gold nova 2`) {
                message.member.roles.add(wingman_Gold_Nova_2);
                message.channel.send('***:white_circle: Je bent nu wingman Gold Nova 2 :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman gold nova 3`) {
                message.member.roles.add(wingman_Gold_Nova_3);
                message.channel.send('***:white_circle: Je bent nu wingman Gold Nova 3 :white_circle:***');
                
    }   else if (message.content === `${prefix}add wingman gold nova master`) {
                message.member.roles.add(wingman_Gold_Nova_Master);
                message.channel.send('***:white_circle: Je bent nu wingman Gold Nova Master :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman master guardian 1`) {
                message.member.roles.add(wingman_Master_Guardian_1);
                message.channel.send('***:white_circle: Je bent nu wingman Master Guardian 1 :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman master guardian 2`) {
                message.member.roles.add(wingman_Master_Guardian_2);
                message.channel.send('***:white_circle: Je bent nu wingman Master Guardian 2 :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman master guardian elite`) {
                message.member.roles.add(wingman_Master_Guardian_Elite);
                message.channel.send('***:white_circle: Je bent nu wingman Master Guardian Elite :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman distinguished master guardian`) {
                message.member.roles.add(wingman_Distinguished_Master_Guardian);
                message.channel.send('***:white_circle: Je bent nu wingman Distinguished Master Guardian :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman legendary eagle`) {
                message.member.roles.add(wingman_Legendary_Eagle);
                message.channel.send('***:white_circle: Je bent nu wingman Legendary Eagle :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman legendary eagle master`) {
                message.member.roles.add(wingman_Legendary_Eagle_Master);
                message.channel.send('***:white_circle: Je bent nu wingman Legendary Eagle Master :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman supreme master first class`) {
                message.member.roles.add(wingman_Supreme_Master_First_Class);
                message.channel.send('***:white_circle: Je bent nu wingman Supreme Master First Class :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman the global elite`) {
                message.member.roles.add(wingman_The_Global_Elite);
                message.channel.send('***:white_circle: Je bent nu wingman The Global Elite :white_circle:***');
    
    }   else if (message.content === `${prefix}add wingman unranked`) {
                message.member.roles.add(wingman_Unranked);
                message.channel.send('***:white_circle: Je bent nu wingman Unranked :white_circle:***');
    
    }   else if (message.content === `${prefix}remove wingman silver 1`) {
                message.member.roles.remove(wingman_Silver_1);
                message.channel.send('***:white_circle: Je bent geen wingman Silver 1 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman silver 2`) {
                message.member.roles.remove(wingman_Silver_2);
                message.channel.send('***:white_circle: Je bent geen wingman Silver 2 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman silver 3`) {
                message.member.roles.remove(wingman_Silver_3);
                message.channel.send('***:white_circle: Je bent geen wingman Silver 3 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman silver 4`) {
                message.member.roles.remove(wingman_Silver_4);
                message.channel.send('***:white_circle: Je bent geen wingman Silver 4 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman silver elite`) {
                message.member.roles.remove(wingman_Silver_Elite);
                message.channel.send('***:white_circle: Je bent geen wingman Silver Elite meer :white_circle:***');   
    
        }   else if (message.content === `${prefix}remove wingman silver elite master`) {
                message.member.roles.remove(wingman_Silver_Elite_Master);
                message.channel.send('***:white_circle: Je bent geen wingman Silver Elite Master meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman gold nova 1`) {
                message.member.roles.remove(wingman_Gold_Nova_1);
                message.channel.send('***:white_circle: Je bent geen wingman Gold Nova 1 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman gold nova 2`) {
                message.member.roles.remove(wingman_Gold_Nova_2);
                message.channel.send('***:white_circle: Je bent geen wingman Gold Nova 2 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman gold nova 3`) {
                message.member.roles.remove(wingman_Gold_Nova_3);
                message.channel.send('***:white_circle: Je bent geen wingman Gold Nova 3 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman gold nova master`) {
                message.member.roles.remove(wingman_Gold_Nova_Master);
                message.channel.send('***:white_circle: Je bent geen wingman Gold Nova Master meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman master guardian 1`) {
                message.member.roles.remove(wingman_Master_Guardian_1);
                message.channel.send('***:white_circle: Je bent geen wingman Master Guardian 1 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman master guardian 2`) {
                message.member.roles.remove(wingman_Master_Guardian_2);
                message.channel.send('***:white_circle: Je bent geen wingman Master Guardian 2 meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman master guardian Elite`) {
                message.member.roles.remove(Master_Guardian_Elite);
                message.channel.send('***:white_circle: Je bent geen wingman Master Guardian Elite meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman distinguished master guardian`) {
                message.member.roles.remove(wingman_Distinguished_Master_Guardian);
                message.channel.send('***:white_circle: Je bent geen wingman Distinguished Master Guardian meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman legendary eagle`) {
                message.member.roles.remove(wingman_Legendary_Eagle);
                message.channel.send('***:white_circle: Je bent geen wingman Legendary Eagle meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman legendary eagle master`) {
                message.member.roles.remove(wingman_Legendary_Eagle_Master);
                message.channel.send('***:white_circle: Je bent geen wingman Legendary Eagle Master meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman supreme master first class`) {
                message.member.roles.remove(wingman_Supreme_Master_First_Class);
                message.channel.send('***:white_circle: Je bent geen wingman Supreme Master meer :white_circle:***');
    
        }   else if (message.content === `${prefix}remove wingman the global elite`) {
                message.member.roles.remove(wingman_The_Global_Elite);
                message.channel.send('***:white_circle: Je bent geen wingman Global Elite meer :white_circle:***');
                
        }   else if (message.content === `${prefix}remove wingman unranked`) {
                message.member.roles.remove(wingman_Unranked);
                message.channel.send('***:white_circle: Je bent geen wingman Unranked meer :white_circle:***');
    
        }   

});

client.login(process.env.token);


// Created By TheDutchFinalGamer (Dont Use my bot whitout permission from me)

