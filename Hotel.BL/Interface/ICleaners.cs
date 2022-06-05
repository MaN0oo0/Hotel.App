using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Hotel.DAL.Entity;
using System.Linq.Expressions;

namespace Hotel.BL.Interface
{
    public interface ICleaners
    {
        Task<IEnumerable<Cleaners>> GetAsync(Expression<Func<Cleaners, bool>> filter = null);
        Task<IEnumerable<Cleaners>> SearchAsync(Expression<Func<Cleaners, bool>> filter = null);
        Task<Cleaners> GetByIdAsync(Expression<Func<Cleaners, bool>> filter = null);
        Task CreateAsync(Cleaners obj);
        Task UpdateAsync(Cleaners obj);
        Task DeleteAsync(int id);
    }
}
