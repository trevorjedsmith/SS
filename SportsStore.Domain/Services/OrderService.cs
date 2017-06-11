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
    public class OrderService : IOrderService
    {
        private IEntityRepository<Order> ordersRepository;

        public OrderService(IEntityRepository<Order> _ordersRepository)
        {
            ordersRepository = _ordersRepository;
        }

        public Order CreateOrder(Order order)
        {

            try
            {
                //Entity framework should handle the parent child collection
                //as most of mapping done in typescript viewmodel
                ordersRepository.Add(order);
                ordersRepository.Commit();
                return order;
            }
            catch (Exception ex)
            {
                //log here
                return null;
            }
        }
    }
}
