/**
 * Created by javaBoxer on 4/27/2017.
 */

$(document).ready(function(){
    
    // bh: 5.14.17 applied affix flicker issue
    $(".wrapper-subnav").affix({
        offset: {
            top: $('#banner').height()
        }
    });
    
    $("#topnavbar").height($(".wrapper-subnav").height());
    
    
    
    // affixes top nav to be sticky
    // $('#topnavbar').affix({
    //     offset: {
    //         top: $('#banner').height()
    //     }
    // });
});

