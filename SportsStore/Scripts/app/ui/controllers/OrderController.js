var SportsStore;
(function (SportsStore) {
    var OrderController = (function () {
        function OrderController() {
        }
        OrderController.prototype.PageLoad = function (vm) {
            ko.applyBindings(vm);
        };
        return OrderController;
    }());
    SportsStore.OrderController = OrderController;
})(SportsStore || (SportsStore = {}));
