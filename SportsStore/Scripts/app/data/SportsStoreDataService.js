/// <reference path="../../typings/globals/jquery/index.d.ts" />
var SportsStore;
(function (SportsStore) {
    var SportsStoreDataService = (function () {
        function SportsStoreDataService(ajaxService, controllerName) {
            this.ajaxService = ajaxService;
            this.ajaxService.ajaxSettings.crossDomain = true;
            this.baseUri = "" + SportsStore.Constants.BaseServiceBusUrl + controllerName;
        }
        // GET api/{controller}
        SportsStoreDataService.prototype.Get = function () {
            var url = "" + this.baseUri;
            return this.ExecuteGet(url);
        };
        // GET api/{controller}/1
        SportsStoreDataService.prototype.GetById = function (id) {
            var url = this.baseUri + "/" + id;
            return this.ExecuteGet(url);
        };
        // POST api/{controller}
        SportsStoreDataService.prototype.Post = function (item) {
            var url = this.baseUri;
            return this.ExecutePost(url, item);
        };
        // PUT api/{controller}/5
        SportsStoreDataService.prototype.Put = function (item) {
            var url = this.baseUri + "/" + item.id;
            return this.ExecutePut(url, item);
        };
        // DELETE api/{controller}/5
        SportsStoreDataService.prototype.Delete = function (id) {
            var dfd = this.ajaxService.Deferred();
            var config = {
                url: "{this.baseUri}/{id}",
                contentType: SportsStore.Constants.BaseContentType,
                type: SportsStore.Constants.BaseDeleteMethod
            };
            var me = this;
            this.ajaxService.ajax(config)
                .fail(function (xhr, textStatus, errorThrown) {
                dfd.reject();
            })
                .done(function (data) {
                dfd.resolve(data);
            });
            return dfd.promise();
        };
        SportsStoreDataService.prototype.ExecuteGet = function (url, params) {
            var dfd = this.ajaxService.Deferred();
            var me = this;
            this.ajaxService
                .get(url, params)
                .fail(function (xhr) {
                dfd.reject();
            })
                .done(function (retVal) {
                dfd.resolve(retVal);
            });
            return dfd.promise();
        };
        SportsStoreDataService.prototype.ExecutePost = function (url, item) {
            var dfd = this.ajaxService.Deferred();
            var payload = JSON.stringify(item), config = {
                url: url,
                contentType: SportsStore.Constants.BaseContentType,
                type: SportsStore.Constants.BasePOSTMethod,
                data: payload
            };
            var me = this;
            this.ajaxService.ajax(config)
                .fail(function (xhr, textStatus, errorThrown) {
                dfd.reject();
            })
                .done(function (data) {
                dfd.resolve(data);
            });
            return dfd.promise();
        };
        SportsStoreDataService.prototype.ExecutePut = function (url, item) {
            var dfd = this.ajaxService.Deferred();
            var payload = JSON.stringify(item), config = {
                url: url,
                contentType: SportsStore.Constants.BaseContentType,
                type: SportsStore.Constants.BasePUTMethod,
                data: payload
            };
            var me = this;
            this.ajaxService.ajax(config)
                .fail(function (xhr, textStatus, errorThrown) {
                dfd.reject();
            })
                .done(function (data) {
                dfd.resolve(data);
            });
            return dfd.promise();
        };
        SportsStoreDataService.prototype.ExecuteDelete = function (url, id) {
            var dfd = this.ajaxService.Deferred();
            //var payload = JSON.stringify(params),
            var config = {
                url: url + '/' + id,
                contentType: SportsStore.Constants.BaseContentType,
                type: SportsStore.Constants.BaseDeleteMethod
            };
            var me = this;
            this.ajaxService.ajax(config)
                .fail(function (xhr, textStatus, errorThrown) {
                dfd.reject();
            })
                .done(function (data) {
                dfd.resolve(data);
            });
            return dfd.promise();
        };
        return SportsStoreDataService;
    }());
    SportsStore.SportsStoreDataService = SportsStoreDataService;
})(SportsStore || (SportsStore = {}));
