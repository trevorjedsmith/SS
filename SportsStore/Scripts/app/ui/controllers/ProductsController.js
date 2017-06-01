var SportsStore;
(function (SportsStore) {
    var ProductsController = (function () {
        function ProductsController() {
            this.dataService = new SportsStore.SportsStoreDataService($, 'api/products/getAllProducts');
        }
        ProductsController.prototype.PageLoad = function () {
            var viewModel = new SportsStore.ProductsViewModel(this.dataService);
            ko.applyBindings(viewModel);
        };
        return ProductsController;
    }());
    SportsStore.ProductsController = ProductsController;
})(SportsStore || (SportsStore = {}));
