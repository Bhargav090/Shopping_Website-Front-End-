// Add event listener to the slider container
document.querySelector('.slider-container').addEventListener('scroll', function() {
    // Update the position indicator when scrolling
    var scrollPosition = this.scrollLeft;
    var slideWidth = this.clientWidth;
    var totalWidth = this.scrollWidth;
    var indicator = Math.round((scrollPosition / (totalWidth - slideWidth)) * 100);
    document.querySelector('.position-indicator').style.width = indicator + '%';
  });
  