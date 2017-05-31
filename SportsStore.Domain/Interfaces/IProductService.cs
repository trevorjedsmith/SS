using SportsStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStore.Domain.Interfaces
{
    public interface IProductService
    {
        IEnumerable<Product> GetAll();

        Product GetById();

        void Add(Product p);

        void Update(Product p);

        void Delete(Product p);
    }
}
