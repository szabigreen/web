$(document).ready(function(){
	'use strict';
	/* ===============================
		INSTAFEED (Instagram Gallery)
	================================*/
	var feed = new Instafeed({
        get: 'user', // Get photos based on tag
        accessToken: '1695826387.ba4c844.bac1962aa65f4e8fbff6c251e7954197', // Access Token, generate yours here http://instagramwordpress.rafsegat.com/docs/get-access-token/
        userId: '1695826387', // User Id (The first row from access token, before the first dot (.) sign)
        template: '<li class="image-large"><a href="{{link}}" target="blank"><img src="{{image}}" class="image-gallery-item image-left full-width" /></a></li>',
        limit: 6, // Show only 6 photos
        resolution: 'standard_resolution',
        sortBy: 'most-liked'
    });
    feed.run();

});