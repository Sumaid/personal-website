function playpause(btn){
  var vid= document.getElementById("bgvid");
  var logo= document.getElementById("imn");
  if (vid.paused){
    vid.play();
    logo.src = "./images/pause.png";
    document.getElementById("myr").className = "kids view view-first";
    document.getElementById("joff").className = "kids view view-first";
    document.getElementById("tom").className = "kids view view-first";
  }

  else {
    vid.pause();
    logo.src = "./images/play.png";
document.getElementById("myr").className = "myClass view view-first";
document.getElementById("joff").className = "myClass view view-first";
document.getElementById("tom").className = "myClass view view-first";
}
}
