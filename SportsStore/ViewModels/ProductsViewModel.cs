using SportsStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportsStore.ViewModels
{
    public class ProductsViewModel
    {
        public IEnumerable<Product> Products { get; set; }
        public IEnumerable<string> Categories { get; set; }
    }
}