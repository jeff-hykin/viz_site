let {column, shadow} = require("./styles")
module.exports = function ({size="1rem", children, ...properties}) {
    return <div style={`
        min-width: ${size};
        ${column}
        min-height: ${size};
    `} {...properties}>
        {children}
    </div>
}