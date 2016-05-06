$(function() {

  "use strict";

  $('[data-toggle="tooltip"]').tooltip();

  $('.profilePic').on('click', function() {
    $('#greeting').typed({
      strings: [" ^1500 Hello, ^500 my name is Robert! ^1500 <br>I am an <a class='typedModal' href='#artistModal' data-toggle='modal'>artist</a> and a <a class='typedModal' href='#devModal' data-toggle='modal'>Software Engineer</a> ^250. ^1500 <br> Check me out ^500 on social media ^250 and click on the links to my latest projects!"],
      typeSpeed: 35
    });
  });
  
});
