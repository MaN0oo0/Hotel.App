using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel.BL.Models
{
    public class RestPasswordVM
    {
        [Required(ErrorMessage = "Password iS Requird"), MinLength(6, ErrorMessage = "Min len 6 word")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Confirm Password iS Requird"), MinLength(6, ErrorMessage = "Min len 6 word")]
        [Compare("Password", ErrorMessage = "Password Not Match")]
        public string ConfirmPassword { get; set; }

        public string? Email { get; set; }
        public string? Token { get; set; }
    }
}
