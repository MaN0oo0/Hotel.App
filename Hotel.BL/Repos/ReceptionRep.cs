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
    public class ReceptionRep : IReception
    {
        private readonly ApplicationContext db;
        public ReceptionRep(ApplicationContext db)
        {
            this.db = db;
        }

        public async Task CreateAsync(Reception obj)
        {
           
            await db.Receptions.AddAsync(obj);
            await db.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var OldData = db.Receptions.Find(id);
            OldData.IsDeleted = true;
            OldData.DeleteDate = DateTime.Now;
            await db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Reception>> GetAsync(Expression<Func<Reception, bool>> filter = null)
        {
            if (filter != null)
                return
                    await db.Receptions.Where(filter).ToListAsync();
            else
                return
                     await db.Receptions.ToListAsync();
        }

        public async Task<Reception> GetByIdAsync(Expression<Func<Reception, bool>> filter)
        {
            var data = await db.Receptions.Where(filter).FirstOrDefaultAsync();
            return data;
        }

        public async Task<IEnumerable<Reception>> SearchAsync(Expression<Func<Reception, bool>> filter = null)
        {
            var data = await db.Receptions.Where(filter).ToListAsync();
            return data;
        }

        public async Task UpdateAsync(Reception obj)
        {
            obj.UpdateDate = DateTime.Now;
            obj.IsUpdated = true;

            db.Entry(obj).State = EntityState.Modified;
            await db.SaveChangesAsync();
        }
    }
}
