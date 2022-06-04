using Hotel.DAL.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.BL.Interface
{
    public interface IReception
    {
        Task<IEnumerable<Reception>> GetAsync(Expression<Func<Reception, bool>> filter = null);
        Task<IEnumerable<Reception>> SearchAsync(Expression<Func<Reception, bool>> filter = null);
        Task<Reception> GetByIdAsync(Expression<Func<Reception, bool>> filter);
        Task CreateAsync(Reception obj);
        Task UpdateAsync(Reception obj);
        Task DeleteAsync(int id);
    }
}
