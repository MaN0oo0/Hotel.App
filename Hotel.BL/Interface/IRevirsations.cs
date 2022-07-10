using Hotel.DAL.Entity;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.BL.Interface
{
    public interface IRevirsations
    {
   Task<IEnumerable<Revirsations>> GetAsync(Expression<Func<Revirsations, bool>> filter = null);
   Task<IEnumerable<Revirsations>> SearchAsync(Expression<Func<Revirsations, bool>> filter = null);
   Task<Revirsations> GetByIdAsync(Expression<Func<Revirsations, bool>> filter = null);
   Task CreateAsync(Revirsations obj);
   Task UpdateAsync(Revirsations obj);
   Task DeleteAsync(int id);
    }
}
