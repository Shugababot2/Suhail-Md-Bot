const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "239124593464";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_47_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjF0Vm9VWU5JRGsyMEh6ZkNCMVJ2ckVwUlQ1VXRtS3dwZzl4QmhrdnR4UVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyNDUwMzQ2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjI2ODczRTUyMUFCOTY0Qjc3QkQ5OTdFNzM0NzU2MzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2ODU4MDE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImV2djZmdTRtVFhxbEFkWURLS3l1X2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWUxNDNlZjQtYThiZi00N2I2LWIwYjEtNzdmOGYwZTQxMjIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMjMxLFxuICAgICAgMzEsXG4gICAgICAxODksXG4gICAgICAxLFxuICAgICAgMTkzLFxuICAgICAgMjQ2LFxuICAgICAgMTExLFxuICAgICAgNjcsXG4gICAgICA4NCxcbiAgICAgIDk0LFxuICAgICAgMTY4LFxuICAgICAgMTE3LFxuICAgICAgMTIyLFxuICAgICAgMTkwLFxuICAgICAgOSxcbiAgICAgIDYwLFxuICAgICAgMjQwLFxuICAgICAgMTk4LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgOCxcbiAgICAgIDEwNyxcbiAgICAgIDIxLFxuICAgICAgMTE4LFxuICAgICAgNDksXG4gICAgICAyNDcsXG4gICAgICAyMjMsXG4gICAgICAxNyxcbiAgICAgIDM3LFxuICAgICAgODQsXG4gICAgICAxMzAsXG4gICAgICAxNDMsXG4gICAgICAxNzQsXG4gICAgICAxNTksXG4gICAgICAxODksXG4gICAgICA5MCxcbiAgICAgIDE1NSxcbiAgICAgIDEyMixcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpXOFFIMUxBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI0NTAzNDY0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzc2MTAwNDMwMTUyNDg6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZxOWFBQkVKZUd0N2NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYTndWRDk4Nnd3WTc0UkdPekRUUlJYbEhrZ0pLeHlZUUcvMmpHb09tM3hBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpOZ2ZOWDdONUl2a2QyRy9TME0yRnJPZTRRajJmZE14L3o4amZMUjNGeWtuaVlucWhHK1VObDFqTUtkY0E5UXg4VTBWWkNBMU9QeWZieFhzM0JxNEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9lSm54RlpWem1WZ1doc1BkeTdZd0pkVXg1dkZoN0M1OEFNbFRRaVZJS2wxWHAzWGRRM3JmYnI3YTRXNVF6dmFlWjlNS2lVd2swSkZMRTdUaVBHNWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjQ1MDM0NjQ6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjg1ODAxMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
