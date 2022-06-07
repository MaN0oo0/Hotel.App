using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Hotel.DAL.Entity
{
    public class Rooms
    {
        [Key]
        
        public int Id { get; set; }


        [Required, MinLength(11)]
        public string PhoneNumber { get; set; }

        public int CleanerId { get; set; }

        [ForeignKey("CleanerId")]
        public Cleaners? Cleaners { get; set; }

        public int CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public Customers? Customers { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }

    }
}
