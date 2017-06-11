namespace SportsStore {
    export class OrderController {
        private dataService: SportsStore.SportsStoreDataService<any>;
        private containerElementId: string;


        constructor() {
            this.dataService = new SportsStore.SportsStoreDataService($, 'Carts/GetAllItems');

        }

        PageLoad(model: any) {
            let viewModel = new SportsStore.OrderViewModel(this.dataService);
            ko.applyBindings(viewModel);
        }
    }
}