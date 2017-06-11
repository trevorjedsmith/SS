using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace SportsStore.Models
{
    public class OrderLine
    {
        [Key]
        public int OrderLineId { get; set; }
        //Foreing Key
        public int OrderId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }

        public decimal ProductPrice { get; set; }
    }
}
