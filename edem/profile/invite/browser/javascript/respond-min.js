"use strict";jQuery.noConflict();function gs_profile_invite_respond_password_init(){var a=null;
a=GSProfilePasswordToggle("#form\\.password1","#gs-profile-invite-respond-password-set-toggle-widget")
}function gs_profile_invite_respond_init(){jQuery("#form\\.password1").focus();jQuery("#privacy-button").click(function(){var a="/support/policies/privacy/ .gs-products-gscontentmanager>:not(#tabmenu)";
jQuery("#privacy-content").load(a)});jQuery("#rules-button").click(function(){var a="/support/rules/ .gs-products-gscontentmanager>:not(#tabmenu)";
jQuery("#rules-content").load(a)});gsJsLoader.with_module("/++resource++gs-profile-password-toggle-min-20130516.js",gs_profile_invite_respond_password_init)
}jQuery(window).load(gs_profile_invite_respond_init);