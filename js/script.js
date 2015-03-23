
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
        var selectedProduct = product;
        var html=template(product);
        var modal = $(this);
        var modalBody=modal.find('.modal-body');
        modalBody.html('');
        modalBody.append(html);
    });


    addToCart=function(){
        var button = $(event.relatedTarget) // Button that triggered the modal
        var id = button.data('prod-id');
        var product = getProductWithId(id);
        selectedProduct = product;
        var html=template(product);


        console.log(html);

        var myURL="http://localhost:63342/wishlist/views";
        window.open( myURL + "/?options="+$('ul').append(localStorage.getItem(product)) );

        console.log(html);

    }

    // Put the object into storage
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('selectedProduct');

    //retrievedObject = JSON.parse(retrievedObject));




});