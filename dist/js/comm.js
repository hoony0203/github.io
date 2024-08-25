const imageWrap = document.querySelector(".imges-wrap");
const video = document.querySelector(".imges-wrap > video");

let videoStatusDiv = document.createElement("div");
let videoStatusIcon = document.createElement("i");
videoStatusDiv.classList.add("video-status");
videoStatusDiv.append(videoStatusIcon);

let playCount = 0;

let playClass = ["fa-solid", "fa-play", "fa-3x", "playBtn"];
let pauseClass = ["fa-solid", "fa-pause", "fa-3x", "pauseBtn"];

video.addEventListener("play", (e) => {
  if (playCount == 0) {
    playCount += 1;
  } else {
    playClass.map((className) => {
      videoStatusIcon.classList.add(className);
    });
    imageWrap.append(videoStatusDiv);

    setTimeout(() => {
      videoStatusDiv.style.opacity = 0;
    }, 100);
  }
});

video.addEventListener("pause", (e) => {
  videoStatusDiv.style.opacity = 1;
  if (playCount != 0) {
    playClass.map((className) => {
      videoStatusIcon.classList.remove(className);
    });
  }
  pauseClass.map((className) => {
    videoStatusIcon.classList.add(className);
  });
  imageWrap.append(videoStatusDiv);
});
