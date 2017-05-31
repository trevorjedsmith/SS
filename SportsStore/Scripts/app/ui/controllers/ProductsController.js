var SportsStore;
(function (SportsStore) {
    var ReplayController = (function () {
        function ReplayController() {
            this.dataService = new SportsStore.SportsStoreDataService($, 'api/products/getAllProducts');
        }
        ReplayController.prototype.PageLoad = function () {
            var viewModel = new SportsStore.ProductsViewModel(this.dataService);
            ko.applyBindings(viewModel);
        };
        return ReplayController;
    }());
    SportsStore.ReplayController = ReplayController;
})(SportsStore || (SportsStore = {}));
