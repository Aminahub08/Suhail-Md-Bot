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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348039405856";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_20_52_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgODMsXG4gICAgICAgIDczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJobForcEdETkR6MzN0QmVvalh0cm9VVlZZYWVNaVd3L0pnbTlxWk5MdWhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaMGlyaFNNaVJQcVNibmxCTnMtd3ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1ZmNiMWZhLTNhYjgtNGI1MC1hMWY4LTZiNzViZDQzZWQ4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICA2OSxcbiAgICAgIDE2MixcbiAgICAgIDgyLFxuICAgICAgMTM0LFxuICAgICAgMTAyLFxuICAgICAgODMsXG4gICAgICAxNDUsXG4gICAgICA0MCxcbiAgICAgIDIyNCxcbiAgICAgIDUyLFxuICAgICAgNjQsXG4gICAgICA5MCxcbiAgICAgIDE0MyxcbiAgICAgIDI0NCxcbiAgICAgIDY0LFxuICAgICAgNDIsXG4gICAgICAxNDIsXG4gICAgICA1MixcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICA4NCxcbiAgICAgIDIzNyxcbiAgICAgIDE1MCxcbiAgICAgIDEwNCxcbiAgICAgIDE3NCxcbiAgICAgIDE3NCxcbiAgICAgIDIxLFxuICAgICAgMTUwLFxuICAgICAgMjA5LFxuICAgICAgMjI4LFxuICAgICAgOTUsXG4gICAgICAyNCxcbiAgICAgIDI1MyxcbiAgICAgIDE0MCxcbiAgICAgIDE1NSxcbiAgICAgIDEzNSxcbiAgICAgIDE0NCxcbiAgICAgIDEzOCxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZCQTg4SFAyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM5NDA1ODU2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJVbW15c2NvbGxlY3RvbnNcIixcbiAgICBcImxpZFwiOiBcIjE3MzY1MDAyNDA3OTU0NDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmZjRkNERFTzNqdkxjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib0Jsd2RTa2RTUUlEaEU3S01YejF0NHVMQVBTNlNKVHpoSGc2MUM0NGQwND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVK2I5WWd1ejVwUFFxSDJTVkVEMTdITDBEeDk2YU9OQXc5bnhOUlR0aWNOaGdMa21IMEpEMjkyUmFPVGRDVXFIOXZ2L0JaNU1CVXU4Z044aktweWFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6c2xhLzFjN3k3WnlUZmFuOVduNGt3RVFWY3pMSEliNUdMNmY2MDdFVlN2RkhQbjZ2cVpyZ1lwTTBBemRsdk8zc2FEY1dDai9ramZCb2FuVE1NNlBqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM5NDA1ODU2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2OTUxOTIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXRBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBdEEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlL09lWFFIeU1JdHQyOWw2Q2FKMU5nUXpHNHl5OVBaajRCQlVIN0lIakxZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDQwNDAxMTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjk1MTczNzk3OFwifSIKfQ== ",  // PUT SESSION ID HERE 
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
 
