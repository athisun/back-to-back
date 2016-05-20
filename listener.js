// Listen for keydown events on the main document
// Note: Will not trigger if focused on an element within an iframe
document.addEventListener('keydown', keyListener, false);

// Keyboard listener callback
function keyListener(e) {
  var key = e.keyCode || e.charCode;
  var space = (key == 8 || key == 46);
  var controlKeys = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
  
  if(space && !controlKeys) {
    // Make sure we're not trying to delete text
    var tag = e.target.tagName.toLowerCase();
    if (tag != 'input' && tag != 'textarea') {
      window.history.back();
    }
  }
}