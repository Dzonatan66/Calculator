$(document).ready(function(){
    var total = "";
    var holdNum = "";
    
    $("button").click(function(){
        
      var takeText = $(this).text();
      
      if(takeText == "/" || takeText == "*" || takeText == "%" || takeText == "-" || takeText == "+"){
        if(holdNum != ""){
        total = holdNum + takeText;
        holdNum = "";
        return $("#down").text(total);
            } 
        } else {
          holdNum = "";
          $("#up").text("0");
          $("#down").text(total);
        }
      
        if(takeText == "="){
           var calculateTotal = eval(total);
           total = "";
           holdNum = calculateTotal;
          if(Number.isInteger(calculateTotal)){
            
                 return $("#up").text(calculateTotal);
             } else {
                 return $("#up").text(calculateTotal.toFixed(2));
          }
        }
        
        total += takeText;
        
        $("#down").text(total); 
        
    });
  
    $(".C").click(function(){
         total = "";
         holdNum = "";
         $("#up").text("0");
         $("#down").text("0");
    });
    
});