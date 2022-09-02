function submit_fun(){
    jQuery.ajax({
        url:'config.php',
        type:'post',
        data:jQuery('#frmCaptcha').serialize(),
        success:function(data){
            alert(data);
            // alert("succesfully submitted");
        }
        // if(!success){

        // }
    });
}