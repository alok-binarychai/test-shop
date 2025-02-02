var swatches = {
  'changeOption' : function (element) {
    var product_option = element.closest('.ul-swatches-colors').data('product-option');
    var product_option_value = element.data('product-option-value-id');
    var product_option_name = element.attr('title');
    var product_option_type = element.closest('.ul-swatches-colors').data('type');
    var use_zoom = $('#check-use-zoom').val();

    if(element.closest('.swatches-options').hasClass('checked')) {
      element.closest('.swatches-options').removeClass('checked');
      element.closest('.ul-swatches-colors').find('.swatches-info').html('');

      if(product_option_type == 'select') {
        $('#input-option' + product_option).val(0).trigger('change');
      }

      if(product_option_type == 'radio') {
        $('#input-option' + product_option).find('.radio-option-value').removeAttr('checked');
      }

      if(use_zoom == '1') {
        $('#light-box-position').val('1');
        $('#product-image-default').find('img').trigger('click');
      } else {
        var thumb = $('#product-image-default').data('thumb');
        var popup = $('#product-image-default').data('popup');
        $('#swatches-image-container .swatches-image').attr('href', popup).find('img').attr('src', thumb);
      }
    } else {
      element.closest('.ul-swatches-colors').find('.swatches-options').removeClass('checked');
      element.closest('.swatches-options').addClass('checked');
      element.closest('.ul-swatches-colors').find('.swatches-info').html(product_option_name);

      if(product_option_type == 'select') {
        $('#input-option' + product_option).val(product_option_value).trigger('change');
      }

      if(product_option_type == 'radio') {
        $('#input-option' + product_option).find('#radio-option-value-' + product_option_value).trigger('click');
      }

      if(use_zoom == '1') {
        var pos = $('#product-image-options-' + product_option_value).data('pos');
        if(pos) {
          $('#light-box-position').val(pos);
          $('#product-image-options-' + product_option_value).find('img').trigger('click');
        } else {
          $('#light-box-position').val('1');
          $('#product-image-default').find('img').trigger('click');
        }
      } else {
        var thumb = $('#product-image-options-' + product_option_value).data('thumb');
        var popup = $('#product-image-options-' + product_option_value).data('popup');
        $('#swatches-image-container .swatches-image').attr('href', popup).find('img').attr('src', thumb);
      }
    }
  },
  'changeSwatchInCategory' : function (element) {
    var product_option_value_id = element.data('product-option-value-id');
    var product_id = element.data('product-id');

    if(element.closest('.swatches-options').hasClass('checked')) {
      element.closest('.swatches-options').removeClass('checked');

      var img_src = $('.img-default-' + product_id).val();
      $('.img-cate-' + product_id).attr('src', img_src);
      $('.img-cate-' + product_id).attr('srcset', img_src);
    } else {
      element.closest('.ul-swatches-colors').find('.swatches-options').removeClass('checked');
      element.closest('.swatches-options').addClass('checked');

      if($('.img-swatch-' + product_id + '-' + product_option_value_id).length) {
        var img_src = $('.img-swatch-' + product_id + '-' + product_option_value_id).val();
        $('.img-cate-' + product_id).attr('src', img_src);
        $('.img-cate-' + product_id).attr('srcset', img_src);
      } else {
        var img_src = $('.img-default-' + product_id).val();
        $('.img-cate-' + product_id).attr('src', img_src);
        $('.img-cate-' + product_id).attr('srcset', img_src);
      }
    }
  },
  'changeSwatchInCust' : function (element) {

    $(".custom-products").find("label").removeClass("swatch-cust-checked");
    $(".home1").find("label").removeClass("swatch-cust-checked");

    var variant_id = element.data('variant');

    element.addClass("swatch-cust-checked");

    element.closest('.caption').find('.button.btn-cart.swatch').attr("data-variant",variant_id);

    // cart button update based on availability
    var available = element.data('availability');

    if(available == 'soldout') {
      //console.log(element.closest('.caption').find('button.btn-cart.swatch'));
      element.closest('.caption').find('button.btn-cart.swatch').prop('disabled', true);
      element.closest('.caption').find('button.btn-cart.swatch').html('<span>Sold Out</span>');
    }
    else {
      element.closest('.caption').find('button.btn-cart.swatch').prop('disabled', false);
      element.closest('.caption').find('button.btn-cart.swatch').html('<span>Add to Cart</span>');
    }

    // variant price update 
    var var_price = '<span class=money>'+Shopify.formatMoney(element.data('price'), moneyFormat)+'</span>';
    element.closest('.caption').find('.price-box .regular-price .price').html(var_price);
    
    if (Currency.cookie.read() != null) {
      Currency.convertAll(shopCurrency, Currency.cookie.read());
    }
    

  }
}