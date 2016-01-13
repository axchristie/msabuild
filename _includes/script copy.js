//HEADER ANIMATION//
var animatedHeader = function(a, b){
    
    selector = '#animate ' + a;
    
    $(selector).click(function(){
                      $('.bottom-nav').not(b).addClass('hidden');
                      $('.top-nav').not(a).toggleClass('hidden');
                      $(b).addClass('animated');
                      $(b).toggleClass('hidden', 'fadeInDown');
                      });
}

var brutalHeader = function(a){

    selector = '#animate ' + a;

    $(selector).click(function(){
    alert(selector);
    $(selector).css('color', 'red');
//        $('#animate .top-nav').not(selector).hide;
    });
}

var fullHeader = function(a, b){
    
    selector = '#full ' + a;
    
    $(selector).click(function(){
                      $('.bottom-nav').not(b).addClass('hidden');
                      $(b).addClass('animated');
                      $(b).toggleClass('hidden', 'fadeInDown');
                      });
}

var mobileHeader = function(a, b, c){
    
    $(a).click(function(){
               $(a).toggleClass('highlighted');
               $(b).toggle('show');
               $('#mobile .top-nav').not(b).hide;
               $('#mobile .top-nav').not(c).toggle('hide');
               selected = true;
               });
}

//CHECK FOR MOBILE//
var check = false;
var mobileCheck = function(){
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

//INTERACTIVE BACKGROUND//

var interactive_bg = function(strength){
    
    $(".bg").interactive_bg({
                            strength: strength,
                            scale: 1.1,
                            animationSpeed: "100ms",
                            contain: true,
                            wrapContent: true
                            });
}

    var main = function(){
    //check for mobile
    mobileCheck();
    
  
    //MOBILE//
    if(check){
        
        //img resize
        $("img").not(".bg").unwrap();
        $("img").not(".bg").addClass("mobile_img");
        $('#c').css('line-height', '.95em;');
        
        //background img
        if(document.title == "MSA 17 Boston"){
            interactive_bg(5);
        }
        
        //page styling
        $('.content').addClass('little_pad');
        $('.post').addClass('mobile_post');
        $('#reader').css('width', '90%');
        
        $('header').addClass('sticky');
        $('#bottom-header').css('font-size', '4em');
        $('#bottom-header').css('line-height', '1em');
        
        $('#slow').hide();
        $('#fast').show();
        $('#mobile').show();
        
        //iframe fix
        $('#iframe').css('height', screen.height/2 + "px");
        
        //content padding
        var pad;
        pad = $('header').height();
        $('#padder').height(pad/3);
        $('.padder').height(pad/3);
        
        //header animation
        var selected;
        $('ul li').addClass('mobile');
        $('.top-nav').hide();
        $('.bottom-nav').hide();
        
        $('.title').click(function(){
                          if(selected){
                          $('.top-nav').hide();
                          $('.bottom-nav').hide();
                          selected = false;
                          }else{
                          $('.top-nav').hide();
                          $('.bottom-nav').hide();
                          $('.top-nav').removeClass('highlighted');
                          $('.top-nav').toggle('show');
                          selected = true;
                          }
                          });

//        $('#mobile #top-nav-one').click(function(){
//                                window.location.href = 'https://msa.press.jhu.edu/conferences/msa17/assets/MSA17FinalProgram.pdf';
//                                });
        
        mobileHeader('#mobile #top-nav-one', '#program', '#top-nav-one');
        mobileHeader('#mobile #top-nav-two', '#conf', '#top-nav-two');
        mobileHeader('#mobile #top-nav-three', '#grads', '#top-nav-three');
        mobileHeader('#mobile #top-nav-four', '#visit', '#top-nav-four');
        mobileHeader('#mobile #top-nav-five', '#events', '#top-nav-five');        
        
    //ANIMATED//
    }else{
        if(document.title == "MSA 17 Boston"){
            
            $('header').hide();
            
            $('#reveal').click(function(){
                               $('header').toggle();
                               });
            
            //background img
            interactive_bg(50);
            $('.bg').css('height', '60%');
            $('.bg').css('width', '100%');

            
            //image sizing
            $("img[alt*='sm']").addClass("small");
            $("img[alt*='med']").addClass("medium");
            $("img[alt*='lg']").addClass("large");
            $("img[alt*='left']").addClass("left");
            $("img[alt*='right']").addClass("right");
            $("img[alt*='center']").addClass("center");
            
            //page styling
            $('#animate').show();
            $('#full').hide();
            $('#slow').show();
            $('#fast').hide();
            $('header').addClass('pretty');
            $('header').css('line-height', '.5em');
            $('#top-header').show();
            $('.content').addClass('big_pad');
            
            //content padding
            var pad;
            pad = $('header').height();
            $('.padder').height(pad/3);
            $('.top-pad').height(pad/1.8);
            
            //header scroll code
            var numz;
            numz = $(window).height();
            
            //conference program code
            $('#animate #top-nav-one').hover(function(){
                                             $(this).prev().andSelf().toggleClass('peas_and_carrots');
                                             });
            
            $('#animate #top-nav-one').mouseleave(function(){
                                             $(this).prev().andSelf().addClass('parting_ways');
                                             });
/*
            $(window).scroll(function() {
                             if ($(this).scrollTop() > numz/14){
                             $('header').addClass("sticky");
                             $('.title').removeClass('hidden');
                             $('#top-header').hide();
                             }
                             else{
                             $('header').removeClass("sticky");
                             $('.title').addClass('hidden');
                             $('#top-header').show();
                             }
                             });
 */
            
            //header animation
            $('ul li').addClass('full');
            $('.bottom-nav').addClass('animated fadeInDown');
            
            $('.top-nav').hover(function(){
                                $(this).toggleClass('highlighted');
                                });

//            $('#animate #top-nav-one').click(function(){
//                                    window.location.href = 'https://msa.press.jhu.edu/conferences/msa17/assets/MSA17FinalProgram.pdf';
//                                    });
            
            animatedHeader('#top-nav-one', '#program');
            animatedHeader('#top-nav-two', '#conf');
            animatedHeader('#top-nav-three', '#grads');
            animatedHeader('#top-nav-four', '#visit');
            animatedHeader('#top-nav-five', '#events');

//            brutalHeader('#top-nav-one');
//            brutalHeader('#top-nav-two');
//            brutalHeader('#top-nav-three');
//            brutalHeader('#top-nav-four');
//            brutalHeader('#top-nav-five');
            
        //FULL//
        }else{
            
            $('.vid').click(function(){
                             $(this).get(0).play();
                             });
            
            //image sizing
            $("img[alt*='sm']").addClass("small");
            $("img[alt*='med']").addClass("medium");
            $("img[alt*='lg']").addClass("large");
            $("img[alt*='left']").addClass("left");
            $("img[alt*='right']").addClass("right");
            
            //page styling
            $('#full').show();
            $('#animate').hide();
            $('header').addClass("sticky");
            $('.content').addClass('big_pad');
            
            //content padding
            var pad;
            pad = $('header').height();
            $('#padder').height(pad/3);
            
            //header animation
            $('ul li').addClass('full');
            $('.bottom-nav').addClass('animated fadeInDown');
            
            //conference program code
            $('#top-nav-one').hover(function(){
                                    $(this).prev().andSelf().toggleClass('peas_and_carrots');
                                    });
            
            $('#top-nav-one').mouseleave(function(){
                                                  $(this).prev().andSelf().addClass('parting_ways');
                                                  });
            
            $('.top-nav').hover(function(){
                                $(this).toggleClass('highlighted');
                                });

//            $('#top-nav-one').click(function(){
//                                    window.location.href = 'https://msa.press.jhu.edu/conferences/msa17/assets/MSA17FinalProgram.pdf';
//                                    });
            
            fullHeader('#top-nav-one', '#program');
            fullHeader('#top-nav-two', '#conf');
            fullHeader('#top-nav-three', '#grads');
            fullHeader('#top-nav-four', '#visit');
            fullHeader('#top-nav-five', '#events');
        }
    }
    
}

$(document).ready(main);