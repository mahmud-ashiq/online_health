<?php
include '../../model/patient_db.php';


$room = $_POST['room'];
$mydb = new Model();
$str = '';
$conObj = $mydb->OpenCon();
$result = $mydb->msgdatabase($conObj, $room);
foreach ($result as $document) {
    $str .= '<div class="container">' . $document['ip'] . 'says <p>' . $document['msg'] . '</p><span class="time-right"' . $document['time'] . '</span></div>';
}
echo $str;
