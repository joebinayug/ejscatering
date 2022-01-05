<?php
  $servername = "localhost";
  $username = "ejs_event_admin";
  $password = "rM8IEy8RDhZgXBQE";
  $dbname = "ejs_event_admin";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    echo "Fail";
  }

  $sql = "INSERT INTO ej_event_request (name, contact_no, email, event_type, event_date)
  VALUES ('$_POST[txt_name]', '$_POST[txt_contact]', '$_POST[txt_email]', '$_POST[txt_type]', '$_POST[txt_date]')";

  if($conn->query($sql) === TRUE) {
    echo "Success";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
?>