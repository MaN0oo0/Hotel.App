

namespace Hotel.BL.Models
{
    public class Revirsations
    {
   
        [Key]
      
        public int RevirsationsNumber { get; set; }

        public DateTime RevirsationsDate { get; set; }

        public DateTime ExpiryDate { get; set; }

      
        public int RoomId { get; set; }

        [ForeignKey("RoomId")]
        public Rooms? Rooms { get; set; }

        public int CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public Customers? Customers { get; set; }
        
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public bool IsUpdated { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DeleteDate { get; set; }
        public DateTime UpdateDate { get; set; }

    }
}
