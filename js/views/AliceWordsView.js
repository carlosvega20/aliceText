define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/AliceWordsModel',
  'collections/AliceWordsCollection',
  'text!templates/wordsTemplate.html'
], function($, _, Backbone, Handlebars, AliceWordsModel, AliceWordsCollection, wordsTemplate){

	var AliceWords = new AliceWordsCollection();
	
	var WordsView = Backbone.View.extend({
	    el: $('#listOfWords'),
	    words:[],//Array with all the words in the text
		initialize: function() {
			var self = this;
			AliceWords.fetch({
				success: function() {
					//Lets initialize and keep all the words in the array
				    _.each(AliceWords.models, function(model) {
						self.words.push( model.get('word'));
					});
				}
			});
			
			this.listenTo(this, 'newCode', this.render);
		},
		render: function(code) {
			if(code){
				
				var conditions = this.findCombinations(code);
				var allCases = this.allPossibleCases(conditions);
				var matchCase = [];
				var self=this;
				_.each(allCases, function(theCase){
					matchCase = self.findMatchingWords(theCase);
				});
				
				//Templating with handlebars
				var template = Handlebars.compile(wordsTemplate);
				this.$el.html( template({words:matchCase}) ); 
			}
			
		    return this;
		},
		findMatchingWords: function(letters){
			return _.reject(this.words, function(word){ 
				return !word.match(new RegExp( '^'+letters));
			});
		},
		findCombinations:function(numbers){
			var self = this;
			return _.map(numbers.split(""), function(n){
						return self.validateConditions(n);
					});
		},
		validateConditions:function(n){
			switch (n){
				case "2":return "abc";
				case "3":return "def";
				case "4":return "ghi";
				case "5":return "jkh";
				case "6":return "mno";
				case "7":return "pqrs";
				case "8":return "tuv";
				case "9":return "wxyz";
			}
		},
		allPossibleCases: function(arr) {
		  if (arr.length == 1) {
		    return arr[0];
		  } else {
		    var result = [];
		    var allCasesOfRest = this.allPossibleCases(arr.slice(1));
		    for (var i = 0; i < allCasesOfRest.length; i++) {
		      for (var j = 0; j < arr[0].length; j++) {
		        result.push(arr[0][j] + allCasesOfRest[i]);
		      }
		    }
		    return result;
		  }
		}
	});
	
	return WordsView;
  
});
