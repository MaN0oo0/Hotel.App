using Hotel.BL.Interface;
using Hotel.DAL.database;
using Hotel.DAL.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.BL.Repos
{
    public class RevirsationRep : IRevirsations
    {
      private readonly ApplicationContext db;

        public RevirsationRep(ApplicationContext db)
        {
            this.db = db;
        }

        public async Task CreateAsync(Revirsations obj)
        {
            await db.Revirsations.AddAsync(obj);
            await db.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var OldData =  db.Revirsations.Find(id);
            OldData.DeleteDate=DateTime.Now;
            OldData.IsDeleted = true;
            await db.SaveChangesAsync();

        }

        public async Task<IEnumerable<Revirsations>> GetAsync(Expression<Func<Revirsations, bool>> filter = null)
        {
            if (filter!=null)
            {
                return
                    await db.Revirsations.Where(filter).Include("Rooms").ToListAsync();
            }
            else
            {
                return
                    await db.Revirsations.ToListAsync();
            }
        }

        public async Task<Revirsations> GetByIdAsync(Expression<Func<Revirsations, bool>> filter = null)
        {
            var data = await db.Revirsations.Where(filter).Include("Rooms").FirstOrDefaultAsync();
            return data;
        }

        public async Task<IEnumerable<Revirsations>> SearchAsync(Expression<Func<Revirsations, bool>> filter = null)
        {
            var data = await db.Revirsations.Where(filter).Include("Rooms").ToListAsync();
            return data;
        }

        public async Task UpdateAsync(Revirsations obj)
        {
            obj.UpdateDate = DateTime.Now;
            obj.IsUpdated = true;

            db.Entry(obj).State = EntityState.Modified;
            await db.SaveChangesAsync();
        }
    }
}
