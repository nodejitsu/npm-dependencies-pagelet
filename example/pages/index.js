'use strict';

var Filecache = require('../filecache')
  , Page = require('bigpipe').Page
  , GitHulk = require('githulk');

Page.extend({
  path: '/dependencies/:name',  // HTTP route we should respond to.
  view: './index.ejs',          // The base template we need to render.
  pagelets: {                   // The pagelets that should be rendered.
    dependencies: require('../../').extend({
      cache: new Filecache(),
      githulk: new GitHulk()
    })
  }
}).on(module);
