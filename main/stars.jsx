// Twinkling Night Sky by Sharna converted to regular JS by Jeff Hykin
const anime = require("animejs").default
// const Letterize = require("letterizejs").default

const numberOfStars = 60
let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

var sky, regularStarContainer, shootingStarContainer, regularStars, shootingStars

const randomRadius = () => {
    return (Math.random() * 0.7 + 0.6)/7
}


// export a container with stars
module.exports = sky = <div>
    {
        // TODO: check to make sure it works okay with rectangle-shaped containers
        regularStarContainer = <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">{
            regularStars = [...Array(numberOfStars)].map(
                (x, y) => <circle cx={Math.random()*100} cy={Math.random()*100} r={randomRadius()} stroke="none" strokeWidth="0" fill="white" key={y} class="star" style={`opacity: 1;`} />
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
                        randomYPosition={Math.random()}
                        randomXPosition={Math.random()}
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

// occasionally update the location of the stars (because the shape of the container may change)
setInterval(() => {
    if (shootingStarContainer.clientWidth) {
        for (const each of shootingStars) {
            each.style.left = each.randomXPosition * shootingStarContainer.clientWidth
            each.style.top = each.randomYPosition * shootingStarContainer.clientHeight
        }
    }
}, 250)

    // background: linear-gradient(to right, #ff47a1 0%, #ff9f4d 100%);
    // background: rgb(2,0,36);
    // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 56%, rgba(8,23,130,1) 58%, rgba(0,212,255,1) 100%);
sky.style = `
    background: rgb(0,61,126);
    background: radial-gradient(circle at 100%, rgba(0,61,126,1) 0%, rgba(2,0,36,1) 100%);
    width: 50rem;
    height: 50rem;
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
    transform: scale(-1, 1) rotate(60deg) translateY(-0%) translateX(-50%);
    top: 0;
    left: 0;
    transform-box: fill-box;
    transform-origin: top left;
`

    // width: 100%;
    // height: 100%;
    // position: absolute;
    // overflow: hidden;
// regularStarContainer.style = `
//     margin: 0;
//     padding: 0;
// `

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