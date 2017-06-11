var SportsStore;
(function (SportsStore) {
    var ProductsViewModel = (function () {
        function ProductsViewModel(dataService) {
            var _this = this;
            this.OnInit = function () {
                //init popover
                _this.initUpPopover();
                _this.showModal();
                //init data
                _this.dataServices.ExecuteGet(_this.dataServices.baseUri).done(function (data) {
                    _this.applyProducts(data);
                    _this.applyCategories(data);
                    _this.logger.log(_this.productsList().length + " Products Loaded", null, data, true);
                    _this.logger.log(_this.categoriesList().length + " Categories Loaded", null, data, true);
                    console.log(_this.productsList());
                }).fail(function (error) {
                    _this.logger.logError("Error: " + error, null, 'OnInt', true);
                }).always(function () {
                    _this.logger.log('Data loaded successfully', null, '', true);
                    _this.hideModal();
                });
            };
            this.addToCart = function (product) {
                var ds = new SportsStore.SportsStoreDataService($, 'Carts/AddToCart');
                var params = {
                    productId: product.ProductID
                };
                ds.ExecuteGet(ds.baseUri, params).done(function (data) {
                    _this.applyCartLines(data);
                    _this.logger.log(data.Product.Name + " has been added to cart", null, '', true);
                }).fail(function (error) {
                    _this.logger.logError("Error: " + error, null, 'OnInt', true);
                }).always(function () {
                });
            };
            this.setCategory = function (data) {
                var ds = new SportsStore.SportsStoreDataService($, 'api/products/getAllProducts');
                var params = {
                    Category: data
                };
                ds.ExecuteGet(ds.baseUri, params).done(function (data) {
                    _this.applyProducts(data);
                    _this.applyCategories(data);
                }).fail(function (error) {
                    _this.logger.logError("Error: " + error, null, 'OnInt', true);
                }).always(function () {
                });
            };
            this.applyProducts = function (data) {
                _this.productsList.removeAll();
                _this.productsList.push.apply(_this.productsList, data.Products);
            };
            this.applyCategories = function (data) {
                _this.categoriesList.removeAll();
                _this.categoriesList.push.apply(_this.categoriesList, data.Categories);
            };
            this.applyCartLines = function (data) {
                _this.cartList.removeAll();
                _this.cartList.push.apply(_this.cartList, data.Cart.Lines);
                console.log('New refreshed cart...');
                console.log(_this.cartList());
                _this.applyCartTotal(_this.cartList());
            };
            this.applyCartTotal = function (cartList) {
                var total = 0;
                for (var i = 0; i < cartList.length; i++) {
                    total += (cartList[i].Quantity * cartList[i].Product.Price);
                }
                _this.cartTotal(total);
            };
            this.showCart = function () {
                $('#cart').popover('toggle');
            };
            this.fadeIn = function (element) {
                setTimeout(function () {
                    $('#cart').popover('show');
                    $(element).slideDown(function () {
                        setTimeout(function () {
                            $('#cart').popover('hide');
                        }, 2000);
                    });
                }, 100);
            };
            this.initUpPopover = function () {
                $('#cart').popover({
                    html: true,
                    content: function () {
                        return $('#cart-summary').html();
                    },
                    title: 'Cart Details',
                    placement: 'bottom',
                    animation: true,
                    trigger: 'manual'
                });
            };
            this.showModal = function () {
                $('#busyindicator').fadeIn(500).modal('show');
            };
            this.hideModal = function () {
                $('#busyindicator').fadeOut(1).modal('hide');
            };
            this.dataServices = dataService;
            this.logger = new SportsStore.Logger();
            this.productsList = ko.observableArray([]);
            this.categoriesList = ko.observableArray([]);
            this.cartList = ko.observableArray([]);
            this.cartTotal = ko.observable(0);
            this.OnInit();
        }
        return ProductsViewModel;
    }());
    SportsStore.ProductsViewModel = ProductsViewModel;
})(SportsStore || (SportsStore = {}));
