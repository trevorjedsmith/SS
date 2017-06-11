using SportsStore.Domain.Abstract;
using SportsStore.Models;
using SportsStore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace SportsStore.Controllers
{
    public class CartsController : Controller
    {

        private readonly IEntityRepository<Product> _productsRepository;

        public CartsController(IEntityRepository<Product> productsRepository)
        {
            _productsRepository = productsRepository;
        }
        // GET: Carts
        //Lets let this just serve a view
        public ViewResult Index()
        {
            return View();
        }

        public ActionResult AddToCart(int productId)
        {
            var product = _productsRepository.GetById(productId);

            if(product == null)
            {
                return new HttpNotFoundResult();
            }

            GetCart().AddItem(product, 1);
            return Json(new { Cart = GetCart(), Product = product },JsonRequestBehavior.AllowGet);
        }


        public ActionResult RemoveFromCart(int productId)
        {
            var product = _productsRepository.GetById(productId);

            if (product == null)
            {
                return new HttpNotFoundResult();
            }

            GetCart().RemoveLine(product);
            return Json(new { Cart = GetCart(), Product = product }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ClearAllCartItems()
        {
            GetCart().Clear();
            return Json(new { Message = "Cart has been cleared" }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetAllItems()
        {
            return Json(new { Cart = GetCart(), Return = "Ok" }, JsonRequestBehavior.AllowGet);
        }

        private CartService GetCart()
        {
            var cart = (CartService)Session["CartService"];

            if(cart == null)
            {
                cart = new CartService();
                Session["CartService"] = cart;
            }

            return cart;
        }
    }
}