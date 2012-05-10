<?php

/**
 * Gets the elements inside an array if data is an array.
 * Otherwise, returns the data
 * @param	data	the data we are checking against
 * @return	string	the contents of the array or the data itself.
 */
function checkData($data)
{
	if(is_array($data))
	{
		$ret = "";
		foreach($data as $item)
		{
			$ret .= checkData($item).", ";
		}
		$ret = substr($ret, 0, -2);
		return $ret;
	}
	else
	{
		return $data;
	}
}

$filtered = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
$message = "";

foreach($filtered as $name => $data)
{
	$message .= $name.": ".checkData($data)."\r\n";
}
//place your own email address below
mail('bwallen.aii@gmail.com', "A new Entry", $message);

?>

<p>Thanks! Your info is important to us!</p>