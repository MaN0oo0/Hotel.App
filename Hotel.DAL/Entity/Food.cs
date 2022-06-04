using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


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

    }
}
