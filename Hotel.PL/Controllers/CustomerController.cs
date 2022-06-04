using AutoMapper;
using Hotel.BL.Interface;
using Hotel.BL.Models;
using Hotel.DAL.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Hotel.PL.Controllers
{
    public class CustomerController : Controller
    {
      private  readonly ICustomer Customer;
      private readonly  IMapper mapper;
        private readonly IReception reception;

        public CustomerController(ICustomer customer, IMapper mapper, IReception reception)
        {
            Customer = customer;
            this.mapper = mapper;
            this.reception = reception;
        }

        public async Task<IActionResult> Index(string SearchValue)
        {

            if (SearchValue != null)
            {

                // Search

                var data = await Customer.SearchAsync(x => x.Name.Contains(SearchValue)
                                                        && x.IsActive == true
                                                        && x.IsDeleted == false
                                                       
                                                        || x.Id.ToString() == SearchValue
                                                        || x.Reception.Name == SearchValue
                                                        );

                var result = mapper.Map<IEnumerable<CustomerVM>>(data);
                return View(result);
            }
            else
            {
                // Without Search
                var data = await Customer.GetAsync(x => x.IsActive == true && x.IsDeleted == false);
                var result = mapper.Map<IEnumerable<CustomerVM>>(data);
                return View(result);
            }
        }

        public async Task<IActionResult> Create()
        {

            var data = await reception.GetAsync();
            ViewBag.CustomerList = new SelectList(data, "Id", "Name");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CustomerVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    var data = mapper.Map<Customers>(model);
                    await Customer.CreateAsync(data);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            var Dpt = await reception.GetAsync();
            ViewBag.CustomerList = new SelectList(Dpt, "Id", "Name", model.ReceptionId);
            return View(model);

        }
        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            var data = await Customer.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<CustomerVM>(data);
            var Dpt = await reception.GetAsync();
            ViewBag.CustomerList = new SelectList(Dpt, "Id", "Name", data.ReceptionId);

            return View(result);
        }


        [HttpPost]
        public async Task<IActionResult> Update(CustomerVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var data = mapper.Map<Customers>(model);
                    await Customer.UpdateAsync(data);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            var Dpt = await reception.GetAsync();
            ViewBag.CustomerList = new SelectList(Dpt, "Id", "Name", model.ReceptionId);

            return View(model);

        }
        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await Customer.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<CustomerVM>(data);
            var Dpt = await reception.GetAsync();
            ViewBag.CustomerList = new SelectList(Dpt, "Id", "Name", data.ReceptionId);

            return View(result);
        }


        [HttpPost]
        [ActionName("Delete")]
        public async Task<IActionResult> _Delete(int id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    await Customer.DeleteAsync(id);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            //var Dpt = await reception.GetAsync();
            //ViewBag.DepartmentList = new SelectList(Dpt, "Id", "Name", );
            return View();

        }
        public async Task<IActionResult> Details(int id)
        {
            var data = await Customer.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<CustomerVM>(data);
            var Dpt = await reception.GetAsync();
            ViewBag.CustomerList = new SelectList(Dpt, "Id", "Name", data.ReceptionId);

            return View(result);
        }

    }
}
