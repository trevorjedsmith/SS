namespace SportsStore {

    import logger = SportsStore.Logger;

    export class ProductsViewModel {

        private dataServices: SportsStore.SportsStoreDataService<any>;

        private logger: logger;

        constructor(dataService: SportsStore.SportsStoreDataService<any>) {
            this.dataServices = dataService;
            this.logger = new SportsStore.Logger();

            this.OnInit();
        }

        OnInit = () => {
            this.dataServices.ExecuteGet(this.dataServices.baseUri).done((data) => {
                console.log(data);
            }).fail((error) => {
                console.log(error);
            }).always(() => {
                console.log('completed');
            });
        }

        addproduct = (product: any) => {
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
        }

    }
}