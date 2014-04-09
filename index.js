'use strict';

var Pagelet = require('packages-pagelet');

Pagelet.extend({
  //
  // Specify the locations of our UI components.
  //
  view: 'view.ejs',       // The template that gets rendered.
  css:  'css.styl',       // All CSS required to render this component.
  js:   'client.js',      // Progressive enhancements for the UI.

  /**
   * Final post processing step on the data.
   *
   * @param {Object} data The resolved data from cache.
   * @returns {Object} data
   * @api private
   */
  postprocess: function process(data) {
    //
    // Apply previous post processing.
    //
    data = Pagelet.prototype.postprocess.call(this, data);

    data.stats = {
      outofdate: 0,
      uptodate: 0,
      pinned: 0
    };

    data.shrinkwrap.forEach(function shrinkwrap(module) {
      if (module.pinned) data.stats.pinned++;
      if (module.uptodate) data.stats.uptodate++;
      else data.stats.outofdate++;
    });

    return data;
  }
}).on(module);
