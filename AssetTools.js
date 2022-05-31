var axios = require("axios")
const jsdom = require("jsdom");
var prompt = require('prompt-sync')();
const chalk = require('chalk')
var outputfull = true;
var GetIMG = true;

/*

The Orignal Source was 17 lines of code :3
  This Code was Coded by StiizzyCat#001
    Stiizzy Cats Asset Stealer Method!
          (C) Stiizzy Cat 2022

*/
console.log(chalk.magentaBright(" ▄▄▄        ██████   ██████ ▓█████▄▄▄█████▓   ▄▄▄█████▓ ▒█████   ▒█████   ██▓      ██████    "))
console.log(chalk.magentaBright(" ▒████▄    ▒██    ▒ ▒██    ▒ ▓█   ▀▓  ██▒ ▓▒   ▓  ██▒ ▓▒▒██▒  ██▒▒██▒  ██▒▓██▒    ▒██    ▒    ")) //      
console.log(chalk.magentaBright(" ▒██  ▀█▄  ░ ▓██▄   ░ ▓██▄   ▒███  ▒ ▓██░ ▒░   ▒ ▓██░ ▒░▒██░  ██▒▒██░  ██▒▒██░    ░ ▓██▄      "))
console.log(chalk.magentaBright(" ░██▄▄▄▄██   ▒   ██▒  ▒   ██▒▒▓█  ▄░ ▓██▓ ░    ░ ▓██▓ ░ ▒██   ██░▒██   ██░▒██░      ▒   ██▒   "))
console.log(chalk.magentaBright("  ▓█   ▓██▒▒██████▒▒▒██████▒▒░▒████▒ ▒██▒ ░      ▒██▒ ░ ░ ████▓▒░░ ████▓▒░░██████▒▒██████▒▒   "))
console.log(chalk.magentaBright(" ▒ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░░ ▒░ ░ ▒ ░░        ▒ ░░   ░ ▒░▒░▒░ ░ ▒░▒░▒░ ░ ▒░▓  ░▒ ▒▓▒ ▒ ░  ")) //      
console.log(chalk.magentaBright("   ▒   ▒▒ ░░ ░▒  ░ ░░ ░▒  ░ ░ ░ ░  ░   ░           ░      ░ ▒ ▒░   ░ ▒ ▒░ ░ ░ ▒  ░░ ░▒  ░ ░   "))
console.log(chalk.magentaBright("   ░   ▒   ░  ░  ░  ░  ░  ░     ░    ░           ░      ░ ░ ░ ▒  ░ ░ ░ ▒    ░ ░   ░  ░  ░     ")) //
console.log(chalk.magentaBright("       ░  ░      ░        ░     ░  ░                        ░ ░      ░ ░      ░  ░      ░     "))
console.log(chalk.bgMagenta('ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤV1.0 Coded By: https://github.com/StiizzyCatㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ'))
// More Prompts :<
var assetid = prompt(chalk.magentaBright('[+] ') + chalk.blueBright('Enter the AssetID: '));

// More Prompts :<
var Fullurl = prompt(chalk.magentaBright('[+] ') + chalk.blueBright('Output full URL? <default: yes = enter n = no>: '));

if (Fullurl === "") {
      console.log(chalk.greenBright("Default Settings Applied!"));

} else if (Fullurl === 'n' && GetIMG === 'N') {
      console.log(chalk.greenBright("Output Settings Applied!")), outputfull = false;
}

// More Prompts :<
var GetImage = prompt(chalk.magentaBright('[+] ') + chalk.blueBright('Output Image URL? <default: yes = enter n = no>: '));

if (GetImage === "") {
      console.log(chalk.greenBright("Default Settings Applied!"));

} else if (GetImage === 'n' && GetIMG === 'N') {
      console.log(chalk.greenBright("Output Settings Applied!")), GetIMG = false;
}

console.log(chalk.greenBright("Getting The Source Asset For You!"))
console.log()
console.log()
console.log()

axios.get(`https://assetdelivery.roblox.com/v1/asset/?id=${assetid}`).then(async res => {
      var data = res.data
      const Dom_Dom_Dom = new jsdom.JSDOM(data);
      var B4 = Dom_Dom_Dom.window.document.querySelector("url").textContent
      var regex = B4.replace(/\D/g, '');
      console.log(chalk.greenBright("Completed!"))
      if (outputfull === true) {
            console.log(chalk.yellowBright(`https://roblox.com/library/${regex}`))
      } else {
            console.log(chalk.yellowBright(`${regex}`))
      }
      if (GetIMG === true) {
            axios.get(`https://assetdelivery.roblox.com/v1/asset/?id=${assetid}`).then(async res => {
                  var data = res.data
                  const Dom_Dom_Dom = new jsdom.JSDOM(data);
                  var B4 = Dom_Dom_Dom.window.document.querySelector("url").textContent
                  var regex = B4.replace(/\D/g, '');

                  axios.get(`https://thumbnails.roblox.com/v1/assets?assetIds=${regex}&size=420x420&format=Png&isCircular=false`).then(async res => { ////
                        var data = res.data
                        console.log(chalk.yellowBright(data.data[0].imageUrl))
                  })
            })
      } else {

      }
}).catch((err) => {
      console.log(chalk.redBright("ERROR: Asset is either already the source id, Not a valid Id, Or is an unsupported asset!"))
})
