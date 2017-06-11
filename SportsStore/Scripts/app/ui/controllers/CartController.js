var SportsStore;
(function (SportsStore) {
    var CartController = (function () {
        function CartController() {
            this.dataService = new SportsStore.SportsStoreDataService($, 'Carts/GetAllItems');
        }
        CartController.prototype.PageLoad = function (model) {
            var viewModel = new SportsStore.CartViewModel(this.dataService);
            ko.applyBindings(viewModel);
        };
        return CartController;
    }());
    SportsStore.CartController = CartController;
})(SportsStore || (SportsStore = {}));
