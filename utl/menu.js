const {
    GetSourceID,
    GetSourceURL,
    GetSourceImage,
    DownloadAsset
} = require('./Converter')
const editJsonFile = require("edit-json-file");
const CONFIG = require('./config.json')
var prompt = require('prompt-sync')();
const chalk = require('chalk');
const {
    theme
} = require('./theme')
var color = CONFIG.theme[0];
/**
 * @author: Stiizzy Cat#0001
 * @description:  Stiizzy Cats Menu System, using only Prompt-Sync and Switch Statements
 * @copyright: (C) Stiizzy Cat 2022
 **/
var outputfull = true;
var GetIMG = true;
var DownloadIMG = true;


function menu() {
    theme(color)

    console.log(chalk.magentaBright('1: Download An Asset!'))
    console.log(chalk.magentaBright('2: Set CLI Theme!'))
    console.log(chalk.magentaBright('3: Exit!'))

    var choices = prompt(chalk.magentaBright('[+] ') + chalk.blueBright('Choose a Selection: '));
    switch (choices) {
        case '1':
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
            // More Prompts :<
            var DWNLD = prompt(chalk.magentaBright('[+] ') + chalk.blueBright('Download Source Image? <default: yes = enter n = no>: '));

            if (DWNLD === "") {
                console.log(chalk.greenBright("Default Settings Applied!"));

            } else if (DWNLD === 'n' && DWNLD === 'N') {
                console.log(chalk.greenBright("Output Settings Applied!")), DownloadIMG = false;
            }

            console.log(chalk.greenBright("Getting The Source Asset For You!"))
            if (outputfull === true) {
                GetSourceURL(assetid)
            } else {
                GetSourceID(assetid)
            }
            if (GetIMG === true) {
                GetSourceImage(assetid)
            } else {}
            if (DownloadIMG === true) {
                DownloadAsset(assetid)
            } else {

            }
            case '2':
                console.clear()
                let file = editJsonFile(`${__dirname}/config.json`)
                console.log(chalk.magentaBright('Themes'))
                console.log(chalk.magentaBright('1: Ukraine '))
                console.log(chalk.magentaBright('2: Usa '))
                console.log(chalk.magentaBright('3: Red '))
                console.log(chalk.magentaBright('4: Purple '))
                console.log(chalk.magentaBright('5: LGBT '))

                var themeprompt = prompt(chalk.magentaBright('[+] ') + chalk.blueBright('Choose a Selection: '));
                switch (themeprompt) { // I used switch statments instead of else if ones :3 - stiizzy cat
                    case '1':
                        console.log(chalk.greenBright("Ukraine Theme Applied! please rerun script!"))
                        file.pop("theme")
                        file.append("theme", "ukraine");
                        file.save()
                        process.exit()
                    case '2':
                        console.log(chalk.greenBright("Usa Theme Applied! please rerun script!"))
                        file.pop("theme")
                        file.append("theme", "usa");
                        file.save()
                        process.exit()
                    case '3':
                        console.log(chalk.greenBright("red Theme Applied! please rerun script!"))
                        file.pop("theme")
                        file.append("theme", "red");
                        file.save()
                        process.exit()
                    case '4':
                        console.log(chalk.greenBright("purple Theme Applied! please rerun script!"))
                        file.pop("theme")
                        file.append("theme", "purple");
                        file.save()
                        process.exit()
                    case '5':
                        console.log(chalk.greenBright("LGBT Theme Applied! please rerun script!"))
                        file.pop("theme")
                        file.append("theme", "lgbt");
                        file.save()
                        process.exit()
                        // expected output: "Mangoes and papayas are $2.79 a pound."
                    default:
                        console.log(chalk.greenBright("Unknown Theme, Setting to defult white, please rerun!"))
                        file.pop("theme")
                        file.append("theme", "");
                        file.save()
                        process.exit()
                }

                case '3':
                    process.exit()
                default:
                    console.log()
                    console.log(chalk.redBright("Invalid Choice!"))
                    setTimeout(() => {
                        console.clear(), menu()
                    }, 2000);


    }
}

module.exports = {
    menu
}
