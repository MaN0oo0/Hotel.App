

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
            //obj.CreationDate = DateTime.Now;
         // obj.RevirsationsDate = DateTime.Now;
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
                    await db.Revirsations.Where(filter).Include("Rooms").Include("Customers").ToListAsync();
            }
            else
            {
                return
                    await db.Revirsations.ToListAsync();
            }
        }

        public async Task<Revirsations> GetByIdAsync(Expression<Func<Revirsations, bool>> filter = null)
        {
            var data = await db.Revirsations.Where(filter).Include("Rooms").Include("Customers").FirstOrDefaultAsync();
            return data;
        }

        public async Task<IEnumerable<Revirsations>> SearchAsync(Expression<Func<Revirsations, bool>> filter = null)
        {
            var data = await db.Revirsations.Where(filter).Include("Rooms").Include("Customers").ToListAsync();
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
