gsap.set(".wrapper", { autoAlpha: 1 });

let select = (selector) => {
  return document.querySelector(selector);
};

const nextBtn = select("#next_btn");
const prevBtn = select("#prev_btn");
const autoPlaytBtn = select("#autoPlay_btn");
let autoPlay = true;

const slides = gsap.utils.toArray(".slide");
const numSlides = slides.length;
let slideIndex = 0;
let currentSlide;
console.log(numSlides);

function showSlide(index) {
  if (currentSlide) {
    gsap.to(currentSlide, { opacity: 0 });
  }
  currentSlide = slides[index];
  gsap.to(currentSlide, { opacity: 1 });
}

showSlide(0);

nextBtn.addEventListener("click", () => {
nextSlide()
});

prevBtn.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

const delay = gsap.delayedCall(2, nextSlide)

function nextSlide() {
  if (slideIndex < numSlides - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide(slideIndex)
  if(autoPlay){
    delay.restart(true)
  }
}

// const progressTimer = gsap
//   .from(".bar", {
//     scaleX: 0,
//     transformOrigin: "0% 50%",
//     duration: 3,
//     onComplete: () => {
//       tl.play();
//       gsap.to(".bar", { opacity: 0, duration: 0.2 });
//     },
//   })
//   .pause();

// const tl = gsap.timeline({
//   defaults: { duration: 1, opacity: 0 },
//   onComplete: stopAutoplay,
// });

// tl.add("start")
//   .from(".slide1", {})
//   .addPause("+=0", checkAutoPlay)
//   .to(".slide1", { opacity: 0 })

//   .from(".slide2", {}, "slide2")
//   .addPause("+=0", checkAutoPlay)
//   .to(".slide2", { opacity: 0 })

//   .from(".slide3", {})
//   .addPause("+=0", checkAutoPlay)
//   .to(".slide3", { opacity: 0 })

//   .from(".slide4", {});

// function checkAutoPlay() {
//   // console.log('autoPlay', autoPlay);
//   if (autoPlay) {
//     // tl.play()
//     // gsap.delayedCall(3, () => tl.play());
//     progressTimer.restart();
//     gsap.to(".bar", { opacity: 1, duration: 0.2 });
//   }
// }

// function stopAutoplay() {
//   autoPlaytBtn.checked = false;
//   autoPlaytBtn.dispatchEvent(new Event("change"));
// }

// nextBtn.addEventListener("click", () => {
//   if (tl.progress() == 1) {
//     tl.play(0);
//   } else {
//     tl.play();
//   }
//   stopAutoplay()
// });

// prevBtn.addEventListener("click", () => {
//   if (tl.previousLabel() != "start") {
//     tl.reverse();
//   }
//   stopAutoplay()
// });

// autoPlaytBtn.addEventListener("change", (e) => {
//   // console.log("changed");
//   if (e.currentTarget.checked) {
//     if (tl.progress() == 1) {
//       tl.restart();
//     } else {
//       tl.play(tl.time() + 0.0001);
//     }
//     autoPlay = true;
//   } else {
//     progressTimer.pause()
//     gsap.to('.bar', {opacity:0, duration:0.2})
//     autoPlay = false;
//   }
// });
