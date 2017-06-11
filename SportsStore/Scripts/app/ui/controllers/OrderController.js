var SportsStore;
(function (SportsStore) {
    var OrderController = (function () {
        function OrderController() {
            this.dataService = new SportsStore.SportsStoreDataService($, 'Carts/GetAllItems');
        }
        OrderController.prototype.PageLoad = function (model) {
            var viewModel = new SportsStore.OrderViewModel(this.dataService);
            ko.applyBindings(viewModel);
        };
        return OrderController;
    }());
    SportsStore.OrderController = OrderController;
})(SportsStore || (SportsStore = {}));
