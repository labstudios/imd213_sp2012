<?php

$data = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

$message = "First name: ".$data["fname"]."\r\n";
$message .= "Last name: ".$data["lname"]."\r\n";
$message .= "Size: ".$data["pinesize"]."\r\n";
if(isset($data['dips']))
{
	$message .= "Dips: ";
	for($i = 0; $i < count($data['dips']); ++$i)
	{
		$message .= $data['dips'][$i].", ";
	}
	$message = substr($message, 0, -2);
	$message .= "\r\n";
}

if(isset($data['agree']))
{
	mail("bwallen.aii@gmail.com", "Pineapple Order", $message);
	echo "Thank you and have a powerful day!";
}
else
{
	echo "No, seriously, check the freakin' box at the bottom!";
}
?>