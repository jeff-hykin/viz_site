let {column, shadow} = require("./styles")
module.exports = function ({children, width, ...properties}) {
    return <div style={`
        ${!width?"":`width: ${width};`}
        background: white;
        background-color: #fff;
        -webkit-transition: -webkit-box-shadow .25s;
        transition: -webkit-box-shadow .25s;
        transition: box-shadow .25s;
        transition: box-shadow .25s, -webkit-box-shadow .25s;
        border-radius: 2px;
        ${shadow}
        ${column}
    `} {...properties}>
        {children}
    </div>
}