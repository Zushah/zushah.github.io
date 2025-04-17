const imgs = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/600px-Python_logo_01.svg.png?20210503135843",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Opengl-logo.svg/960px-Opengl-logo.svg.png?20230524144527"
];

const imageHeight = 120;
const gap = 30;
let carouselWindow = imgs.slice(0, 5);
let nextIndex = 5;
const track = document.querySelector(".carousel-track");

const renderTrack = () => {
    track.innerHTML = "";
    carouselWindow.forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("carousel-item");
        if (i === 2) {
            img.classList.add("focused");
        }
        track.appendChild(img);
    });
    track.style.transition = "none";
    track.style.transform = `translateY(-${(imageHeight + gap) * 1}px)`;
}
renderTrack();

const updateTrack = () => {
    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateY(-${(imageHeight + gap) * 2}px)`;
}
track.addEventListener("transitionend", () => {
    carouselWindow.shift();
    carouselWindow.push(imgs[nextIndex]);
    nextIndex = (nextIndex + 1) % imgs.length;
    renderTrack();
});
setInterval(updateTrack, 2000);
