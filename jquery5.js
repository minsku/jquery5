
$('nav a').click(function (event) {
  if (this.hash !=='') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
        {
          scrollLeft: $(hash).offset().left,
        },
        1500,
        'easeOutQuint',
        function() {
          window.location.hash = hash;
        }
    )
  }
});

function animateIn(event) {
  if (event.pageY < 100) {
    $('html').unbind('mousemove');
    $('nav').animate(
        {
          opacity: 1,
          left: '0px'
        },
        500,
        function() {
          $('html').mousemove(animateOut);
        },
    );
  }
}

function animateOut(event) {
  if (event.pageY > 100) {
    $('html').unbind('mousemove');
    $('nav')
    .animate({opacity: 0, left: '-200px'}, 500, function() {
        $('html').mousemove(animateIn);
  });
  }
}



  $('html').mousemove(animateIn);
  $('html').mousemove(animateOut);