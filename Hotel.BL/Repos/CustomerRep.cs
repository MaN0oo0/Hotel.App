
namespace Hotel.BL.Repos
{
    public class CustomerRep: ICustomer
    {
        private readonly ApplicationContext db;
        
        public CustomerRep(ApplicationContext db)
        {
            this.db = db;
           
        }

        public async Task CreateAsync(Customers obj)
        {

            await db.Customers.AddAsync(obj);
     
            await db.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var OldData = db.Customers.Find(id);
            OldData.IsDeleted = true;
            OldData.DeleteDate = DateTime.Now;
            await db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Customers>> GetAsync(Expression<Func<Customers, bool>> filter = null)
        {
            if (filter != null)
                return
                    await db.Customers.Where(filter).Include("Reception").ToListAsync();
            else
              
            return
                     await db.Customers.ToListAsync();
        }

        public async Task<Customers> GetByIdAsync(Expression<Func<Customers, bool>> filter)
        {
            var data = await db.Customers.Where(filter).Include("Reception").FirstOrDefaultAsync();
            return data;
        }

        public async Task<IEnumerable<Customers>> SearchAsync(Expression<Func<Customers, bool>> filter = null)
        {
            var data = await db.Customers.Where(filter).Include("Reception").ToListAsync();
            return data;
        }

        public async Task UpdateAsync(Customers obj)
        {
            obj.UpdateDate = DateTime.Now;
            obj.IsUpdated = true;

            db.Entry(obj).State = EntityState.Modified;
            await db.SaveChangesAsync();
        }
       

    }
}
