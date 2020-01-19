'use strict';
// Google map

var infos = document.getElementById('map-info');

window.initMap = function() {
  // The locations
 	var uluru = {lat: -25.344, lng: 131.036};
 	var coords2 = {lat: -25.363, lng: 134.044};
 	var coords3 = {lat: -25.363, lng: 137.044};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

// Mustache template

var templateSlide = document.getElementById('template-slide-carousel').innerHTML;

Mustache.parse(templateSlide);

var generateSlide = '';

for(var i = 0; i < barList.length; i++){
		console.log(barList);
		generateSlide += Mustache.render(templateSlide, barList[i]);
	}

var results = document.querySelector('.content-container');

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
