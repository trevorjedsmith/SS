using SportsStore.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStore.Domain.Abstract
{
    public interface IDbContext : IDisposable
    {
        DbSet<TEntity> GetDbSet<TEntity>() where TEntity : class;

        DbSet<Product> Products { get; set; }

        DbSet<Order> Orders { get; set; }

        DbSet<OrderLine> OrderLines { get; set; }
    }
}
