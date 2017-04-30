/**
 * Created by javaBoxer on 4/27/2017.
 */

console.log("terst frm brian");

// Load Header and Footer
$(function(){
    $(".M04-Header").load("dist/Modules/M04-Header/partial.html");
    $(".M05-Footer").load("dist/Modules/M05-Footer/partial.html");
});

// affixes top nav to be sticky
$('#topnavbar').affix({
  offset: {
    top: $('#banner').height()
  }
});

// Assuming backend is writing the sale price strike through, we can toggle sale sticker in upper left of product.
// iterate over each product-wrapper and search for value of retail-price.
// if not empty, then it's on sale. Toggle Less class to display sale sticker in upper left of parent wrapper

$(document).ready(function(){

    $('.product-wrapper').each(function () {
        var retailValue = $(this).find('.retail-price');
        var retailValueText = $(retailValue).text();

        if(retailValueText) {
            $(this).find('.product-sale').addClass("sale-on");
        }

        else {
            $(this).find('.product-sale').addClass("sale-off");
        }
  })

});


