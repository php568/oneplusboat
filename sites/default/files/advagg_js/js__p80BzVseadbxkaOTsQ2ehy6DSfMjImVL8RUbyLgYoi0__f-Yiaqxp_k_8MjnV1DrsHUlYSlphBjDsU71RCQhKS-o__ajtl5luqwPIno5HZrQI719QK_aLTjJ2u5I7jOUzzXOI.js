/* Source and licensing information for the line(s) below can be found at https://www.racingdinghies.co.uk/sites/all/modules/captcha/captcha.js. */
(function($){Drupal.behaviors.captcha={attach:function(context){$("#edit-captcha-response").attr("autocomplete","off");}};Drupal.behaviors.captchaAdmin={attach:function(context){$("#edit-captcha-add-captcha-description").click(function(){if($("#edit-captcha-add-captcha-description").is(":checked")){$("div.form-item-captcha-description").show('slow');}
else{$("div.form-item-captcha-description").hide('slow');}});if(!$("#edit-captcha-add-captcha-description").is(":checked")){$("div.form-item-captcha-description").hide();}}};})(jQuery);;;
/* Source and licensing information for the above line(s) can be found at https://www.racingdinghies.co.uk/sites/all/modules/captcha/captcha.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.racingdinghies.co.uk/sites/all/modules/tb_megamenu/js/tb-megamenu-frontend.js. */
Drupal.TBMegaMenu=Drupal.TBMegaMenu||{};(function($){Drupal.TBMegaMenu.menuInstance=false;Drupal.behaviors.tbMegaMenuAction={attach:function(context){$('.tb-megamenu-button').click(function(){if(parseInt($(this).parent().children('.nav-collapse').height())){$(this).parent().children('.nav-collapse').css({height:0,overflow:'hidden'});}
else{$(this).parent().children('.nav-collapse').css({height:'auto',overflow:'visible'});}});var isTouch='ontouchstart'in window&&!(/hp-tablet/gi).test(navigator.appVersion);if(!isTouch){$(document).ready(function($){var mm_duration=0;$('.tb-megamenu').each(function(){if($(this).data('duration')){mm_duration=$(this).data('duration');}});var mm_timeout=mm_duration?100+mm_duration:500;$('.nav > li, li.mega').hover(function(event){var $this=$(this);if($this.hasClass('mega')){$this.addClass('animating');clearTimeout($this.data('animatingTimeout'));$this.data('animatingTimeout',setTimeout(function(){$this.removeClass('animating')},mm_timeout));clearTimeout($this.data('hoverTimeout'));$this.data('hoverTimeout',setTimeout(function(){$this.addClass('open')},100));}else{clearTimeout($this.data('hoverTimeout'));$this.data('hoverTimeout',setTimeout(function(){$this.addClass('open')},100));}},function(event){var $this=$(this);if($this.hasClass('mega')){$this.addClass('animating');clearTimeout($this.data('animatingTimeout'));$this.data('animatingTimeout',setTimeout(function(){$this.removeClass('animating')},mm_timeout));clearTimeout($this.data('hoverTimeout'));$this.data('hoverTimeout',setTimeout(function(){$this.removeClass('open')},100));}else{clearTimeout($this.data('hoverTimeout'));$this.data('hoverTimeout',setTimeout(function(){$this.removeClass('open')},100));}});});}}}})(jQuery);;;
/* Source and licensing information for the above line(s) can be found at https://www.racingdinghies.co.uk/sites/all/modules/tb_megamenu/js/tb-megamenu-frontend.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.racingdinghies.co.uk/sites/all/modules/tb_megamenu/js/tb-megamenu-touch.js. */
Drupal.TBMegaMenu=Drupal.TBMegaMenu||{};(function($){Drupal.TBMegaMenu.createTouchMenu=function(items){items.children('a').each(function(){var $item=$(this);var tbitem=$(this).parent();$item.click(function(event){if($item.hasClass('tb-megamenu-clicked')){var $uri=$item.attr('href');window.location.href=$uri;}
else{event.preventDefault();$item.addClass('tb-megamenu-clicked');if(!tbitem.hasClass('open')){tbitem.addClass('open');}}}).closest('li').mouseleave(function(){$item.removeClass('tb-megamenu-clicked');tbitem.removeClass('open');});});}
Drupal.TBMegaMenu.eventStopPropagation=function(event){if(event.stopPropagation){event.stopPropagation();}
else if(window.event){window.event.cancelBubble=true;}}
Drupal.behaviors.tbMegaMenuTouchAction={attach:function(context){var isTouch='ontouchstart'in window&&!(/hp-tablet/gi).test(navigator.appVersion);if(isTouch){$('html').addClass('touch');Drupal.TBMegaMenu.createTouchMenu($('.tb-megamenu ul.nav li.mega').has('.dropdown-menu'));}}}})(jQuery);;;
/* Source and licensing information for the above line(s) can be found at https://www.racingdinghies.co.uk/sites/all/modules/tb_megamenu/js/tb-megamenu-touch.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.racingdinghies.co.uk/sites/all/modules/google_analytics/googleanalytics.js. */
(function($){Drupal.googleanalytics={};$(document).ready(function(){$(document.body).bind("mousedown keyup touchstart",function(event){$(event.target).closest("a,area").each(function(){if(Drupal.googleanalytics.isInternal(this.href)){if($(this).is('.colorbox')&&(Drupal.settings.googleanalytics.trackColorbox)){}
else if(Drupal.settings.googleanalytics.trackDownload&&Drupal.googleanalytics.isDownload(this.href)){ga("send",{"hitType":"event","eventCategory":"Downloads","eventAction":Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),"eventLabel":Drupal.googleanalytics.getPageUrl(this.href),"transport":"beacon"});}
else if(Drupal.googleanalytics.isInternalSpecial(this.href)){ga("send",{"hitType":"pageview","page":Drupal.googleanalytics.getPageUrl(this.href),"transport":"beacon"});}}
else{if(Drupal.settings.googleanalytics.trackMailto&&$(this).is("a[href^='mailto:'],area[href^='mailto:']")){ga("send",{"hitType":"event","eventCategory":"Mails","eventAction":"Click","eventLabel":this.href.substring(7),"transport":"beacon"});}
else if(Drupal.settings.googleanalytics.trackOutbound&&this.href.match(/^\w+:\/\//i)){if(Drupal.settings.googleanalytics.trackDomainMode!==2||(Drupal.settings.googleanalytics.trackDomainMode===2&&!Drupal.googleanalytics.isCrossDomain(this.hostname,Drupal.settings.googleanalytics.trackCrossDomains))){ga("send",{"hitType":"event","eventCategory":"Outbound links","eventAction":"Click","eventLabel":this.href,"transport":"beacon"});}}}});});if(Drupal.settings.googleanalytics.trackUrlFragments){window.onhashchange=function(){ga("send",{"hitType":"pageview","page":location.pathname+location.search+location.hash});};}
if(Drupal.settings.googleanalytics.trackColorbox){$(document).bind("cbox_complete",function(){var href=$.colorbox.element().attr("href");if(href){ga("send",{"hitType":"pageview","page":Drupal.googleanalytics.getPageUrl(href)});}});}});Drupal.googleanalytics.isCrossDomain=function(hostname,crossDomains){if(!crossDomains){return false;}
else{return $.inArray(hostname,crossDomains)>-1?true:false;}};Drupal.googleanalytics.isDownload=function(url){var isDownload=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([\?#].*)?$","i");return isDownload.test(url);};Drupal.googleanalytics.isInternal=function(url){var isInternal=new RegExp("^(https?):\/\/"+window.location.host,"i");return isInternal.test(url);};Drupal.googleanalytics.isInternalSpecial=function(url){var isInternalSpecial=new RegExp("(\/go\/.*)$","i");return isInternalSpecial.test(url);};Drupal.googleanalytics.getPageUrl=function(url){var extractInternalUrl=new RegExp("^(https?):\/\/"+window.location.host,"i");return url.replace(extractInternalUrl,'');};Drupal.googleanalytics.getDownloadExtension=function(url){var extractDownloadextension=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([\?#].*)?$","i");var extension=extractDownloadextension.exec(url);return(extension===null)?'':extension[1];};})(jQuery);;;
/* Source and licensing information for the above line(s) can be found at https://www.racingdinghies.co.uk/sites/all/modules/google_analytics/googleanalytics.js. */
;/*})'"*/
