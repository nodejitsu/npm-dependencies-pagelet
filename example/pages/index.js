'use strict';

var Page = require('bigpipe').Page
  , GitHulk = require('githulk');

Page.extend({
  path: '/dependencies/:name',  // HTTP route we should respond to.
  view: './index.ejs',          // The base template we need to render.
  pagelets: {                   // The pagelets that should be rendered.
    dependencies: require('../../').extend({
      githulk: new GitHulk()
    })
  }
}).on(module);
