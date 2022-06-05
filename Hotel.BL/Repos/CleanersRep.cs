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
    public class CleanersRep : ICleaners
    {
     private readonly ApplicationContext db;

        public CleanersRep(ApplicationContext db)
        {
            this.db = db;
        }

        public async Task CreateAsync(Cleaners obj)
        {
            await db.Cleaners.AddAsync(obj);
            await db.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var OldData =await db.Cleaners.FindAsync(id);
            OldData.IsDeleted = true;
            OldData.DeleteDate = DateTime.Now;
           await db.SaveChangesAsync();

        }

        public async Task<IEnumerable<Cleaners>> GetAsync(Expression<Func<Cleaners, bool>> filter = null)
        {
            if (filter!=null)
            
                return
                    await db.Cleaners.Where(filter).ToListAsync();
                else
                    return
                        await db.Cleaners.ToListAsync();
            
        }

        public async Task<Cleaners> GetByIdAsync(Expression<Func<Cleaners, bool>> filter = null)
        {
            var data = await db.Cleaners.Where(filter).FirstOrDefaultAsync();
            return data;
        }

        public async Task<IEnumerable<Cleaners>> SearchAsync(Expression<Func<Cleaners, bool>> filter = null)
        {
          var data =await db.Cleaners.Where(filter).ToListAsync();
            return data;
        }

        public async Task UpdateAsync(Cleaners obj)
        {
            obj.IsUpdated = true;
            obj.UpdateDate = DateTime.Now;

            db.Entry(obj).State=EntityState.Modified;
            await db.SaveChangesAsync();
        }
    }
}
