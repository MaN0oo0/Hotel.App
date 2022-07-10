
namespace Hotel.BL.Models
{
    public class ReceptionVM
    {
        public ReceptionVM()
        {
            //IsActive = true;
            IsDeleted = false;
           // CreationDate = DateTime.Now;
        }

        public int Id { get; set; }

        [Required,MaxLength(50, ErrorMessage="Max Lenght 50 word")]
        public string Name { get; set; }

     
        public double Salary { get; set; }

        
        public string PhoneNumber { get; set; }

        public DateTime DOB { get; set; }
        public string Address { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public bool IsUpdated { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DeleteDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
