'use strict';

// Mustache template

var templateSlide = document.getElementById('template-slide-carousel').innerHTML;

Mustache.parse(templateSlide);

var generateSlide = '';

for(var i = 0; i < barList.length; i++){
		console.log(barList);
		generateSlide += Mustache.render(templateSlide, barList[i]);
	}

var results = document.querySelector('.carousel');


results.insertAdjacentHTML('beforeend', generateSlide);

// Flickity carousel

var flkty = new Flickity( '.carousel', {
  hash: true,
  pageDots: false,
  groupCells: true,
});


var button = document.querySelector('.button');

button.addEventListener('click', function (index){
	var index = 0;
	flkty.selectCell( index );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
