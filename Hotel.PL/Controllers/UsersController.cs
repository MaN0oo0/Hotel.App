
namespace Hotel.PL.Controllers
{
    public class UsersController : Controller
    {
        private readonly UserManager<ApplicationUser> user;

        public UsersController(UserManager<ApplicationUser> user)
        {
            this.user = user;
        }
        public IActionResult Index()
        {
            var data = user.Users;
            return View(data);
        }
    }
}