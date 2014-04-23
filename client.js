pipe.once('dependencies::initialise', function init(pagelet) {
  'use strict';

  //
  // We don't need to have any other information from the pagelet then the
  // placeholders/elements that contain our packages-pagelet placeholders.
  //
  pagelet = $(pagelet.placeholders);

  //
  // Show more rows when we click on the table footer.
  //
  pagelet.on('click', 'tfoot.more a', function click(e) {
    e.preventDefault();

    var button = $(this);

    button.parents('table').find('tr.gone').fadeIn();
    button.parents('tfoot').fadeOut();
  });
});
