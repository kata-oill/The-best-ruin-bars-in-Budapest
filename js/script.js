'use strict';
// Google map

var infos = document.getElementById('map-info');

window.initMap = function() {
  // The locations
 	var simplaKert = {lat: 47.497023, lng: 19.063366};
 	var mazelTov = {lat: 47.500510, lng: 19.065503};
 	var redRuin = {lat: 47.491962, lng: 19.056170};
 	var fogasHaz = {lat: 47.500520, lng: 19.065355};
 	var durerKert = {lat: 47.509997, lng: 19.090048};

  // The map, centered at Simpla Kert
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: simplaKert});

  // The marker, positioned at Simpla Kert
  var marker = new google.maps.Marker({position: simplaKert, map: map});
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
