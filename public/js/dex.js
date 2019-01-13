$(document).ready(function(){
 
    $.getJSON("https://changenow.io//api/v1/currencies", function(result){
      console.log(ticker);
        //var price = result.data['priceUsd'];

    });
});
