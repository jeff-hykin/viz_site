let {column, shadow} = require("./styles")
module.exports = function ({size="1rem", width, height, children, ...properties}) {
    return <div style={`
        min-width: ${width||size};
        ${column}
        min-height: ${height||size};
    `} {...properties}>
        {children}
    </div>
}