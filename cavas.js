(function () {
  function playMusic() {
    var myAudio = document.getElementById("playAudio");

    myAudio.play();
    //Not playing...maybe paused, stopped or never played.
  }
  var body = document.getElementsByTagName("body")[0];
  body.addEventListener("click", function (ev) {
    playMusic();
  });
})("sweaverD.com");
