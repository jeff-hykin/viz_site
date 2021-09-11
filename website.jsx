require("./main/globals.sass")
const starContainer = require("./main/stars")
const campfire = require("./main/campfire")
const Card = require("./main/card")
const Spacer = require("./main/spacer")
const howdy = require("./main/howdy")
const {columnObj} = require("./main/styles")

document.body = <body>
    {/* Create a background */}
    <div style={`width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: -1;`}>
        {starContainer}
    </div>
    
    <div id="profile">
        <style>{`
            #profile {
                position: fixed;
                left: 5rem;
                top: 8rem;
                width: 500px;
                overflow: hidden;
            }
        `}
        </style>
        <div style={{backgroundColor:"#500000", width: "100%", ...columnObj, margin: "0" }}>
            <Spacer />
            {howdy}
            <Spacer />
        </div>
        <div style={{width: "100%", height: "0.2rem", background: "white"}} />
        <Card>
            {/* <Spacer /> */}
            <img style="width: 100%" src="https://user-images.githubusercontent.com/17692058/132935289-ede56d87-d623-46a2-86b1-22925edcb9bb.jpg"/>
            <div style={{width: "100%", height: "0.2rem", background: "white"}} />
            <div style={{background:"whitesmoke", width:"100%", padding: "2rem", fontSize: "12.5pt", boxSizing: "border-box", color: "darkslategray", paddingTop: "1.5rem", paddingBottom: "1.5rem"}}>
                <span>
                    I've been interested in visualization as long as I've been a programmer. I'm always looking for better ways to improve my illustrations, and this class seemed like a great opportunity to systemically approach the topic.
                </span>
            </div>
        </Card>
        
        <div style={{position: "fixed", left: "680px", top: "0", ...columnObj, alignItems: "flex-start", overflow: "scroll"}}>
            <Spacer size="8rem"></Spacer>
            <Card width="50vw">
                <div style={{padding: "2rem", boxSizing: "border-box", width: "100%",}}>
                    Test
                </div>
            </Card>
        </div>
        
    </div>
    
    
    {/* <div style="position: fixed; bottom: 0; left: 0; width: 100vw; display: flex; flex-direction: column; align-items: center; justify-content: flex-end;" >
        {campfire}
    </div> */}
    
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