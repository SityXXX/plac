// Search
$(function() {

  // Create a new instance of Headhesive.js and pass in some options
  var header = new Headhesive('.panel');

  $('.search__field').each(function() {

    $(this).on('focus', function() {
      if ($(this).val() == 'Пошук:') {
        $(this).val('');
      }
    });

    $(this).on('blur', function() {
      if ($(this).val() == '') {
        $(this).val('Пошук:');
      }
    });

  });

});
