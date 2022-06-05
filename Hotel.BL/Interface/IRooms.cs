using Hotel.DAL.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.BL.Interface
{
    public interface IRooms
    {
        Task<IEnumerable<Rooms>> GetAsync(Expression<Func<Rooms, bool>> filter = null);
        Task<IEnumerable<Rooms>> SearchAsync(Expression<Func<Rooms, bool>> filter = null);
        Task<Rooms> GetByIdAsync(Expression<Func<Rooms, bool>> filter);
        Task CreateAsync(Rooms obj);
        Task UpdateAsync(Rooms obj);
        Task DeleteAsync(int id);
    }
}
