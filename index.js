'use strict';

var Pagelet = require('packages-pagelet');

Pagelet.extend({
  //
  // Specify the locations of our UI components.
  //
  view: 'view.ejs',       // The template that gets rendered.
  css:  'css.styl',       // All CSS required to render this component.
  js:   'client.js'       // Progressive enhancements for the UI.
}).on(module);
