// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require map.js
//= require_tree .



$(document).ready(function(){
$('#menuToggle').hide()	

	$('#navTop').click(function(){
		$('#menuToggle').slideToggle()
	})

})

// $(document).ready(function(){
// $('#address-map').hide()	

// 	$('#show-map').click(function(){
// 		$('#address-map').slideToggle()
// 	})

// })




x = 0;
$(document).ready(function(){
    $("storelocator-panel").scroll(function(){
        $("span").text( x+= 1);
    });
});


x = 0;
$(document).ready(function(){
    $("scroll").scroll(function(){
        $("span").text( x+= 1);
    });
});

// $(document).ready(function() {
//     $(".fancy_title").lettering();
//   });