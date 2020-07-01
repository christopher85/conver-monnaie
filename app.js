var url = "http://data.fixer.io/api/latest?access_key=479804b12673acc118f393d015570d8b&base=EUR&symbols=GBP,JPY,EUR,USD"


function recupValeur(){
    $.ajax({
        url : url,
        type : "GET",
        success : function (res, status, req){
            console.log("res:", res. rates.USD);
            console.log("req:", req);
        }//callback
        
         
    })
}