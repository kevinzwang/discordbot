import EECSCommand from '../EECSCommand'
import { MessageEmbed } from 'discord.js'
import { CommandoClient, CommandoMessage } from 'discord.js-commando'

export class VerifyCommand extends EECSCommand {
    constructor(client: CommandoClient) {
        super(client, {
            name: 'verify',
            group: 'mod',
            memberName: 'verify',
            description: 'instructions for verification',
            dmOnly: true,
            unverifiedOnly: true,
        })
    }

    execute(message: CommandoMessage) {
        return message.say(
            new MessageEmbed({
                title: 'Verification',
                description:
                    'Please submit your Berkeley email for verification.\n' +
                    'Your information will not be stored or tied to your Discord account (Check out the source code [here](https://github.com/berkeleyopensource/discordbot)).\n' +
                    'If you are not from Berkeley or have any issues with verification, direct message a moderator.',
                color: 0xfdb515,
            }).addField(
                'Instructions:',
                `Submit your email using\n\`${process.env.PREFIX}email [berkeley.edu email]\`\n\n`
            )
        )
    }
}
