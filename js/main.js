$(document).ready(function () {
 var currentFloor = 2;
 var currentFlat = 40;
 var currentLink = 40;
 var flatAdress = $(".flat-link");
 var flatPath = $(".flats path")
 var floorPath = $(".home-image path");
 var counterUp = $(".counter-up");
 var counterDown = $(".counter-down");
 var modal = $(".modal");
 var modalCloseButton = $(".modal-close-button");

 floorPath.on("mouseover", function () {
   currentFloor = $(this).attr("data-floor");
   floorPath.removeClass("current-floor");
   $(".counter").text(currentFloor);
 });

 flatAdress.on("click", function() {
    currentLink = $(this).attr("id");
    //alert(($('.flats path').children().length))
    flats = $('.flats path').toArray()
    for (i in flats){
      //alert(flats[i].getAttribute('data-flat'))
      //alert(flats[i].getAttribute("data-flat") + "  " + currentLink)
      if(flats[i].getAttribute("data-flat") - 0 == currentLink - 0) {
        //alert('LSDKFJLSDKFJL')
        //flats[i].addClass("current-flat");
        flats[i].classList.add("current-flat");
        // flatPath.removeClass("current-flat");
      } else {
        flats[i].classList.remove("current-flat");
      }
    }
    //alert(($('.flats path')[0].getAttribute('data-flat')))
    /*for ( flat in ){
      alert(flat.getAttribute('data-flat'))
    }*/
      
    
 })

  floorPath.on("click", toggleModal);

  modalCloseButton.on("click", toggleModal);

 counterUp.on("click", function () {
if(currentFloor < 18) {
  currentFloor++;
  usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
  useGroupping: false });
  $(".counter").text(usCurrentFloor);
  floorPath.removeClass("current-floor");
  $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
 counterDown.on("click", function () {
if(currentFloor > 2) {
  currentFloor--;
  usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
  useGroupping: false });
  $(".counter").text(usCurrentFloor);
  floorPath.removeClass("current-floor");
  $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});