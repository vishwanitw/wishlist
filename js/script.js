
$(document).ready(function () {
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var products=[]
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
             product=item;
             return true;
         }
      });
      return product;
    }

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var id = button.data('prod-id');
        var product=getProductWithId(id);
        var html=template(product);
        var modal = $(this);
        var modalBody=modal.find('.modal-body');
        modalBody.html('');
        modalBody.append(html);
    });

});