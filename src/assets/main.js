var Badges = {};

$(document).ready(function() {
	$.ajax({
	    url: 'https://www.codeschool.com/users/Anubiella.json',
	    dataType: 'jsonp',
	    success: function(response) {	      
	      Badges = (response.courses.completed);
	      for (var i=0;i<Badges.length;i++){
	      	$('#badges').append('<div class="course"><h3>'+Badges[i].title+'</h3><img src='+Badges[i].badge+'><a href='+Badges[i].url+' target="_blank" class="btn btn-primary">See Course</a></div>');
	      }	
	    }
	});
});