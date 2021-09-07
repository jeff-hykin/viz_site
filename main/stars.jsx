// Twinkling Night Sky by Sharna converted to regular JS by Jeff Hykin
const anime = require("animejs").default
// const Letterize = require("letterizejs").default

const numberOfStars = 60


// 
// 
// regular stars
// 
// 
const randomRadius = () => {
    return (Math.random() * 0.7 + 0.6)/7
}
// TODO: check to make sure it works okay with rectangle-shaped containers
let regularStarContainer = <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    {[...Array(numberOfStars)].map(
        (x, y) => <circle cx={Math.random()*100} cy={Math.random()*100} r={randomRadius()} stroke="none" strokeWidth="0" fill="white" key={y} class="star" style={`opacity: 1;`} />
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
// occasionally update the location of the stars (because the shape of the container may change)
// 
setInterval(() => {
    if (shootingStarContainer.clientWidth) {
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
    width: 50rem;
    height: 50rem;
    min-width: 50rem;
    min-height: 50rem;
    position: relative;
`