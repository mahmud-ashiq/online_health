<?php
include '../../model/patient_db.php';
;
if(isset($_POST['input'])){
    $str="";
    $input = $_POST['input'];
    echo $input;
    $mydb = new Model();
    $conObj = $mydb->OpenCon();
    $result = $mydb->liveSearch($conObj, $input);
    foreach($result as $document)
    {
       $str = $str . "<tr><td>".$document['name']."</td>";
       $str = $str . "<td>".$document['cat']."</td>";
       $str = $str . "<td>".$document['lnumber']."</td>";
       $str = $str . "<td>".$document['place']."</td>";
       $str = $str . "<td><button type='button' id='".$document['d_id']."'>Take Appointment</button></td></tr>";
    }
    echo $str;

}
?>