$('.tab').on('click', function(evt) {
    evt.preventDefault();
    $(this).toggleClass('active');
    var sel = this.getAttribute('data-toggle-target');
    $('.tab-content').removeClass('active').filter(sel).addClass('active');
  });

  var text = document.getElementById('text');
  var word = document.getElementsByTagName('span');

  var i = 0;

  function rotator () {
      word[i].style.display = 'none';
      i = (i+1) % word.length;
      word[i].style.display = 'initial';
  }

  setInterval(rotator, 2000);