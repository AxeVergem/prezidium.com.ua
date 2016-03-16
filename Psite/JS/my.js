
$(".menuitem").click(function(){
  // удаляем у старого элемента, класс   active  
  $(".menuitem").removeClass("active");
    // добавляем к ссылки по которой щёлкнули класс activeClass
  $(this).addClass("active");
});
