using Hotel.DAL.database;
using Hotel.DAL.Extend;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PortalBL.Helpers;
using System.Diagnostics;

namespace Hotel.PL.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;

        public AccountController(UserManager<ApplicationUser> userManager ,SignInManager<ApplicationUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }


        #region Registration

        public IActionResult Regiestr()
        {
            return View();
        }
        [HttpPost]
        public async Task <IActionResult> Regiestr(RegisterVM model)
        {
            

            var user = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                IsAgree=model.isAgree
              
            };

            var result = await userManager.CreateAsync(user ,model.Password);

            if (result.Succeeded)
            {
                return RedirectToAction("Login");
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
        #endregion

        #region LoginAndLogOff

        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login(Login model)
        {
            dynamic result = "";
           
        
       if (model.Email!=null)
       {
                var userEmail = await userManager.FindByEmailAsync(model.Email);
                result = await signInManager.PasswordSignInAsync(userEmail, model.Password, model.RemmberMe, false);
               
       }
           
    
            if (result.Succeeded)
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ModelState.AddModelError("", "Invalid UserName Or Password");

            }
            return View(model);
        }
        [HttpPost]
        public async Task<IActionResult> LogOff()
        {

            await signInManager.SignOutAsync();
            return RedirectToAction("Login");
        }

        
        #endregion

        #region Terms


        public IActionResult Terms()
        {
            return View();
        }

        #endregion

        #region PasswordsOperation

        public IActionResult ForgetPassword()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> ForgetPassword(ForgetPasswordVM model)
        {
            var user = await userManager.FindByEmailAsync(model.Email);

            if (user != null)
            {
                var token = await userManager.GeneratePasswordResetTokenAsync(user);

                var passwordResetLink = Url.Action("RestPassword", "Account", new { Email = model.Email, Token = token }, Request.Scheme);
                //MailVM mail = new MailVM();
                //mail.ToEmail = model.Email;
                //mail.FromEmail = "";
                //mail.Name = "Rest Password";
                //mail.Subject = "Rest Password";
             
                //mail.Message = passwordResetLink;
                //MailSettings.MailSender("smtp.office365.com", 587, mail);
                EventLog log = new EventLog();
                log.Source = "Inventory System";
                log.WriteEntry(passwordResetLink, EventLogEntryType.Warning);
                //logger.Log(LogLevel.Warning, passwordResetLink);

                return RedirectToAction("ConfirmForgetPassword");
            }

            return RedirectToAction("ConfirmForgetPassword");
        }
        public IActionResult ConfirmForgetPassword()
        {
            return View();
        }
        public IActionResult ConfirmPassword()
        {
            return View();
        }

        public IActionResult RestPassword(string? Email,string? Token)
        {
            if (Email!=null&&Token!=null)
            {
                return View();
            }
            return RedirectToAction("ForgetPassword");
        }

        [HttpPost]
        public async Task< IActionResult> RestPassword(RestPasswordVM model)
        {

            var user = await userManager.FindByEmailAsync(model.Email);

            if (user != null)
            {
                var result = await userManager.ResetPasswordAsync(user, model.Token, model.Password);

                if (result.Succeeded)
                {
                    return RedirectToAction("ConfirmRestPassword");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }

                return View(model);
            }

            return RedirectToAction("ConfirmResetPassword");
        }
        public IActionResult ConfirmRestPassword()
        {
            return View();
        }

        #endregion

        #region Access

        public IActionResult Error()
        {
            return View();
        }
        #endregion

    }
}
