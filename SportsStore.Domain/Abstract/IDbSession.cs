using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStore.Domain.Abstract
{
    public interface IDbSession
    {
        IDbContext Current { get; }

        int SaveChanges();
    }
}
