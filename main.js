function setWatchImage(imageFileName) {
  var imgElement = document.getElementById("watchScreen"); 
  imgElement.src = imageFileName;  
}

var datetime = new Date().toLocaleTimeString();
console.log(datetime); 
document.getElementById('time').textContent = datetime;