// targeting elements
const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// async function, prompt the user to select media stream and then pass that
// to our video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // then
    videoElement.srcObject = mediaStream;
    // then
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //   write the catch here
    console.log("Whoops, erros here!", error);
  }
};

button.addEventListener("click", async () => {
  // disable the button when we click
  button.disabled = true;
  //   start picture in picture
  await videoElement.requestPictureInPicture();
  //   reset the button
  button.disabled = false;
});

// onLoad
selectMediaStream();
