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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124503464";




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

  sessionName:process.env.SESSION_ID || "A4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTI0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDkwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTE1LFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkM0OTZhdk9mRlZ0elhHWTk4dUFtOUhVTXBMOVZKTFZOUmVvRFluaE5EbkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyNDUwMzQ2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTdBRjUzOEEwNTEzOTNEMzY2NzMxQzA5QURDNTYzRUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3Mjc0NDI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhWaUx3UHFVUzNpLVRGZElENzc1dXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODgzZjMyMDAtM2FkZS00NjZiLWJmNjgtYWI2YzhkZjFmMjNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTA1LFxuICAgICAgMTg3LFxuICAgICAgMTk0LFxuICAgICAgMTYwLFxuICAgICAgMjEzLFxuICAgICAgNzAsXG4gICAgICA4OSxcbiAgICAgIDE4OSxcbiAgICAgIDM0LFxuICAgICAgMTkzLFxuICAgICAgMTg0LFxuICAgICAgMjQ1LFxuICAgICAgMjE0LFxuICAgICAgMjExLFxuICAgICAgMTc3LFxuICAgICAgMTgzLFxuICAgICAgNTAsXG4gICAgICAxMTMsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAyMzAsXG4gICAgICA0MyxcbiAgICAgIDE3LFxuICAgICAgMTI1LFxuICAgICAgOSxcbiAgICAgIDEwNyxcbiAgICAgIDk2LFxuICAgICAgNzksXG4gICAgICAyNDUsXG4gICAgICAxLFxuICAgICAgMjI1LFxuICAgICAgODAsXG4gICAgICAyMTUsXG4gICAgICAzNCxcbiAgICAgIDIzNixcbiAgICAgIDcsXG4gICAgICAzMyxcbiAgICAgIDI0MixcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyTldONUxOR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNDUwMzQ2NDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3NjEwMDQzMDE1MjQ4OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ003cTlhQUJFTFM3MExjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWE53VkQ5ODZ3d1k3NFJHT3pEVFJSWGxIa2dKS3h5WVFHLzJqR29PbTN4QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiL01qd0Q2RXZCS0RNMUkwN3k2RlUxbFhnN2VFbzNPcFdRa2w5UG5wdmFUL0NpcWJFM0l6bmtvRUxQQjVxTEdUWENSblhscXduUjY5SktoM0RPU3lBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVaXlNK0N4Y3BGa3ZWZ244aWorTzZRVHBZWFVvZDllYnRTcGVaRG9rQ2ZhakgwRnJscEdiMmd6Mk1rR3NlVElKL0NnYVJNS09kRXRmN1JsQkdOS1VqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI0NTAzNDY0OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcyNzQ0MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQdnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB2cC5qc29uIjoge30KfQ==
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
 
