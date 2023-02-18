// NavBar section 01
button.addEventListener("mouseenter", function( event ) {   
    event.target.style.color = "orange";
  }, false);
  button.addEventListener("mouseleave", function( event ) {   
    event.target.style.color = "";
  }, false);
  
  button.addEventListener("mouseenter", function( event ) {   
    event.target.style.backgroundColor = "lightgreen";
  }, false);
  button.addEventListener("mouseleave", function( event ) {   
    event.target.style.backgroundColor = "";
  }, false);


//   section 02
function makeActive() {
    var element = document.getElementById("navbar1");
    element.classList.add("navbar-nav");
    element.innerHTML="This is Active";
 }



//  section 1 start

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// section 1 end

// section 2 start
function bigImg(x) {
  x.style.height = "225px";
  x.style.width = "300px";
}

function normalImg(x) {
  x.style.height = "200px";
  x.style.width = "250px";
}

//  section 2 end


// section 3 start
filterSelection("All") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "All") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// section 3 end

// section 4 start
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (event.target.tagName === 'IMG') {
    const imagePath = event.target.parentNode.getAttribute('href');
    
    // Open the full-sized image in a new window/tab
    window.open(imagePath);
  }
});
// section 4 end



// section7 start
function initMap() {
  var uluru = {lat: 28.501859, lng: 77.410320};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    formMessage.textContent = 'Please enter your name, email, and message.';
  } else if (name.length > 15 || !name.match(/^[a-zA-Z\s]*$/)) {
    formMessage.textContent = 'Enter valid name (less than 15 characters)';
  } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    formMessage.textContent = 'Enter valid email';
  } else if (message.length < 2 || message.length > 120) {
    formMessage.textContent = 'Enter valid message (between 2 and 120 characters)';
  } else {
    formMessage.textContent = 'Successfully submitted';
    form.reset();
  }
});
// section7 end


// section 9 start
const serviceLink = document.getElementById('service-link');

serviceLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/404.html';
});
// section 9 end


// section 10 start
window.addEventListener('load', function() {
	var loader = document.getElementById('loader');
	setTimeout(function() {
		loader.classList.add('active', 2000)});
		setTimeout(function() {
			loader.classList.remove('active');
    })
  })
// section 10 end