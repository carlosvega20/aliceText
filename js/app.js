define([
  'jquery', 
  'underscore', 
  'backbone',
  'views/HomeView'
], function($, _, Backbone, HomeView){
  var initialize = function(){
    var homeView = new HomeView();
    homeView.render();
  };

  return { 
    initialize: initialize
  };
});
