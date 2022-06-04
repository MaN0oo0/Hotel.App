using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hotel.DAL.Entity
{
    public class Revirsations
    {
        [Key]
        public int RevirsationsNumber { get; set; }

        public DateTime RevirsationsDate { get; set;}

        public DateTime ExpiryDate { get; set;}

        public int RoomId { get; set; }
       
        public Rooms? Rooms { get; set; }

        public int CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public Customers? Customers { get; set; }

    }
}
