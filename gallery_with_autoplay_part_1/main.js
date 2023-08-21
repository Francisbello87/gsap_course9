gsap.set(".wrapper", { autoAlpha: 1 });

let select = (selector) => {
  return document.querySelector(selector);
};

const nextBtn = select("#next_btn");
const prevBtn = select("#prev_btn");
const autoPlaytBtn = select("#autoPlay_btn");
let autoPlay = true;

const progressTimer = gsap.from(".bar", {
  scaleX: 0,
  transformOrigin: "0% 50%",
  duration: 3,
  onComplete: () => tl.play()
}).pause();

const tl = gsap.timeline({ defaults: { duration: 0.3, opacity: 0 } });

tl.add("start")
  .from(".slide1", {})
  .addPause("+=0", checkAutoPlay)
  .to(".slide1", { opacity: 0 })

  .from(".slide2", {}, "slide2")
  .addPause("+=0", checkAutoPlay)
  .to(".slide2", { opacity: 0 })

  .from(".slide3", {})
  .addPause("+=0", checkAutoPlay)
  .to(".slide3", { opacity: 0 })

  .from(".slide4", {});

function checkAutoPlay() {
  // console.log('autoPlay', autoPlay);
  if (autoPlay) {
    // tl.play()
    // gsap.delayedCall(3, () => tl.play());
    progressTimer.restart()
  }
}

nextBtn.addEventListener("click", () => {
  if (tl.progress() == 1) {
    tl.play(0);
  } else {
    tl.play();
  }
});

prevBtn.addEventListener("click", () => {
  if (tl.previousLabel() != "start") {
    tl.reverse();
  }
});

autoPlaytBtn.addEventListener("change", (event) => {
  console.log("changed");
});
