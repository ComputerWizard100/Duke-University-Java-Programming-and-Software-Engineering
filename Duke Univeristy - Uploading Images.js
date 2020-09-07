function upload(){
  var fileinput = document.getElementById("img");
var filename = fileinput.value;
var image = new SimpleImage(fileinput);
var canvas = document.getElementById("can1");
image.drawTo(canvas);
}