jQuery(function($) {
  $('.first-elements').responsiveEqualHeightGrid();
  $('#nav_burger_icon').click(function(){
    $nav_full = $("#nav_full");
    $nav_full_display = $nav_full.css('display');
    if($nav_full_display == "none")
    {
      $(nav_full).slideDown("fast");
    } 
    else 
    {
      $(nav_full).slideUp("fast");
    }
  });

  $("#slider4").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });

  $("#id-send-event").click(function() {
    var url = "pages/submit_event.php"; // the script where you handle the form input.
    $.ajax({
      type: "POST",
      url: url,
      data: $("#id-form-event").serialize(), // serializes the form's elements.
      beforeSend: function(xhr)
      {
        return validateForm();
      },
      success: function(data)
      {
        $("#dialogSuccess").dialog("open");
      }
    });
    return false; // avoid to execute the actual submit of the form.
  });

  $("#id-terms").click(function() {
    $("#dialogTerms").dialog("open");
  });

  AOS.init();
});