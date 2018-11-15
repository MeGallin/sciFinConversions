<?php  
if(isset($_FILES['file'])) {
    $file = $_FILES['file'];
   // File properties
   $file_name = $file['name'];
   $file_temp = $file['tmp_name'];
   $file_size = $file['size'];
   $file_error = $file['error'];

   // work out file extension
   $file_ext = explode('.', $file_name);
   $file_ext = strtolower(end($file_ext));

   $allow = array('txt');

   if(in_array($file_ext, $allow)){
        if($file_error === 0) {
            if($file_size <= 2097152) {
             echo  $file_name_new = uniqid('', true) . '.' . $file_ext;
                $file_destination = '../bulletin/' . $file_name;

                if(move_uploaded_file($file_temp, $file_destination)){

                }
            }
        }
   }

}
?>