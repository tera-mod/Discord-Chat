# Discord-Chat

将TERA客户端中接受到的 [密语消息] 自动转发到Discord[聊天频道]

------------------------

因为我常常游戏挂机而错过了一些重要的密语消息, 所以想到为TERA制作1个离线提醒的mod

------------------------

1. https://www.npmjs.com/ 搜索 discord.js 模块

2. https://www.npmjs.com/package/discord.js 获取安装命令 npm i discord.js

	将默认工程目录下载的 node_modules 复制到 \CaaliTeraProxy\mods\Discord-Chat\

	也可以使用我上传的这个 [node_modules] 文件夹

------------------------

3. https://discordapp.com/developers/applications/ 登陆你的 Discord 账户并创建一个[APP]应用

4. 点击进入[APP]设置[SETTINGS], 记录下[APP]的[CLIENT ID]信息, 例如: 535000001234567890

5. 选中[SETTINGS]中的[Bot], 创建(BUILD-A-BOT)一个机器人, 点击[Add Bot]即可, 并记录下[BUILD-A-BOT]的 TOKEN 码

	点击 [Click to Reveal Token] 即可见, 例如: NTM1MDY2NzI2NzE1MzU5MjM0.DyCw2w.0jCzz97U0ROMk_-ssZbZi5OlVsQ

6. 将[APP]应用(bot机器人)拉如属于你的Discord语音聊天服务器, 举例: (替换中间的数字后, 在浏览器中打开)

	https://discordapp.com/api/oauth2/authorize?client_id=535000001234567890&scope=bot&permissions=1

	此时前期工作准备就绪

------------------------

7. 下载 config.json 和 index.js , 存放\CaaliTeraProxy\mods\Discord-Chat\ , 配置 config.json

	token -> [BUILD-A-BOT]的 TOKEN 码
	channel -> Discord[文字聊天]频道的ID (并不是Discord[服务器ID])
