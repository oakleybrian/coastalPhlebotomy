/**
 * Created by java on 4/30/2017.
 */

$(document).ready(function(){
    // affixes top nav to be sticky
    $('#topnavbar').affix({
        offset: {
            top: $('#banner').height()
        }
    });
});