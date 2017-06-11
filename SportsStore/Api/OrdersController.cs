using SportsStore.Domain.Interfaces;
using SportsStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SportsStore.Api
{
    public class OrdersController : ApiController
    {
        private IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        [Route("api/Orders/CreateOrder")]
        public IHttpActionResult CreateOrder([FromBody]Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var orderCreated = _orderService.CreateOrder(order);

            if(orderCreated == null)
            {
                return BadRequest("There was an exception please call the Sports Store helpdesk");
            }

            return Ok(new { Order = orderCreated });
                 
        }
    }
}
