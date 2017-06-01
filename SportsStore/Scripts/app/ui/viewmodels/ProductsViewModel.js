var SportsStore;
(function (SportsStore) {
    var ProductsViewModel = (function () {
        function ProductsViewModel(dataService) {
            var _this = this;
            this.OnInit = function () {
                _this.showModal();
                _this.dataServices.ExecuteGet(_this.dataServices.baseUri).done(function (data) {
                    _this.applyProducts(data);
                    _this.applyCategories(data);
                    _this.logger.log(_this.productsList().length + " Products Loaded", null, data, true);
                    _this.logger.log(_this.categoriesList().length + " Categories Loaded", null, data, true);
                    console.log(_this.productsList());
                }).fail(function (error) {
                    console.log(error);
                }).always(function () {
                    _this.logger.log('Data loaded successfully', null, '', true);
                    _this.hideModal();
                });
            };
            this.addproduct = function (product) {
            };
            this.setCategory = function (data) {
                _this.showModal();
                var ds = new SportsStore.SportsStoreDataService($, 'api/products/getAllProducts');
                var params = {
                    Category: data
                };
                ds.ExecuteGet(ds.baseUri, params).done(function (data) {
                    _this.applyProducts(data);
                    _this.applyCategories(data);
                }).fail(function (error) {
                    _this.logger.log("Error: " + error, null, 'OnInt', true);
                }).always(function () {
                    _this.hideModal();
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
            this.OnInit();
        }
        return ProductsViewModel;
    }());
    SportsStore.ProductsViewModel = ProductsViewModel;
})(SportsStore || (SportsStore = {}));
