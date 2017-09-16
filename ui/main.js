console.log('Loaded!');

//Change the text after the page is loaded
var element = document.getElementById('main-content');
element.innerHTML = '<body><p>This is the text which was changed via javascript</p></body>';

//Move the image after it's loaded
var image = document.getElementById('logo');
var marginLeft = 0;
image.onclick = function(){
  var interval = setInterval(moveRight, 50);
};

function moveRight(){
marginLeft = marginLeft +5;
image.style.marginLeft = marginLeft + 'px';
}