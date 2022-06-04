const download = require('images-downloader').images;
const jsdom = require("jsdom");
const chalk = require('chalk');
var axios = require("axios");

/**
 * @author: Stiizzy Cat#0001
 * @description:  Stiizzy Cats Asset Stealer Method!
 * @copyright: (C) Stiizzy Cat 2022
 **/

function GetSourceID(AssetID) {

    axios.get(`https://assetdelivery.roblox.com/v1/asset/?id=${AssetID}`).then(async res => {
        var data = res.data
        const Dom_Dom_Dom = new jsdom.JSDOM(data);
        var B4 = Dom_Dom_Dom.window.document.querySelector("url").textContent
        var regex = B4.replace(/\D/g, '');
        console.log(chalk.yellowBright(regex))
    }).catch(() => {
        console.log(chalk.redBright("ERROR: Asset is either already the source id, Not a valid Id, Or is an unsupported asset!"))
    })
}

function GetSourceURL(AssetID) {

    axios.get(`https://assetdelivery.roblox.com/v1/asset/?id=${AssetID}`).then(async res => {
        var data = res.data
        const Dom_Dom_Dom = new jsdom.JSDOM(data);
        var B4 = Dom_Dom_Dom.window.document.querySelector("url").textContent
        var regex = B4.replace(/\D/g, '');
        console.log(chalk.yellowBright(`https://roblox.com/library/${regex}`))
    }).catch(() => {
        console.log(chalk.redBright("ERROR: Asset is either already the source id, Not a valid Id, Or is an unsupported asset!"))
    })
}

function GetSourceImage(AssetID) {

    axios.get(`https://assetdelivery.roblox.com/v1/asset/?id=${AssetID}`).then(async res => {
        var data = res.data
        const Dom_Dom_Dom = new jsdom.JSDOM(data);
        var B4 = Dom_Dom_Dom.window.document.querySelector("url").textContent
        var regex = B4.replace(/\D/g, '');

        axios.get(`https://thumbnails.roblox.com/v1/assets?assetIds=${regex}&size=420x420&format=Png&isCircular=false`).then(async res => { ////
            var data = res.data
            console.log(chalk.yellowBright(data.data[0].imageUrl))
        }).catch(() => {
            console.log(chalk.redBright("ERROR: Asset is either already the source id, Not a valid Id, Or is an unsupported asset!"))
        })
    })
}


function DownloadAsset(AssetID) {

    axios.get(`https://assetdelivery.roblox.com/v1/asset/?id=${AssetID}`).then(async res => {
        var data = res.data
        const Dom_Dom_Dom = new jsdom.JSDOM(data);
        var B4 = Dom_Dom_Dom.window.document.querySelector("url").textContent
        var regex = B4.replace(/\D/g, '');

        axios.get(`https://thumbnails.roblox.com/v1/assets?assetIds=${regex}&size=420x420&format=Png&isCircular=false`).then(async res => { ////
            var data = res.data
            var image = [`${data.data[0].imageUrl}.png`]
            download(image, './DownloadedAssets')
                .then(result => {
                    console.log(chalk.yellowBright('Images downloaded', result));
                })
                .catch(error => console.log("downloaded error", error))
        })
    })
}

module.exports = {
    GetSourceID,
    GetSourceURL,
    GetSourceImage,
    DownloadAsset
}
