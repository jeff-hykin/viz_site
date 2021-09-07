const fs = require("fs")
const path = require("path")
const process = require("process")
const inline = require("web-resource-inliner")

module.exports = {
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
                    console.debug(`outputFilePath is:`,outputFilePath)
                    let fsResult = fs.writeFileSync(outputFilePath, result)
                    resolve(fsResult)
                }
            )
        }
        setInterval(() => {
            bundle(()=>0,(error)=>{
                console.error("Error when bundling into single HTML file:", error)
            })
        }, 1000)
        return new Promise(bundle)
    },
}