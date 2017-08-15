(function($) { //function to create private scope with $ parameter
  // selects only the <a>'s that are children of <li>'s, not the children of a <span>. A child is a direct descendant only.
  $('#nav li > a').addClass('selected');
})(jQuery); // invoke nameless function and pass it the jQuery object
