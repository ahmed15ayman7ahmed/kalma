$(".rush").click(function () {
    $("html,body").animate({
        scrollTop: $(".block4").offset().top}, "slow")
});


$(".form-control-input").on("focus" , function () {
    $("#btnSubmit").removeAttr("disabled");
});
function mytime() {
    $("#btnSubmit").removeAttr("disabled");
}


var url = $(location).attr("href"),
    parts = url.split("="),
    last_part = parts[parts.length - 1];
last_part != url && $("#article").val(last_part);

$(document).ready(function () {
    function isMobileDevice() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
      // قائمة الأجهزة المحمولة الشهيرة
      const mobileDevices = /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Windows Phone/i;
  
      return mobileDevices.test(userAgent);
    }
  
    // تحديد قيمة الإدخال بناءً على نوع الجهاز
    const deviceType = isMobileDevice() ? "Mobile" : "Computer";
    $("#type").val(deviceType);
  });
  
function SubmitForm() {
    $("#btnSubmit").attr("disabled","disabled");
    setTimeout(mytime , 4000);
    var jsFormData = $("#contact-form").serialize();
    $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbxVT_rfoGWRMjXv9-unMyaDZvsoXB6Rw9hQ1ZpHf4GP4UcR8uBf15BT0aBWNC44oK_Bbw/exec",
        data: jsFormData,
        async: false,
        dataType: "xml",
        success: function (data) {
            SuccessResponse();
        }
    });
    SuccessResponse();
    window.open('thanks.html', '_self');
};

function SuccessResponse() {
    $('#btnSubmit').attr("disabled", 'true');
    $("#contact-form :input").attr('disabled', true);
};

function validateForm() {
    $("#contact-form").validate();
};
$().ready(function () {
    // validate the comment form when it is submitted
    $("#contact-form").validate({
        rules: {
            "entry.710811246": {
                required: true,
                digits: true
            }
        }
    });
});
