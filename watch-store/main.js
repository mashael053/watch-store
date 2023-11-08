function setWatchImage(imageFileName) {
  var imgElement = document.getElementById("watchScreen");  
  imgElement.src = imageFileName;   
}

function updateTime() {
  var currentTime = new Date(); 
  var hours = currentTime.getHours(); 
  var minutes = currentTime.getMinutes(); 
  var seconds = currentTime.getSeconds(); 

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").textContent = timeString;
}
