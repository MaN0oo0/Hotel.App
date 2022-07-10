
namespace Hotel.BL.Models
{
    public class Login
    {
        [Required(ErrorMessage = "Email Is Required")]
       // [EmailAddress(ErrorMessage = "Invalid Email")]
        public string Email { get; set; }   
        [Required(ErrorMessage = "Name Is Required"),MaxLength(50,ErrorMessage ="max len 50")]
      
        public string UserName { get; set; }
       
        [Required(ErrorMessage = "Password iS Requird")]
        [ MinLength(6, ErrorMessage = "Min len 6 word")]
        public string Password { get; set; }
        public bool RemmberMe { get; set; }
        
    }
}
