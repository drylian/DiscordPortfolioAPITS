import express from 'express';
import { Client, GatewayIntentBits } from 'discord.js';
import * as json from "./config.json"
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences] });
const DISCORD_TOKEN = json.token;

client.on('ready', () => {
    console.log(`Bot está online como ${client.user?.tag}`);
});

async function init() {
    try {
        await client.login(DISCORD_TOKEN);

        // Rota para obter informações do usuário
        app.get('/api/guilds/:guildid/users/:userid', async (req, res) => {
            const { userid, guildid } = req.params;

            try {
                // Obtenha o usuário do Discord com base no userid
                const user = await client.users.fetch(userid);

                if (user) {
                    // Obtenha o servidor (guild) aos quais o usuário pertence
                    const guild = await client.guilds.fetch(guildid);
                    if (!guild) {
                        return res.status(404).json({ message: "Servidor não encontrado" });
                    }

                    // Obtenha o membro do servidor
                    const member = await guild.members.fetch(userid);
                    const roles = member.roles.cache.map(role => ({
                        id: role.id,
                        name: role.name,
                        color: role.color,
                    }));

                    if (member) {
                        const presence = {
                            activities: member.presence?.activities,
                            status: member.presence?.status,
                            clientStatus: member.presence?.clientStatus,
                        };

                        // Aqui você pode retornar as informações do usuário, incluindo status de presença e roles
                        res.json({
                            user,
                            presence,
                            member: {
                                guildId: guild.id,
                                roles,
                            },
                        });
                    } else {
                        res.status(404).json({ message: 'Membro/Guild não encontrado, use uma guild que o bot esteja presente' });
                    }
                } else {
                    res.status(404).json({ message: 'Usuário não encontrado' });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Erro ao obter informações do usuário' });
            }
        });
    } catch (error) {
        console.error(error);
    }
}

init();

const port = json.port;
app.listen(port, () => {
    console.log(`Servidor Express está ouvindo na porta http://localhost:${port}`);
});
