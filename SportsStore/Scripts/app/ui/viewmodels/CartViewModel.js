var SportsStore;
(function (SportsStore) {
    var CartViewModel = (function () {
        function CartViewModel(dataService) {
            var _this = this;
            this.OnInit = function () {
                _this.showModal();
                //init data for page
                _this.dataServices.ExecuteGet(_this.dataServices.baseUri).done(function (data) {
                    _this.applyCartLines(data);
                    _this.logger.log('Data loaded.', null, '', true);
                }).fail(function (error) {
                    _this.logger.log('Error loading..', null, '', true);
                }).always(function () {
                    _this.logger.log('Finished loading..', null, '', true);
                    _this.hideModal();
                });
            };
            this.removeItem = function (object) {
                var ds = new SportsStore.SportsStoreDataService($, 'Carts/RemoveFromCart');
                var params = {
                    productId: object.Product.ProductID || 0
                };
                ds.ExecuteGet(ds.baseUri, params).done(function (data) {
                    _this.applyCartLines(data);
                    _this.logger.logError(data.Product.Name + " has been removed", null, '', true);
                }).fail(function (error) {
                    _this.logger.logError("Error: " + error, null, 'OnInt', true);
                }).always(function () {
                });
            };
            this.applyCartLines = function (data) {
                _this.cartList.removeAll();
                _this.cartList.push.apply(_this.cartList, data.Cart.Lines);
                _this.applyCartTotal(_this.cartList());
            };
            this.applyCartTotal = function (cartList) {
                var total = 0;
                for (var i = 0; i < cartList.length; i++) {
                    total += (cartList[i].Quantity * cartList[i].Product.Price);
                }
                _this.cartTotal(total);
            };
            this.showModal = function () {
                $('#busyindicator').fadeIn(500).modal('show');
            };
            this.hideModal = function () {
                $('#busyindicator').fadeOut(1).modal('hide');
            };
            this.dataServices = dataService;
            this.logger = new SportsStore.Logger();
            this.cartList = ko.observableArray();
            this.cartTotal = ko.observable(0);
            this.OnInit();
        }
        return CartViewModel;
    }());
    SportsStore.CartViewModel = CartViewModel;
})(SportsStore || (SportsStore = {}));
