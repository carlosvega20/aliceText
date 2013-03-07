define([
  'jquery',
  'underscore',
  'backbone',
  'models/AliceWordsModel',
  'text!books/alice.txt'
], function($, _, Backbone, AliceWordsModel, book){
  var AliceWordsCollection = Backbone.Collection.extend({
        model: AliceWordsModel,
        parse: function(resp) {
	        var data = [];
	        //Cleaning the document
	        //As the conditions doesnot have numbers or symbols, I will avoid those in the regular expression.
	        var patt=/[^a-zA-Z]/g;
	        patt.compile(patt); 
	        resp=resp.toLowerCase().replace(patt," ");
	        //each word in arrays
	        var words = resp.split(" ");
	        
	        //My solution for remove empty arrays, If you find a better way to get rid of those, please suggest or implement a new code. ("It's possible to UnderscoreJS has a better solution implemented yet")
	        Array.prototype.clean = function(deleteValue) {
			  for (var i = 0; i < this.length; i++) {
			    if (this[i] == deleteValue) {         
			      this.splice(i, 1);
			      i--;
			    }
			  }
			  return this;
			};
			
			words.clean("").clean("'");
	        // 
	        
	        for (var i=0; i<words.length; i++) {
	                data.push(new AliceWordsModel({
	                    word: $.trim(words[i])
	                }));
	        }
	      
	        return data;
	    },
        // Override .sync 
        sync: function(method, model, options) {
            // When you do a .fetch, method is 'read'
            if (method === 'read') {
                var me = this;
                //overrided with content from AMD
                options.success(me, book, options);
            }
            else {
                // Call the default sync method for other sync method
                Backbone.Collection.prototype.sync.apply(this, arguments);
            }
        }
    });
 
  return AliceWordsCollection;
});