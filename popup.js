var buttons = document.getElementById('foot').childNodes;
var pages = document.getElementsByClassName('page');
// Returns the left position of given element 
function getLeftPosition(elem) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue('left').replace('px', ''));
}
// Animates the swipe effect
function animation(element) {
  var elem = document.getElementById(this.dataset.text);   
  var pos = 0;
  var left_pos = getLeftPosition(elem);
  var id = setInterval(frame, 25);

  //Desides whether swipe to the left or to the right
  var sign = (left_pos > 0) ? -1 : 1;

  // Moves pages left or right until  the chosen page
  // appears on the screen (left position of page == 0)
  function frame() {
    if (getLeftPosition(elem) == 0) {
      clearInterval(id);
    } else {
      pos = 50 * sign; 
      for(var i = 0; i < pages.length; i++) {
        var item = pages[i];
        var new_pos = getLeftPosition(item) + pos;
        item.style.left = new_pos + 'px';
      } 
    }
  }
  if(elem.id == "discounts")
    document.getElementById("header").innerText = "Amazon.com";
  if (elem.id == "links")
    document.getElementById("header").innerText = "Stores";
  if (elem.id == "contacts")
    document.getElementById("header").innerText = "Coupons";
}
buttons.forEach(el => el.addEventListener("click", animation));