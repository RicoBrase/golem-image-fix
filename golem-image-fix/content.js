var images = document.getElementsByClassName("golem-data-afterload");
for (var i = 0; i < images.length; i++){
	images[i].src = images[i].getAttribute("data-src");
}