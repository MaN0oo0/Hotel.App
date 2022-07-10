

namespace Hotel.DAL.Entity
{
    public class Buy
    {
        [Key]
        public int Id { get; set; }

        public int CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public Customers? Customers { get; set; }

        public int FoodId { get; set; }

        [ForeignKey("FoodId")]

        public Food? Food { get; set; }

    }
}
