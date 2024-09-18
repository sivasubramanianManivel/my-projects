$(document).ready(function(){
    alertify.set('notifier', 'position', 'top-right');
    $(document).on('click','.increment',function(){

        var $quantityInput = $(this).closest('.qtyBox').find('.qty');
        var productId =$(this).closest('.qtyBox').find('.proId').val();

        var currentValue= parseInt($quantityInput.val());
        
        if(!isNaN(currentValue)){
            var qtyVal=currentValue + 1;
            $quantityInput.val(qtyVal);
            $quantityIncDec(productId,qtyVal)
        }
    });

    $(document).on('click','.decrement',function(){

    var $quantityInput = $(this).closest('.qtyBox').find('.qty');
    var productId =$(this).closest('.qtyBox').find('.proId').val();

    var currentValue= parseInt($quantityInput.val());
    
    if(!isNaN(currentValue && currentValue >1)){
        var qtyVal=currentValue - 1;
        $quantityInput.val(qtyVal);
        $quantityIncDec(productId,qtyVal)
    }
    });

    function $quantityIncDec(proId,qty){
        $.ajax({
            type:"POST",
            url:"orders-code.php",
            data: {
                'productIncDec': true,
                'product_id':proId,
                'quantity':qty
            },
            success:function(response){
                var res =JSON.parse(response);
                console.log(res);
                if(res.status ==200){
                    window.location.reload();
                    alertify.success(res,message);
                    $('#productArea').load('#productContent')
                }else{
                    alertify.error(res,message);
                }
                }
            
        });
    }

    //proceed to place button click
    $(document).on('click','.proceedToPlace',function(){
        var cphone =$('#cphone').val();
        var payment_mode =$('#payment_mode').val();
        

        if(payment_mode ==''){
            swal("Select Payment Mode","Select your payment mode","warning");
            return false;

        }

        if(cphone =='' && !$.isNumeric(cphone)){
            swal("Enter Phone Number","Enter valid Phone Number","warning");
            return false;
        }
        var data ={
            'proceedToPlaceBtn':true,
            'cphone':cphone,
            'payment_mode':payment_mode,


        };
        $.ajax({
            type:"POST",
            url:"orders-code.php",
            data:data,
            success:function(response){
                var res =JSON.parse(response);
                if(res.status == 200){
                    window.location.href ="order-summary.php";
                }
                else if(res.status == 404){
                    swal(res.message,res.message,res.status_type,{
                        buttons:{
                            catch:{
                                text:"Add Customer",
                                value:"catch"
                            },
                            cancel :"Cancel"
                        }

                    })
                    .then((value) => {
                        switch(value){
                            case "catch":
                                $('#addCustomerModel').modal('show');
                                $('c_phone').val(cphone);
                                //console.log("pop the customer add model");
                                break;
                            
                            default:

                        }
                    });

                }else{
                    swal(res.message,res.message,res.status_type);
                }

            }
        });
    });
  // add customer 
  $(document).on('click','.saveCustomer', function (){
   
    var c_name = $('#c_name').val();
    var c_phone = $('#c_phone').val();
    var c_email = $('#c_email').val();

    if(c_name != '' && c_phone != ''){
        if($.isNumeric(c_phone)){
            var data ={
                'saveCustomerBtn': true,
                'name':c_name,
                'phone':c_phone,
                'email':c_email,
            };
            $.ajax({
                type:"POST",
                url:"orders-code.php",
                data:data,
                success: function (response){
                    var res = JSON.parse(response);
                    if(res.status == 200){
                        swal(res.message,res.message,res.status_type);
                        $("#addCustomerModel").modal('hide');
                    }else if(res.status == 422){
                        swal(res.message,res.message,res.status_type);

                    } else{
                        swal(res.message,res.message,res.status_type);
                    }
                }

            });

        }else{
            swal("Enter Valid Phone Number","","warning");
        }

    }else{
        swal("Please Fill required field","","warning");
    }


  });
  $(document).on('click','#saveOrder', function (){

    $.ajax({
        type:"POST",
        url:"orders-code.php",
        data: {
            'saveOrder': true
         
        },
       
        success: function (response){
            console.log(response); // Log the response
         
            var res = JSON.parse(response);
            if(res.status == 200){
                swal(res.message,res.message,res.status_type);
                $('#orderPlaceSuccessMessage').text(res.message);
                $('#orderSuccessModal').modal('show');
            }else{
                swal(res.message,res.message,res.status_type);
            }
        }
        
    })
    
  });

    
});
    