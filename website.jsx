require("./main/globals.sass")
require("css-baseline/css/2")
const starContainer = require("./main/stars")
const campfire = require("./main/campfire")
const Card = require("./main/card")
const Spacer = require("./main/spacer")
const howdy = require("./main/howdy")
const {columnObj, rowObj} = require("./main/styles")

const ContentCard = ({children})=>[
    <Spacer size="1.5rem"></Spacer>,
    <Card width="50vw">
        <div style={{padding: "2rem", boxSizing: "border-box", width: "100%", fontSize: "15pt", color: "hsl(180, 0%, 21%)"}}>
            {children}
        </div>
    </Card>
]

document.body = <body>
    <style>{`
        h3 {
            font-size: 27pt;
        }
    `}</style>
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
        {/* 
            HOWDY
         */}
        <div style={{backgroundColor:"#500000", width: "100%", ...columnObj, margin: "0" }}>
            <Spacer />
            {howdy}
            <Spacer />
        </div>
        <div style={{width: "100%", height: "0.2rem", background: "white"}} />
        <Card>
            {/* <Spacer /> */}
            <img style="width: 100%; height: 488px;" src="https://user-images.githubusercontent.com/17692058/132935289-ede56d87-d623-46a2-86b1-22925edcb9bb.jpg"/>
            <div style={{width: "100%", height: "0.2rem", background: "white"}} />
            <div style={{background:"whitesmoke", width:"100%", padding: "2rem", fontSize: "12.5pt", boxSizing: "border-box", color: "hsl(180, 0%, 21%)", paddingTop: "1.5rem", paddingBottom: "1.5rem"}}>
                <h3>Jeff Hykin</h3>
                <Spacer></Spacer>
                <span>
                    I've been interested in visualization as long as I've been a programmer. I'm always looking for better ways to improve my illustrations, and this class seemed like a great opportunity to systemically approach the topic.
                </span>
            </div>
        </Card>
        {/* 
        
            list
            
         */}
        <div style={{position: "fixed", left: "680px", top: "0", ...columnObj, alignItems: "flex-start", justifyContent: "flex-start", overflow: "scroll", maxHeight: "100vh", scrollbarWidth: "none"}}>
            <Spacer size="6.5rem"></Spacer>
            
            <ContentCard>
                <h3>Great Visualizations</h3>
                <Spacer/>
                <div style={{width:"100%", borderTop: "2px gray solid"}}></div>
                <Spacer/>
                <span>
                    While there's many I like, I'd have to say my favorite is a tool called <a href="https://github.com/FredrikNoren/ungit">Ungit</a>
                    <Spacer/>
                    <div style={{...rowObj}}>
                        <img style="width: 30%" src="https://user-images.githubusercontent.com/17692058/132936366-0b92c052-b350-420e-be97-b9532d0d7d98.png" alt="" srcset="" />
                        <img style="object-fit: cover; width: 70%" src="https://user-images.githubusercontent.com/17692058/132936393-ce33424c-6410-4d22-8a4f-8bca703db9a7.png" alt="" srcset="" />
                    </div>
                    <Spacer/>
                    What makes it so great is that it allows for infinite 2D panning and highly interactive exploration of <code>git</code>. Git has this elegant graph based model of code, but without a tool like ungit it is completely stuck in your head, hidden behind the text in the terminal. <br/>
                    Any time 
                </span>
            </ContentCard>
            
            <ContentCard>
                <h3>Terrible Visualizations</h3>
                <Spacer/>
                <div style={{width:"100%", borderTop: "2px gray solid"}}></div>
                <Spacer/>
                <span>
                    Similarly, while there are many I find horrifying, there is one that immediately comes to mind. Allow me to introduce my bank, Wells Fargo. Sometimes the worst visualization is simply no visualization.
                    <Spacer/>
                    <img style="object-fit: cover; width: 100%; max-width: 70rem;" src="https://user-images.githubusercontent.com/17692058/132937010-11dd9cb7-0b7a-4041-9dde-c4efa464da53.png" alt="" srcset="" />
                    {/* <div style={{...rowObj}}>
                    </div> */}
                        {/* <img style="width: 30%" src="https://user-images.githubusercontent.com/17692058/132936366-0b92c052-b350-420e-be97-b9532d0d7d98.png" alt="" srcset="" /> */}
                    <Spacer/>
                    Whats income? Whats an expense? Are their any trends? Any clusters? We can't tell.
                    <Spacer />
                    Not only is there no average, no future projections, no indication of up/downward trends, but there is not so much as a 1% change in hue between a 1¢ charge and a $6,000 charge. There isn't even a color distiction between cashflow out or cashflow in. <br/>
                    <Spacer />
                    This format conveys the absolute rock-bottom minimum amount of insight. No format could be less helpful without quite literally obfuscating the data itself.
                </span>
            </ContentCard>
            
            <Spacer size="6.5rem"></Spacer>
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