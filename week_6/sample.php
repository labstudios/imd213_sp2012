<?php
//Addition vs. String concatenation
$num = 23;
$num2 = 5;

echo $num + $num2;
echo "<br />";
echo $num . $num2;

//Let's look at some arrays
$names = array();
$employee = array();

array_push($names, "Fred");
$names[] = "Steve";

echo "<pre>".print_r($names, true)."</pre>";

$employee['name'] = "Fred Flintstone";
$employee['payPerHour'] = 12.33;
$employee['position'] = "CEO";
//$employee[] = "Gargamel"; //Probably best not to mix indexed and associative

echo "<pre>".print_r($employee, true)."</pre>";
?>