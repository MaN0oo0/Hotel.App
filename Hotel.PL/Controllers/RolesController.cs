using Microsoft.AspNetCore.Mvc;

namespace Hotel.PL.Controllers
{
    public class RolesController : Controller
    {
        private readonly RoleManager<IdentityRole> role;
        private readonly UserManager<ApplicationUser> userManager;
        public RolesController(RoleManager<IdentityRole> Role, UserManager<ApplicationUser> userManager )
        {
            role = Role;
            this.userManager = userManager;
        }
        public IActionResult Index()
        {
            var data = role.Roles;
            return View(data);
        }
        public async Task<IActionResult> CreateRole()
        {

            return View();
        }
        [HttpPost]
        public async Task<IActionResult> CreateRole(IdentityRole model)
        {
           
         var res= await role.CreateAsync(model);
            if (res.Succeeded)
            {
                return RedirectToAction("index");
            }
            else
            {
                foreach (var item in res.Errors)
                {
                    ModelState.AddModelError("", item.Description);
                }
            }

            return View(model);
        }


        public async Task<IActionResult> Update(string id)
        {
            var data = await role.FindByIdAsync(id);
            return View(data);
        }

        [HttpPost]
        public async Task<IActionResult> Update(IdentityRole model)
        {

            var result = await role.UpdateAsync(model);

            if (result.Succeeded)
            {
                return RedirectToAction("Index");
            }
            else
            {
                foreach (var item in result.Errors)
                {
                    ModelState.AddModelError("", item.Description);
                }
            }
            return View(model);
        }
        public async Task<IActionResult> Delete(string id)
        {
            var data = await role.FindByIdAsync(id);
            return View(data);
        }
        [HttpPost]
        public async Task<IActionResult> Delete(IdentityRole model)
        {
            var data = await role.FindByIdAsync(model.Id);
            dynamic resualt = "";
            if (data != null)
            {
                resualt = await role.DeleteAsync(model);
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
            var data = await role.FindByIdAsync(id);
            return View(data);
        }

        public async Task<IActionResult> AddOrRemoveUsers(string RoleId)
        {

            ViewBag.roleId = RoleId;

            var RoleManger = await role.FindByIdAsync(RoleId);

            var model = new List<UserInRoleVM>();

            foreach (var user in userManager.Users)
            {
                var userInRole = new UserInRoleVM()
                {
                    UserId = user.Id,
                    UserName = user.UserName
                };

                if (await userManager.IsInRoleAsync(user, RoleManger.Name))
                {
                    userInRole.IsSelected = true;
                }
                else
                {
                    userInRole.IsSelected = false;
                }

                model.Add(userInRole);
            }

            return View(model);
        }


        [HttpPost]
        public async Task<IActionResult> AddOrRemoveUsers(List<UserInRoleVM> model, string RoleId)
        {

            var RoleManger = await role.FindByIdAsync(RoleId);

            for (int i = 0; i < model.Count; i++)
            {

                var user = await userManager.FindByIdAsync(model[i].UserId);

                IdentityResult result = null;

                if (model[i].IsSelected && !(await userManager.IsInRoleAsync(user, RoleManger.Name)))
                {

                    result = await userManager.AddToRoleAsync(user, RoleManger.Name);

                }
                else if (!model[i].IsSelected && (await userManager.IsInRoleAsync(user, RoleManger.Name)))
                {
                    result = await userManager.RemoveFromRoleAsync(user, RoleManger.Name);
                }
                else
                {
                    continue;
                }

            }

            return RedirectToAction("Update", new { id = RoleId });
        }



    }
}
