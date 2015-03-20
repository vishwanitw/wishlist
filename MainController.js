angular.module('wishlist').controller("MainController", function(){
    var vm = this;
      $scope.addToList = function() {
                    $localStorage.message = "Hello World";
                }

    vm.all_wishlist = [
        
        
             {
               "prod_id": "5509ca4c4daa68fa0a4a3f15",
               "image_id": "NEPTIDE",
               
               "price": "rogerscarney@neptide.com",
               
             },
                        {
               "prod_id": "5509ca4c4daa68fa0a4a3f15",
               "image_id": "NEPTIDE",
               
               "price": "rogerscarney@neptide.com",
               
             },
                        {
               "prod_id": "5509ca4c4daa68fa0a4a3f15",
               "image_id": "NEPTIDE",
               
               "price": "rogerscarney@neptide.com"
             }
        
    ];
    
        vm.order = vm.orders[0];
        vm.new = {};
        vm.addShow = function() {
        vm.shows.push(vm.new);
        vm.new = {};
        

});