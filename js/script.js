
$(document).ready(function () {


    var selectedProduct;
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var products=[];
    //var wish = data;
    $.getJSON('data/data.json',function(data){
        console.log(data);

        products=data;
        //console.log($(this).data('data._id'));

        var parent="<div>";
        data.forEach(function(item){
            parent+=template(item);
        })
        parent+="</div>";
        $('.row').append(parent);

    });
    var  getProductWithId=function(id){
        var product;
        products.some(function(item){
            if(item._id==id) {
                product=item
                return true;
            }
        });
        return product;
    }

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var id = button.data('prod-id');
        var product = getProductWithId(id);
        var selectedProduct= product;
        var html=template(product);
        var modal = $(this);
        var modalBody=modal.find('.modal-body');
        modalBody.html('');
        modalBody.append(html);
    });

    /*$('.addtocart').click(function(){
        //var $selectedProduct;
        alert($selectedProduct);
    });*/


    addToCart=function(){
        var button = $(event.relatedTarget) // Button that triggered the modal
        var id = button.data('prod-id');
        var product = getProductWithId(id);
        var selectedProduct= product;
        alert(selectedProduct);
        console.log(selectedProduct);
        //*var product_one;
      /*  if ( localStorage.getItem('prod-1')) {
            product_one =JSON.parse(localStorage.getItem('prod-1'));
        }
        else {
            product_one =selectedProduct;
            localStorage.setItem('prod-1',JSON.stringify(product_one));
        }*//**//*
       *//**//* if($(selectedProduct_id)){
            console.log('already added');
        }*//**//*
        *//**//*var product_two;
        if ( localStorage.getItem('prod-2')) {
            product_two = localStorage.getItem('prod-2');
        }
        else {
            product_two =selectedProduct;
            localStorage.setItem('prod-1',product_two);
        }*//**//*

       // console.log(myProduct);
       // $().push();*/

    }




});