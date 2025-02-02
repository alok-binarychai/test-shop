$(document).ready(function () { 
  var quickview = $('.quickview');

  var main_image=$('#productModal .modal-body .product-images .main-image img'),

      main_href=$('#productModal .modal-body .product-images .main-image a'),

      other_image=$('#productModal .modal-body .product-images .other-image  ul'),

      rating=$('#productModal .modal-body .product-desc .rating'),

      modal_title=$('#productModal .modal-body .product-info h2'),

      price=$('#productModal .modal-body .product-info .price-box .price'),

      modal_desc=$('#productModal .modal-body .product-info .quick-desc'),

      main_desc_href=$('#productModal .modal-body .product-info .see-all'),

      share=$('#productModal .modal-body .product-info .social-sharing'),

      btn_add=$('#productModal .modal-body .product-info .quick-add-to-cart .single_add_to_cart_button');

  var field_add=$('#productModal .modal-body .product-info .quick-add-to-cart #id'),

      btn_compare=$('#productModal .modal-body .product-info .button-group .btn-compare'),

      btn_wishlist=$('#productModal .modal-body .product-info .button-group .btn-wishlist'); 		

  $('body').on('click', '.quickview', function (){
    other_image.empty();

    rating.empty();

    price.empty();

    var product_info=$(this).data('productinfo');		
    main_image.attr('src',product_info['images'][0]);

    main_href.attr('href','/products/'+product_info['handle']);

    main_desc_href.attr('href','/products/'+product_info['handle']);

    var arr_image=product_info['images'];

    for(var i=0;i<arr_image.length&&i<3;i++){ 			

      other_image.append('<li><img style="width:78px;cursor:pointer" class="img-thumbnail other-image" src="'+arr_image[i]+'"></li>')
    }

    $('.other-image').click(function(){
      main_image.attr('src',$(this).attr('src'));
    });

    modal_title.html(product_info['title']);

    var desc = product_info['description'];
    var res = desc.trim();
    modal_desc.html(res.substring(0, 150));
    rating.append('<span class="shopify-product-reviews-badge" data-id="'+ product_info["id"] +'"></span>');

    if(product_info['price']){ 		
      if(product_info['compare_at_price']){ 
        if (typeof Currency !== 'undefined') {
          price.append('<span class="new-price"><span class="money">'+ Shopify.formatMoney(product_info["price"], Currency.moneyFormats[shopCurrency].money_format) +'</span></span><span class="old-price"><span class="money">'+ Shopify.formatMoney(product_info["compare_at_price"], Currency.moneyFormats[shopCurrency].money_format) +'</span></span>');
        } else {
          price.append('<span class="new-price"><span class="money">' + Shopify.formatMoney(product_info["price"], moneyFormat) +'</span></span><span class="old-price"><span class="money">'+ Shopify.formatMoney(product_info["compare_at_price"], moneyFormat) +'</span></span>');
        }
      }
      else{ 			
        if (typeof Currency !== 'undefined') {
          price.append('<span class="new-price"><span class="money">'+ Shopify.formatMoney(product_info["price"], Currency.moneyFormats[shopCurrency].money_format) +'</span></span>');
        } else {
          price.append('<span class="new-price"><span class="money">'+ Shopify.formatMoney(product_info["price"], moneyFormat) + '</span></span>');
        }
      }
    }
    
    
    if (Currency.cookie.read() != null) {
      Currency.convertAll(shopCurrency, Currency.cookie.read());
    }
    

    $(field_add).val(product_info['variants'][0]['id']);

    if(product_info['available'] != false ){
      btn_add.attr('href','/products/'+product_info['handle']); 	
    } else {
      btn_add.addClass('btn disabled');
      btn_add.text('Sold Out');
                   btn_add.attr('onclick','return false');
    }

    btn_compare.attr('onclick','compare.add('+product_info["product_id"]+')');
    btn_wishlist.attr('onclick','wishlish.add('+product_info["product_id"]+')');

  });
});