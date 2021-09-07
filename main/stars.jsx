// Twinkling Night Sky by Sharna converted to regular JS by Jeff Hykin
const anime = require("animejs").default
// const Letterize = require("letterizejs").default

const numberOfStars = 60
const starScalingFactor = 115 // its based off the width of the parent container 


// 
// 
// regular stars
// 
// 
// TODO: check to make sure it works okay with rectangle-shaped containers
let regularStarContainer = <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    {[...Array(numberOfStars)].map(
        (x, y) => <circle cx={Math.random()*100} cy={Math.random()*100} randomRadiusSize={Math.random()} stroke="none" strokeWidth="0" fill="white" key={y} class="star" style={`opacity: 1;`} />
    )}
</svg>
// 
// animate the regular stars
// 
anime({
    targets: regularStarContainer.children,
    opacity: [
        {
            duration: 700,
            value: "0",
        },
        {
            duration: 700,
            value: "1",
        },
    ],
    easing: "linear",
    loop: true,
    delay: (el, i) => 50 * i,
})
// 
// update radius when element size changes
// 
const computeRadius = (randomRadiusSize, clientWidth=1000) => {
    return (randomRadiusSize * 0.7 + 0.6)/(clientWidth/starScalingFactor)
}
let previousRegularStarContainerWidth = null
setInterval(() => {
    // if the width of the parent changed pixel value
    if (regularStarContainer.clientWidth && (regularStarContainer.clientWidth != previousRegularStarContainerWidth)) {
        previousRegularStarContainerWidth = regularStarContainer.clientWidth
        // update the radius
        for (const each of regularStarContainer.children) {
            each.setAttribute("r", computeRadius(each.randomRadiusSize, regularStarContainer.clientWidth))
        }
    }
}, 250)




// 
// 
// shooting stars
// 
// 
let shootingStarContainer = <div>
    <style>
        {`
            .wish {
                height: 2px;
                top: 300px;
                width: 100px;
                margin: 0;
                opacity: 0;
                padding: 0;
                background-color: white;
                position: absolute;
                background: linear-gradient(-45deg, white, rgba(0, 0, 255, 0));
                filter: drop-shadow(0 0 6px white);
                overflow: hidden;
            }
        `}
    </style>
    {[...Array(numberOfStars)].map(
        (x, y) =>
            <div
                key={y}
                class="wish"
                randomYPosition={Math.random()}
                randomXPosition={Math.random()}
            />
    )}
</div>
shootingStarContainer.style = `
    margin: 0px;
    padding: 0px;
    width: 200%;
    height: 200%;
    position: absolute;
    overflow: hidden;
    transform: scale(-1, 1) rotate(60deg) translateY(-0%) translateX(-50%);
    top: 0;
    left: 0;
    transform-box: fill-box;
    transform-origin: top left;
`
// 
// update location when width of container changes
// 
let previousShootingStarContainerWidth = null
setInterval(() => {
    if (shootingStarContainer.clientWidth && (shootingStarContainer.clientWidth != previousShootingStarContainerWidth)) {
        previousShootingStarContainerWidth = shootingStarContainer.clientWidth
        for (const each of shootingStarContainer.children) {
            each.style.left = each.randomXPosition * shootingStarContainer.clientWidth
            each.style.top = each.randomYPosition * shootingStarContainer.clientHeight
        }
    }
}, 250)

// 
// animate the shooting stars
// 
anime({
    targets: shootingStarContainer.children,
    easing: "linear",
    loop: true,
    delay: (el, i) => 1000 * i,
    opacity: [
        {
            duration: 700,
            value: "1",
        },
    ],
    width: [
        {
            value: "150px",
        },
        {
            value: "0px",
        },
    ],
    translateX: 350,
})




// 
// 
// sky
// 
// 
let sky = module.exports = <div>
    {regularStarContainer}
    {shootingStarContainer}
</div>
sky.style = `
    background: rgb(0,61,126);
    background: radial-gradient(circle at 100%, rgba(0,61,126,1) 0%, rgba(2,0,36,1) 100%);
    width: 100%;
    height: 100%;
    position: relative;
`