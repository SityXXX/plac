// Search
$(function () {
  $('#search').on('focus', function() {
     if($(this).val() == 'Пошук:') {
       $(this).val('');
     }
  });
  $('#search').on('blur', function() {
    if( $(this).val() == '' ) {
      $(this).val('Пошук:');
    }
  })
});
