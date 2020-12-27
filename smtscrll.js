$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {    
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();      
        var hash = this.hash;      
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){        
          window.location.hash = hash;
        });
      } 
    });
  });