$(window).load(function () {
  $(".trigger_popup_fricc").click(function(){
     $('.hover_bkgr_fricc').show();
  });
  $('.hover_bkgr_fricc').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
  $('.popupCloseButton').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
});

$(window).load(function () {
  $(".trigger_popup_fricc2").click(function(){
     $('.hover_bkgr_fricc2').show();
  });
  $('.hover_bkgr_fricc2').click(function(){
      $('.hover_bkgr_fricc2').hide();
  });
  $('.popupCloseButton2').click(function(){
      $('.hover_bkgr_fricc2').hide();
  });
});