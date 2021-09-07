//shipments     order_date   delivery_date   delivery_fee
var shipments = 
        {
            'standard': {
                'leadTime': 7,
                'fee': 2
            },
            'express': {
                'leadTime': 3,
                'fee': 4.5
            }
        };


        document.getElementById("shipments").onchange = function(){
            var selectedfield = document.getElementById("shipments").value;
            var leadTime = shipments[selectedfield].leadTime;
            var fee =   shipments[selectedfield].fee;

           var orderdate = new Date();
           var deliveryDate = new Date(orderdate.getTime() + (86400000 * leadTime));

           console.log(orderdate.toISOString().slice(0,10));
           console.log(deliveryDate.toISOString().slice(0,10));

           document.getElementById("order_date").innerHTML = orderdate.toISOString().slice(0,10);
           document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0,10);
           document.getElementById("delivery_fee").innerHTML = fee.toFixed(2);


        }


        var phones = 
        {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': '450',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': '869',
                'currency': 'EUR',
                'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': '519',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
            }
        }; 

        var selectedRadio = document.getElementsByName("product");

        for( var a=0 ; a < selectedRadio.length; a++){
            selectedRadio[a].onchange = function(){

                for( var b=0 ; b < selectedRadio.length; b++){
                    if(selectedRadio[b].checked){
                        var radioItem = selectedRadio[b].value;
                        console.log(radioItem);

                        document.getElementById("phone_name").innerHTML = phones[radioItem].name;
                        document.getElementById("phone_price").innerHTML = phones[radioItem].currency + (phones[radioItem].price.toFixed(2)).toString();
                        document.getElementById("phone_image").src = phones[radioItem].imageUrl;
                        //phone_name
                       // phone_price
                        
                    }
                }
            }


            /////////start_stop stopwatch
            var isRunning = false ,
            StartTime ,
            currentTime,
            elapseTime = 0,
            clockInterval,
            second,minute,hour,ramainder;

            function add_zero(number){
    if (number < 10){
        return "0" + number.toString();
    }
    else{
        return number.toString();
    }

}         
             document.getElementById("start_stop").onclick = function(){

                if(!isRunning){

                    isRunning = true;
                    if (elapseTime == 0) {
                    StartTime = new Date().getTime();

                }
                else{
                    StartTime = new Date().getTime() - elapseTime;
                }
                   clockInterval =  window.setInterval(function(){

                        currentTime = new Date().getTime()
                        elapseTime = currentTime - StartTime;

                        // per second   1000
                        //  per minute  60000
                         //  per hour  3600000
                        
                         hour = Math.floor(elapseTime / 3600000);
                         ramainder = elapseTime - (hour*3600000);

                         minute = Math.floor(ramainder / 60000);
                         ramainder -= (minute*60000);

                         second = Math.floor(ramainder / 1000);
                         ramainder -= (minute*1000);

                        formattedtime = add_zero(hour) + ":" + add_zero(minute) + ":" + add_zero(second) + ":" + add_zero(ramainder);


                        document.getElementById("stopwatch").innerHTML = formattedtime;


                    },10)

                }
                else{
                    window.clearInterval(clockInterval);
                    isRunning = false;
                }
               
               
            }
        }        


        document.getElementById("reset").onclick = function(){
            StartTime = new Date().getTime();
            if(!isRunning){
                elapseTime =0;
                 document.getElementById("stopwatch").innerHTML = "00:00:00 000";


            }

        }