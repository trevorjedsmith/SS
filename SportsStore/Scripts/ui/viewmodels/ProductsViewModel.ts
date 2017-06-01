namespace SportsStore {

    import logger = SportsStore.Logger;

    export class ProductsViewModel {

        private dataServices: SportsStore.SportsStoreDataService<any>;

        private logger: logger;

        private productsList: KnockoutObservableArray<any>; //this needs to be a stronly typed products list
        private categoriesList: KnockoutObservableArray<any>;

        constructor(dataService: SportsStore.SportsStoreDataService<any>) {
            this.dataServices = dataService;
            this.logger = new SportsStore.Logger();
            this.productsList = ko.observableArray([]);
            this.categoriesList = ko.observableArray([]);
            this.OnInit();
        }

        OnInit = () => {
            this.showModal();
            this.dataServices.ExecuteGet(this.dataServices.baseUri).done((data) => {
                this.applyProducts(data);
                this.applyCategories(data);
                this.logger.log(`${this.productsList().length} Products Loaded`, null, data, true);
                this.logger.log(`${this.categoriesList().length} Categories Loaded`, null, data, true);
                console.log(this.productsList());
            }).fail((error) => {
                console.log(error);
            }).always(() => {
                this.logger.log('Data loaded successfully', null, '', true);
                this.hideModal();
            });
        }

        addproduct = (product: any) => {
         
        }

        setCategory = (data: any) => {
            this.showModal();
            let ds = new SportsStore.SportsStoreDataService($, 'api/products/getAllProducts');

            var params = {
                Category: data
            }
            ds.ExecuteGet(ds.baseUri, params).done((data: any) => {
                this.applyProducts(data);
                this.applyCategories(data);
            }).fail((error) => {
                this.logger.log(`Error: ${error}`, null, 'OnInt', true);
                }).always(() => {
                    this.hideModal();
            });
        }

        applyProducts = (data: any) => {
            this.productsList.removeAll();
            this.productsList.push.apply(this.productsList, data.Products);
        }

        applyCategories = (data: any) => {
            this.categoriesList.removeAll();
            this.categoriesList.push.apply(this.categoriesList, data.Categories);
        }

        showModal = () => {
            $('#busyindicator').fadeIn(500).modal('show');
        }

        hideModal = () => {
            $('#busyindicator').fadeOut(1).modal('hide');
        }

    }
}