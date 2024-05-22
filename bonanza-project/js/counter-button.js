$(document).ready(function() {
  $('#increase-btn').click(function() {
      let currentValue = parseInt($('#quantity-input').val());
      $('#quantity-input').val(currentValue + 1);
  });

  $('#decrease-btn').click(function() {
      let currentValue = parseInt($('#quantity-input').val());
      if (currentValue > 1) {
          $('#quantity-input').val(currentValue - 1);
      }
  });
});
