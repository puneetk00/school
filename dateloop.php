<?php

$begin = new DateTime( '2017-04-22' );
$end = new DateTime( '2017-05-10' );

$interval = DateInterval::createFromDateString('1 day');
$period = new DatePeriod($begin, $interval, $end);

foreach ( $period as $dt )
  echo $dt->format( "Y-m-d H:i:s\n" ) . "<br>";

echo "puneet";

  ?>
