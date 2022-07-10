
using Hotel.BL.Models;
using Hotel.DAL.Extend;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;



namespace Hotel.DAL.database
{
    public class ApplicationContext:IdentityDbContext<ApplicationUser>
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> opt) : base(opt)
        {

        }
        public DbSet<Reception> Receptions { get; set; }
        public DbSet<Buy> Buys { get; set; }
        public DbSet<Cleaners> Cleaners { get; set; }
        public DbSet<Customers> Customers { get; set; }
        public DbSet<Food> Foods { get; set; }
        public DbSet<Revirsations> Revirsations { get; set; }
      
        public DbSet<Rooms> Rooms { get; set; }
      

    }
}
