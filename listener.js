// Listen for keydown events on the main document
// TODO: Add support for elements within iframes

document.onkeydown = function(e) {

  // Get various keyboard key states
  var backspace = (e.keyCode == 8);
  var controlKeys = (e.altKey || e.ctrlKey || e.metaKey);

  // Check for the backspace key without additional control keys
  if (backspace && !controlKeys) {
    //var element = document.activeElement;
    var element = e.target;

    // Make sure we're not in an editable element
    var tag = element.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'EMBED') {
      return;
    }

    // Make sure we're not trying to edit text
    if (element.isContentEditable) {
      return;
    }

    // Suppress the key, and the new keyboard shortcut popup
    e.preventDefault();
    e.stopImmediatePropagation();

    // Allow navigating backwards or forwards with the Shift key
    if (e.shiftKey) {
      window.history.forward();
    } else {
      window.history.back();
    }

  }
};
