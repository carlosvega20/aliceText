define([
  'underscore',
  'backbone'
], function(_, Backbone) {
	
	var AliceWordsModel = Backbone.Model.extend({
        defaults: function() {
            return {
                word: null
            };
        }
    });

  return AliceWordsModel;

});