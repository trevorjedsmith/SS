using SportsStore.Domain.Abstract;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStore.Domain.Concrete
{
    public class DbSession : IDbSession
    {
        private IDbContext _context;

        public DbSession(IDbContext context)
        {
            _context = context;
        }

        public IDbContext Current
        {
            get
            {
                return this._context;
            }
        }

        public int SaveChanges()
        {
            return ((DbContext)Current).SaveChanges();
        }
    }
}
