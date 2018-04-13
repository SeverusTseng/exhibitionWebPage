

function showImage(imgName, imgText) {
	var curImage = document.getElementById('currentImg');
	var textDiv = document.getElementById('rightText');			
				
	curImage.src = imgName;
	curImage.alt = imgName;
	curImage.title = imgName;
	textDiv.innerHTML = imgText;
}