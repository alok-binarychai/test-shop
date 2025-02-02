$(document).ready(function () {
  if(localStorage.getItem('type') == null) {
    var type = $('#category-view-type').val();
    var cols = $('#category-grid-cols').val();

    if(type == "list") {
      category_view.initView(type, cols, 'btn-list');
      category_view.customList();
    }

    if(type == 'grid') {
      category_view.initView(type, cols, 'btn-grid-' + cols);
      category_view.customGrid();
    }
  } else {
    var type = localStorage.getItem('type');
    var cols = localStorage.getItem('cols');
    var element = localStorage.getItem('element');

    category_view.initView(type, cols, element);
  }
});

var category_view = {
  'initView' : function (type, cols, element) {
    category_view.changeView(type, cols, element);
  },

  'changeView' : function (type, cols, element) {
    if(type == "grid") {
      $('.custom-products').addClass('custom-products-row');
      $(this).addClass('selected');
      $('#list-view').removeClass('selected');
      
      var column = parseInt(cols);
      if(column == 2) {
        $('#content .product-item').attr('class', 'product-layout product-grid grid-style col-lg-6 col-md-6 col-sm-6 col-xs-6 product-item');
      }
      if(column == 3) {
        $('#content .product-item').attr('class', 'product-layout product-grid grid-style col-lg-4 col-md-4 col-sm-4 col-xs-4 product-item');
      }
      if(column == 4) {
        $('#content .product-item').attr('class', 'product-layout product-grid grid-style col-lg-3 col-md-3 col-sm-3 col-xs-6 product-item');
      }
      if(column == 5) {
        $('#content .product-item').attr('class', 'product-layout product-grid grid-style col-lg-divide-5 col-md-divide-5 col-sm-6 col-xs-6 product-item');
      }

      $('#content .product-grid .col-image').removeClass('col-sm-4 col-sms-4 col-smb-12');
      $('#content .product-grid .col-des').removeClass('col-sm-8 col-sms-8 col-smb-12');
      localStorage.setItem('display', 'grid');

      category_view.customGrid();
    }

    if(type == "list") {

      $('.custom-products').removeClass('custom-products-row');
      $(this).addClass('selected');
      $('#content .product-grid > .clearfix').remove();
      
      $('#content .product-item').attr('class', 'product-layout product-list col-xs-12 product-item');
      $('#content .product-list .col-image').addClass('col-sm-4 col-sms-4 col-smb-12');
      $('#content .product-list .col-des').addClass('col-sm-8 col-sms-8 col-smb-12');

      category_view.customList();
    }

    $('.btn-custom-view').removeClass('active');
    $('.' + element).addClass('active');

    localStorage.setItem('type', type);
    localStorage.setItem('cols', cols);
    localStorage.setItem('element', element);
    $('#content .product-list .col-des .caption').css('height','');
    resizeCollGrid();
    
  },

  'customList' : function() {
    $(".product-item .item").each(function() {
      var caption = $(this).find('.caption');
      $(this).find('.action-links').appendTo(caption);
    });
  },

  'customGrid' : function() {
    $(".product-item .item").each(function() {
      var images_container = $(this).find('.images-container');
      $(this).find('.action-links').appendTo(images_container);
    });
  }
}