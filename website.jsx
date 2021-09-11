let starContainer = require("./main/stars")
let campfire = require("./main/campfire")
let howdy = require("./main/howdy")

document.body = <body>
    {/* Create a background */}
    <div style={`width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: -1;`}>
        {starContainer}
    </div>
    {/* Add the rest of the application */}
    <span style="color: whitesmoke; margin-top: 5rem;">
        Hello World!
    </span>
    {howdy}
    <div style="position: fixed; bottom: 0; left: 0; width: 100vw; display: flex; flex-direction: column; align-items: center; justify-content: flex-end;" >
        {campfire}
    </div>
</body>

document.body.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 30pt; 
    font-family: sans-serif;
`