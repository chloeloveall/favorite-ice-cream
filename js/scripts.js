$(document).ready(function() {

  const iceCreamsArray = ['Birthday Cake', 'Salted Caramel', 'Chocolate', 'Vanilla'];

  iceCreamsArray.forEach(function(iceCream) {
  $('#whatILove').append('I love ' + iceCream + '! ');
  });

});