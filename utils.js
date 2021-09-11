const fs = require("fs")
const path = require("path")
const process = require("process")
const inline = require("web-resource-inliner")
const TextToSVG = require('text-to-svg')
const textToSVG = TextToSVG.loadSync()

module.exports = {
    textToSvg({text, fontSize=72, x=0, y=0, anchor='center', attributes, ...options}) {
        options = {
            x,
            y,
            fontSize,
            anchor,
            attributes: {
                stroke: 'black',
                fill: 'black',
                ...attributes,
            },
            ...options
        }
        return console.log(textToSVG.getSVG(text, options)) 
    },
    bundleIntoSingleFile({ existingHtmlFile, outputFilePath }) {
        if (!outputFilePath) {
            outputFilePath = existingHtmlFile
        }
        const bundle = (resolve, reject)=>{
            const contents = fs.readFileSync(existingHtmlFile, "utf8")
            const actualContents = process.platform === "win32" ? contents.replace(/\r\n/g, "\n") : contents
            inline.html(
                {
                    fileContent: actualContents,
                    relativeTo: path.dirname(existingHtmlFile),
                },
                (err, result) => {
                    if (err) {
                        reject(err)
                    }
                    try {
                        fs.rmSync(outputFilePath)
                    } catch (error) {
                        
                    }
                    let fsResult = fs.writeFileSync(outputFilePath, result)
                    resolve(fsResult)
                }
            )
        }
        return new Promise(bundle)
    },
}