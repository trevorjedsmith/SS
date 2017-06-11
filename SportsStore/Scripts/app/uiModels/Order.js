var SportsStore;
(function (SportsStore) {
    var Order = (function () {
        function Order(Id, Name, Line1, Line2, Line3, City, State, Zip, Country, GiftWrap, OrderLine) {
            this.Id = Id;
            this.Name = Name;
            this.Line1 = Line1;
            this.Line2 = Line2;
            this.Line3 = Line3;
            this.City = City;
            this.State = State;
            this.Zip = Zip;
            this.Country = Country;
            this.GiftWrap = GiftWrap;
            this.OrderLine = OrderLine;
        }
        return Order;
    }());
    SportsStore.Order = Order;
})(SportsStore || (SportsStore = {}));
