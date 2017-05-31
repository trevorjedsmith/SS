﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SportsStore.Domain.Abstract
{
    public interface IEntityRepository<T> where T : class
    {
        IQueryable<T> GetAll();

        T GetById(int id);

        void Add(T entity);

        void Update(T entity);

        void Delete(T entity);

        void Delete(int id);

        void Detach(T entity);

        IQueryable<T> Get(Expression<Func<T, bool>> predicate);

        void Commit();
    }
}
