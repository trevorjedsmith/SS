var SportsStore;
(function (SportsStore) {
    var OrderViewModel = (function () {
        function OrderViewModel(dataService) {
            var _this = this;
            this.OnInit = function () {
                _this.showModal();
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
            this.applyCartLines = function (data) {
                _this.orderlines.removeAll();
                _this.orderlines.push.apply(_this.orderlines, data.Cart.Lines);
            };
            this.submitOrder = function () {
                //call api controller for orders
                //submit order
                //clear cart
                //window reload to success page with orderId
                _this.showModal();
                var order = {
                    Id: _this.id(),
                    Name: _this.name(),
                    Line1: _this.line1(),
                    Line2: _this.line2(),
                    Line3: _this.line3(),
                    City: _this.city(),
                    State: _this.state(),
                    Zip: _this.zip(),
                    Country: _this.country(),
                    GiftWrap: _this.giftwrap(),
                    OrderLines: _this.getOrderLines(_this.orderlines())
                };
                var ds = new SportsStore.SportsStoreDataService($, 'api/Orders/CreateOrder');
                ds.ExecutePost(ds.baseUri, order).done(function (data) {
                    console.log('Order Return');
                    console.log(data);
                    window.location.href = "Success?OrderId=" + data.Order.Id;
                }).fail(function (error) {
                    _this.logger.logError('There was an error please try again', error, 'Create Order', true);
                }).always(function () {
                    _this.hideModal();
                });
            };
            this.cancelOrder = function () {
                //toggle modal()
                //call cart controller to clear cart
                //on success window.reload to start page
                var ds = new SportsStore.SportsStoreDataService($, 'Carts/ClearAllCartItems');
                ds.ExecutePost(ds.baseUri, '').done(function (data) {
                    //put an are you sure model here
                    window.location.href = "Cancelled";
                }).fail(function (error) {
                    _this.logger.logError('There was an error please try again', error, 'Create Order', true);
                }).always(function () {
                    _this.hideModal();
                });
            };
            this.cancelConfirm = function () {
                $('#del-confirm').fadeIn(500).modal('show');
            };
            this.getOrderLines = function (orderLines) {
                var newArray = new Array();
                for (var i = 0; i < orderLines.length; i++) {
                    var newObjectForPost = {
                        ProductId: orderLines[i].Product.ProductID,
                        Quantity: orderLines[i].Quantity,
                        ProductPrice: orderLines[i].Product.Price
                    };
                    newArray[i] = newObjectForPost;
                }
                return newArray;
            };
            this.showModal = function () {
                $('#busyindicator').fadeIn(500).modal('show');
            };
            this.hideModal = function () {
                $('#busyindicator').fadeOut(1).modal('hide');
            };
            this.dataServices = dataService;
            this.logger = new SportsStore.Logger();
            this.id = ko.observable(0);
            this.name = ko.observable('');
            this.line1 = ko.observable('');
            this.line2 = ko.observable('');
            this.line3 = ko.observable('');
            this.orderlines = ko.observableArray();
            this.city = ko.observable('');
            this.state = ko.observable('');
            this.zip = ko.observable('');
            this.country = ko.observable('');
            this.giftwrap = ko.observable(false);
            this.OnInit();
        }
        return OrderViewModel;
    }());
    SportsStore.OrderViewModel = OrderViewModel;
})(SportsStore || (SportsStore = {}));
