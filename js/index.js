var kefu ='';
$(document).ready(function(){
    var showQrcode = "<div class='showMask' style='position: absolute;top:50%;left: 50%;transform: translate3d(-50%,-50%,0);background: #fff;z-index: 99;width: 220px;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);-moz-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);'>"+
            "<h4 style='text-align: center;padding: 10px; font-size: 20px;font-weight: 400'>立即下载<img onclick='onRemove(event)' src='/themes/simpleboot3/public/rrsb_pc/image/quxiao.png' style='width: 26px;height: 26px;float: right;'/></h4>"+
            "<div style='background-image:url(/themes/simpleboot3/public/rrsb_pc/image/tanchuang-ewm.png);width:200px;height: 200px;background-size: 100% 100%;margin: 0 auto;'></div>"+
            "<p style='text-align: center;padding-top: 8px;font-size: 16px;color: #999999'>扫描下载【人人社保】APP</p>"+
            "<p style='text-align: center;padding: 10px 0;font-size: 16px;color: #999999'>随时随地咨询您的社保管家</p>"+
        "</div>"

    kefu = " <div class='i-kefu' style='position: fixed;bottom: 0;right: 250px;background: #fff;z-index: 9999;'>"+
             "<div class='k-inner' style='position: relative;'>"+
                "<iframe frameborder='0' src="+ chat_url +" width='450px' height='500px'></iframe>"+
                 "<span class='i-close' style='position: absolute;top: 0;right: 0;height: 56px;width: 56px;z-index: 99;cursor: pointer;' onclick='onClose()'></span>"+
                 "<span class='i-over' style='position: absolute;bottom: 16px;right: 107px;width: 85px;height: 25px;cursor: pointer;z-index: 99;' onclick='onClose()'></span>"+
            "</div>"+
         "</div>"

    var backTop="<div class='back-to-top'>"+
                    "<div class='t-back' onclick='backTop()' onmouseenter='onShow1(1)' onmouseleave='onHide1(1)'>"+
                        "<img class='img1' src='/themes/simpleboot3/public/rrsb_pc/image/zhiding.png' />"+
                        "<p class='pp1' style='font-size: 16px;padding: 3px;display: none'>返回顶部</p>"+
                    "</div>"+
                    "<div class='t-kefu' onclick='showKefu()'  onmouseenter='onShow1(2)' onmouseleave='onHide1(2)'>"+
                        "<img class='img2' src='/themes/simpleboot3/public/rrsb_pc/image/kefu.png' />"+
                        "<p class='pp2' style='font-size: 16px;padding: 3px;display: none'>在线咨询</p>"+
                    "</div>"+
                "</div>"

    var qrCode ="<div class='qr-code' style='position: fixed;top: 50%;right: 0;transform: translateY(-50%);background: #fff;padding: 10px;z-index: 99;text-align: center;box-shadow: 0 0 2px #ccc;'>"+
                    "<div class='c-btn'>"+
                        "<img class='rrsb-er' style='display: block;margin: 10px auto;width: 200px;cursor: pointer;' src='/themes/simpleboot3/public/rrsb_pc/image/cebianlan-az.png' onclick='onDown(1)'/>"+
                        "<img class='rrsb-er' style='display: block;margin: 10px auto;width: 200px;cursor: pointer;' src='/themes/simpleboot3/public/rrsb_pc/image/cebianlan-pg.png' onclick='onDown(2)'/>"+
                    "</div>"+
                    "<div class='c-qr'>"+
                        "<img class='rrsb-er' style='display: block;margin: 10px auto;width: 200px;cursor: pointer;' src='/themes/simpleboot3/public/rrsb_pc/image/rrsb-erweima.png'/>"+
                    "</div>"+
                "</div>"
    $('#app').append(qrCode,backTop)

    var winWd = window.screen.width;
    if(winWd < 1700&&winWd>1500){
        $('.rrsb-er').css('width','160px')
    }else if(winWd < 1500&&winWd >1400){
        $('.rrsb-er').css('width','140px')
    }else if(winWd == 1400){
        $('.rrsb-er').css('width','136.6px')
    }
    

    $(".clearfix li").click(function(){
        if($('.showMask').length > 0){
            $('.showMask').hide();
        }
        $(this).css('position','relative');
        $(this).append(showQrcode)
    })
})


function onRemove(event){
    event.stopPropagation();
    $('.showMask').hide();
}
function onShow(){
    $('.footer-qrcode').show();
    $('.weixinac').show();
    $('.weixin').hide();
}
function onHide(){
    $('.footer-qrcode').hide();
    $('.weixinac').hide();
    $('.weixin').show();
}

function onShow1(num){
    $('.img'+num).hide();
    $('.pp'+num).show();
    $('.pp'+num).css({'background':'#95aab8','color': '#fff'})
}
function onHide1(num){
    $('.img'+num).show();
    $('.pp'+num).hide();
}

function onShow2(showClass,hideClass){
    $('.' + showClass).show();
    $('.' + hideClass).hide();
}
function onHide2(showClass,hideClass){
    $('.' + showClass).hide();
    $('.' + hideClass).show();
}
function showOne(){
    $('.i-content').show();
    $('.i-content2').hide();
}
function showTwo(){
    $('.i-content2').show();
    $('.i-content').hide();
}

function backTop(){
    $(document).scrollTop() > 0&&$('body,html').animate({scrollTop:0},500);
}

function onClose(){
    $('.i-kefu').remove();
}

function showKefu(){
    $('#app').append(kefu)
}

function toWeibo(){
    window.open('https://weibo.com/u/6620754631')
}
