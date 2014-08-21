'use strict';

var Pagelet = require('packages-pagelet');

Pagelet.extend({
  name: 'dependencies',   // Name of the pagelet -- Use this in placeholders.

  //
  // Specify the locations of our UI components.
  //
  view: 'view.ejs',       // The template that gets rendered.
  css:  'css.styl',       // All CSS required to render this component.
  js:   '',               // Remove JS dependency.

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
  },

  //
  // The packages-pagelet uses sub-pagelets to render things on the page. These
  // elements are not required for these page so we need to remove them.
  //
  pagelets: {}
}).on(module);
