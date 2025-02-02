function getURLVar(key) {
  var value = [];
  var query = String(document.location).split('?');
  if (query[1]) {
    var part = query[1].split('&');
    for (i = 0; i < part.length; i++) {
      var data = part[i].split('=');
      if (data[0] && data[1]) {
        value[data[0]] = data[1];
      }
    }
    if (value[key]) {
      return value[key];
    } else {
      return '';
    }
  }
}
function isEmpty( el ){
  return !$.trim(el.html())
}
$(document).ajaxStop(function() {
  function isEmpty( el ){
    return !$.trim(el.html())
  }
  if (!isEmpty($('#product'))) {
    $('#product .option-container').addClass('has-option');      
  }	
});

// Sidebar filter setup start
function replaceUrlParam(url, paramName, paramValue) {
  let pattern = new RegExp("\\b(" + paramName + "=).*?(&|$)");
  if (url.search(pattern) >= 0) {
    return url.replace(pattern, "$1" + paramValue + "$2");
  }
  return url + (url.indexOf("?") > 0 ? "&" : "?") + paramName + "=" + paramValue;
}

function filterCollParam(url, loader = true) {
  const wraperAjax = document.getElementById("wraper_ajax");
  loader && wraperAjax.classList.add("show");
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((responseText) => {
      const parser = new DOMParser();
      const responseDoc = parser.parseFromString(responseText, "text/html");

      if (loader) {
        updateElementContent(responseDoc, "#custom-products", "custom-products");
      } else {
        updateElementContent(responseDoc, "#custom-products", "custom-products", true); // for loadmore pagination
      }
      updateElementContent(responseDoc, "#toolbar-products", "toolbar-products");
      updateElementContent(responseDoc, "#column-left", "column-left");
      updateElementContent(responseDoc, "#pagination", "pagination");
      //updateElementContent(responseDoc, "#top_filter_bar", "top_filter_bar");
      //updateElementContent(responseDoc, "#side_filter_bar", "side_filter_bar");
      //updateElementContent(responseDoc, "#active-filters", "active-filters");
      //updateElementContent(responseDoc, "#collection-amount", "collection-amount");

      handleLocalStorageView();

      history.pushState({ page: url }, url, url);

      loader && wraperAjax.classList.remove("show");

      if(window.SPR) {
      SPR?.registerCallbacks();
      SPR?.initRatingHandler();
      SPR?.initDomEls();
      SPR?.loadProducts();
      SPR?.loadBadges();
      }
      initSlider();

      // Handle Wishlist
      

      //filterAttributeHandler();
    })
    .catch((error) => {
      console.error("Fetch error: ", error);
      loader && wraperAjax.classList.remove("show");
    });
}

function updateElementContent(responseDoc, sourceSelector, targetId, isPagination = false) {
  const source = responseDoc.querySelector(sourceSelector);
  const target = document.getElementById(targetId);
  if (source && source.innerHTML.trim() && target) {
    if (isPagination) {
      target.innerHTML += source.innerHTML;
    } else {
      target.innerHTML = source.innerHTML;
    }
  }
}

function updateInnerHtml(selector, sourceDoc) {
  const targetElement = document.querySelector(selector);
  if (targetElement && sourceDoc.querySelector(selector)) {
    targetElement.innerHTML = sourceDoc.querySelector(selector).innerHTML;
  }
}

function handleLocalStorageView() {
  const typeElement = document.getElementById("category-view-type");
  const colsElement = document.getElementById("category-grid-cols");
  if (typeElement && colsElement) {
    const type = typeElement.value;
    const cols = colsElement.value;

    if (!localStorage.getItem("type")) {
      if (cols) {
        if (type === "list") {
          category_view.initView(type, cols, "btn-list");
          //category_view.customPriceBoxList();
        } else if (type === "grid") {
          category_view.initView(type, cols, "btn-grid-" + cols);
          //category_view.customPriceBoxGrid();
        }
      }
    } else {
      const storedType = localStorage.getItem("type");
      const element = localStorage.getItem("element");
      const storedCols = localStorage.getItem("cols");
      category_view.initView(storedType, storedCols, element);
    }
  }
}
// Sidebar filter setup end
// resize code for equal size grids and content start
var img_ratio = 1.0/1.0;
var mass = {
  'resizeGrid': function(section,rows){
    // Equal height grid divs 
    var gridwidth = $(section+' .owl-carousel .owl-item').width();
    $(section+' .owl-carousel .owl-item .item .item-inner .image img').css("height",(gridwidth/img_ratio));
    //var gridwidth = $(section+' .owl-carousel .owl-item').width();
    var gridwidth1 = gridwidth/3.08;
    $(section+'.ocbestsellerproducts .owl-carousel .owl-item .item .item-inner .image img').css("height",(gridwidth1/img_ratio));

    if(rows > 1) {                  
      var gridheight = -1;
      
      $(section+' .owl-carousel .owl-item .item .item-inner .caption').each(function() {
        gridheight = gridheight > $(this).height() ? gridheight : $(this).height();
      });
      $(section+' .owl-carousel .owl-item .item .item-inner .caption').each(function() {
        $(this).height(gridheight);
      });
      
    }
  },
  'equalDivs': function(){
    // for equal height grid divs 
    if ($(window).width() <= 478 ) {
      var gridheight = -1;

      $('.custom-category .col-xs-6 .item .item-inner .caption').each(function() {
        gridheight = gridheight > $(this).height() ? gridheight : $(this).height();
      });

      $('.custom-category .col-xs-6 .item .item-inner .caption').each(function() {
        $(this).height(gridheight - 0);
      });
    }
    // blog page equal height grid divs 
    if ($(window).width() >= 479 ) {
      var gridheight = -1;

      $('.blog-blog .article-list.grid').each(function() {
        gridheight = gridheight > $(this).height() ? gridheight : $(this).height();
      });

      $('.blog-blog .article-list.grid').each(function() {
        $(this).height(gridheight + 10);
      });
    }
  },
  'resizeInsta': function(){
    // Instagram equal height grid divs 
    var gridheight;
    gridheight = $('#instagram_block_home1 .owl-carousel img').width();
    $('#instagram_block_home1 .owl-carousel img').css("height",gridheight);
  },
  'resizethumbs':function(){   
    // product page slideshow thumbs 
    var thumbwidth = $('.additional-images.owl-carousel .owl-stage .owl-item').width();
    $('.additional-images.owl-carousel .owl-item img').css("height",(thumbwidth/img_ratio));
  },
  'resizeRecentGrid':function(){   
    // product page slideshow thumbs 
    var thumbwidth = $('#recently-viewed-products.owl-carousel .owl-stage .owl-item').width();
    $('#recently-viewed-products.owl-carousel .owl-item img').css("height",(thumbwidth/img_ratio));
  }
}

// resize code for equal size grids and content end

$(window).resize(function() {
  setTimeout(function(){
    mass.equalDivs();
    mass.resizeInsta();
    mass.resizeRecentGrid();
  },200);
});



$(document).ready(function() {

  $('.shopify-currency-form select').on('change', function() {
    $(this)
    .parents('form')
    .submit();
  });

  mass.equalDivs();
  mass.resizeInsta();
  

  // sidebar mobile toggle code start 
  if ($(window).width() <=991 ) {

    $('#sidebar-toggle .oc-menu-bar').click(function (e) {
      e.stopPropagation();
      var effect = $(this).closest('#sidebar-toggle.oc-menu').find('.menu-effect').val();
      $('#column-left').addClass('sidebar-toggle');
      $('.sidebar-overlay').toggle();
      if(effect == "none") {
        $('#column-left').toggle();
      }

      if(effect == "fade") {
        $('#column-left').fadeToggle();
      }

      if(effect == "slide") {
        $('#column-left').slideToggle();
      }

    });

    $('#column-left').click(function(e){
      e.stopPropagation();
    });

    $(document.body).click(function(e){
      var effect = $('#sidebar-toggle.oc-menu').find('.menu-effect').val();
      $('.sidebar-overlay').hide();
      if(effect == "none") {
        $('#column-left').hide();
      }
      if(effect == "fade") {
        $('#column-left').fadeOut();
      }
      if(effect == "slide") {
        $('#column-left').slideUp();
      }
    });
  }
  // sidebar mobile toggle code end

  // Adding active class for mobtabs on mobile layout
  $('.mobtab a').click(function(e){
    $('.mobtab a').removeClass('active');
    $(this).addClass('active');
  });
  
  // product video 
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $('.popup-video').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click.
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // Listen for the close event
$(document).on('mfpClose', function () {
  // For iframe (YouTube, Vimeo, Google Maps), reset the src attribute
  $('.mfp-iframe').each(function() {
      var $iframe = $(this);
      var src = $iframe.attr('src');
      $iframe.attr('src', '').attr('src', src);
  });

  $('.popup-video').find('video').each(function() {
    this.pause(); // Pause the video
    this.currentTime = 0; // Optionally, rewind to start
});
  // // For inline videos, if they are HTML5 video tags, pause them
  // $('.mfp-inline-holder').find('video').each(function() {
  //     this.pause(); // Pause the video
  //     this.currentTime = 0; // Optionally, rewind to start
  // });

  // $('.mfp-hide').find('video').each(function() {
  //     this.pause(); // Pause the video
  //     this.currentTime = 0; // Optionally, rewind to start
  // });
});

  
  // color swatch js snippet
  $('.swatch :radio').change(function() {
    var optionIndex = $(this).closest('.swatch').attr('data-option-index');
    var optionValue = $(this).val();
    $(this)
    .closest('form')
    .find('.single-option-selector')
    .eq(optionIndex)
    .val(optionValue)
    .trigger('change');
  });

  // product page add to cart
  $('#button-cart').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/cart/add.js',
      type: 'post',
      data: $('#form_buy input[type=\'text\'], #form_buy select'),
      dataType: 'json',
      beforeSend: function() {
        $('#button-cart').button('loading');
      },
      complete: function() {
        $('#button-cart').button('reset');
      },
      success: function(json) {
        $('.alert, .text-danger').remove();
        $('.form-group').removeClass('has-error');

        if (json['error']) {
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#input-option' + i.replace('_', '-'));
              if (element.parent().hasClass('input-group')) {
                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              } else {
                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              }
            }
          }

          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }

          // Highlight any found errors
          $('.text-danger').parent().addClass('has-error');
        }

        
        $.getJSON('/cart.js', function(cart) {
          load(cart);
        });
        
        
          	toastr.success('Congratulation! Your item has been added.');
          	$('html, body').animate({ scrollTop: 0 }, 'slow');
        

      },
      error: function(xhr, ajaxOptions, thrownError) {
        if(xhr.status == 422 ) {
          toastr.warning("Item variant already added to the cart.");
                         } else {
                         alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      }
    });
  });

  $('#button-cart-sticky').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/cart/add.js',
      type: 'post',
      data: $('#form_buy input[type=\'text\'], #form_buy_sticky select'),
      dataType: 'json',
      beforeSend: function() {
        $('#button-cart-sticky').button('loading');
      },
      complete: function() {
        $('#button-cart-sticky').button('reset');
      },
      success: function(json) {
        $('.alert, .text-danger').remove();
        $('.form-group').removeClass('has-error');

        if (json['error']) {
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#input-option' + i.replace('_', '-'));
              if (element.parent().hasClass('input-group')) {
                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              } else {
                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              }
            }
          }

          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }

          // Highlight any found errors
          $('.text-danger').parent().addClass('has-error');
        }

        $.getJSON('/cart.js', function(cart) {
          load(cart);
        });

		
          	toastr.success('Congratulation! Your item has been added.');
          	$('html, body').animate({ scrollTop: 0 }, 'slow');
        
        
      },
      error: function(xhr, ajaxOptions, thrownError) {
        if(xhr.status == 422 ) {
          toastr.warning('Item variant already added to the cart.');
                         } else {
                         alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      }
    });
  });

  $('#button-cart-buy').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/cart/add.js',
      type: 'post',
      data: $('#form_buy input[type=\'text\'], #form_buy select'),
      dataType: 'json',
      beforeSend: function() {
        $('#button-cart-buy').button('loading');
      },
      complete: function() {
        $('#button-cart-buy').button('reset');
      },
      success: function(json) {
        $('.alert, .text-danger').remove();
        $('.form-group').removeClass('has-error');

        if (json['error']) {
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#input-option' + i.replace('_', '-'));
              if (element.parent().hasClass('input-group')) {
                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              } else {
                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              }
            }
          }

          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }

          // Highlight any found errors
          $('.text-danger').parent().addClass('has-error');
        }

        $.getJSON('/cart.js', function(cart) {
          window.top.location.href="/checkout";
        });

      },
      error: function(xhr, ajaxOptions, thrownError) {
        if(xhr.status == 422 ) {
          toastr.warning("Item variant already added to the cart.");
                         } else {
                         alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      }
    });
  });

  //stickyMenu();
  var sticky_menu = $('#sticky-menu').attr('data-sticky');
  if (sticky_menu==1){
    var headerSpaceH = 0;
    if ($(".common-home").length == 0){  
      if ($(".hd3").length == 0) {
        headerSpaceH = $('header .header-inner').outerHeight(true);
      }
    } else {
      headerSpaceH = $('header').outerHeight(true) + $('header').offset().top;
    }
    $('header').before('<div class="headerSpace unvisible" style="height:'+headerSpaceH+'px;"></div>');	
  }

  // Scroll
  var currentP = 0;
  var stickyOffset1 = 0;
  var stickyOffset = 0;
  stickyOffset = $('header').offset().top;
  stickyOffset += $('header').outerHeight();
  stickyOffset += 30;

  if (!isEmpty($('#product-product'))) {
    stickyOffset1 = $('#form_buy').offset().top;
    stickyOffset1 += $('#form_buy').outerHeight();
  }

  $(window).scroll(function(){
    var headerH = $('header').height();
    var scrollP = $(window).scrollTop();
    var winInnW = window.innerWidth;

    if(scrollP != currentP){
      //Sticky header
      if( winInnW > 991 ){
        //Sticky header
        if (sticky_menu==1){
          if(scrollP >= stickyOffset){
            $('.fix').addClass('fix-header');
            $('.headerSpace').removeClass('unvisible');
            if (($(".hd3").length == 0 ) || ($(".hd4").length == 0)) {
              if (($(".bottom-menu").length == 0)) {
                $('.headerSpace').addClass('show');
              }
            }
          } else {
            $('.fix').removeClass('fix-header');
            $('.headerSpace').addClass('unvisible');
            if (($(".hd3").length == 0 ) || ($(".hd4").length == 0)) {
              if (($(".bottom-menu").length == 0)) {
                $('.headerSpace').removeClass('show');
              }
            }
          }
        }
      }
      if (!isEmpty($('#product-product'))) {

        if(scrollP >= stickyOffset1){
          $('.form_buy_sticky').addClass('fix-header2');
          $('.form_buy_sticky').addClass('fix-header1');
          $('html').css('padding-bottom','64px');
        } else {
          $('.form_buy_sticky').removeClass('fix-header1');
          $('.form_buy_sticky').removeClass('fix-header2');
          $('html').css('padding-bottom','0px');
        } 
      }
      currentP = $(window).scrollTop();
    }
  });

  if (!isEmpty($('#product'))) {
    $('#product .option-container').addClass('has-option');      
  }
  if (!isEmpty($('#product2'))) {
    $('#product2 .option-container').addClass('has-option');      
  }

  // move breadcrumbs
  // $(".header-top").append('<div class="breadcrumbs"><div class="container"></div></div>');	
  var breadcrumb = $('ul.breadcrumb');
  var breadcrumbs_container = $('.breadcrumbs .container');
  //var page_title = $('#content > h1');
  //page_title.appendTo(breadcrumbs_container);
  breadcrumb.appendTo(breadcrumbs_container);


  // Highlight any found errors
  $('.text-danger').each(function() {
    var element = $(this).parent().parent();

    if (element.hasClass('form-group')) {
      element.addClass('has-error');
    }
  });

  /* Search */
  $('#search input[name=\'q\']').parent().find('button').on('click', function() {
    var url = '/search';

    var value = $('#search input[name=\'q\']').val();
    if(value == "Search all products..." || value ==""){
      $('#search .search-content input[name=\'q\']').focus();
      return false;
    }else {
      url += '?type=product&q=' + encodeURIComponent(value);
    }

    location = url;
  });

  $('#search input[name=\'q\']').on('keydown', function(e) {
    if (e.keyCode == 13) {
      $('header #search input[name=\'q\']').parent().find('button').trigger('click');
    }
  });

  // Menu
  $('#menu .dropdown-menu').each(function() {
    var menu = $('#menu').offset();
    var dropdown = $(this).parent().offset();
    var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());
    if (i > 0) {
      $(this).css('margin-left', '-' + (i + 10) + 'px');
    }
  });

  if (localStorage.getItem('display') == null) {
    $('#list-view').trigger('click');
      } else if (localStorage.getItem('display') == 'grid') {
      $('#grid-view').trigger('click');
    } else {
      $('#list-view').trigger('click');
    }
    // Checkout
    $(document).on('keydown', '#collapse-checkout-option input[name=\'email\'], #collapse-checkout-option input[name=\'password\']', function(e) {
      if (e.keyCode == 13) {
        $('#collapse-checkout-option #button-login').trigger('click');
      }
    });
    // tooltips on hover
    $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
    // Makes tooltips work on ajax generated content
    $(document).ajaxStop(function() {
      $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
    });
  });

  // Cart add remove functions
  var cart = {
    'add': function(product_id, quantity,redirect) {
      $.ajax({
        url: '/cart/add.js',
        type: 'post',
        data: 'id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
        dataType: 'json',
        beforeSend: function() {
          var btn = $(this);
          if(redirect) {
            $('.button-cart.button').button('loading');
          } else {
            $('.button-cart > .button').button('loading');
          }

        },
        complete: function() {
          if(redirect) {
            $('.button-cart.button').button('reset');
          } else {
            $('.button-cart > .button').button('reset');
          }
        },
        success: function(json) {
          $('.alert, .text-danger').remove();

          if (json['redirect']) {
            location = json['redirect'];
          }

          toastr.success("Congratulation! Your item has been added.              ");
                         $.getJSON('/cart.js', function(cart) {
            if(redirect) {
              window.top.location.href="/checkout";
            }
          
          toastr.success('Congratulation! Your item has been added.');
          load(cart);
          
          });
        },
        error: function(xhr, ajaxOptions, thrownError) {
          if(xhr.status == 422 ) {
            toastr.warning("Item variant already added to the cart.");
                           } else {
                           alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
          }
        }
      });
    },
    'remove': function(key) {
      $.ajax({
        url: '/cart/update.js',
        type: 'post',
        data: 'updates['+key+']=0',
        dataType: 'json',
        beforeSend: function() {
          //$('#cart > button').button('loading');
        },
        success: function(json) {
          $('#cart > button').button('reset');
          if (getURLVar('route') == '/cart' || getURLVar('route') == '/checkout') {
            location = '/cart';
          } else {
            setTimeout(function () {
              load(json);
            }, 5);       
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert(xhr.responseText);
        }
      });
    }
  }

  function load(cart){
    $('#cart .dropdown-menu > li:first-child .table > tbody > tr').remove();
    $.each(cart.items, function (index, cartItem) {
      var line = index + 1;
      var cents = "";

      if (cartItem.price % 100 < 10) {
        cents = "0";
      }
      var price = parseInt(cartItem.price / 100) + "." + cents + cartItem.price % 100;

      var cartRemove = 'onclick="cart.remove(\''+cartItem.id+'\')"';
      var cartItem = "<tr><td class='text-center'><a href='" + cartItem.url + "' title='" + cartItem.title + "'><img class='cart-image' src='" + cartItem.image + "' alt='" + cartItem.title + "' title='" + cartItem.title + "'></a></td><td class='text-left info-item'><a class='cart-name' href='" + cartItem.url + "'>" + cartItem.title + "</a><p class='cart-quantity'>" + cartItem.quantity + " &times;</p><p class='cart-price'><span class='money'>" + Shopify.formatMoney(price, moneyFormat) + "</span></p></td><td class='text-center cart-close'><button type='button' "+cartRemove+"' title='Remove' class='btn btn-danger btn-xs'><i class='ion-android-close'></i></button></td></tr>";
      $('#cart .dropdown-menu > li:first-child .table > tbody').append(cartItem);
    });
    if (cart.item_count < 1) {
      $('#cart .dropdown-menu > li:first-child .table > tbody').append('<p class="text-center cart-empty">Your shopping cart is empty!</p>');
                                                                       $('#cart .dropdown-menu li:not(:first-child):last-child').removeClass('show');
      $('#cart .dropdown-menu li:not(:first-child):last-child').addClass('hide');
    } else {
      $('#cart .dropdown-menu p.cart-empty').remove();
      $('#cart .dropdown-menu li:not(:first-child):last-child').removeClass('hide');
      $('#cart .dropdown-menu li:not(:first-child):last-child').addClass('show');
    }
    $('#cart > button #cart-total').html(cart.item_count);
    $('#cart > button .total-price').html('<span class=money>'+Shopify.formatMoney(cart.total_price, moneyFormat)+'<i class="fas fa-chevron-down"></i></span>');
    $('#cart-subtotal').html('<span class=money>'+Shopify.formatMoney(cart.total_price, moneyFormat)+'</span>');
    
    if (Currency.cookie.read() != null) {
      Currency.convertAll(shopCurrency, Currency.cookie.read());
    }
    
  }

  /* Agree to Terms */
  $(document).delegate('.agree', 'click', function(e) {
    e.preventDefault();

    $('#modal-agree').remove();

    var element = this;

    $.ajax({
      url: $(element).attr('href'),
      type: 'get',
      dataType: 'html',
      success: function(data) {
        html  = '<div id="modal-agree" class="modal">';
        html += '  <div class="modal-dialog">';
        html += '    <div class="modal-content">';
        html += '      <div class="modal-header">';
        html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
        html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
        html += '      </div>';
        html += '      <div class="modal-body">' + data + '</div>';
        html += '    </div>';
        html += '  </div>';
        html += '</div>';

        $('body').append(html);

        $('#modal-agree').modal('show');
      }
    });
  });

  // Autocomplete */
  (function($) {
    $.fn.autocomplete = function(option) {
      return this.each(function() {
        this.timer = null;
        this.items = new Array();

        $.extend(this, option);

        $(this).attr('autocomplete', 'off');

        // Focus
        $(this).on('focus', function() {
          this.request();
        });

        // Blur
        $(this).on('blur', function() {
          setTimeout(function(object) {
            object.hide();
          }, 200, this);
        });

        // Keydown
        $(this).on('keydown', function(event) {
          switch(event.keyCode) {
            case 27: // escape
              this.hide();
              break;
            default:
              this.request();
              break;
          }
        });

        // Click
        this.click = function(event) {
          event.preventDefault();

          value = $(event.target).parent().attr('data-value');

          if (value && this.items[value]) {
            this.select(this.items[value]);
          }
        }

        // Show
        this.show = function() {
          var pos = $(this).position();

          $(this).siblings('ul.dropdown-menu').css({
            top: pos.top + $(this).outerHeight(),
            left: pos.left
          });

          $(this).siblings('ul.dropdown-menu').show();
        }

        // Hide
        this.hide = function() {
          $(this).siblings('ul.dropdown-menu').hide();
        }

        // Request
        this.request = function() {
          clearTimeout(this.timer);

          this.timer = setTimeout(function(object) {
            object.source($(object).val(), $.proxy(object.response, object));
          }, 200, this);
        }

        // Response
        this.response = function(json) {
          html = '';

          if (json.length) {
            for (i = 0; i < json.length; i++) {
              this.items[json[i]['value']] = json[i];
            }

            for (i = 0; i < json.length; i++) {
              if (!json[i]['category']) {
                html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
              }
            }

            // Get all the ones with a categories
            var category = new Array();

            for (i = 0; i < json.length; i++) {
              if (json[i]['category']) {
                if (!category[json[i]['category']]) {
                  category[json[i]['category']] = new Array();
                  category[json[i]['category']]['name'] = json[i]['category'];
                  category[json[i]['category']]['item'] = new Array();
                }

                category[json[i]['category']]['item'].push(json[i]);
              }
            }

            for (i in category) {
              html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

              for (j = 0; j < category[i]['item'].length; j++) {
                html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
              }
            }
          }

          if (html) {
            this.show();
          } else {
            this.hide();
          }

          $(this).siblings('ul.dropdown-menu').html(html);
        }

        $(this).after('<ul class="dropdown-menu"></ul>');
        $(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));

      });
    }
  })(window.jQuery);