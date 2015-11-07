// EXERCISE 4
$('.target').on('mouseover', function(){
  $('.target').addClass('highlighted');
});

$('.target').on('mouseleave', function(){
  $('.target').removeClass('highlighted');
});

$('.target').on('mouseover', function(){
  $('img').hide();
});
