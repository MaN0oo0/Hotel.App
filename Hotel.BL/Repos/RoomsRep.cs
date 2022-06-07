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
    public class RoomsRep : IRooms
    {
       private readonly ApplicationContext db;

        public RoomsRep(ApplicationContext db)
        {
            this.db = db;
        }

        public async Task CreateAsync(Rooms obj)
        {
            await db.Rooms.AddAsync(obj);
            await db.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var OldData = db.Rooms.Find(id);
            OldData.IsDeleted = true;
           await db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Rooms>> GetAsync(Expression<Func<Rooms, bool>> filter = null)
        {
            if (filter != null)
                return
                    await db.Rooms.Where(filter).Include("Cleaners").Include("Customers").ToListAsync();
            else
                return
                     await db.Rooms.ToListAsync();
           
        }

        public async Task<Rooms> GetByIdAsync(Expression<Func<Rooms, bool>> filter)
        {
            var data = await db.Rooms.Where(filter).Include("Cleaners").Include("Customers").FirstOrDefaultAsync();
            return data;
        }

        public async Task<IEnumerable<Rooms>> SearchAsync(Expression<Func<Rooms, bool>> filter = null)
        {
            var data = await db.Rooms.Where(filter).Include("Cleaners").Include("Customers").ToListAsync();
            return data;
        }

        public async Task UpdateAsync(Rooms obj)
        {
            db.Entry(obj).State = EntityState.Modified;
            await db.SaveChangesAsync();
        }
    }
}
