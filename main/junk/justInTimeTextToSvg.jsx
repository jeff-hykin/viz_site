const TextToSVG = require('text-to-svg')
const textToSVG = TextToSVG.loadSync()

module.exports = function({fontSize=72, x=0, y=0, anchor='top', attributes, children, ...options}) {
    const text = [...children].map(each=>(each.textContent||"").trim()).join("\n")
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
    const svgText = textToSVG.getSVG(text, options)
    const element = document.createElement("div")
    element.innerHTML = svgText
    return element.children[0]
}

module.exports = function({text, fontSize=72, x=0, y=0, anchor='center', attributes, ...options}) {
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
}