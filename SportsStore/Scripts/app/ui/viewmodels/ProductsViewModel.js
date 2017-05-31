var SportsStore;
(function (SportsStore) {
    var ProductsViewModel = (function () {
        function ProductsViewModel(dataService) {
            var _this = this;
            this.OnInit = function () {
                _this.dataServices.ExecuteGet(_this.dataServices.baseUri).done(function (data) {
                    console.log(data);
                }).fail(function (error) {
                    console.log(error);
                }).always(function () {
                    console.log('completed');
                });
            };
            this.addproduct = function (product) {
                //$('#busyindicator').modal('show');
                //let ds = new SportsStore.SportsStoreDataService($, 'api/replay/replaySubmission');
                //var params = {
                //    SubmissionID: submissionId,
                //    PlayID: playId
                //}
                //ds.ExecuteGet(this.dataServices.baseUri, params).done((data: any) => {
                //    this.logger.log('Success', null, 'ReplaySubmission', true);
                //}).fail((error) => {
                //    this.logger.log(`Error: ${error}`, null, 'OnInt', true);
                //}).always(() => {
                //    $('#busyindicator').modal('hide');
                //});
            };
            this.dataServices = dataService;
            this.logger = new SportsStore.Logger();
            this.OnInit();
        }
        return ProductsViewModel;
    }());
    SportsStore.ProductsViewModel = ProductsViewModel;
})(SportsStore || (SportsStore = {}));
