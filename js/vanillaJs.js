function validateForm()
{
  if(document.getElementById("txt_name").value.trim() == "" ||  (document.getElementById("txt_contact").value.trim() == "" && document.getElementById("txt_email").value.trim() == "") 
    || document.getElementById("txt_type").value.trim() == "" || document.getElementById("txt_date").value.trim() == "")
  {
    $("#dialogFail").dialog("open");
    return false;
  }

  return true;
}

function clearField()
{
  document.getElementById("txt_name").value = "";
  document.getElementById("txt_contact").value = "";
  document.getElementById("txt_email").value = "";
  document.getElementById("txt_type").value = "";
  document.getElementById("txt_date").value = "";
}


$(function() {
  $("#dialogFail").dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      Close: function(){
        document.getElementById("txt_name").focus();
        $(this).dialog("close");
      }
    }
  });

  $("#dialogSuccess").dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      Close: function() {
        clearField();
        $(this).dialog( "close");
      }
    }
  });

  $("#dialogTerms").dialog({
    autoOpen: false,
    resizable: false,
    height: 700,
    width: 800,
    modal: true,
    buttons: {
      Close: function() {
        clearField();
        $(this).dialog("close");
      }
    }
  });
});