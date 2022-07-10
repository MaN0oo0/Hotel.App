

namespace Hotel.BL.Models
{
    public class ForgetPasswordVM
    {
        [Required(ErrorMessage = "Email Is Required")]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string Email { get; set; }
    }
}
