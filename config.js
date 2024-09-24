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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "239124503464";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_21_36_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzLFxuICAgICAgICA4MixcbiAgICAgICAgMjI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg1LFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM1LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllmZ1JQSUV4YmxJaUJ5UjMwR0pTb21NalkrRGlnYzBRdHBIZmR3YXFGalk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklVTV82ajdKUWUyQ0x2ajBzREc3MWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjRlYWUxNjItZjNkNC00M2YxLWE3ZjgtMWE1ZTY5OTY3M2ZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDEzMixcbiAgICAgIDIzNixcbiAgICAgIDIzMixcbiAgICAgIDU1LFxuICAgICAgMTUyLFxuICAgICAgMjI0LFxuICAgICAgNTAsXG4gICAgICAxMDksXG4gICAgICAyNDMsXG4gICAgICAxMjMsXG4gICAgICAyMSxcbiAgICAgIDE5MyxcbiAgICAgIDMsXG4gICAgICAxNjIsXG4gICAgICAxMDcsXG4gICAgICAyMjksXG4gICAgICAxNTUsXG4gICAgICA3NixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDExNixcbiAgICAgIDcyLFxuICAgICAgMTg0LFxuICAgICAgOTMsXG4gICAgICA2LFxuICAgICAgMzAsXG4gICAgICA5NSxcbiAgICAgIDI4LFxuICAgICAgMTYzLFxuICAgICAgMjQ0LFxuICAgICAgMTY0LFxuICAgICAgMTcxLFxuICAgICAgNzcsXG4gICAgICAxNzIsXG4gICAgICA5MixcbiAgICAgIDcsXG4gICAgICA1OCxcbiAgICAgIDE2NSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEVjlRVDkzNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNDUwMzQ2NDoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3NjEwMDQzMDE1MjQ4OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016cTlhQUJFTmpWdDdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWE53VkQ5ODZ3d1k3NFJHT3pEVFJSWGxIa2dKS3h5WVFHLzJqR29PbTN4QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2V3dpRitZbTJEeEsraTRUeURjc1BqTjZOWkdaa2NNMExkVThWbERPSW45a21UWFdKeC9vdVdKVnE0cHpuWlRFZXpEbWQ1R3Irb3FWVms3OWk4QStBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJETzNuN01vM0tyZWY5VlhybWF2d3JFSmh1ZDBmNTZTQ0Y4RzVpaFJaT29KME9iTGhTclNjV0VkdDd5cWJRYXZIaVRnU3VDckQwRU15eE1EKy9kKzFEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI0NTAzNDY0OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY4NjgxODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQdmxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB2bC5qc29uIjogIntcImtleURhdGFcIjpcImhLTzJ6VGgySU50Mi9UU3A3eHNQdWVhMURFRDgwV0kranVCUVNXcG1ER1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM3NDc0ODkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI2ODY4MTAyMTMzXCJ9Igp9",  // PUT SESSION ID HERE 
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
 
