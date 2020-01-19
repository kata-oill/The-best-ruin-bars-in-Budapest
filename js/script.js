'use strict';
// Google map

var infos = document.getElementById('map-info');

window.initMap = function() {
	var simplaKert = {lat: 47.497023, lng: 19.063366};

 	// The map, centered at Simpla Kert
 	var map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: simplaKert});

 	// Add markers to the map
	for(let i = 0; i < barList.length; i++){
		var marker = new google.maps.Marker({position: barList[i].coords, map: map});
	}
}

// Mustache template

var templateSlide = document.getElementById('template-slide-carousel').innerHTML;

Mustache.parse(templateSlide);

var generateSlide = '';

for(var i = 0; i < barList.length; i++){
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
