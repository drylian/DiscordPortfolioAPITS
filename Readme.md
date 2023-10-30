## Api do discord , mostra muitas informações para usar, necessario um bot do discord para o funcionamento

### configure o config.json em app/config.json

```json
{
    "token":"SEU_TOKEN_AQUI",
    "port":3000
}
```
### use npm | yarn ou pnpm para instalar

execute 

```sh
# para npm
npm install; npm run dev

# para yarn
yarn install; yarn run dev

# para pnpm 
pnpm i; pnpm dev 
# ou
pnpm install; pnpm run dev
```

#### Por ultimo, use a api para obter as informações do usuário com guildid(o bot deve estar na guild) e userid(usuário tambem deve estar na guild)

### Acessando a api

localhost:3000/api/guilds/:guildid/users/:userid
#### exemplo
http://localhost:3000/api/guilds/925837612000903251/users/428660430412709889

### Alerta legal, Isso é totalmente publico e pode ser acessado por qualquer pessoa, não se preocupe em usar esse codigo

#### Resposta
```json
{
    "user": {
        "id": "428660430412709889",
        "bot": false,
        "system": false,
        "flags": 4194432,
        "username": "drylian",
        "globalName": "ΩDrylian_BR/Awaken",
        "discriminator": "0",
        "avatar": "93f9d53beec10d925f3a28d8f69f3d27",
        "avatarDecoration": null,
        "createdTimestamp": 1522271010736,
        "defaultAvatarURL": "https://cdn.discordapp.com/embed/avatars/4.png",
        "tag": "drylian",
        "avatarURL": "https://cdn.discordapp.com/avatars/428660430412709889/93f9d53beec10d925f3a28d8f69f3d27.webp",
        "displayAvatarURL": "https://cdn.discordapp.com/avatars/428660430412709889/93f9d53beec10d925f3a28d8f69f3d27.webp"
    },
    "presence": {
        "activities": [
            {
                "name": "Custom Status",
                "type": 4,
                "url": null,
                "details": null,
                "state": "Começando o React do Core ? talvez",
                "applicationId": null,
                "timestamps": null,
                "party": null,
                "assets": null,
                "flags": 0,
                "emoji": {
                    "animated": false,
                    "name": "oklegal_apolo",
                    "id": "1139447633191108679",
                    "createdTimestamp": 1691735885666,
                    "url": "https://cdn.discordapp.com/emojis/1139447633191108679.png",
                    "identifier": "oklegal_apolo:1139447633191108679"
                },
                "buttons": [],
                "createdTimestamp": 1698632252645
            },
            {
                "name": "Visual Studio Code",
                "type": 0,
                "url": null,
                "details": "Editing index.ts",
                "state": "Workspace: DiscordUserInfo",
                "applicationId": "383226320970055681",
                "timestamps": {
                    "start": "2023-10-30T05:42:26.097Z",
                    "end": null
                },
                "party": null,
                "assets": {
                    "largeText": "Editing a TYPESCRIPT file",
                    "smallText": "Visual Studio Code",
                    "largeImage": "808842276184784916",
                    "smallImage": "565945770067623946"
                },
                "flags": 0,
                "emoji": null,
                "buttons": [],
                "createdTimestamp": 1698637209976
            }
        ],
        "status": "online",
        "clientStatus": {
            "desktop": "online"
        }
    },
    "member": {
        "guildId": "925837612000903251",
        "roles": [
            {
                "id": "1001167188562038817",
                "name": "👥 | Membros",
                "color": 5043701
            },
            {
                "id": "1002406068191756488",
                "name": "🔰 | Drylian",
                "color": 37119
            },
            {
                "id": "1002406551748870174",
                "name": "🔰 | Administrador Geral",
                "color": 3447003
            },
            {
                "id": "1086850669287309423",
                "name": "TESTE DC SAMP",
                "color": 0
            },
            {
                "id": "1090475310526509106",
                "name": "cheatado em terraria",
                "color": 3066993
            },
            {
                "id": "925837612000903251",
                "name": "@everyone",
                "color": 0
            }
        ]
    }
}
```