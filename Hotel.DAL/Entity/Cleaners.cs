﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hotel.DAL.Entity
{
    public class Cleaners
    {
        [Key]
        public int Id { get; set; }



        [Required,MaxLength(50)]
        public string Name { get; set; }

        [Required, MinLength(11)]
        public string PhoneNumber { get; set; }

        [Required,MinLength(3000)]
        public double Salary { get; set; }
        public string Address { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
        public bool IsUpdated { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DeleteDate { get; set; }
        public DateTime UpdateDate { get; set; }

    }
}
