
namespace Hotel.PL.Controllers
{
    public class UsersController : Controller
    {
        private readonly UserManager<ApplicationUser> user;

        public UsersController(UserManager<ApplicationUser> user)
        {
            this.user = user;
        }
        public   IActionResult Index()
        {
            var data = user.Users;
            return View(data);
        }
        public async Task<IActionResult> Update(string id)
        {
            var data=await user.FindByIdAsync(id);
            return View(data);
        }
        [HttpPost]
        public async Task<IActionResult> Update(ApplicationUser model)
        {
            dynamic resualt = "";
            if (ModelState.IsValid)
            {
                 resualt = await user.UpdateAsync(model);
                if (resualt.Succeeded)
                {
                    return RedirectToAction("Index");
                }
            }
            else
            {
                foreach (var item in resualt.Errors)
                {
                    ModelState.AddModelError("", item.Description);
                }
            }
            return View(model);
        }

        public async Task<IActionResult> Delete(string id)
        {
            var data = await user.FindByIdAsync(id);
            return View(data);
        }
        [HttpPost]
        public async Task<IActionResult> Delete(ApplicationUser model)
        {
            var data = await user.FindByIdAsync(model.Id);
            dynamic resualt = "";
            if (data!=null)
            {
                resualt = await user.DeleteAsync(model);
                if (resualt.Succeeded)
                {
                    return RedirectToAction("Index");
                }
                else
                {
                    foreach (var item in resualt.Errors)
                    {
                        ModelState.AddModelError("", item.Description);
                    }
                }
            }
            
            return View(model);
        }
        public async Task<IActionResult> Details(string id)
        {
            var data = await user.FindByIdAsync(id);
            return View(data);
        }

    }
}