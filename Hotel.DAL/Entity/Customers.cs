using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hotel.DAL.Entity
{
    [Table("Customer")]
    public class Customers
    {
        public int Id { get; set; }



        [Required]
        public string Name { get; set; }
        
        [Required,MinLength(11)]
        public string PhoneNumber { get; set; }
        [Required, MinLength(11)]
        public int NationalNumber { get; set; }


        public int ReceptionId { get; set; }

        [ForeignKey("ReceptionId")]
        public Reception? Reception { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public bool IsUpdated { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DeleteDate { get; set; }
        public DateTime UpdateDate { get; set; }

    }
}
