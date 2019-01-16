// 清除HTML标签代码 返回(保留)内容(字符串)
String.prototype.stripHTML = function () { return this.replace(/<[^>]+>/g, '') }
// 加载模块 discord.js
const Discord = require('discord.js')
// 新建一个bot机器人实例
const bot = new Discord.Client()
// 加载 config.json 配置文档
const config = require('./config.json')

module.exports = function DiscordChat(mod) {
	/* ---------Discord客户端---------- */
	// bot机器人 token码 登陆
	bot.login(config.token)
	// bot机器人 上线
	bot.on('ready', () => {
		console.log(`Discord-Bot is Online!! ${bot.user.tag}!`)
	})
	let discordAuthor
	// bot机器人 监听 DIS频道中聊天(忽略bot机器人自己的)的消息, 发送回TERA客户端
	bot.on('message', function chatMessage(msg) {
		if (!msg.author.bot && (msg.channel.id === config.channel)) {
			discordAuthor = msg.author.username
			console.log(msg.content)
			mod.command.message(`[<font color="#83bad4">${discordAuthor}</font>] : ${msg.content.stripHTML()}`)
		}
	})
	/* ---------TERA客户端---------- */
	// 我的游戏昵称
	let myGmeName
	// 监听 S_LOGIN(客户端登陆)数据包 获取 event.name 并赋值给 我的游戏昵称
	mod.hook('S_LOGIN', 12, (event) => {
		myGmeName = event.name
	})
	// 监听 S_WHISPER(密语聊天)数据包
	mod.hook('S_WHISPER', 2, (event) => { 
		// 发送人 为 我自己昵称 时忽略
		if (event.authorName === myGmeName) return
		
		// 控制台 打印 <发送人>: -> 密语文字内容
		console.log('<' + event.authorName + '>:\n -> ' + event.message.stripHTML())
		
		// 让 bot机器人 选择 chatChannel 频道
		var channel = bot.channels.get(config.channel)
		// 让 bot机器人 发送消息在 DIS中
		channel.send(`@everyone [${event.authorName}] : ${event.message.stripHTML()}`)
	})
	/* ---------TERA客户端测试---------- */
	mod.command.add('distest', (arg) => {
		sendMsg(arg, config.channel)
	})
	// 发送 arg 测试文字到 DIS指定频道
	function sendMsg(msg, chatChannel) {
		var channel = bot.channels.get(chatChannel)
		channel.send(`@everyone [${myGmeName}] : ${msg}`)
	}
	
}
