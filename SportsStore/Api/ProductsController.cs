using SportsStore.Domain.Interfaces;
using SportsStore.Helpers;
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
        public IHttpActionResult GetAllProducts()
        {
            try
            {
                return Ok(_productService.GetAll());
            }
            catch(Exception ex)
            {
                ExceptionUtility.LogException(ex, "Products/GetAllProducts");
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
