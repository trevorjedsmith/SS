var SportsStore;
(function (SportsStore) {
    var Constants = (function () {
        function Constants() {
        }
        return Constants;
    }());
    Constants.BaseServiceBusUrl = "http://localhost:55633/";
    Constants.BaseContentType = "application/json";
    Constants.BaseDeleteMethod = "DELETE";
    Constants.BasePOSTMethod = "POST";
    Constants.BasePUTMethod = "PUT";
    SportsStore.Constants = Constants;
})(SportsStore || (SportsStore = {}));
