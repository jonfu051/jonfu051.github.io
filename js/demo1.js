var getData = {
    init: function() {
       getData.ajaxFire();
    },
    ajaxFire: function() {
        $.ajax({
            url: 'https://data.gov.uk/data/api/service/health/pharmacies/partial_postcode?partial_postcode=TW8',
            type: 'GET',
            dataType:'json',
            success: function(response) {
                if(response.success){
                    loopData(response.result);
                }else {
                    alert("fail");
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
}

function loopData(data) {
    var phaNameList = "";
    var phaAddressList ="";

    $.each(data, function (index, context) {
        var addressCombine;
        var address1 = context.address1 == '' ? '': context.address1 + ', ';
        var address2 = context.address2 == '' ? '': context.address2 + ', '; 
        var address3 = context.address3 == '' ? '': context.address3 + ', ';
        var city = context.city == '' ? '' : context.city + ', ';
        var postcode = context.postcode == '' ? '' : context.postcode;
        phaNameList += '<option value="'+ index +'">'+ context.name +'</option>';
        addressCombine = address1 + address2 + address3 + city + postcode;
        phaAddressList += '<span data-address="'+ index +'">' + addressCombine + '</span>';
    });

    $('#pharmancyName').append(phaNameList);
    $('#addressDetail').append(phaAddressList);
    checkPhaAddress();
}   

function checkPhaAddress() {
    var $pharmancyName = $('#pharmancyName');
    var $pharmancyNameVal = $pharmancyName.val();

    $('#addressDetail span').removeClass('show');

    if($pharmancyNameVal) {
        $('span[data-address=' + $pharmancyNameVal + ']').addClass('show');
    }
}

function optionChange() {
    var $pharmancyName = $('#pharmancyName');
    var $pharmancyNameVal = $pharmancyName.val();

    $pharmancyName.on('change', function() {
        checkPhaAddress();
    })
    
}

$(function() {
    getData.init();
    optionChange();
});