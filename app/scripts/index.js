$(".time-tree .year .list").each(function (e, target) {
      var $target=  $(target),
          $ul = $target.find("ul");
      $target.height($ul.outerHeight()), $ul.css("position", "absolute");
  }); 
  $(".time-tree .year>h5>a").click(function (e) {
      e.preventDefault();
      $(this).parents(".year").toggleClass("close");
  });