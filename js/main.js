require.config({
  paths: {
    'jquery': 'libs/jquery-min',
    'underscore': 'libs/underscore-min',
    'backbone': 'libs/backbone-min',
    'bootstrap': 'libs/bootstrap-min',
    'handlebars':'libs/handlebars',
    'templates': '../templates',
    'books': '../books'
  },
  shim: {
        backbone: {
            deps: ["underscore", "jquery"], // Backbone dependencies
            exports: "Backbone" // variable exported
        },
        underscore: {
            exports: "_"
        },
        handlebars: {
            exports: "Handlebars"
        }
    }

});

require(['app'], function(App){
  App.initialize();
});