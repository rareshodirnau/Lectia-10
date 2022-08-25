(function($) {
    $('#wpr-filter select').on('change', function(){
        var level = $('#wpr-filter select').val();
        data = {
            action: 'search',
            level: level,
        }
        $.ajax({  
            url: WPR.ajax_url, 
            type: 'GET', 
            data: data,
            success: function(response){
                console.log(response);
                $('#archive-engineers').empty();
            }
        })
    });
} ) (jQuery); 