<?php
                  // Database configuration
                  $host = "localhost"; // Replace with your host name
                  $user = "root"; // Replace with your database username
                  $password = ""; // Replace with your database password
                  $database = "Solux_Users"; // Replace with your database name

                  // Connect to the database
                  $conn = new mysqli($host, $user, $password, $database);
                  if (!$conn) {
                     die("Connection failed: " . mysqli_connect_error());
                  }

                  // Check if the form has been submitted
                  if ($_SERVER["REQUEST_METHOD"] == "POST") {
                     // Get the form data
                     $username = $_POST["username"];
                     $user_contact = $_POST["user_contact"];
                     $password = password_hash($_POST["user_pass"], PASSWORD_DEFAULT); // Hash the password
                     $matricule = $_POST["user_mat"];
                     $user_role = "user";
                     // Insert the form data into the database
                     $sql = "INSERT INTO Users (username, user_contact, user_pass, user_role) VALUES ('$username', '$user_contact', '$password', '$user_role')";
                     if (mysqli_query($conn, $sql)) {
                        echo "1";
                     } else {
                      echo "0";
                     }
                  }

                  // Close the database connection
                  mysqli_close($conn);
?>