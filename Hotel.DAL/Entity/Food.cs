

namespace Hotel.DAL.Entity
{
    public class Food
    {
        [Key]
        public int Id { get; set; }



        [Required, MaxLength(50)]
        public string Name { get; set; }

        [Required]
        public double Price { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public bool IsUpdated { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DeleteDate { get; set; }
        public DateTime UpdateDate { get; set; }

    }
}
