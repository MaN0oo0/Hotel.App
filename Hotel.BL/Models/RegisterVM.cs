
namespace Hotel.BL.Models
{
   public class RegisterVM
    {
        [Required(ErrorMessage ="Email Is Required")]
        [EmailAddress(ErrorMessage ="Invalid Email")]
        public string Email { get; set; }

        [Required(ErrorMessage ="UserName Is Required"),MaxLength(50,ErrorMessage ="Max Len 50 ")]
        public string UserName { get; set; }
        [Required(ErrorMessage ="Password iS Requird"),MinLength(6, ErrorMessage = "Min len 6 word")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Confirm Password iS Requird"), MinLength(6, ErrorMessage = "Min len 6 word")]
        [Compare("Password",ErrorMessage ="Password Not Match")]
        public string ConfirmPassword { get; set; }

        // [RegularExpression("false",ErrorMessage = "Terms Is Requried")]

        [Range(typeof(bool), "true", "true", ErrorMessage = "Terms Is Requried")]
       
        public bool isAgree { get; set; }
    }
}
