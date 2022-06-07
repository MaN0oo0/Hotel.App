using Hotel.DAL.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.DAL.database
{
    public class ApplicationContext:DbContext
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
