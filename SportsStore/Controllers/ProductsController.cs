using SportsStore.Domain.Abstract;
using SportsStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SportsStore.Controllers
{
    public class ProductsController : Controller
    {
        private IEntityRepository<Product> _productService;

        public ProductsController(IEntityRepository<Product> productService)
        {
            _productService = productService;
        }
        // GET: Products
        public ActionResult List()
        {
            return View();
        }

        public FileContentResult GetImage(int? productId)
        {
            if (productId.HasValue)
            {
            var product = _productService.GetById(productId.Value);
            if(product != null)
            {
                return File(product.ImageData, product.ImageMineType);
            }
                return null;

            }
            else
            {
                return null;
            }
        
        }
    }
}