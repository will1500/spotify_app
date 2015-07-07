$(function() {

	var $spotifySearch =$('#spotifySearch');
	var $track = $('#track');
	var $results = $('#results');
	var all = [];
	var Song = function(name,artist) {
			this.name =name;
			this.artist=artist;
    

    Song.prototype.save = function() {
    	Song.all.push(this);
    	console.log(Song.all);
    }};
    Song.prototype.render = function() {

    	var $song = $(underScoreTemplate(this));
    	this.index = ToDo.all.indexof(this);
		Song.attr('data-index', this.index);
		results.append($Song);
    };
    // var underScoreTemplate = _.template($('#underScoreTemplate').html());
	
	$spotifySearch.on('submit', function(event) {
		event.preventDefault();
		console.log('form submit!');

		$.get( 
			'https://api.spotify.com/v1/search?q=' + $track.val() + '&type=track',
			function(data) {
				console.log(data)
				var getInput = $('#track').val();
		
     
  
		
});
		});
		
		
		  
		
	});




