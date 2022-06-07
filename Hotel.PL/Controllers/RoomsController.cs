using AutoMapper;
using Hotel.BL.Interface;
using Hotel.BL.Models;
using Hotel.DAL.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Hotel.PL.Controllers
{
    public class RoomsController : Controller
    {
        private readonly   IRooms Rooms;
        private readonly IMapper mapper;
        private readonly ICustomer Customer;
        private readonly ICleaners cleaners;
        private readonly IRevirsations revirsations;
        public RoomsController(IRooms rooms, IMapper mapper, ICustomer customer, ICleaners cleaners, IRevirsations revirsations)
        {
            Rooms = rooms;
            this.mapper = mapper;
            Customer = customer;
            this.cleaners = cleaners;
            this.revirsations = revirsations;
        }

        public async Task<IActionResult> Index(string SearchValue)
        {
            if (SearchValue!=null)
            {
                // Search

                var data = await Rooms.SearchAsync(x => x.Id.ToString().Contains(SearchValue)
                                                        && x.IsActive == true
                                                        && x.IsDeleted == false
                                                         
                                                        || x.Customers.Name == SearchValue
                                                        );

                var result = mapper.Map<IEnumerable<RoomsVM>>(data);
                return View(result);
            }
            else
            {
                // Without Search
                var data = await Rooms.GetAsync(x => x.IsActive == true && x.IsDeleted == false);
                var result = mapper.Map<IEnumerable<RoomsVM>>(data);
                return View(result);
            }
           
        }
        public async Task<IActionResult> Create()
        {

            var Customerdata = await Customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await cleaners.GetAsync();
            ViewBag.CleanerList = new SelectList(Cleandata, "Id", "Name");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(RoomsVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    var data = mapper.Map<Rooms>(model);

                    await Rooms.CreateAsync(data);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            //var Dpt = await reception.GetAsync();
            //ViewBag.CustomerList = new SelectList(Dpt, "Id", "Name", model.ReceptionId);
            var Customerdata = await Customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name",model.CustomerId);
            var Cleandata = await cleaners.GetAsync();
            ViewBag.CleanerList = new SelectList(Cleandata, "Id", "Name",model.CleanerId);
            return View(model);

        }
        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await Rooms.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<RoomsVM>(data);
            var Customerdata = await Customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await cleaners.GetAsync();
            ViewBag.CleanerList = new SelectList(Cleandata, "Id", "Name");

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
                    await Rooms.DeleteAsync(id);
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
            var Customerdata = await Customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await cleaners.GetAsync();
            ViewBag.CleanerList = new SelectList(Cleandata, "Id", "Name");
            return View();

        }
        public async Task<IActionResult> Details(int id)
        {
            var data = await Rooms.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<RoomsVM>(data);
            var Customerdata = await Customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await cleaners.GetAsync();
            ViewBag.CleanerList = new SelectList(Cleandata, "Id", "Name");
            return View(result);
        }
        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            var data = await Rooms.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<RoomsVM>(data);
            var Customerdata = await Customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await cleaners.GetAsync();
            ViewBag.CleanerList = new SelectList(Cleandata, "Id", "Name");

            return View(result);
        }


        [HttpPost]
        public async Task<IActionResult> Update(RoomsVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var data = mapper.Map<Rooms>(model);
                    await Rooms.UpdateAsync(data);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            var Customerdata = await Customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await cleaners.GetAsync();
            ViewBag.CleanerList = new SelectList(Cleandata, "Id", "Name");
            return View(model);

        }
    }
}
