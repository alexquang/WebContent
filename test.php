<?php
$servername = "localhost:3306";
$username = "dananginfo_root";
$password = "dn@12131415@";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
?>