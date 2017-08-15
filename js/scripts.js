(function($) { //function to create private scope with $ parameter
  // selects only the <a>'s that are children of <li>'s, not the children of a <span>. A child is a direct descendant only.
  //$('#nav li > a').addClass('selected');

  // selects the children of the element of #nav
  // $('#nav').children().addClass('selected');

  // children() works well with variables, and jQuery objects stored in them
  var listItems = $('li');

  // listItems.children().addClass('selected');

  // $('> *', listItems).addClass('selected');

  listItems.find('> *').addClass('selected');

})(jQuery); // invoke nameless function and pass it the jQuery object
