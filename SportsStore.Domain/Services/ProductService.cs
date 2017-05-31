using SportsStore.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SportsStore.Models;
using SportsStore.Domain.Abstract;

namespace SportsStore.Domain.Services
{
    public class ProductService : IProductService
    {
        private readonly IEntityRepository<Product> _productsRepo;

        public ProductService(IEntityRepository<Product> productsRepo)
        {
            _productsRepo = productsRepo;
        }

        public void Add(Product p)
        {
            throw new NotImplementedException();
        }

        public void Delete(Product p)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetAll()
        {
            return _productsRepo.GetAll().ToList();
        }

        public Product GetById()
        {
            throw new NotImplementedException();
        }

        public void Update(Product p)
        {
            throw new NotImplementedException();
        }
    }
}
