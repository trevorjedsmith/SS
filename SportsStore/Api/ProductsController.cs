using SportsStore.Domain.Interfaces;
using SportsStore.Helpers;
using SportsStore.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SportsStore.Api
{
    public class ProductsController : ApiController
    {
        private IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }


        [HttpGet]
        [Route("api/products/getAllProducts")]
        public IHttpActionResult GetAllProducts(string Category = "Home")
        {
            try
            {
                var products = _productService.GetAll();
                var categories = products.Select(x => x.Category).Distinct().OrderBy(x => x);

                if(Category != "Home")
                {
                    products = products.Where(x => x.Category == Category);
                }

                ProductsViewModel pvm = new ProductsViewModel
                {
                    Products = products,
                    Categories = categories
                };
                return Ok(pvm);
            }
            catch(Exception ex)
            {
                ExceptionUtility.LogException(ex, "Products/GetAllProducts");
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
