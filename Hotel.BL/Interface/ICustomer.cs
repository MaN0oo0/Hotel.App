using Hotel.DAL.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.BL.Interface
{
    public interface ICustomer
    {
        Task<IEnumerable<Customers>> GetAsync(Expression<Func<Customers, bool>> filter = null);
        Task<IEnumerable<Customers>> SearchAsync(Expression<Func<Customers, bool>> filter = null);
        Task<Customers> GetByIdAsync(Expression<Func<Customers, bool>> filter);
        Task CreateAsync(Customers obj);
        Task UpdateAsync(Customers obj);
        Task DeleteAsync(int id);
    }
}
