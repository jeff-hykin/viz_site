let starContainer = require("./main/stars")
document.body = <body>
    {/* Create a background */}
    <div style={`width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: -1;`}>
        {starContainer}
    </div>
    {/* Add the rest of the application */}
    <span style="color: whitesmoke; margin-top: 5rem;">
        Hello World!
    </span>
</body>

document.body.style = `
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 30pt; 
    font-family: sans-serif;
`