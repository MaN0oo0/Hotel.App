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
        public RoomsController(IRooms rooms, IMapper mapper, ICustomer customer, ICleaners cleaners)
        {
            Rooms = rooms;
            this.mapper = mapper;
            Customer = customer;
            this.cleaners = cleaners;
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
    }
}
