// Twinkling Night Sky by Sharna converted to regular JS by Jeff Hykin
const anime = require("animejs").default
// const Letterize = require("letterizejs").default

const numberOfStars = 60
let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

const randomRadius = () => {
        return Math.random() * 0.7 + 0.6
}
const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString()
}
const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString()
}


// export a container with stars
var sky, regularStarContainer, shootingStarContainer, regularStars, shootingStars
module.exports = sky = <div>
    {
        regularStarContainer = <svg>{
            regularStars = window.regularStars = [...Array(numberOfStars)].map(
                (x, y) => <circle cx={getRandomX()} cy={getRandomY()} r={randomRadius()} stroke="none" strokeWidth="0" fill="white" key={y} class="star" />
            )
        }</svg>
    }
    {
        shootingStarContainer = <div>{
            shootingStars = [...Array(numberOfStars)].map(
                (x, y) =>
                    <div
                        key={y}
                        class="wish"
                        style={`
                            left: ${getRandomY()}px;
                            top: ${getRandomX()}px;
                        `}
                    />
            )
        }</div>
    }
    <style>{`
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
    `}</style>
</div>

    // background: linear-gradient(to right, #ff47a1 0%, #ff9f4d 100%);
    // background: rgb(2,0,36);
    // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 56%, rgba(8,23,130,1) 58%, rgba(0,212,255,1) 100%);
sky.style = `
    background: rgb(0,61,126);
    background: radial-gradient(circle at 100%, rgba(0,61,126,1) 0%, rgba(2,0,36,1) 100%);
    min-width: 50rem;
    min-height: 50rem;
    position: relative;
`

shootingStarContainer.style = `
    margin: 0px;
    padding: 0px;
    width: 200%;
    height: 200%;
    position: absolute;
    overflow: hidden;
    transform: translateX(25%) translateY(50%) rotate(120deg);
    transform-box: fill-box;
    transform-origin: top;
`

regularStarContainer.style = `
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    margin: 0;
    padding: 0;
`

// animate the regular stars
anime({
    targets: regularStars,
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

// animate the shooting stars
anime({
    targets: shootingStars,
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