const TextToSVG = require('text-to-svg')
const textToSVG = TextToSVG.loadSync()

TextToSVG.load('/fonts/Noto-Sans.otf', (err, textToSVG) => {
    const svg = textToSVG.getSVG('hello')
    console.log(svg)
})

module.exports = function({fontSize=72, x=0, y=0, anchor='center', attributes, children, ...options}) {
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