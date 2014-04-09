'use strict';

var Filecache = require('../filecache')
  , Page = require('bigpipe').Page
  , GitHulk = require('githulk');

Page.extend({
  path: '/package/:name',   // HTTP route we should respond to.
  view: './package.ejs',    // The base template we need to render.
  pagelets: {               // The pagelets that should be rendered.
    package: require('packages-pagelet').extend({
      cache: new Filecache(),
      githulk: new GitHulk()
    })
  }
}).on(module);
