
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`***:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..

**اتمنا انكون تدخلو  على سيرفري ممكن اذا وصلنا 200 شخص نسوي اكبر فعاليا وا اكبر قيف اواي وا كمان اشياء كثيرااا
عشان كذا ادخلو وا دخلو اصدقاكون
وا نشاء الله تستمتعو
و الفعاليه 
عن 7 بوتات 24 ساعه  للابد 
و   بوتات  5 كامله 
و   4 انتروهات ماين كرافت
:heart: :heart: :heart:  **
https://discord.gg/UCKymg
[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`***:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..

**اتمنا انكون تدخلو  على سيرفري ممكن اذا وصلنا 200 شخص نسوي اكبر فعاليا وا اكبر قيف اواي وا كمان اشياء كثيرااا
عشان كذا ادخلو وا دخلو اصدقاكون
وا نشاء الله تستمتعو
و الفعاليه 
عن 7 بوتات 24 ساعه  للابد 
و   بوتات  5 كامله 
و   4 انتروهات ماين كرافت
:heart: :heart: :heart:  **
https://discord.gg/UCKymg
[${member}]**`);


  });



Client.login("NDczMTc5MDMzNDA4ODk3MDY0.Dj-KGw.kcoCkM4p_4JZYhnj0GUygHEqTsE");
