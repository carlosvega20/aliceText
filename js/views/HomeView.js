define([
  'jquery',
  'underscore',
  'backbone',
  'views/AliceWordsView'
], function($, _, Backbone, AliceWordsView){
	
	var wordsView = new AliceWordsView();
	
	var HomeView = Backbone.View.extend({
	    el: $('#page'),
		events: {
	      "keypress #searchBox"  : "updateOnEnter"
	    },
	    
	    updateOnEnter: function(e) {
			var a = [];
			var k = e.which;
			
			for (i = 48; i < 58; i++)
			    a.push(i);
			
			//Avoiding letters and other symbols also the number "1" because there is no condition for it
			if (!(a.indexOf(k)>=0) || e.keyCode == 49) {
				e.preventDefault();
			}
			    
			//On Enter then triggers "newCode" event and send the input value on it
			if (e.keyCode == 13) {
				wordsView.trigger("newCode", e.target.value)
				e.preventDefault();
			}
	    },
	    
		render: function() {
			
			//Show the matching words
			wordsView.render();
		    return this;
		}
		
	});
	
	return HomeView;
  
});
