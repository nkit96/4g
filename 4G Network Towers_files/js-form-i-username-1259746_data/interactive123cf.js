var date_piker_extra_height = false;
var interactive123cf_loaded=1;
var allow_submit=1;
var submitted=false;
var alert_popped=false;
var preview_ifame=false;
var may_scroll=true;
var main_ios_ver=0;
window.process_debug=-1;
window.lastactiontime=0;
var user_agent = navigator.userAgent;
window.calculations_timeout=null;
window.fields_timeout=null;
window.interactive123cf_loaded=1;
window.stopCalculate=false;
window.typingTimer=0;
var lastFocusElement;
function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
}

function isReferrerAvailable(){
    var gaReferer = '';

    if($("input[name=tmp_referer]").length)
        gaReferer = $("input[name=tmp_referer]").val();

    if(typeof(window.referrerInThankyouPage) !== 'undefined'){
        gaReferer = window.referrerInThankyouPage;
    }

    return gaReferer;
}

if (typeof iOSversion() !== 'undefined')  {
    var ios_ver=iOSversion();
    main_ios_ver=ios_ver[0];
    if (main_ios_ver>0) if (main_ios_ver<5) may_scroll=	false;
}
if (may_scroll) {
    if ((ie_version>0) && (ie_version<=8))  { may_scroll=false; }
}

window.may_scroll=may_scroll;

$(function (){
    $('.autotab123').keyup(function(e) {
        var $this = $(this);

        if (($this.val().length == $this.attr('maxlength')) && (e.keyCode != 37) && (e.keyCode != 38) && (e.keyCode != 39) && (e.keyCode != 40)&& (e.keyCode != 8) && (e.keyCode != 9) && (e.keyCode != 13) && (e.keyCode != 16) && (e.keyCode != 17) && (e.keyCode != 18) && (e.keyCode != 19) && (e.keyCode != 20) && (e.keyCode != 27) && (e.keyCode != 33) && (e.keyCode != 34) && (e.keyCode != 35) && (e.keyCode != 36) && (e.keyCode != 37) && (e.keyCode != 38) && (e.keyCode != 39) && (e.keyCode != 40) && (e.keyCode != 45) && (e.keyCode != 46) && (e.keyCode != 91) && (e.keyCode != 92) && (e.keyCode != 93) && (e.keyCode != 110) && (e.keyCode != 112) && (e.keyCode != 113) && (e.keyCode != 114) && (e.keyCode != 115) && (e.keyCode != 116) && (e.keyCode != 117) && (e.keyCode != 118) && (e.keyCode != 119) && (e.keyCode != 120) && (e.keyCode != 121) && (e.keyCode != 122) && (e.keyCode != 123) && (e.keyCode != 144) && (e.keyCode != 145) && (e.keyCode != 186) && (e.keyCode != 187) && (e.keyCode != 188) && (e.keyCode != 189) && (e.keyCode != 190) && (e.keyCode != 191) && (e.keyCode != 192) && (e.keyCode != 219) && (e.keyCode != 220) && (e.keyCode != 221) && (e.keyCode != 222) ) {
            $(this).parent().next('div').find('.autotab123').focus();
        }else{
            return;
        }

    });
    // checkReferrer();
});

// function checkReferrer()
// {
//     var isInIframe = (parent !== window),
//         parentUrl = null,
//         isIframeEmbed = null;
//
//     if (isInIframe) {
//         parentUrl = document.referrer;
//     }
//     var tmp_referer_obj  = $("input[name=tmp_referer]");
//     var tmp_referrer = $(tmp_referer_obj).val();
//
//     if(parentUrl !== null && parentUrl != tmp_referrer)
//     {
//         $(tmp_referer_obj).val(parentUrl);
//     }
// }

function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0)      // If Internet Explorer, return version number
        return (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    else                 // If another browser, return 0
        return 0;
}

window.ie_version=parseInt(msieversion());
window.is_android = ((user_agent.indexOf('Mozilla') >-1 && user_agent.indexOf('Android ')>-1 && user_agent.indexOf('AppleWebKit')>-1) && !(user_agent.indexOf('Chrome')>-1));
var ie_version=window.ie_version;
var is_andorid=window.is_android;

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


function checkSubmitAllowed(formNode)
{
    // Prevent any further action on the form until the submission is complete
    // FormSubmissionGuard.blockFormInteraction();

    // Postpone form submission if not yet allowed by the FormSubmissionGuard,
    // as there might still be ongoing form operations (e.g. Ajax calls)
    // if (!FormSubmissionGuard.isSubmissionAllowed()) {
    //     // Schedule a new submission after 100ms
    //     setTimeout(function() {
    //         FormSubmissionGuard.submitForm();
    //     }, 100);
    //     // Block the current submission and wait for the scheduled one
    //     return false;
    // }

    var allowSubmission = false;
    // if we're not on the last page, we definetely can hit the submit button (probably Next)
    if (document.getElementById('activepage')!=null && document.getElementById('totalpages')!=null) {
        if (document.getElementById('activepage').value < document.getElementById('totalpages').value) {
            allowSubmission = true;
        }
    }
    // function to be further developed
    if (allow_submit==1) {
        allowSubmission = true;
    }

    if (allowSubmission) {
        // Prevent multiple submissions (de vazut pt payments)
        // $(formNode).submit(function(es) {
        //     es.preventDefault();
        //     return false;
        // });
        // Allow the current submission
        return true;
    }

    return false;
}

String.prototype.endsWith = function(str)
{return (this.match(str+"$")==str)}

function replaceAll(txt, repl, with_this) {
    return txt.replace(new RegExp(repl, 'g'),with_this);
}

function scrollToTop(){
    $( document ).ready(function() {
        window.setTimeout(function(){
            if ('parentIFrame' in window){
                window.parent.postMessage({message_type:'event', message_content: 'scrollToTop', 'element_id': parentIFrame.getId()}, '*');
            }
        }, 150);
    });
}

function RefreshFrameHeight(jumptotop) {

    try {

        if (document.getElementById('thisisjsform') != null && document.getElementById('new_embedding_system') == null) {
            if (parent.socket != null) {
                var newframeheight = Math.max(document.body.clientHeight, document.body.offsetHeight, document.body.scrollHeight);

                // BTV, fix for huge height on these 2 browsers. Might need to use this trick only for form 604374
                var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
                var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
                if (is_chrome || is_safari)
                    newframeheight = document.body.offsetHeight;

                if (typeof frameHeightAdditionalSpace != 'undefined') // BTV
                {
                    newframeheight = newframeheight + frameHeightAdditionalSpace;
                }

                var mymsg = newframeheight + "||" + jumptotop;
                parent.socket.postMessage(mymsg);
            }
        }
        else {
            if (jumptotop == 1)
                scrollToTop();

            if (document.getElementById('new_embedding_system') != null && jumptotop == 1) {
                var firstFocusObj = $('input:not(.disabled-control):visible, textarea:not(.disabled-control):visible, select:not(.disabled-control):not(#form-language):visible').not('input[readonly="readonly"], textarea[readonly="readonly"]');
                if(document.getElementById('id123-button-showsummary') == null)
                    if(typeof firstFocusObj != 'undefined' && typeof firstFocusObj.first() != 'undefined' && typeof firstFocusObj.first().get(0) != 'undefined') {
                        firstFocusObj.first().get(0).focus();
                        firstFocusObj.first().get(0).blur();
                    }
            }
        }

        if (typeof(Wix) !== 'undefined') {
            var newheight = 35 + document.body.offsetHeight; //MNG
            if (typeof frameHeightAdditionalSpace != 'undefined') // BTV
            {
                newheight = newheight + frameHeightAdditionalSpace;
            }

            var query = getQueryParams(document.location.search);
            if(typeof query.wixViewMode != 'undefined') {
                $('form').attr('onsubmit', 'return false;');
                $('#id123-button-send').attr('onclick', 'return false;');
                Wix.resizeWindow(800, newheight);
            } else Wix.setHeight(newheight);
        }

    } catch (e) {
        console.error(e);
    }
}

function getQueryParams(qs) {
	qs = decodeURIComponent( replaceANDCHAR(qs) );
	qs = qs.split('+').join(' ');
	
	var params = {},
	    tokens,
	    re = /[?&]([^=]+)=([^&]*)/g;
	
	while (tokens = re.exec(qs)) {
		params[decodeURIComponent(tokens[1])] = decodeURIComponent( tokens[2] );
	}
	
	return params;
}

function replaceANDCHAR(string){
	return string.replace(/(?:\[|%5B)(?:\%|\%25)ANDCHAR(?:\%|\%25)(?:\]|%5D)/g, '%26');
}

function disableForm(formid,list_cid) {
    if (document.all || document.getElementById) {
        var theform=document.getElementById(formid);
        for (i = 0; i < theform.length; i++) {
            var formElement = theform.elements[i];
            if (true) {
                formElement.disabled = true;
            }
        }
        if((list_cid!="")&&(list_cid != null))
        {var array_list=list_cid.split("||");
            //enable this elements:
            for(var i=0;i<=array_list.length;i++)
                if(document.getElementById(array_list[i]))
                {
                    document.getElementById(array_list[i]).disabled = false;//email
                }
        }
    }
}

function readOnlyForm(formid,list_cid) {

    $(document).ready(function () {

        $('.fileinput-button,.upload-dropzone, .fileupload-remove a, .fileattached a').prop("disabled", true).off("click").prop("onClick", false).addClass("no-pointer-events");

        if (document.all || document.getElementById) {
            var theform = document.getElementById(formid);


            $('.fieldcontainer:not(.thebuttons) input:not(radio,checkbox, #id123-captcha, #id123-couponcode, #goBackButton, #id123-button-send, #id123-button-approve, #id123-button-reject, #id123-button-showsummary),.fieldcontainer:not(.thebuttons) select, .fieldcontainer:not(.thebuttons) textarea').prop("readonly", true).addClass('no-pointer-events');

            /* below will make auto height for textarea  */


            jQuery.each(jQuery('textarea[readonly]'), function () {
                var textarea = this;
                setTimeout( function () {
                    var offset = Math.floor(textarea.offsetHeight) - Math.floor(textarea.clientHeight);
                    $(textarea).css({height: 'auto', overflow: "hidden"}).css('height', Math.floor(textarea.scrollHeight) + offset);
                }, 50);
            });


            $('input[type="radio"]:not(:checked), select:not([multiple]) option:not(:selected),.select2-input').prop("disabled", true);
            $('input[type="radio"],input[type="checkbox"],select').addClass('no-pointer-events');
            $('.class123-label').addClass("disabled-label");
            if ($('.class123-select').length > 0)
                $('.class123-select').addClass('disabled-control').addClass('no-pointer-events');


            if ($('.thebuttons .no-pointer-events').length > 0)	//[Raul] this is just for safety
                $('.thebuttons .no-pointer-events').removeClass('no-pointer-events');


            if ((list_cid != "") && (list_cid != null)) {
                var array_list = list_cid.split("||");
                //enable this elements:
                for (var i = 0; i <= array_list.length; i++)
                    if(document.getElementById(array_list[i]))
                    {
                        document.getElementById(array_list[i]).readOnly = false;//email
                    }
            }
        }



    });
}

function setFocusOnFirstTextField(optionalFid, optionalCid) {
    optionalFid = (typeof optionalFid == "undefined")?'0':optionalFid;
    optionalCid = (typeof optionalCid == "undefined")?'0':optionalCid;
    if ((optionalFid!=0)&&(optionalCid!=0)) {
        elem=document.getElementById('id123-control'+optionalCid);
        if (typeof elem=="undefined") elem=document.getElementById('id123-control'+optionalCid+'_0');
        if (typeof elem!="undefined") {
            var date_attr=$(elem).attr('data-toggle');
            if (typeof date_attr !== typeof undefined && date_attr !== false)
            {
                return;
            }
            else
            {
                var elem_display = window.getComputedStyle(elem).getPropertyValue('display');
                var elem_visibility = window.getComputedStyle(elem).getPropertyValue('visibility');

                if(elem_display != 'none' && elem_visibility != 'hidden' && $('.validation-error:first').length <= 0)
                    elem.focus();

                return;
            }
        }
    }
    for(z=0;z<document.forms.length;z++){
        var form = document.forms[z];
        var elements = form.elements;
        for (var i=0;i<elements.length;i++){
            var element = elements[i];
            if((element.type == 'text' || element.type == 'textarea' || element.type == 'checkbox' || element.type == 'radio' || element.type == 'email' || element.type == 'url' || element.type == 'file') &&
                !element.readOnly &&
                !element.disabled){
                id_fild = element.id;
                var ele = id_fild.replace(/\D/g, "");
                var c_id_ele = ele.replace(123, '');
                var info_label = document.getElementById('id123-titlemic'+c_id_ele);
                //info_label.style.display ='block';
                $(info_label).removeClass('hidden_instruction');
                $(info_label).addClass('class123-noprint');
                var date_attr=$(element).attr('data-toggle');
                if (typeof date_attr !== typeof undefined && date_attr !== false)
                {
                    return;
                }
                else
                {
                    var elem_display = window.getComputedStyle(element).getPropertyValue('display');
                    var elem_visibility = window.getComputedStyle(element).getPropertyValue('visibility');
                    var elem_container_visibility = $("#" + element.id).parents(".fieldcontainer").hasClass("currentPageInactive");

                    if(elem_display != 'none' && elem_visibility != 'hidden' && $('.validation-error:first').length <= 0 && !elem_container_visibility) {
                        setTimeout(function(){ element.focus(); }, 500);

                        return;
                    }
                }
            } else if(element.type == 'select-one' && !element.readOnly && !element.disabled) {
                id_fild = element.id;
                var ele = id_fild.replace(/\D/g, "");
                var c_id_ele = ele.replace(123, '');
                var info_label = document.getElementById('id123-titlemic'+c_id_ele);
                //info_label.style.display ='block';
                $(info_label).removeClass('hidden_instruction');
                $(info_label).addClass('class123-noprint');
                var elem_display = window.getComputedStyle(element).getPropertyValue('display');
                var elem_visibility = window.getComputedStyle(element).getPropertyValue('visibility');

                var elem_container_visibility = $("#" + element.id).parents(".fieldcontainer").hasClass("currentPageInactive");

                if(elem_display != 'none' && elem_visibility != 'hidden' && $('.validation-error:first').length <= 0 && !elem_container_visibility){
                    setTimeout(function(){ element.focus(); }, 500);
                    return;
                }
            }
        }
    }
}
//FCO
/**
 *
 **/
function OneRule(j)
{
    //console.log ( 'OneRule = formrules['+j+']' );
    //console.log ( formrules[j] );

    var condtrue=0;
    if(formrules[j][0].match('language'))
    {
        action=''; notaction='none';
        if (formrules[j][3]=='1') { action='none'; notaction=''; }

        var lang = formrules[j][0];
        language = lang.match(/-(.*?)_/);
        var languageSelected = $('.langselector select').val();

        switch (formrules[j][1])
        {
            case "1":
                if(languageSelected == language[1]) condtrue=1;

                break;
            case "2":
                if(languageSelected != language[1]) condtrue=1;
                break;
        }

    }
    else
    {

        var leftm='id123-control'+formrules[j][0];
        action=''; notaction='none';
        if (formrules[j][3]=='1') { action='none'; notaction=''; }
        var rightm=formrules[j][2].toLowerCase();
        //alert('obj:'+leftm);
        //alert(document.getElementById(leftm).tagName);
        // verificare validitate regula
        isadvancedfield=0;
        if (document.getElementById(leftm)==null)
        {
            //daca nu gaseste asa, poate e un field advanced ce are - in loc de _
            var pos_=formrules[j][0].indexOf('_');
            if (pos_>0)
            {
                var firstgroup=formrules[j][0].substr(0,pos_);
                var secondgroup=formrules[j][0].substr(pos_+1,formrules[j][0].length-pos_);
                leftm='id123-control'+firstgroup+'-'+secondgroup;
                if (document.getElementById(leftm)==null) return 2;//continue;
            }
            else
            {
                //daca nu gaseste, poate e un field advanced de tipul time sau date, ce nu are _, dar pe form componentele sunt cu _
                //alert('spec');
                if (document.getElementById(leftm+'-1')==null) return 2;//continue;
                else isadvancedfield=1;

            }
            pos_=undefined; //MNG:optimize
        }
        if (isadvancedfield==0)
        {
            var leftmval=document.getElementById(leftm).value.toLowerCase();
            var leftm_parent=document.getElementById(leftm).parentNode.parentNode;
        }
        else
        {
            //e adv field care trebuie concatenat
            leftmval='';
            var leftm_parent=document.getElementById(leftm+'-1').parentNode.parentNode;
            for(i=1;i<4;i++) //nu are mai mult de 4
                if (document.getElementById(leftm+'-'+i)!=null)
                    leftmval+=document.getElementById(leftm+'-'+i).value.toLowerCase();
                else break;
        }

        switch (formrules[j][1])
        {
            case "1":
                if (leftm.indexOf('_')>0) {
                    if (document.getElementById(leftm).checked==true) condtrue=1;
                }
                else{
                    if (leftmval==rightm || ((parseFloat(leftmval) == parseFloat(rightm))&& (isNaN(leftmval) == false && isNaN(rightm)==false)))
                        condtrue=1;

                }
                break;
            case "2":
                if (leftm.indexOf('_')>0) {
                    if (document.getElementById(leftm).checked!=true) condtrue=1;
                }
                else
                if (leftmval!=rightm) condtrue=1;
                break;
            case "3":
                pos=leftmval.indexOf(rightm);
                if (pos>=0) condtrue=1;
                break;
            case "4":
                pos=leftmval.indexOf(rightm);
                if (!(pos>=0)) condtrue=1;
                break;
            case "5":
                pos=leftmval.indexOf(rightm);
                if (pos==0) condtrue=1;
                break;
            case "6":
                if (leftmval.endsWith(rightm)) condtrue=1;
                break;
            case "7": //Greater than //MNG rules
                if(leftmval == '')
                    break;
                if(parseFloat(leftmval.replace(new RegExp(",",'g'),'.')) > parseFloat(rightm.replace(new RegExp(",",'g'),'.'))) condtrue = 1;

                if(typeof(js_cobject_arr) == 'undefined') //prevent js error not defined
                {
                    break;
                }
                else
                if(js_cobject_arr["cid"+formrules[j][0]] != null)
                    if((js_cobject_arr["cid"+formrules[j][0]] == 4)||(js_cobject_arr["cid"+formrules[j][0]] == 5)) //Special validation for date MM/DD/YYYY or DD/MM/YYYY
                    {
                        //zack - format is DD/MM/YYYY need to switch day with month
                        condtrue = compareDate ( leftmval, rightm, formrules[j][1], js_cobject_arr["cid"+formrules[j][0]] );
                    }

                break;
            case "8": //Less than
                if(leftmval == '')
                    break;
                if(parseFloat(leftmval.replace(new RegExp(",",'g'),'.')) < parseFloat(rightm.replace(new RegExp(",",'g'),'.'))) condtrue = 1;

                if(typeof(js_cobject_arr) == 'undefined')//prevent js error not defined
                {
                    break;
                }
                else
                if(js_cobject_arr["cid"+formrules[j][0]] != null)
                    if((js_cobject_arr["cid"+formrules[j][0]] == 4)||(js_cobject_arr["cid"+formrules[j][0]] == 5)) //Special validation for date MM/DD/YYYY or DD/MM/YYYY
                    {
                        //zack - format is DD/MM/YYYY need to switch day with month
                        condtrue = compareDate ( leftmval, rightm, formrules[j][1], js_cobject_arr["cid"+formrules[j][0]] );
                    }

                break;

        }
    }


    //MNG:NEW VERSION ----------------------------------------------
    var mycontrolid="";
    var mycontrolidsplit="";
    var mytitleid="";
    var myformrules_arr=formrules[j][4].split("||");
    for(var ii=0;ii<myformrules_arr.length;ii++)
    {
        if (stopCalculateNow()) { return ; }
        var myformrule=myformrules_arr[ii];
        if(myformrule!="id123-button-send" && myformrule!="id123-button-calc" && !myformrule.match('id123-goNextPage-'))
        {
            mycontrolid +="id123-control"+myformrule+"||";
            if(myformrule.indexOf("_")!= -1)
                mycontrolidsplit= mycontrolid.split("_");
            else
            {
                mycontrolidsplit=new Array();
                mycontrolidsplit[0]="id123-control"+myformrule;
            }
            if(typeof(myformrule) !== 'undefined')
            // if(myformrule.indexOf('undefined')!= -1)
                controlidunic +=  mycontrolidsplit[0]+"||";

            titleidsplit=myformrule.split("_");
            mytitleid += "id123-title"+titleidsplit[0]+"||";

        }
        else   // pt submit
        {
            mycontrolid+=myformrule+"||";
            controlidsplit += myformrule+"||";
            titleid += myformrule+" ";
        }
        mycontrolidsplit=undefined;//MNG:optimize
        myformrule=undefined;
    }//endoffor

    controlid=mycontrolid;

    titleid=mytitleid;

    ii=undefined;//MNG:optimize
    mycontrolid=undefined;
    //------------------------------------end of new version
    return condtrue;
}
var controlid;
var titleid;
var controlidunic="";
var controlidsplit;
var condtrue;
var action=''; var notaction='none';

// search for field leftm in the hidden fields list, force 0 or 1, or else use the default result
function ForceResultIfLeftMemberHidden(defaultresult, leftm, thenewhiddenvalues)
{
    var result=defaultresult;

    var pos_=leftm.indexOf('_');
    if (pos_>0)
    {
        var fieldid=leftm.substr(0,pos_);
    }
    else {
        var fieldid=leftm;
    }
// alert('Caut '+fieldid+' ___in____'+thenewhiddenvalues);
    if (thenewhiddenvalues.search('id123-control'+fieldid) != -1) result=0;

    return result;
}

function disable_form_bottom_buttons() {


    if (typeof(formrules)!="undefined")
        if (formrules.length<80) return;

    var controls=$('.navigationButtons, .thebuttons').find('input[type="button"],input[type="submit"]').not('.control-locked');
    if (controls.length>0) {
        controls.addClass('control-locked');
    }
}

function enable_form_bottom_buttons() {

    if (typeof(formrules)!="undefined")
        if (formrules.length<80) return;

    var controls=$('.control-locked');
    if (controls.length>0) {
        controls.removeClass('control-locked');
    }
}

window.cf123GeneralRulesDelay = '';
function InputRules2(inputfieldid, nr_rules, delaytime_fix) {

    if ((nr_rules == undefined ) || (nr_rules == null))
        nr_rules = 0;

    // var delaytime=(inputfieldid=="firsttime") && (nr_fields>30)?1:(nr_fields*100); 
    var delaytime = (inputfieldid == "firsttime") || ((this.nr_fields < 65) && (nr_rules < 35)) ? 0 : (nr_rules + ((nr_rules + 1) / 100) * (nr_rules > 50 ? 25 : 120));

    if (delaytime > 1500 && delaytime_fix == 0)
        delaytime = 1500;

    if (delaytime_fix != 0 && delaytime_fix != undefined)
        delaytime = delaytime_fix;

    window.cf123GeneralRulesDelay = delaytime;

    disable_form_bottom_buttons();
    clearTimeout(window.typingTimer);

    window.typingTimer = setTimeout(function () {
        window.stopCalculate = false;
        InputRules(inputfieldid);
        enable_form_bottom_buttons();
    }, delaytime);
}

function InputRules(inputfieldid)
{
    // Register a new touch on the FormSubmissionGuard.
    // This will prevent the form to be submitted very soon,
    // thus allowing for all the further Ajax calls to be safely dispatched.
    // if (inputfieldid !== "beginning") {
    //     FormSubmissionGuard.touch();
    // }


    setTimeout(function(){
        computeFormSignature();
    }, 10);

    var start_rules_time = new Date().getTime();

    controlidunic="";

    //formrule array:
    //0
    //1
    //2
    //3
    //4
    //5 : type of rule (3=autoresponder ... )
    //6 : unique ID of the rule
    //7 : Id of the parent rule, if any
    //8 : operator: && || for complex rules , blank for simple rules
    //9 : leftparan
    // 10 : rightparan
    if (inputfieldid!="calculation")
        formsavetime();

    //show the x for clear radio
    switch(typeof(inputfieldid))
    {
        case "number":
            if($('input[name="control'+inputfieldid+'"]').is(':radio'))
            {
                if($('#clear_'+inputfieldid).length)
                    $('#clear_'+inputfieldid).show();
            }
            break;
        case "string":
        case "object":
        default:
            break;
    }
    //show the x for clear radio

    var thenewhiddenvalues=document.getElementById('hiddenfields').value;
    if( typeof( formrules ) == 'undefined' ) { return 0; }

    var mustApplyAllRules=isNaN(inputfieldid) ? 1:0;
    // alert('inputrules begin:'+inputfieldid+'___'+mustApplyAllRules);

    var reguli_de_aplicat='';
    if (!isNaN(inputfieldid) && typeof(formrules_left)!='undefined')
    {
        if (formrules_left['cid'+inputfieldid] == undefined) return 0;
        else reguli_de_aplicat=formrules_left['cid'+inputfieldid];
    }
    if (reguli_de_aplicat=='' && mustApplyAllRules==0) { return 0; }


//	if (inputfieldid=="beginning") { return 0; }// FCO se apeleaza aiurea scriptul la final de onclick
    var rulescnt=formrules.length;
    var formrules_applied=new Array(rulescnt);
    var sameparentrules="";


    for (var x=0;x<rulescnt;x++)
        formrules_applied[x]=0;

    var autoresponders_id='';
    //zack - count rules for autoresponder, all, false and true
    var total_rules_type3_cond0 = 0;
    var total_rules_type3_cond1 = 0;
    var total_rules_type3 = 0;

    //console.clear();
    var shouldSkipRules = $('input[name=skipRules]').val();
    if(shouldSkipRules === 'true'){
        return;
    }
    
    for (var j=0;j<rulescnt;j++)
    {
        if (formrules_applied[j]==1) continue;
        if (mustApplyAllRules==0 && formrules[j][7]==0 && reguli_de_aplicat.indexOf(formrules[j][6])==-1) continue;
        if (mustApplyAllRules==0 && formrules[j][7]!=0 && reguli_de_aplicat.indexOf(formrules[j][7])==-1) continue;
        // console.log(reguli_de_aplicat+'avem de aplicat regula '+formrules[j][6]+ ' din cauza fieldului '+inputfieldid);
        if (stopCalculateNow()) { window.stopCalculate=false; return false; }
        //FCO MOVED TO ONERULE
        condtrue=OneRule(j);

        if (0==1) // feature not ready for public yet
            condtrue=ForceResultIfLeftMemberHidden(condtrue, formrules[j][0], thenewhiddenvalues);

        var finalcondtrue=formrules[j][9]+condtrue+formrules[j][10]; //condition result + paranteze
        for (related=(j+1);related<rulescnt;related++)
        {
            if (stopCalculateNow()) { window.stopCalculate=false; return false; }
            if (formrules[related][7]==formrules[j][6]) //if it's a related condition
            {
                formrules_applied[related]=1;
                condtrue=OneRule(related);

                if (0==1) // feature not ready for public yet
                    condtrue=ForceResultIfLeftMemberHidden(condtrue, formrules[related][0], thenewhiddenvalues);

                finalcondtrue+=formrules[related][8]+formrules[related][9]+condtrue+formrules[related][10];
            }
        }

        condtrue=eval(finalcondtrue);
        finalcondtrue=null;
        //delete finalcondtrue;

        if (formrules[j][5]=="3") // notification rule - autoresponders
        {

            total_rules_type3++;
            if (condtrue==1)
            {
                //zack - count all rules that are TRUE
                total_rules_type3_cond1++;
                autoresponders_id=formrules[j][4];
                if ( document.getElementById('special_autoresponder') != null )
                    document.getElementById('special_autoresponder').value = formrules[j][4];

                if (document.getElementById('multiple_autoresponder') !=null) {
                    var multipleautoresponder=document.getElementById('multiple_autoresponder').value;
                    var current_autoresponder='-'+formrules[j][4]+'-';
                    // add to Multiple Autoresponder list, only if not already there
                    if (multipleautoresponder.indexOf(current_autoresponder)== -1) {
                        multipleautoresponder+=current_autoresponder;
                        document.getElementById('multiple_autoresponder').value=multipleautoresponder;
                    }
                    current_autoresponder=null;
                    //delete current_autoresponder;
                }

            }
            else
            {
                //zack - count all rules that are FALSE
                total_rules_type3_cond0++;

                //console.log ('rulescnt='+rulescnt );
                //console.log ('total_rules_type3='+total_rules_type3 );
                //console.log ('total_rules_type3_cond0='+total_rules_type3_cond0 );
                //console.log ('total_rules_type3_cond1='+total_rules_type3_cond1 );

                //zack - when all rules are FALSE and none are TRUE, just reset autoresponder to default value stored into hidden field
                if ( total_rules_type3>0 && total_rules_type3_cond0>0 && total_rules_type3 == total_rules_type3_cond0 )
                {
                    if (document.getElementById('special_autoresponder') != null )
                        document.getElementById('special_autoresponder').value= (document.getElementById('f_autoresponder') != null)?document.getElementById('f_autoresponder').value:'';
                }

                // delete from Multiple Autoresponder list
                if (document.getElementById('multiple_autoresponder') != null)
                {
                    var multipleautoresponder=document.getElementById('multiple_autoresponder').value;
                    document.getElementById('multiple_autoresponder').value=replaceAll(multipleautoresponder, '-'+formrules[j][4].toString()+'-', '');
                }
            }

            multipleautoresponder=undefined;//MNG:optimize
            //delete multipleautoresponder;
            continue;
        }

        // now hide or show the parent TR(s)
        var my_aux_var;

        if (condtrue==1)  // apply ACTION
        {
            var my_string_arr=new Array();
            if(controlid != null)
                my_string_arr=controlid.split("||");
            for(var ii=0;ii< my_string_arr.length;ii++)
            {
                if (stopCalculateNow()) { window.stopCalculate=false; return false; }
                mycontrolid=my_string_arr[ii];
                if(mycontrolid == "")
                    continue;
                // show or hide control
                if(mycontrolid != "id123-button-send" && mycontrolid != "id123-button-calc" && !mycontrolid.match('id123-goNextPage-'))
                {
                    var tr=document.getElementById(mycontrolid);
                    if (typeof(window.tr_parents[mycontrolid]) == "undefined") {
                        tr_parents[mycontrolid]=$(tr).parents('.fieldcontainer:last()')
                    }
                    var tr_parent=tr_parents[mycontrolid];

                    if  ((tr!=null) && (tr.type!="hidden")  &&  (tr.type!="radio"))  {
                        tr_parent.css("display",action);

                    }
                    // show or hide label
                    var mytitleid=titleid.split("||");
                    for(var jj=0;jj<mytitleid.length;jj++)
                    {
                        if (stopCalculateNow()) { window.stopCalculate=false; return; }
                        var tr=document.getElementById(mytitleid[jj]);
                        if (typeof(window.tr_parents[mytitleid[jj]]) == "undefined") {
                            tr_parents[mytitleid[jj]]=$(tr).parents('.fieldcontainer:last()')
                        }
                        var tr_parent=tr_parents[mytitleid[jj]];
                        if (tr!=null) tr_parent.css("display",action);

                        if (tr_parent.find('.google-map').length>0)
                        {
                            if ( action!="none" )
                            {
                                var control_id=mycontrolid.replace("id123-control","");
                                if(CF123_MAPS[control_id])
                                    CF123_MAPS[control_id].refresh();
                            }
                        }
                        var canvas_item_cid=mycontrolid.replace("id123-control","");
                        var canvas_item=$("#id123-control-"+canvas_item_cid);

                        if (canvas_item.length>0)  if (canvas_item.get(0).tagName=="CANVAS") {
                            if (digital_sign_cids.length>0) {

                                for (var sign_index=0;sign_index<digital_sign_cids.length;sign_index++) {
                                    var sign=digital_sign_cids[sign_index];
                                    //zack - APL 1122
                                    eval('if ($("#id123-control'+sign+'").val()==""){ setTimeout(function(){ window.sign'+sign+'= new signature(\'id123-control-'+sign+'\', true); }, 50) }');
                                }
                            }
                        }

                        //MNG aici : vezi ca parentNode x 3 =>null in cazul checkbox-ului
                        var onlycontrolid=mytitleid[jj].substring(mytitleid[jj].indexOf("id123-title")+11);//iau doar numarul din id-ul controlului
                        if(js_ctype_arr["cid"+onlycontrolid] == 2) //checkbox : MNG: Fix checkbox label show cand avem label top align
                        {
                            tr_parent.css("display",action);
                        }
                    }
                    // show or hide separator
                    var mycontrolidunic_arr=new Array();
                    if((controlidunic != "")&&(controlidunic !=null))
                        mycontrolidunic_arr=controlidunic.split("||");

                    for(var kk=0;kk<mycontrolidunic_arr.length;kk++)
                    {
                        var mycontrolidunic_arr_item=mycontrolidunic_arr[kk];
                        if (stopCalculateNow()) { window.stopCalculate=false; return false; }
                        var trsep=document.getElementById('separator-'+mycontrolidunic_arr_item);
                        if (trsep!=null) trsep.style.display=action;
                    }
                    kk=undefined;//MNG:optimize
                    jj=undefined;
                    mycontrolidunic_arr=undefined;
                    mycontrolidunic_arr_item=undefined;
                    tr=undefined;
                    var tr_parent=undefined;
                    delete tr,jj,kk,mycontrolidunic_arr,mycontrolidunic_arr_item;


                    if(mycontrolid.indexOf("_") != -1)
                    {
                        mycontrolid_arr=mycontrolid.split("_");
                        my_aux_var=mycontrolid_arr[0];
                    }
                    else
                        my_aux_var=mycontrolid;
                    thenewhiddenvalues=thenewhiddenvalues.replace(new RegExp(my_aux_var+";","g"),'') ;
                    if (action=='none') {thenewhiddenvalues=thenewhiddenvalues+my_aux_var+';';}
                }
                else {
                    if(!mycontrolid.match('id123-goNextPage-')) {
                        if(document.getElementById(mycontrolid)!=null)
                        {
                            document.getElementById(mycontrolid).style.display=action;
                        }
                    } else {
                        if($('.currentPageActive #goNextPage').length > 0)
                        {
                            var pageNumber = mycontrolid.match(/\d+$/)[0];
                            pageNumber = parseFloat(pageNumber, 10) + parseFloat(1, 10);

                            if(document.getElementById('goNextPage').getAttribute('data-curentpage') == pageNumber) {
                                $('.currentPageActive #goNextPage').css('display', action);
                            }
                        }
                    }
                }

                if (mycontrolid=='id123-button-send' && action=='none') { allow_submit=0; /* alert('disallow1'); */ }
                else if (mycontrolid=='id123-button-send' && action=='') allow_submit=1;
                if(mycontrolid == "id123-button-send")
                {
                    allow_submit=1;
                }
                if(document.getElementById('id123-button-showsummary')!= null) {
                    if (mycontrolid == "id123-button-send") {
                        document.getElementById('id123-button-send').style.display = "none";
                        document.getElementById('id123-button-showsummary').style.display=action;
                        allow_submit = 1;
                    }

                }
            }//endfor
        }
        else // apply NOTACTION
        {
            var my_string_arr=new Array();
            if(controlid != null)
                my_string_arr=controlid.split("||");
            for(var ii=0;ii< my_string_arr.length;ii++)
            {
                var mycontrolid=my_string_arr[ii];
                if(mycontrolid == "")
                    continue;
                // show or hide control
                var mytitleid=titleid.split("||");
                for(var jj=0;jj<mytitleid.length;jj++)
                {
                    var tr=document.getElementById(mytitleid[jj]);
                    if (typeof(window.tr_parents[mytitleid[jj]]) == "undefined") {
                        tr_parents[mytitleid[jj]]=$(tr).parents('.fieldcontainer:last()')
                    }
                    var tr_parent=tr_parents[mytitleid[jj]];

                    if (stopCalculateNow()) { window.stopCalculate=false; return false; }
                    if (tr!=null) tr_parent.css("display",notaction);
                    //MNG:  fix pentru checkbox
                    var onlycontrolid=mytitleid[jj].substring(mytitleid[jj].indexOf("id123-title")+11);//iau doar numarul din id-ul controlului

                    if (tr_parent.find('.google-map').length>0)
                    {
                        if ( notaction!="none" )
                        {
                            var control_id=mycontrolid.replace("id123-control","");
                            refresh_google_map(control_id);
                        }
                    }
                    //endof mng fix pentru checkbox
                }
                var my_controlidunit_arr=new Array();
                if((controlidunic != "")&&(controlidunic !=null)&&(typeof(controlidunic)!='undefined'))
                    my_controlidunit_arr=controlidunic.split("||");
                for(var jj=0;jj<my_controlidunit_arr.length;jj++)
                {
                    if (stopCalculateNow()) { window.stopCalculate=false; return false; }
                    var mycontrolidunic_arr_item=my_controlidunit_arr[jj];
                    if(mycontrolidunic_arr_item == "")
                        continue;
                    var trsep=document.getElementById('separator-'+mycontrolidunic_arr_item);
                    if (trsep!=null) trsep.style.display=notaction;
                }


                if(mycontrolid.indexOf("_")!= -1)
                {
                    mycontrolid_arr=mycontrolid.split("_");
                    my_aux_var=mycontrolid_arr[0];
                }
                else
                    my_aux_var=mycontrolid;

                thenewhiddenvalues=thenewhiddenvalues.replace(new RegExp(my_aux_var+";",'g'),'') ;
                if (notaction=='none') {thenewhiddenvalues=thenewhiddenvalues+my_aux_var+";";}


                if (mycontrolid=='id123-button-send' && notaction=='none') { allow_submit=0;  /*alert('disallow2');*/  }
                else if (mycontrolid=='id123-button-send' && notaction=='') allow_submit=1;

                if(mycontrolid == "id123-button-send")
                {
                    if(document.getElementById(mycontrolid)!= null)
                        document.getElementById(mycontrolid).parentNode.parentNode.parentNode.style.display="";
                    if(document.getElementById(mycontrolid) != null)
                        document.getElementById(mycontrolid).style.display=notaction;
                    allow_submit=1;
                }
                if(mycontrolid == "id123-button-calc") {
                    if(document.getElementById(mycontrolid) != null)
                        document.getElementById(mycontrolid).style.display=notaction;
                }


                if(mycontrolid.match('id123-goNextPage-')) {
                    var pageNumber = mycontrolid.match(/\d+$/)[0];
                    pageNumber = parseFloat(pageNumber, 10) + parseFloat(1, 10);

                    if(document.getElementById('goNextPage').getAttribute('data-curentpage') == pageNumber) {
                        if($('.currentPageActive #goNextPage').length > 0) {
                            $('.currentPageActive #goNextPage').css('display', notaction);
                        }
                    }
                }
                if(document.getElementById('id123-button-showsummary')!= null)
                {

                    if(mycontrolid == "id123-button-send") {
                        document.getElementById('id123-button-showsummary').style.display = notaction;
                    }

                    if(document.getElementById('id123-button-send')!=null)
                        document.getElementById('id123-button-send').style.display="none";
                    allow_submit=1;
                }
            }//endof for
        }
        my_string_arr=undefined;//MNG:optimize
        my_controlidunit_arr=undefined;
        mycontrolid=undefined;
        //delete my_string_arr,my_controlidunit_arr,mycontrolid;
    }


    document.getElementById('hiddenfields').value=thenewhiddenvalues;
    RefreshFrameHeight(0);

    var rules_execution_time = new Date().getTime()-start_rules_time;

    if 	(rules_execution_time >= 250 ) {
        if (typeof __CFTrackedInputRules === 'undefined')
            CFTracker && CFTracker.timing('input_rules_time',  (rules_execution_time), { formId: fid, 'platform': jsGetPlatform });
        window.__CFTrackedInputRules = true;
    }
}

function InputSetDefaultValue(elemid, defval, action, inputcolor_default, inputcolor_gray,original_decoded_text)
{

    //zack - on new PDF don't change color
    try {
        if(window.location.href.indexOf('newPDF=1') != -1)
            return;
    } catch(e) {}


    if(typeof original_decoded_text == 'undefined')
        original_decoded_text = false;
    elem=document.getElementById(elemid);

    if (elem==null)
    {
        return;
    }

    if ($(elem).is('[readonly]'))
    {
        return;
    }

    if (typeof elem.value == 'undefined') {
        return;
    }

    var replace_aux_elem_val = he.encode(elem.value, {
        'useNamedReferences': true
    });


    var defval_dec = he.decode(defval, {
        'isAttributeValue': false
    });

    var replace_aux_elem_val_dec= he.decode(replace_aux_elem_val, {
        'isAttributeValue': true
    });



    if ((action=='focus')&&(elem.value == defval_dec || replace_aux_elem_val == defval || elem.value == $.trim(defval_dec))) {
        elem.value='';
    }
    if ((action=='blur')&&(elem.value=='')) {
        elem.value=defval_dec;
    }
    if ((action == 'blur') && (elem.value=='' || elem.value==defval_dec ||  replace_aux_elem_val  == defval_dec || elem.value==replace_aux_elem_val_dec)) {
        elem.style.color=inputcolor_gray;
    }

    var color_value = '';

    if (elem.value==replace_aux_elem_val_dec  || elem.value==defval_dec || replace_aux_elem_val  == defval_dec || elem.value == $.trim(defval_dec) || ((original_decoded_text != false) && (replace_aux_elem_val_dec == original_decoded_text || elem.value == original_decoded_text )))
    {

        if (action!="focus" || elem.value=='') { //  fix for focus
            color_value = inputcolor_default;
        }

        if ((action == 'blur') && (elem.value=='' || elem.value==defval_dec ||  replace_aux_elem_val  == defval_dec || elem.value==replace_aux_elem_val_dec)) {
            color_value = inputcolor_gray;
        }

        if ((action == 'blur') && (elem.value != defval_dec)) {
            color_value = inputcolor_default;
        }
    }
    else {
        color_value = inputcolor_default;
    }

    if ( color_value !='' )
        elem.style.color=color_value;
}

$.bixNamespace = {};
$.bixNamespace.alert = false;
$(document).ready(function(){
    $('form').submit(function (e) {
        $(this).find('.placeholdersjs').each(function() { $(this).val(''); });

    });

    //#mainform123 prevent multiple submissions (de vazut pt payments)
    $('#mainform123').submit(function (e) {
        $(this).submit(function (es) {
            es.preventDefault();
            return false;
        });
    });

    $('[id^=maxaccepted_]').parent().find('input:checkbox').each(function() {
        $(this).data('onchangeFunction', this.onchange);
        $(this).attr('onchange', '')
    });

    $('[id^=maxaccepted_]').parent().find('input:checkbox').on('change', function(event){
        var elem = $(this);

        setTimeout(function() {
            if (!$.bixNamespace.alert)
                elem.data('onchangeFunction').call(this,event || window.event);
            else {
                $.bixNamespace.alert = false;
                if (elem.is(':checked'))
                    elem.prop('checked', false);
                // alertPopup($('#maxaccepted_message').html());
                $(elem).parent().parent().after('<div class="control-row accepted-choices-row" role="alert" aria-live="assertive"><div class="clear"></div><div class="col-lg-12 col-md-12 col-sm-12 fielderror">'+$('#maxaccepted_message').html()+'</div></div>');
            }
        }, 100);
    });

    $('[id^=maxaccepted_]').parent().find('input:checkbox').on('click', function(event){
        var maxaccepted = parseInt( $(this).closest('[id^=fieldcontainer]').find('[id^=maxaccepted_]').html().replace(/\D/g,''));
        var arechecked = $(this).closest('[id^=fieldcontainer]').find('input:checked').length;

        if (arechecked > maxaccepted) {
            $.bixNamespace.alert = true;
            $(this).trigger('change');
            return false;
        }
    });
    // Alen -> if checkbox has other value.
    $('[id^=maxaccepted_]').parent().find('input:text').on('change', function(event){
        var maxaccepted = $(this).closest('.fieldcontainer').find('[id^=maxaccepted_]').html();
        var arechecked = $(this).closest('.fieldcontainer').find('input:checked').length;
        var last_checkbox = $(this).closest('.fieldcontainer').find(':checkbox').last();
        if (arechecked > maxaccepted) {
            var checked = $(this).closest('.fieldcontainer').find('input:checked');
            alertPopup($('#maxaccepted_message').html());
            $(this).val('');
            $(last_checkbox).attr('checked', false);
            return false;
        }
    });
    prepare_send_for_input();

    if (mayUseUploadFolder())
        if ($('.upload-folder').length > 0 ) $('.upload-folder').removeClass('hidden');

    $( ".requiredfield" ).each(function() {
        if(typeof $( this ).attr( "id" ) !== 'undefined') {
            var elementID = $(this).attr("id");
            elementID = elementID.replace(/title/g, "control");
            $(':input[id^="'+ elementID +'"]').attr({'aria-required':'true'});
        }
    });

    $( ".validation-error" ).each(function() {
        var controlID = $(this).attr('data-idcontainer');
        var selectableField = 'id123-control'+controlID;
        var selectableFieldError = 'id123-fielderror'+controlID;

        $(this).find('.fielderror').attr({'id': selectableFieldError});

        $( ':input[id^="'+ selectableField +'"]' )
            .attr( "aria-describedby", function( i, val ) {
                if(typeof val !== 'undefined')
                    return selectableFieldError +" " + val;
                else
                    return selectableFieldError;
            });

    });
    if($('.validation-error:first').length > 0) {

        var id_container = $('.validation-error:first').attr("data-idcontainer");


        if(typeof id_container !== "undefined")
            setTimeout(function(){
                var element = $('[id^="id123-control'+id_container + '"]').first();
                $(element).focus();
                $(element).blur();
            }, 1000);
        else {
            $('.validation-error:first').attr("tabindex", 0);
            setTimeout(function(){
                var element = $('.validation-error:first');
                $(element).focus();
                $(element).blur();
            }, 1000);
        }

    }

    $(".stars-rate").keydown(
        function(e)
        {
            if (e.keyCode == 39) {
                e.stopImmediatePropagation();
                e.preventDefault();
                e.stopPropagation();
                $("a:focus").next().focus();
            }
            else if (e.keyCode == 37) {
                e.stopImmediatePropagation();
                e.preventDefault();
                e.stopPropagation();
                $("a:focus").prev().focus();
            }
            else if (e.keyCode == 13) {
                e.stopImmediatePropagation();
                e.preventDefault();
                e.stopPropagation();
                $(e.target).trigger("click");
                $(e.target).focus();
            }
            else if (e.keyCode == 32) {
                e.stopImmediatePropagation();
                e.preventDefault();
                e.stopPropagation();
            }

        }
    );


    $( ".class123-labelinfo" ).each(function() {
        var elementID = $(this).attr("id");
        if(typeof elementID !== "undefined") {
            var inputID = elementID.replace(/titlemic/g, "control");

            $(':input[id^="' + inputID + '"]')
                .attr("aria-describedby", function (i, val) {
                    if (typeof val !== 'undefined')
                        return elementID + " " + val;
                    else
                        return elementID;
                });
        }
    });

    $( ".fieldcontainer" ).each(function() {
        var controlID = $(this).attr('data-idcontainer');
        var selectableField = 'id123-control'+controlID;
        var selectableLabel = 'id123-title'+controlID;
        var extraTextTime = false, extraTextPrice = false, extraTextPhone = false;

        if($(this).children('.fieldtype-6-6').length > 0)
            extraTextTime = true;

        if($(this).children('.fieldtype-6-7').length > 0)
            extraTextPrice = true;

        if($(this).children('.fieldtype-6-3').length > 0)
            extraTextPhone = true;

        var sField = $('input[id^="' + selectableField + '"]');

        if(typeof sField.attr("placeholder") != 'undefined'){
            sField.attr('aria-label', function (i, val) {
                var value = "";
                var extraText = "";
                var placeholder = "";
                value += $("#"+selectableLabel).text() + " ";
                if(extraTextTime) {
                    var timeHour = selectableField+"-1";
                    var timeMin = selectableField+"-2";
                    if($(this).attr('id') == timeHour)
                        extraText += " hours ";
                    else if($(this).attr('id')== timeMin)
                        extraText += " minutes "
                }

                if(extraTextPrice) {
                    var priceDec = selectableField+"-2";
                    if($(this).attr('id')== priceDec)
                        extraText += " decimals "
                }

                if(extraTextPhone) {
                    extraText = " type " + $(this).attr('data-fieldformat') + " numbers";
                }

                if(typeof $(this).attr("placeholder") != 'undefined' && !extraTextTime && !extraTextPrice && !extraTextPhone)
                    placeholder = " " + $(this).attr("placeholder");

                if(typeof $(this).attr("placeholder") != 'undefined' && extraTextPrice){
                    var complet_id = selectableField + "-1"
                    if($(this).attr("id") == complet_id){
                        placeholder = " " + $(this).attr("placeholder");
                    }
                }


                value += extraText + placeholder;
                return value;
            });
        }

        if($(this).children('.fieldtype-2-0').length == 0 && $(this).children('.fieldtype-3-0').length == 0 && $(this).children('.fieldtype-2-1').length == 0) {
            if(typeof sField.attr('aria-label') === "undefined") {
                sField.attr('aria-labelledby', function (i, val) {
                    if (typeof val !== 'undefined')
                        return selectableLabel + " " + val;
                    else
                        return selectableLabel;
                });
            }
        }
    });

    $(document).off('click', '.tclose').on('click', '.tclose', function(e) {
        $(".form-container").attr("aria-hidden","false");
        if(!typeof lastFocusElement !== "!undefined")
            $("#"+lastFocusElement).focus();
    });

    $(document).off('click', '.tmask').on('click', '.tmask', function(e) {
        $(".form-container").attr("aria-hidden","false");
        if(!typeof lastFocusElement !== "!undefined")
            $("#"+lastFocusElement).focus();
    });

    $(document).keydown(function( event ) {
        if(event.keyCode == 27 && $('.tclose').length > 0) {
            $(".form-container").attr("aria-hidden","false");
            if(!typeof lastFocusElement !== "!undefined")
                $("#"+lastFocusElement).focus();
        }

        if( (event.keyCode == 32 && $(event.target).hasClass('tos-anchor')) || (event.keyCode == 13 && $(event.target).hasClass('tos-anchor'))) {
            event.preventDefault();
            $(event.target).trigger('click');
        }

        if(event.keyCode == 13 && $(event.target).hasClass('tos-link')) {
            event.preventDefault();
            $(event.target).trigger('click');
        }

    });

});
// function verify_checkbox(thisfield,parentfieldid,maxoptions, maxaccepted,text)
// {
// arechecked=0;
// id=thisfield.id;
// thisfieldid_array =id.split('_');
// thisfieldindex=thisfieldid_array[1];

// for (i=0;i<maxoptions;i++)
// {
// // if (document.getElementById('id123-control'+parentfieldid+'_'+i)!=undefined)
// // if ((document.getElementById('id123-control'+parentfieldid+'_'+i).checked==true) && (i!=thisfieldindex)) arechecked++;
// if ($('#id123-control'+parentfieldid+'_'+i).length && $('#id123-control'+parentfieldid+'_'+i).is(':checked') && i!=thisfieldindex)
// arechecked++;
// }
// if (arechecked>=maxaccepted)
// {
// //document.getElementById('id123-control'+parentfieldid+'_'+thisfieldindex).checked=false;
// //IB: poate merge sa faca si trigger si change (fara sa pop-uie de 2 ori alertu) insa pe moment nu gasesc alta solutie
// // needed for IE 8 compatibility
// //$('#id123-control'+parentfieldid+'_'+thisfieldindex).trigger('mousedown');
// $('#id123-control'+parentfieldid+'_'+thisfieldindex).trigger('click');
// //return false;
// if (!alert_popped) {
// alert_popped=true;
// alert(text);
// }
// else alert_popped=false;
// }

// }
function verify_passwords(id1,id2)
{
    var default_match_msg='Passwords match!';
    var default_notmatch_msg='Passwords do not match!';
    if (id2==2791244 || id2==2890996) {
        default_match_msg='Email is valid!';
        default_notmatch_msg='Email is not valid!';
    }
    if ((document.getElementById('id123-control'+id1)!=undefined)&&(document.getElementById('id123-control'+id2)!=undefined)) {
        if ((document.getElementById('id123-control'+id1).value=='')||(document.getElementById('id123-control'+id2).value=='')) return false;
        else {
            if (document.getElementById('id123-control'+id1).value==document.getElementById('id123-control'+id2).value) {
                document.getElementById('id123-titlemic-custom'+id2).innerHTML='<span style="color:#00AA44;font-weight:bold;">'+default_match_msg+'</span>';
                document.getElementById('id123-button-send').style.display='';
            }
            else	{
                document.getElementById('id123-titlemic-custom'+id2).innerHTML='<span style="color:#FF0000;font-weight:bold;">'+default_notmatch_msg+'</span>';
                document.getElementById('id123-button-send').style.display='none';
            }
        }
    }
}
function customWindowOpen(f_aftermsg, target, submit_message) {

    if (target == '_blank' || target == '_new') {
        var loader_spinning = document.getElementById('loader_spinning');
        if (loader_spinning != null) {
            loader_spinning.style.display = "none";
        }
        var submitting_text = document.getElementById('id123-submitting');
        if (submitting_text != null) {
            submitting_text.innerHTML = submit_message;
        }
    }

    if (target == '_self') {
        location.assign(f_aftermsg);
    }
    else {
        if (target == '_top') {

            //var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            var isChrome = false; //deactivated for the moment

            if (
                isChrome
                && isEmbeddedInIFrame()
                && typeof(Wix) === 'undefined'
            ) { //applied only for Chrome and embedded forms yet
                try {
                    window.parent.postMessage({type: "redirectTo", url: f_aftermsg}, '*');
                } catch (err) {
                    window.open(f_aftermsg, target);
                }
            } else {
                window.open(f_aftermsg, target);
            }

        } else {
            window.open(f_aftermsg, target);
        }
    }
}

$(function() {
    $(".js-capitalize-string").keyup(function(){

        // store current positions in variables
        var start = this.selectionStart,
            end = this.selectionEnd;

        // do your stuff
        $(this).val( $(this).val().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }) );

        // restore from variables...
        this.setSelectionRange(start, end);
    });
});



// IB: functie folosita pentru a selecta, specific dupa o clasa, parintele unui element
function find_parent(elem, selector) {
    bicParent = elem.parentNode;
    while (elem) {
        if (hasClass(bicParent, selector)) {
            return bicParent;
        } else {
            find_parent(bicParent, selector);
        }
    }
    return false;
}

function removeClass(elem,cls) {
    if (hasClass(elem,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        elem.className=elem.className.replace(reg,' ');
    }
}

function addClass(elem,cls) {
    elem.className = elem.className + " "+cls;
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function setstarvote(cid,star,maxv) {

    i=1;
    if (document.getElementById('goBackButton')!=undefined) return;  // exit if preview
    var star_item=document.getElementById("id123-control"+cid);
    var stars_container=document.getElementById("id123-control-"+cid);
    star_item.value=star;
    hide_field_error(star_item);
    if (!$(stars_container).hasClass('no-validation-error')) $(stars_container).addClass('no-validation-error');
    var element_to_focus = "";
    while (i<=maxv) {
        $("#star-"+i+"-"+cid).attr('tabindex', -1);

        if (i<=star) {
            $("#star-"+i+"-"+cid).addClass("selected-star");

            if($("#star-"+i+"-"+cid).hasClass("temporary-selected-star"))
                $("#star-"+i+"-"+cid).removeClass("temporary-selected-star");
        }
        else $("#star-"+i+"-"+cid).removeClass("selected-star");

        $("#star-" + i + "-" + cid).prop('checked',false);

        if(i==star) {
            $("#star-" + i + "-" + cid).attr('tabindex', 0);
            $("#star-" + i + "-" + cid).prop('checked',true);
            element_to_focus = "#star-" + i + "-" + cid;
        }
        i+=1;
    }

    if(element_to_focus != '' && !isMobile.iOS())
        setTimeout(function(){ $(element_to_focus).focus(); }, 50);

    $("#star-detail-selected-"+cid).html( star + " " + lang.get("notifications_ROPisselected"));

    var dels="<span id=\"star-remove-"+cid+"\" role='button' tabindex='0' class=\"cancel-rating\" aria-label='"+ lang.get('advfields_removeRating') +"' onclick=\"cancelrating('"+cid+"','"+maxv+"')\">x</span>";
    if (document.getElementById("star-remove-"+cid)==undefined) stars_container.innerHTML+=dels;

}

function setstarhovervote(cid,star,maxv) {

    if (document.getElementById('goBackButton')!=undefined) return;  // exit if preview

    val=document.getElementById("id123-control"+cid).value;

    i=parseInt(val);
    maxv=parseInt(maxv);
    res="";
    while (i++ < star) {
        //var sstar=document.getElementById("star-"+i+"-"+cid);
         $("#star-"+i+"-"+cid).addClass("temporary-selected-star");
    }

}

function clearstars(cid, maxv) {

    if (document.getElementById('goBackButton')!=undefined) {
        if (document.getElementById("star-remove-"+cid)!=undefined) document.getElementById("star-remove-"+cid).parentNode.removeChild(document.getElementById("star-remove-"+cid));
        return; // exit if preview
    }

    maxv=parseInt(maxv);
    val=document.getElementById("id123-control"+cid).value;
    res="";
    i=parseInt(val);
    while (i++ < maxv) {
        ich=i.toString();
        if ($("#star-"+ich+"-"+cid).hasClass("temporary-selected-star"))  {
            $("#star-"+ich+"-"+cid).removeClass("temporary-selected-star");
        }
    }

}

function cancelrating(cid,maxv) {

    if (document.getElementById('goBackButton')!=undefined) return;
    maxv=parseInt(maxv);
    val=document.getElementById("id123-control"+cid).value;
    document.getElementById("id123-control"+cid).value="0";
    res="";
    vl=parseInt(val);
    i=0;
    while (i++ < vl) {
        ich=i.toString();
        $("#star-"+ich+"-"+cid).removeClass("temporary-selected-star");
        $("#star-"+ich+"-"+cid).removeClass("selected-star");
    }
    document.getElementById("star-remove-"+cid).parentNode.removeChild(document.getElementById("star-remove-"+cid));
    }

function checkvalue(x,chars,words,cid) {
    var val=x.value;
    var xchars=val.length;
    var xwords=0;
    chars=parseInt(chars);
    words=parseInt(words);

    if (val.trim().length>0){
        if (words>0) {
            var vl=val.trim();
            var alw = vl.split(/[\s\n]+/);
            xwords=alw.length;
        }
    }
    if (chars>0) {
        if (xchars>chars) {
            x.value = val.substr(0,chars); xchars=chars;
        }
    }

    if (words>0) {
        if (xwords > words) {
            x.value = vl.slice(0, xchars-1);
            xwords = words;
        }
    }

    if($('#charsLeft'+cid).length > 0) {
        var cleft=chars-xchars;
        if (chars>0) {	document.getElementById('charsLeft'+cid).innerHTML=cleft.toString(); }
    }
    if($('#wordsLeft'+cid).length > 0) {
        var wleft=words-xwords;
        if (words>0) {	document.getElementById('wordsLeft'+cid).innerHTML=wleft.toString(); }
    }
}

function preventBehavior(e) {
    e.preventDefault();
};


function FindPosition(oElement)
{
    if(typeof( oElement.offsetParent ) != "undefined")
    {
        for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
        {
            posX += oElement.offsetLeft;
            posY += oElement.offsetTop;
        }
        return [ posX, posY ];
    }
    else
    {
        return [ oElement.x, oElement.y ];
    }
}

function getElementZoom(canvas) {
    var cursor = canvas, style, zoom;
    while (cursor && cursor.tagName != "BODY") {
        style = window.getComputedStyle(cursor);
        zoom = parseFloat(style.zoom);
        if (zoom != 1)
        {
            return zoom;
        }
        cursor = cursor.parentNode;
    }
    return 1;
}

function GetCoordinates(e, withZoomFix)
{
    var PosX = 0;
    var PosY = 0;
    var ImgPos;
    ImgPos = FindPosition(e.target);

    if (!e) var e = window.event;
    if ((
        e.layerX || e.layerY) && withZoomFix) {
        var zoomReport = 2 - getElementZoom(e.target); // for 0.85 zoom will have 1.15 report
        PosX = e.layerX * zoomReport;
        PosY = e.layerY * zoomReport;
    } else {
        if (e.touches) {
            PosX = e.touches[0].pageX;
            PosY = e.touches[0].pageY;
        } else if (e.pageX || e.pageY) {
            PosX = e.pageX;
            PosY = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            PosX = e.clientX + document.body.scrollLeft
                + document.documentElement.scrollLeft;
            PosY = e.clientY + document.body.scrollTop
                + document.documentElement.scrollTop;
        }
        PosX = PosX - ImgPos[0];
        PosY = PosY - ImgPos[1];
    }
    return new Array(PosX,PosY);
}

/**
 * signature object
 * @param el
 */
signature = function(el, skipEvent) {

    //zack - APL 1122 - signature with rules - if is show only after rules apply - bind again the event
    if(typeof skipEvent == 'undefined')
        skipEvent = false;

    elid=el;

    //zack APL-1122 - put this to false and will go back to previous state
    //skipEvent = false;
    this.skipEvent=skipEvent;


    this.elid=elid;
    this.flag = false;
    this.prevX = "0";
    this.currX = "0";
    this.prevY = "0";
    this.started=false;
    started=false;
    this.currY = "0";
    this.coords=Array();
    this.scolor = "black";
    this.lineWidth = 1;
    var nid=el.replace("id123-control-","");

    // SignData is sent only if resized
    this.initSignature=function(signData) {
        this.closestParent=$(this.canvas).closest('.digital-signature');
        this.canvas.width=this.canvas.parentNode.parentNode.offsetWidth-2;

        if ($(this.canvas).hasClass('custom-height'))
            this.canvas.height=$(this.canvas).parents('.fieldcontainer').height();
        else
            this.canvas.height = 128;

        this.width=this.canvas.width;
        this.height=this.canvas.height;
        this.ctx.strokeStyle = "#c9c9c9";
        this.ctx.lineWidth = 1;

        this.withZoomFix = $(this.canvas).hasClass('fix-signature-zoom');

        if ($(this.canvas).hasClass('custom-height')) {
            this.ctx.moveTo(20, this.canvas.height * 0.8);
            this.ctx.lineTo(this.canvas.width-20, this.canvas.height * 0.8);
        } else {
            this.ctx.moveTo(20, 100.5);
            this.ctx.lineTo(this.canvas.width-20, 100.5);
        }

        this.ctx.stroke();
        // Copy image & value only if resized
        if(typeof(signData) != "undefined") {
            this.ctx.putImageData(signData.imgData, 0, 0);
            if(signData.sImage != "") {
                this.addSImage(signData.sImage);
                this.pushout();
                // Show clear button
                var btn_clear = document.getElementById(this.elid.replace("-control-","-control")+"-del");
                btn_clear.style.visibility="visible";
            }
        }
    }

    this.canvas = document.getElementById(el);

    if (navigator.appVersion.indexOf('MSIE 8.')==-1) if (navigator.appVersion.indexOf('MSIE 7.')==-1) if (navigator.appVersion.indexOf('MSIE 6.')==-1) {
        this.canvas.addEventListener("touchmove", preventBehavior, false);
    }

    this.ctx = this.canvas.getContext("2d");
    ctx=this.ctx;

    this.initSignature();

    if ((navigator.appVersion.indexOf('MSIE 8.')==-1) && (navigator.appVersion.indexOf('MSIE 7.')==-1) && (navigator.appVersion.indexOf('MSIE 6.')==-1)) {

        //zack - APL 1122
        if(!this.skipEvent)
        {
            this.canvas.addEventListener("mousemove", function (e, elid) {
                nid = el.replace("id123-control-", "");
                sg = eval('window.sign' + nid);
                sg.findxy('move', e);
            }, false);

            this.canvas.addEventListener("touchmove", function (e, elid) {
                nid = el.replace("id123-control-", "");
                sg = eval('window.sign' + nid);
                sg.findxy('move', e);
                sg.pushout();
            }, false);

            this.canvas.addEventListener("mousedown", function (e, elid) {
                nid = el.replace("id123-control-", "");
                sg = eval('window.sign' + nid);
                sg.findxy('down', e);
            }, false);

            this.canvas.addEventListener("touchstart", function (e, elid) {
                nid = el.replace("id123-control-", "");
                sg = eval('window.sign' + nid);
                sg.findxy('down', e);
            }, false);

            this.canvas.addEventListener("mouseup", function (e, elid) {
                nid = el.replace("id123-control-", "");
                sg = eval('window.sign' + nid);
                sg.findxy('up', e);
            }, false);

            this.canvas.addEventListener("touchend", function (e, elid) {
                nid = el.replace("id123-control-", "");
                sg = eval('window.sign' + nid);
                sg.findxy('up', e);
                sg.pushout();
            }, false);

            this.canvas.addEventListener("touchcancel", function (e, elid) {
                nid = el.replace("id123-control-", "");
                sg = eval('window.sign' + nid);
                sg.findxy('up', e);
                sg.pushout();
            }, false);
            this.canvas.addEventListener("mouseout", function (e, elid) {
                nid = el.replace("id123-control-", "");
                sg = eval('window.sign' + nid);
                sg.findxy('out', e);
                sg.pushout();
            }, false);
        }
    }
    else {
        this.canvas.attachEvent("onmouseup", function(e,elid) {
            nid=el.replace("id123-control-","");
            e.target=this.canvas;
            sg=eval('window.sign'+nid);
            sg.findxy('up', e);
        });

        this.canvas.attachEvent("onmousedown", function(e,elid) {
            nid=el.replace("id123-control-","");
            e.target=document.getElementById(el);
            sg=eval('window.sign'+nid);
            sg.findxy('down', e);
        });

        this.canvas.attachEvent("onmouseout", function(e,elid) {
            nid=el.replace("id123-control-","");
            e.target=document.getElementById(el);
            sg=eval('window.sign'+nid);
            sg.findxy('out', event);
            sg.pushout();
        });

        this.canvas.attachEvent("onmousemove", function (e,elid) {
            nid=el.replace("id123-control-","");
            e.target=document.getElementById(el);
            sg=eval('window.sign'+nid);
            sg.findxy('move', e);
        });
    }

    this.draw=function() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.prevX, this.prevY);
        this.ctx.lineTo(this.currX, this.currY);
        this.ctx.strokeStyle = this.scolor;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.stroke();
        this.ctx.closePath();
        this.coords.push(new Array(this.prevX,this.prevY,this.currX,this.currY));
    }

    this.pushout=function() {
        var sh = this.elid.replace("-control-", "-control");
        var shel = document.getElementById(sh);
        shel.value = this.getSImage();
    }

    this.erase = function() {
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.strokeStyle = "#c9c9c9";
        this.ctx.lineWidth = 0;

        if ($(this.canvas).hasClass('custom-height'))
        {
            this.ctx.moveTo(20, this.canvas.height * 0.8);
            this.ctx.lineTo(this.canvas.width-20, this.canvas.height * 0.8);
        }
        else
        {
            this.ctx.moveTo(20, 100.5);
            this.ctx.lineTo(this.canvas.width-20, 100.5);
        }

        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.lineWidth = 1;
        this.coords=[];
        coords=[];
        var sh=this.elid.replace("-control-","-control");
        var shel=document.getElementById(sh);
        shel.value="";
        var sheld=document.getElementById(sh+"-del");
        sheld.style.visibility="hidden";
        flag=false;
        this.flag=false;
    }

    this.save=function() {
        var dataURL = this.canvas.toDataURL();
    }

    this.getImage=function(format) {
        return this.canvas.toDataURL("image/"+format);
    }

    this.getSImage=function() {
        var rez="";
        if (typeof(this.coords) == 'undefined') return rez;
        var elem=this.coords.length;
        if (elem>0) {
            for (i=0;i<elem;i++) {
                var el=this.coords[i];
                rez+=el[0]+","+el[1]+","+el[2]+","+el[3]+"|";
            }
            rez=rez.substr(0,rez.length-1);
        }
        return rez;
    }

    this.setSImage=function(str) {
        if (str.length==0) return;
        this.started=false;
        started=false;
        var stra=str.split("|");
        for (i=0;i<stra.length;i++) {
            var elm=stra[i];
            this.coords[i]=elm.split(",");
        }

    }

    this.addSImage = function(str) {
        if (str.length==0) return;
        var strArr=str.split("|");
        for (i=0;i<strArr.length;i++) {
            var elm=strArr[i];
            this.coords.push(elm.split(","));
        }
    }

    this.findxy=function(res, e) {
        if (!(res == 'up' || res == "out"))  {
            var mouseX, mouseY;
            var positions=GetCoordinates(e, this.withZoomFix);
            mouseX=positions[0];
            mouseY=positions[1];
        }

        if (res == 'down') {
            if (!this.closestParent.hasClass('no-validation-error')) {
                this.closestParent.addClass('no-validation-error');
                remove_field_error(this.canvas);
            }

            if (this.coords.length<1) {
                var sh=this.elid.replace("-control-","-control");
                var sheld=document.getElementById(sh+"-del");
                sheld.style.visibility="visible";
            }

            if (this.started==false) {  this.coords=[]; coords=[];  this.started=true; started=true;  this.flag=false; }
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = mouseX;
            this.currY = mouseY;
            this.flag = true;
        }

        if (res == 'up' || res == "out") {
            this.flag = false;  flag=false;
        }

        if (res == 'move') {
            if (this.flag) {
                this.prevX = this.currX;
                this.prevY = this.currY;
                this.currX = mouseX;
                this.currY = mouseY;
                this.draw();
            }
        }
    }
}

function signagain(cid,who) {
    $('#signd'+cid).css("display","block");
    $('#anchor'+cid).hide();
    var parent=$('#id123-control-'+cid).parent();
    var width=parent.outerWidth();
    var height=128;
    $('#id123-control-'+cid).prop({width:width, height:height});
    who.width=width;
    who.height=height;
    who.erase();
}

function open_tinybox(content, params, frame_width, frame_height, parentLinkId) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var params = params.split(',');
    var vars = new Array();
    for (var i=0; i < params.length; i++) {
        var aux = params[i].split('=');
        vars[aux[0]] = aux[1];
    }
    if (content == 'tos') {
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                var content_tos = xmlhttp.responseText;

                var offset = $('#'+parentLinkId).offset();
                var lightBoxTop = offset.top - frame_height;
                if (lightBoxTop<50) lightBoxTop=50;

                maxh = parseInt( $( window ).height() * 0.8 );
                if(frame_height > maxh){
                    frame_height = maxh;
                }
                lastFocusElement = document.activeElement.id;
                if( isMobile.any())
                {
                    //TPI Old Way: var lightBoxTop = offset.top - Math.round(frame_height/2); bug pe mobil era prea jos Tiny
                    if(offset.top - Math.round(frame_height/2)<100){
                        var lightBoxTop = 150;
                    } else{
                        var lightBoxTop = offset.top - Math.round((frame_height*1.5)/2);
                    }
                    TINY.box.show({html:"<div id='class123-bicTOSFrame-"+vars['c_id']+"' style='max-height:"+frame_height+"px; outline-color: transparent; overflow: auto;' role='dialog'  tabindex='-1' aria-labelledby='tosDialog'><div id='tosDialog'>"+content_tos, boxid:'frameless', width:0, height:0, fixed:false, maskid:'bluemask', maskopacity:40, top: lightBoxTop});
                    setTimeout( function() {
                        scroll_to_element('frameless');
                        $( "#class123-bicTOSFrame-"+vars['c_id']+"" ).trigger( "focus" );
                        $(".form-container").attr("aria-hidden","true");
                    } ,1000);

                }else{
                    TINY.box.show({html:"<div id='class123-bicTOSFrame-"+vars['c_id']+"' style='max-height:"+frame_height+"px; outline-color: transparent; overflow: auto;' role='dialog' tabindex='-1' aria-labelledby='tosDialog'><div id='tosDialog'>"+content_tos, boxid:'frameless', width:frame_width, height:frame_height, fixed:false, maskid:'bluemask', maskopacity:40, top: lightBoxTop});
                    setTimeout( function() { scroll_to_element('frameless');
                        $( "#class123-bicTOSFrame-"+vars['c_id']+"" ).trigger( "focus" );
                        $(".form-container").attr("aria-hidden","true");
                    } ,1000);
                }
            }
        }
        xmlhttp.open('GET', '/includes/ajax_calls.php?action=get_tos&c_id='+vars['c_id']+"&t="+Math.random(), true);
        xmlhttp.send();
    }

}
function insertPleaseWaitDiv(elem, txt)
{
    if ($(elem).is(':visible')) {

        $(elem).hide();
        var theParent = elem.parentNode;
        var newText = document.createElement('button');
        if (txt.trim() == '') {
            newText.style.display = 'none';
        }
        newText.innerHTML = txt;
        submitted = true;
        newText.className = 'btn after-click-btn--disable';
        newText.style.backgroundColor = '#B4B4B4';
        theParent.insertBefore(newText, elem.nextSibling);

        var submit_width = $("#id123-button-send").outerWidth();
        $('.after-click-btn--disable').css({"min-width": submit_width + "px"});
        $('.after-click-btn--disable').attr('disabled', 'disabled');
        $('.after-click-btn--disable').click(function (e) {
            e.preventDefault();
            return false;
        });
    }

}

function insertUploadingPleaseWaitButtonMask(submitButtonsWrapper)
{
    if (submitButtonsWrapper.find('.uploading-btn--disable:visible').length == 0) {
        var submitButtons = submitButtonsWrapper.find('[type="submit"], [type="image"]');

        for (var i = 0; i < submitButtons.length; i++) {
            $(submitButtons[i]).addClass('hidden');
        }

        $('.after-click-btn--disable').hide();

        var submitButtonsParentDOM = $(submitButtons[0]).parent().get(0);

        var uploadingPleaseWaitButton = document.createElement('button');

        uploadingPleaseWaitButton.className = 'btn uploading-btn--disable';
        uploadingPleaseWaitButton.style.backgroundColor = '#B4B4B4';

        submitButtonsParentDOM.insertBefore(uploadingPleaseWaitButton, submitButtons[0]);

        var submit_width = $("#id123-button-send").outerWidth();

        $('.uploading-btn--disable').css({"min-width": submit_width + "px"});
        $('.uploading-btn--disable').click(function (e) {
            e.preventDefault();
            return false;
        });
    }

}

function removeUploadingPleaseWaitButtonMask(submitButtonsWrapper)
{

    $('.uploading-btn--disable').remove();

    if ($('.after-click-btn--disable').length > 0) {
        $('.after-click-btn--disable').show();
    } else {
        var submitButtons = submitButtonsWrapper.find('[type="submit"], [type="image"]');

        for (var i=0; i < submitButtons.length; i++) {
            $(submitButtons[i]).removeClass('hidden');
        }
    }
}


//countdown timer
(function() {

    (function($) {
        $.countdown = function(el, options) {
            var getDateData,
                _this = this;
            this.el = el;
            this.$el = $(el);
            this.$el.data("countdown", this);
            this.init = function() {
                _this.options = $.extend({}, $.countdown.defaultOptions, options);
                if (_this.options.refresh) {
                    _this.interval = setInterval(function() {
                        return _this.render();
                    }, _this.options.refresh);
                }
                _this.render();
                return _this;
            };
            getDateData = function(endDate) {
                var dateData, diff;
                endDate = Date.parse($.isPlainObject(_this.options.date) ? _this.options.date : new Date(_this.options.date));
                diff = (endDate - Date.parse(new Date)) / 1000;
                if (diff <= 0) {
                    diff = 0;
                    if (_this.interval) {
                        _this.stop();
                    }
                    _this.options.onEnd.apply(_this);
                }
                dateData = {
                    years: 0,
                    days: 0,
                    hours: 0,
                    min: 0,
                    sec: 0,
                    millisec: 0
                };
                if (diff >= (365.25 * 86400)) {
                    dateData.years = Math.floor(diff / (365.25 * 86400));
                    diff -= dateData.years * 365.25 * 86400;
                }
                if (diff >= 86400) {
                    dateData.days = Math.floor(diff / 86400);
                    diff -= dateData.days * 86400;
                }
                if (diff >= 3600) {
                    dateData.hours = Math.floor(diff / 3600);
                    diff -= dateData.hours * 3600;
                }
                if (diff >= 60) {
                    dateData.min = Math.floor(diff / 60);
                    diff -= dateData.min * 60;
                }
                dateData.sec = diff;
                return dateData;
            };
            this.leadingZeros = function(num, length) {
                if (length == null) {
                    length = 2;
                }
                num = String(num);
                while (num.length < length) {
                    num = "0" + num;
                }
                return num;
            };
            this.update = function(newDate) {
                _this.options.date = newDate;
                return _this;
            };
            this.render = function() {
                _this.options.render.apply(_this, [getDateData(_this.options.date)]);
                return _this;
            };
            this.stop = function() {
                if (_this.interval) {
                    clearInterval(_this.interval);
                }
                _this.interval = null;
                return _this;
            };
            this.start = function(refresh) {
                if (refresh == null) {
                    refresh = _this.options.refresh || $.countdown.defaultOptions.refresh;
                }
                if (_this.interval) {
                    clearInterval(_this.interval);
                }
                _this.render();
                _this.options.refresh = refresh;
                _this.interval = setInterval(function() {
                    return _this.render();
                }, _this.options.refresh);
                return _this;
            };
            return this.init();
        };
        $.countdown.defaultOptions = {
            date: "June 7, 2087 15:03:25",
            refresh: 1000,
            onEnd: $.noop,
            render: function(date) {
                return $(this.el).html("" + date.years + " years, " + date.days + " days, " + (this.leadingZeros(date.hours)) + " hours, " + (this.leadingZeros(date.min)) + " min and " + (this.leadingZeros(date.sec)) + " sec");
            }
        };
        $.fn.countdown = function(options) {
            return $.each(this, function(i, el) {
                var $el;
                $el = $(el);
                if (!$el.data('countdown')) {
                    return $el.data('countdown', new $.countdown(el, options));
                }
            });
        };
        return void 0;
    })(jQuery);

}).call(this);

function start_form_timer(time_left,locked, time_h, time_min, time_sec) {

    if (!locked) { timer_refresh=1000;}
    else timer_refresh=false;

    var now= (+new Date());
    var time=now+time_left;
    time=+(new Date)+time_left;
    $('.countdown').countdown({
        date: time,
        refresh:timer_refresh,
        render: function(data) {
            $(this.el).html("<span class=\"hours-value\">"+this.leadingZeros(data.hours, 2) + "</span><span class=\"hours-label\">" + time_h + "</span> <span  class=\"minutes-value\">" + this.leadingZeros(data.min, 2) + "</span><span class=\"minutes-label\">" + time_min + "</span><span  class=\"seconds-value\">" + this.leadingZeros(data.sec, 2) + "</span><span class=\"seconds-label\">" + time_sec + "</span><div style=\"clear:both;\"></div>");
            if (data.hours==0) if (data.min==0) if (data.sec<4) 	{
                var buts=$('.navigationButtons, .thebuttons').find('input[type="submit"],input[type="button"]');
                if (buts.length>0) {
                    for(i=0;i<buts.length;i++) {
                        var but=buts.eq(i);
                        if (but.attr("id")!='id123-button-send') but.addClass("hidden");
                    }
                }
            }

        },
        onEnd: function() {
            submitform();
        }
    });
}

function submitform() {
    if (submitted) return false;
    $('#activepage').val($('#totalpages').val());
    $('#nextpagenr').val($('#totalpages').val()+1);
    var approval_button=$('input[name="justsendforapproval"]');
    if (approval_button.length>0) {
        approval_button.remove();
        $('#mainform123').append('<input type="hidden" name="justsendforapproval" value="Send" />');
    }
//return;
    $('#mainform123').submit();

}
function customRadioImage(element_id,group_class)
{
    var eenable=0;
    if($('#'+element_id).is(':enabled')) {
        eenable=1;
        $('label[for="'+element_id+'"]').closest('.rowdownsmall').find('span').removeClass('customRadioImageChecked');
        $('label[for="'+element_id+'"]').closest('.rowright').find('span').removeClass('customRadioImageChecked');
    }
    if (eenable==0){
        return false;
    }
    $('#'+element_id).attr('checked', 'checked');
    $('#'+element_id).css('height', '50px');
    $('label[for="'+element_id+'"]').closest('.rowdownsmall').find('.customRadioButton').css('background-position','0px 0px');
    $('label[for="'+element_id+'"]').closest('.rowright').find('.customRadioButton').css('background-position','0px 0px');
    $('label[for="'+element_id+'"]').find('.customRadioButton').first().css('background-position','0px -50px');
}

function prepare_send_for_input() {

    if ($('input[type="text"]').length==0) return;

    $('input[type="text"], input[type="email"], input[type="url"] ').on("keypress",function(event) {
        if (event.keyCode == 13) {
            event.returnValue = false;
            if(event.preventDefault) { event.preventDefault();}
            //	$('input:visible[type="submit"]').last().trigger("click");

            if($('#goNextPage').length>0) {

                if (($('#goNextPage').css('display')!="none") && ($('.currentPageActive #goNextPage').length>0)) {

                    $('#goNextPage').trigger("click");
                    return true; }
            }
            if($('#id123-button-showsummary').length>0) {
                if (( $('#id123-button-showsummary').css('display')!="none") && ($('.currentPageActive #id123-button-showsummary').length>0)) {$('#id123-button-showsummary').trigger("click");
                    return; }
            }
            if (($('#id123-button-send').length>0)&& ($('.currentPageActive #id123-button-send').length>0)) {
                if ( $('#id123-button-send').css('display')!="none" ) {$('#id123-button-send').trigger("click");
                    return; }
            }

        }
    });
}

// adrian
$(function() {
    $('input[type="radio"],[type="checkbox"]').on("keypress",function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    });
});

function otherRemoveValue(fieldId, checkboxID, type, radioOtherValue) {
    if(type == 'radio') {
        if($('#'+checkboxID).val() != radioOtherValue) {
            if($('#id123-control'+fieldId+'-other').val() != '') $('#id123-control'+fieldId+'-other').val('');
        }
    } else {
        if(!$('#'+checkboxID).is(':checked')) {
            if($('#id123-control'+fieldId+'-other').val() != '') $('#id123-control'+fieldId+'-other').val('');
        }
    }
}


jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});

function formsavetime()
{
    setTimeout(function() {
        window.lastactiontime=Math.round(new Date().getTime());
        clearTimeout(fields_timeout);
        clearTimeout(calculations_timeout);
        myformsavetimer();
    },10);



}



function prepare_validation() {

    setSelectFocusBlur();

    if ($('#checkout_form').length>0) {
        $("#checkout_form").validate({ ignore: ".forceValid, :hidden, :disabled", errorElement:'span', invalidHandler: function(event, validator){
            $('button.after-click-btn--disable').remove();
            $('#payment-submit').css('display', 'inline-block');
        }});
    } else if($('#checkout_form_paypal').length>0) {
        $("#checkout_form_paypal").validate({ ignore: ".forceValid, :hidden, :disabled", invalidHandler: function(event, validator){
            $('button.after-click-btn--disable').remove();
            $('#payment-submit').css('display', 'inline-block');
        }});
    } else {
        $('#mainform123').validate({ ignore: ".forceValid, :hidden, :disabled", invalidHandler: function(event, validator){
                $('button.after-click-btn--disable').remove();
                $('#payment-submit').css('display', 'inline-block');
        }});
    }
    return false;
}

function elementInViewport(el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    var top = el.offsetTop;
    var left = el.offsetLeft;

    return Array(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        ,left,top);

    return (Array($(el).visible(true),left,top));
}

function changeTimeValue(timeInput, cid) {
    var timeInputId = $(timeInput).attr('id');
    var timeInputVal = $(timeInput).val();
    var inputNumberArr = timeInputId.split('-');
    var inputNum = inputNumberArr[inputNumberArr.length - 1];
    var hourInput24 = '#id123-control'+cid+'-4';
    var minuteInput24 = '#id123-control'+cid+'-5';
    var hourInput12 = '#id123-control'+cid+'-1';
    var minuteInput12 = '#id123-control'+cid+'-2';
    var amPmInput = '#id123-control'+cid+'-3';
    if(inputNum == '4') {
        if(timeInputVal >= 0 && timeInputVal <= 11) {
            if(timeInputVal == 0) { timeInputVal = 12; }
            $(amPmInput).val("AM");
        } else if(timeInputVal >= 12 && timeInputVal <= 23) {
            timeInputVal = timeInputVal - 12;
            if(timeInputVal == 0) { timeInputVal = 12; }
            $(amPmInput).val("PM");
        } else {
            timeInputVal = 12;
            $(amPmInput).val("AM");
            $(hourInput24).val("00");
        }
        timeInputVal = timeInputVal < 10 && timeInputVal.length < 2 ? "0"+timeInputVal : timeInputVal;
        $(hourInput12).val(timeInputVal);
    }

    if(inputNum == '5') {
        if(timeInputVal < 0 ) {
            timeInputVal = 0;
            $(minuteInput24).val("00");
        } else if( timeInputVal > 59 ) {
            $(minuteInput24).val("59");
            timeInputVal = 59;
        } else if(!$.isNumeric(timeInputVal)) {
            $(minuteInput24).val("");
            timeInputVal = 0;
        }
        $(minuteInput12).val(timeInputVal);
    }
}

function sync_time(cid, is24Timeformat) {
    if(typeof is24Timeformat == 'undefined'){
        is24Timeformat = false;
    } else {
        is24Timeformat = true;
    }
    
    var hour12 = $('#id123-control'+cid+'-1').val();
    var minute12 = $('#id123-control'+cid+'-2').val();
    var amPm = $('#id123-control'+cid+'-3').val();
    var hour24_id = '#id123-control'+cid+'-4';
    var minute24_id = '#id123-control'+cid+'-5';
    var hour24 = ~~$(hour24_id).val();
    if(is24Timeformat){
	    if(hour12 >= 12){
	        if(hour12 > 12 ){
		        hour12 = hour12 - 12;
	        }
		    amPm   = 'PM';
		    $('#id123-control'+cid+'-1').val(hour12);
		    $('#id123-control'+cid+'-3').val(amPm);
	    } else {
		    if(hour24 > 12){
			    amPm = 'PM';
		    } else {
			    amPm = 'AM';
		    }
		    $('#id123-control'+cid+'-3').val(amPm);
	    }
    }
	if(hour12 == "" || minute12 == "" || amPm == "") { return; }
    
    var HH = parseInt(hour12);
    var MM = parseInt(minute12);

    if(amPm.toLowerCase() == 'pm' && HH == 12) {
        HH = 12;
    } else if( amPm.toLowerCase() == 'am' && HH == 12 ) {
        HH = 0;
    } else if (amPm.toLowerCase() == 'pm') {
        HH = parseInt(hour12) + parseInt(12);
        if(HH == 24) { HH = 0; }
    }

    HH = HH<10 ? "0"+HH:HH;
    MM = MM<10 ? "0"+MM:MM;
    $(hour24_id).val(HH);
    $(minute24_id).val(MM);
}

function stopCalculateNow()
{	enable_form_bottom_buttons();
    if (window.stopCalculate)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function start_process_debug() {
    window.process_debug=new Date().getTime();
}

function stop_process_debug(label) {
    process_debug_now=new Date().getTime();
    difference=process_debug_now-window.process_debug;
    window.process_debug =-1;
    process_sec=difference/1000;
    //console.log("The process  "+label+"  took: " + difference + " ms => ( " + process_sec + " s )");
}

/**
 * General JS that was inline when it comes to form view.
 */
$(function() {
    /**
     * Form with multiple pages.
     */
    $(".js-form").submit(function() {
        RefreshFrameHeight(1);

        return checkSubmitAllowed(this);
    });

    /**
     * Language dropdown.
     */
    $(".js-language-dropdown").change(function() {
        changeFormLanguage($(this).children("option:selected").val());
    });

    /**
     * Calculate button.
     */
    $(".js-just-calculate").click(function() {
        return_type = $(this).data('return');

        updateformfields(true, 0);

        // Return "false" also when this button is of type "image", as "image" type buttons
        // submit the form by default, which is not the intended behaviour for this control
        if (return_type === 'false' || $(this).attr("type").toLowerCase() === "image") {
            return false;
        }
    });

    /**
     * Previous button.
     */
    $(".js-previous-btn").click(function() {
        document.mainform123.reset();
    });

    /**
     * Print button
     */
    $(".js-print").click(function() {
        window.print();
    });
});

/**
 * convert date from format DD/MM/YYYY to format MM/DD/YYYY
 * @param string
 * @param string - // 1 = DDMMYYYY else - MMDDYYYY
 * @return string
 * @author - zack 2015-08-19
 **/
function convertDateYYYYMMDD ( val, formatType )
{
    var tmp = val.split('/');
    if ( formatType == 1 )
        tmp = [tmp[2], tmp[0], tmp[1] ].join('/');
    else
        tmp = [ tmp[2], tmp[1], tmp[0] ].join('/');

    return tmp;

}

/**
 * compare date
 * @author - zack
 *
 * @param string - left value
 * @param string - right value
 * @param int - compare attribute - 7/8 from form rules
 * @param int - date format 4=MM/DD/YYYY , 5=DD/MM/YYYY
 * @return int - 0 or 1
 **/
function compareDate ( leftmval, rightm, compare, dateFieldFormat )
{
    var formatType = dateFieldFormat == 5?0:1;
    var debug = !true;

    //if ( debug ) console.log ('leftmval='+leftmval);
    //if ( debug ) console.log ('rightm='+rightm);
    //if ( debug ) console.log ('compare='+compare);
    //if ( debug ) console.log ('formatType='+formatType);

    leftmval = convertDateYYYYMMDD (leftmval,  formatType );
    rightm = convertDateYYYYMMDD ( rightm, formatType );

    //if ( debug ) console.log ('leftmval='+leftmval);
    //if ( debug ) console.log ('rightm='+rightm);

    //var left_ts = new Date(leftmval);
    //var right_ts = new Date(rightm);

    //if ( debug ) console.log ('left_ts='+left_ts);
    //if ( debug ) console.log ('right_ts='+right_ts);

    //condtrue = (compare==7)?((left_ts.getTime()>right_ts.getTime())?1:0):(compare==8)?(left_ts.getTime()<right_ts.getTime()?1:0):0;
    condtrue = 0;
    if ( compare == 7)
        condtrue = leftmval>rightm?1:0;
    else if ( compare == 8)
        condtrue = leftmval<rightm?1:0;

    //if ( debug ) console.log ( 'condtrue='+condtrue );

    return condtrue;
}


function initDropdowns() {

    if ($('body').hasClass('new-view-form')) {
        return;
    }

    $( document ).ready(function() {
        var body_element = $('body');

        body_element.on('focus', '.select2-focusser', function() {
            $('.focus').removeClass('focus');
            $(this).closest('.currentPageActive.fieldcontainer').closest('.currentPageActive.fieldcontainer:not(.rowdown)').addClass("focus");
        });

        body_element.on('focus touch click', '.currentPageActive input[type="text"]:visible, .currentPageActive input[type="email"]:visible,  .currentPageActive input[type="url"]:visible, .currentPageActive input[type="password"]:visible, .currentPageActive input[type="radio"]:visible, .currentPageActive input[type="checkbox"]:visible, .currentPageActive input[type="file"]:visible, .currentPageActive textarea', function() {  //, .currentPageActive .stars-rate:visible
            var el=$(this);
            $('.fieldcontainer.focus').removeClass('focus');
            var closest_parent= el.parents('.fieldcontainer').last();
            closest_parent.addClass('focus');
            $('.accepted-choices-row').remove();
            $('.accepted-upload-row').hide();
        });

        body_element.on('blur', '.select2-focusser,.class123-select', function() {  $('.focus').removeClass('focus'); });

        var activeSelects = $('.currentPageActive select, select:visible');

        if (activeSelects.length > 0 && activeSelects.makeSelect !== undefined) {
            activeSelects.makeSelect();
        }


        $('select:not(.js-dropdown-searchable) option').on("click", function() {
            var el = $(this).parent();
            el.prev('.select2-container').removeClass('select2-dropdown-open');
        });
    });
}



function addRippleEffect(selectors) {

    $(selectors.toString()).addClass('ripple-effect');
    /**
     * Created by Kupletsky Sergey on 04.09.14.
     *
     * Ripple-effect animation
     * Tested and working in: ?IE9+, Chrome (Mobile + Desktop), ?Safari, ?Opera, ?Firefox.
     * JQuery plugin add .ink span in element with class .ripple-effect
     * Animation work on CSS3 by add/remove class .animate to .ink span
     */

    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
            top: y+'px',
            left:x+'px'
        }).addClass("animate");
    });
}

function bindInputsBehaviour() {

    var error_inputs = $('.validation-error input[type="text"]:not(.exclude-error-input), .validation-error input[type="email"]:not(.exclude-error-input), .validation-error input[type="url"]:not(.exclude-error-input)');

    if (error_inputs.length>0) {

        error_inputs.on("keyup", function() { // remove input error in click
            var element=$(this);
            element.addClass('exclude-error-input');
        });

        error_inputs.each(function(index, element) { // fix errors bubbles for smaller inputs, removed exclamation image if too small input
            if ($(element).width()<70) $(element).addClass('exclude-error-input');
        });

    }


    $('.validation-error input[type="text"], .validation-error input[type="email"], .validation-error input[type="url"],.validation-error input[type="password"], textarea').on("keyup", function() {
        var el=$(this);
        var parent=$(this).parent();
        var label=parent.find('label');
        parent.closest('.validation-error').removeClass('validation-error')
        var fielderror=parent.closest('.currentPageActive').find('.fielderror');
        if (label.length>0)
            if (el.val()=="") {label.removeClass("hidden"); }
            else {  label.addClass("hidden"); }
        if (!el.hasClass('no-validation-error'))  {
            el.addClass('no-validation-error');
            hide_field_error(this);
        }
        fielderror.hide();
    });

    $('.input-required').on("keyup", function() {
        var el=$(this);
        var parent=$(this).parent();
        var label=parent.find('label');
        if (label.length>0)
            if (el.val()=="") {label.show();}
            else label.hide();
    });

    $('.input-required').on("focus", function() {
        var el=$(this);
        var parent=$(this).parent();
        var label=parent.find('label');
        if (label.length>0)
            label.hide();
    });

    $('.input-required').on("blur", function() {
        var el=$(this);
        var parent=$(this).parent();
        var label=parent.find('label');
        if (label.length>0)
            if (el.val()=="")
                label.show();
    });

    $('.currentPageActive input, select, textarea').on("focus", function() {
        $('.class123-labelhidden:not(.hidden_instruction)').addClass('hidden_instruction');
        if (!($(this).hasClass('no-validation-error'))) {
            if(typeof isHiltiCustomJs == 'undefined')
                $(this).addClass('no-validation-error');
        }
        $(this).parents('.fieldcontainer').last().find('.hidden_instruction').removeClass('hidden_instruction');
    });

    setSelectFocusBlur();

}

//am comentat apelarea acestei functi deoarece strica functionalitatea de la Accesibility aceasta functie e folosita doar pentru IE9 sau IE8
function fixPlaceholders() {

    $('input[placeholder],textarea[placeholder]').focus(function(){
        if($(this).is(':disabled, [readonly]')) {
            return;
        }

        $(this).data('placeholder',$(this).attr('placeholder'))
            .attr('placeholder','');
    }).blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

}

function initDatepickers() {
    var dates=$('[data-toggle="datepicker"]');

    if (dates.length==0) return false;

    htm = '<div id="datepick_over" style="display: block; overflow: hidden; display:none; height: 0px;"></div>';
    $('body').append(htm);
    adjust = 0;
    $.each( dates, function( i, date_input ) {

        adjust = 0;
        var week_start = 0;
        if (typeof($(date_input).data('week-start')) !="undefined")
            if ($(date_input).data('week-start')>0)
                week_start = $(date_input).data('week-start'); //pick start date

        var datePickerOptions = {};
        datePickerOptions.enableOnReadonly = false;
        datePickerOptions.autoclose = true;
        datePickerOptions.orientation = "auto";
        datePickerOptions.todayHighlight = true;
        datePickerOptions.weekStart = week_start;

        if (typeof($(date_input).data('end-date')) !="undefined") {
            if ($(date_input).data('end-date').length > 0) {
                datePickerOptions.endDate = $(date_input).data('end-date');
            }
        }
        if (typeof($(date_input).data('start-date')) !="undefined") {
            if ($(date_input).data('start-date').length > 0) {
                datePickerOptions.startDate = $(date_input).data('start-date');
            }
        }

        $(date_input).datepicker(datePickerOptions)
            .on('show', function(e) {
                $(this).parents('.fieldcontainer').last().find('.hidden_instruction').removeClass('hidden_instruction');
                hide_field_error(this);
                bottom_space = parseInt($('body').outerHeight()) - (parseInt($(date_input).offset().top) + parseInt($(date_input).outerHeight()));
                min_bottom = parseInt($('.datepicker-dropdown').height())+15;
                if(min_bottom > bottom_space){
                    adjust = min_bottom - bottom_space;
                    $('#datepick_over').height(adjust);
                    $('#datepick_over').show();
                }
            }).on('hide',function(e){
            $('#datepick_over').height(0);
            $('#datepick_over').hide();
        });
    });


}

function hide_field_error(element) {
    var element_parent = $(element).closest('.fieldcontainer');
    if (element_parent.parent().closest('.fieldcontainer').length > 0)
        element_parent = element_parent.parent().closest('.fieldcontainer');
    if (element_parent.length>0) {
        element_error=element_parent.removeClass('validation-error').find('.fielderror');
        if (element_error.length>0)
            element_error.hide();
    }
}


function remove_field_error(element) {
    var element_parent = $(element).closest('.fieldcontainer');
    if (element_parent.parent().closest('.fieldcontainer').length > 0)
        element_parent = element_parent.parent().closest('.fieldcontainer');
    if (element_parent.length>0) {
        element_error=element_parent.removeClass('validation-error').find('.fielderror');
        if (element_error.length>0)
            element_error.remove();
    }
}

function add_upload_error(element, message) {
    var existingElement = $(element).parent().closest(".fieldcontainer").find('.fielderror');

    if (existingElement.length > 0) {
        existingElement.html(existingElement.html() + " " + message);
        $(element).parent().closest(".fieldcontainer").find('.accepted-upload-row').removeAttr("style");
    } else {
        $(element).parent().parent().after('<div class="control-row accepted-upload-row" role="alert" aria-live="assertive"><div class="clear"></div><div class="col-lg-12 col-md-12 col-sm-12 fielderror">' + message + '</div></div>');
    }
}

function scroll_to_element(element_id) {

    var scroll_item=$('#'+element_id);

    if (scroll_item.length==0) return;

    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;

    if (is_chrome) {scroll_element='body';}
    else if (is_safari) { scroll_element='body'; }
    else {scroll_element='html';  }
    if (scroll_item.length>0)
        $(scroll_element).animate( {
            scrollTop: scroll_item.offset().top-58
        },800);
}

function bindResizeEvents() {

    var windowsize = $(window).width();

    $( window ).resize(function() {
        windowsizechanged = $(window).width();
        var signatures=$('.digital-signature');
        if (signatures.length>0)  {
            signatures.each(function(index, element) {
                var el=$(element);
                var item_id=el.attr('id').replace("id123-div-","");
                var signature = window['sign'+item_id];

                if (typeof signature == "undefined") return;
                // Copy value when resized
                var signData = {};

                signData.sImage = signature.getSImage();
                signData.imgData = signature.canvas.getContext("2d").getImageData(0, 0, signature.canvas.width, signature.canvas.height);
                if(windowsizechanged != windowsize) {
                    if ( window['sign' + item_id] !== 'undefined') {
                        window['sign' + item_id].erase();
                        window['sign' + item_id].initSignature(signData);
                    }
                }
            });
        }
        smart_fixer();
    });

}


function smart_fixer() {

    if (!window.is_on_mobile) return;

    if ($('.full-height').length>0) {
        var container=$('.full-height');
        var container_width=container.width();
        if (container_width<=480) {
            if (!container.hasClass('container-small'))
                container.addClass('container-small');
        } else {
            if (container.hasClass('container-small'))
                container.removeClass('container-small');
        }

    }
}

function detectMobile() {
    window.is_on_mobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
}


$(function() {
    detectMobile();
    initDropdowns();
    initDatepickers();
    addRippleEffect(['button']);
    bindInputsBehaviour();
    //fixPlaceholders();
    bindResizeEvents();
    smart_fixer();
    if (typeof fid !== 'undefined' && (fid === 52 || fid === 271209 || fid === 37173 || fid === 224445 || fid === 688124))
        setTimeout(track_form_performance, 10000);
});

function track_form_performance()
{
    // Check performance support
    if (performance === undefined) {
        return;
    }

    // Get a list of "resource" performance entries
    var resources = performance.getEntriesByType("resource");
    if (resources === undefined || resources.length <= 0) {
        return;
    }

    CFTracker && CFTracker.track('form_'+fid+'_performance', resources.length, { 'type' : 'resources' });
    return;


}

$(document).ready(function() {
    $('.clear-choices').on('click',function(e){
        e.preventDefault();
        var field = $(this).attr('rel');

        $('input[name="control'+field+'"]').each(function(key,el) {
            if($(el).is(':checked'))
            {
                $('#'+$(el).attr('id')).removeProp('checked');
                $('#clear_'+field).hide();
                InputRules($(el).attr('id'));
            }
        });
    });

    $('.clear-choices').keydown(function(e) {

        if(e.keyCode == 32) {
            e.stopImmediatePropagation();
            e.preventDefault();
            e.stopPropagation();
            var field = $(this).attr('rel');

            $('input[name="control'+field+'"]').each(function(key,el) {
                if($(el).is(':checked'))
                {
                    $('#'+$(el).attr('id')).removeProp('checked');
                    $('#clear_'+field).hide();
                    InputRules($(el).attr('id'));
                }
            });
        }
    }); 

    if( $('.fieldcontainer').find('.fieldtype-2-0') ){
        var rootElem = $('.fieldtype-2-0').parent();
        rootElem.find('.instruction-code').css('margin-top', '0px');
    }
    if( $('.fieldcontainer').find('.fieldtype-3-0') ){
        var rootElem = $('.fieldtype-3-0').parent();
        rootElem.find('.instruction-code').css('margin-top', '0px');
    }



});

$(document).ready(function() {

    $('.one-option-class.class123-radio, .caption-live').on('click', function(){

        var self = $(this).parent().find('input[type=radio]');
        var name = self.attr('name');
        if(typeof name != 'undefined') {
            var numb = name.match(/\d/g);
            var field = numb.join("");

            if( $('#clear_'+field).length ) {
                $('#clear_'+field).show();
            }
        }
    });
});


var computeFormSignature = (function(){

    var isComputed = false;

    return function(){

        if (isComputed) {
            return;
        }

        var style;

        if (style = document.getElementById('formdata-initial-rules')) {

            style.parentNode.removeChild(style);
            isComputed = true;
            return;

        }

        var hideIDFields = [],
            formURL = window.location.pathname + window.location.search;

        $('[id^="fieldcontainer"]').each(function(){

            if (this.offsetHeight === 0) {
                hideIDFields.push(~~String(this.id).replace(/^fieldcontainer/g,''));
            }

        });

        isComputed = true;

        if (!hideIDFields.length) {
            return;
        }

        // schedule a form signature sending to server
        setTimeout(function(){

            if (typeof fid === 'undefined') return false;

            $.ajax({
                "type": "POST",
                "data": {
                    "url": formURL,
                    "fid": fid,
                    "signature": hideIDFields.join(',')
                },
                "url": "/ajax-form-signature.php",
                "dataType": "json"
            }).then(function(){
                // console.log('signature sent to server');
            }).fail(function(){
                // console.log('signature could not be sent to server!');
            }).always(function(){
                // console.log('form signature part completed');
            });

        }, 100);

    };

})();

function uploadFolder(item, uploadToDirectory) {
    var element = $(item);
    var uploadIndex = element.data('upload-index');
    var uploadFile =$('#fileupload-' + uploadIndex);
    if (uploadToDirectory) {
        uploadFile.prop('directory', 'directory')
            .prop('webkitdirectory', 'webkitdirectory');
    } else {
        uploadFile.removeAttr('directory')
            .removeAttr('webkitdirectory');
    }

    uploadFile.show();
    uploadFile.focus();
    uploadFile.trigger('click');
    uploadFile.hide();
}

function mayUseUploadFolder() {
    var input = document.createElement("input");
    input.type = "file";
    var inputFiles = document.querySelectorAll("input[type=file]")[0];
    return (
        !navigator.userAgent.match(/Android/i) // exclude Android OS
        && (
            !!("webkitdirectory" in (input || inputFiles ))
            || !!("mozdirectory" in (input || inputFiles ))
            || !!("directory" in (input || inputFiles ))
            || !!("msdirectory" in (input || inputFiles ))
            || !!("odirectory" in (input || inputFiles ))
        )
    );
}

function isEmbeddedInIFrame() {
    try {
        return window.parent.location.href !== window.location.href}
    catch(err)  {
        return true;
    }
}

/**
 * @author Zack
 * @param elemId
 */
function setSelectFocusBlur() {

    $('select').on("focus", function() {
        $("#s2id_"+$(this).attr("id")).css('outline','1px dashed #c9c9c9');
    });

    $('select').on("blur", function() {
        $("#s2id_"+$(this).attr("id")).css('outline','none');
    });

}
(function() {

    var beforePrint = function() {
        //console.log('Functionality to run before printing.');
    };

    var afterPrint = function() {
        //console.log('Functionality to run after printing');
        $('.class123_maintable').hide(0).delay(0).show(0);
    };

    if (!!window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;

}());

(function() {
    /**
     * Check/control the "submission allowed" state of the form
     * @author Catalin Avasiloaei
     */
    function FormSubmissionGuard() {
        var formId = "mainform123";
        var isBlockedInteraction = false;
        var lastClickedSubmitButton = null;
        var lastTouch = 0;
        var touchThreshold = 800; // milliseconds
        var uid = 0;
        var activeRequestsCount = 0;
        var activeRequests = {};

        // Use jQuery's built-in handler to detect new Ajax calls
        $(document).ajaxSend(function (e, xhr, settings) {
            if (isTrackableRequest(settings)) {
                settings.trackerId = String(uid++);
                activeRequests[settings.trackerId] = [xhr, settings];
                activeRequestsCount++;
            }
        });
        // Use jQuery's built-in handler to detect completed Ajax calls
        $(document).ajaxComplete(function (e, xhr, settings) {
            if (isTrackedRequest(settings)) {
                delete activeRequests[settings.trackerId];
                activeRequestsCount--;
            }
        });

        // Keep track of the most recently touched submission trigger
        // Used to determine the user's exact intention (nextPage, previousPage, submit etc.)
        $(document).on("click",
            "#"+formId+" input[type='submit'], " +
            "#"+formId+" input[type='image'], " +
            "#"+formId+" button[type='submit'], " +
            "#"+formId+" button[type='image']",
            function() {
                // if (!isBlockedInteraction) {
                //     lastClickedSubmitButton = this;
                //     // Prevent the "ripple" effect, as further clicks will be done programmatically
                //     setTimeout(function() {
                //         $(lastClickedSubmitButton).children("span.ink").css("display", "none");
                //     }, 100);
                // }
            }
        );

        var isTrackableRequest = function(settings) {
            return ("url" in settings && settings.url.match(/^\/{0,1}ajax_form\.php/));
        };

        var isTrackedRequest = function(settings) {
            return ("trackerId" in settings && settings.trackerId in activeRequests);
        };

        this.touch = function() {
            if (!isBlockedInteraction) {
                lastTouch = (new Date()).getTime();
            }
        };

        this.isSubmissionAllowed = function() {
            // Allow form submission if:
            // "touchThreshold" milliseconds have passed since the last FormSubmissionGuard touch and
            // there are no (tracked - see isTrackableRequest()) ongoing Ajax requests
            return ((new Date).getTime() - lastTouch > touchThreshold && !activeRequestsCount);
        };

        this.blockFormInteraction = function() {
            if (!isBlockedInteraction) {
                // Restrict interactions with any of the form's elements,
                // except the most recently used submission trigger button (if any)
                $("#" + formId).on("click keypress", function(e) {
                    if (e.target !== lastClickedSubmitButton) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                        return false;
                    }
                });
                // Remember the form interaction is blocked from now on
                isBlockedInteraction = true;
            }
        };

        this.submitForm = function() {
            if (lastClickedSubmitButton) {
                $(lastClickedSubmitButton).trigger("click");
            } else {
                $("#" + formId).submit();
            }
        };
    }
    // Attach one instance to "window"
    window.FormSubmissionGuard = new FormSubmissionGuard();
})();
