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
  });

  // Create a new instance of Headhesive.js and pass in some options
  var header = new Headhesive('.panel');
  
});
