$(function(){
  $('.main .left').on('click', prev);
  $('.main .right').on('click', next);

  function prev(){
      $('.artGroup article').first().appendTo('.artGroup');
  }
  function next(){
      $('.artGroup article').last().prependTo('.artGroup');
  }

  $('.gallery .left').on('click', prevImg);
  $('.gallery .right').on('click', nextImg);

  function prevImg(){
      $('.imgGroup div').first().appendTo('.imgGroup');
  }
  function nextImg(){
      $('.imgGroup div').last().prependTo('.imgGroup');
  }

  $('.hdrWrap li').click(function(){
    var i = $(this).index();
    var hoff = $('.content').eq(i).offset().top;
    $('html').animate({scrollTop: hoff});
  });
});
