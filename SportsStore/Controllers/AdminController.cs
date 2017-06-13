using SportsStore.Domain.Abstract;
using SportsStore.Domain.Interfaces;
using SportsStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace SportsStore.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        private IEntityRepository<Product> _productService;

        public AdminController(IEntityRepository<Product> productService)
        {
            _productService = productService;
        }
        // GET: Admin
        public ActionResult Index()
        {
            return View(_productService.GetAll());
        }

        [HttpGet]
        public ActionResult Edit(int productID)
        {
            var product = _productService.GetById(productID);

            if (product == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }

            return View(product);

        }

        [HttpPost]
        public ActionResult Edit(Product product, HttpPostedFileBase image = null)
        {
            if (ModelState.IsValid)
            {
                if(image != null)
                {
                    product.ImageMineType = image.ContentType;
                    product.ImageData = new byte[image.ContentLength];
                    image.InputStream.Read(product.ImageData, 0, image.ContentLength);
                }
                _productService.Update(product);
                _productService.Commit();
                TempData["message"] = string.Format("{0} has been saved", product.Name);
                return RedirectToAction("Index");
            }
            else
            {
                return View(product);
            }
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Product product)
        {
            if (ModelState.IsValid)
            {
                _productService.Add(product);
                _productService.Commit();
                TempData["message"] = string.Format("{0} has been added", product.Name);
                return RedirectToAction("Index");
            }
            else
            {
                return View(product);
            }
        }

        [HttpGet]
        public ActionResult Delete(int productID)
        {
            var product = _productService.GetById(productID);

            if (product == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }

            return View(product);
        }

        [HttpPost]
        [ActionName("Delete")]
        public ActionResult Deleted(int productID)
        {
            var product = _productService.GetById(productID);

            if (product == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound);
            }

            _productService.Delete(product);
            _productService.Commit();
            TempData["message"] = string.Format("{0} has been deleted", product.Name);
            return RedirectToAction("Index");
        }

    }
}