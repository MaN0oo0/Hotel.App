using AutoMapper;
using Hotel.BL.Interface;
using Hotel.BL.Models;
using Hotel.DAL.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Hotel.PL.Controllers
{
    public class RevirsationController : Controller
    {
        private readonly IRevirsations revirsations;
        private readonly IMapper _Imapper;
        private readonly ICustomer customer;
        private readonly IRooms rooms;

        public RevirsationController(IRevirsations revirsations, IMapper imapper, ICustomer customer, IRooms rooms)
        {
            this.revirsations = revirsations;
            _Imapper = imapper;
            this.customer = customer;
            this.rooms = rooms;
    
        }

        public async Task<IActionResult> Index(string SearchValue)
        {
            if (SearchValue!=null)
            {
                var data = await revirsations.SearchAsync(x =>x.IsActive==true&&
                                                           x.IsDeleted==false &&
                                                           x.Customers.Name==SearchValue
                                                           ||x.Rooms.Id.ToString()==SearchValue
                    );
                var result = _Imapper.Map<IEnumerable<ReservationsVM>>(data);
                return View(result);
            }
            else
            {
                var data = await revirsations.GetAsync(x => x.IsActive == true && x.IsDeleted == false);
                var result = _Imapper.Map<IEnumerable<ReservationsVM>>(data);
                return View(result);
            }

        }
        public async Task<IActionResult> Create()
        {

            var Customerdata = await customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await rooms.GetAsync();
            ViewBag.RoomsList = new SelectList(Cleandata, "Id", "Id");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(ReservationsVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    var data = _Imapper.Map<Revirsations>(model);

                    await revirsations.CreateAsync(data);
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
            var Customerdata = await customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name", model.CustomerId);
            var Cleandata = await rooms.GetAsync();
            
             ViewBag.RoomsList= new SelectList(Cleandata, "Id", "Id", model.RoomId);
            return View(model);

        }
        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await revirsations.GetByIdAsync(x => x.RevirsationsNumber == id && x.IsActive == true && x.IsDeleted == false);
            var result = _Imapper.Map<ReservationsVM>(data);
            var Customerdata = await customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await rooms.GetAsync();
            ViewBag.CleanerList = new SelectList(Cleandata, "Id", "Id");

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
                    await revirsations.DeleteAsync(id);
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
            var Customerdata = await customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await rooms.GetAsync();
            ViewBag.RoomsList = new SelectList(Cleandata, "Id", "Id");
            return View();

        }
        public async Task<IActionResult> Details(int id)
        {
            var data = await revirsations.GetByIdAsync(x => x.RevirsationsNumber == id && x.IsActive == true && x.IsDeleted == false);
            var result = _Imapper.Map<ReservationsVM>(data);
            var Customerdata = await customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await rooms.GetAsync();
            ViewBag.RoomsList = new SelectList(Cleandata, "Id", "Id");
            return View(result);
        }
        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            var data = await revirsations.GetByIdAsync(x => x.RevirsationsNumber== id && x.IsActive == true && x.IsDeleted == false);
            var result = _Imapper.Map<ReservationsVM>(data);
            var Customerdata = await customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await rooms.GetAsync();
            ViewBag.RoomsList = new SelectList(Cleandata, "Id", "Id");

            return View(result);
        }


        [HttpPost]
        public async Task<IActionResult> Update(ReservationsVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var data = _Imapper.Map<Revirsations>(model);
                    await revirsations.UpdateAsync(data);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            var Customerdata = await customer.GetAsync();
            ViewBag.CustomerList = new SelectList(Customerdata, "Id", "Name");
            var Cleandata = await rooms.GetAsync();
            ViewBag.RoomsList = new SelectList(Cleandata, "Id", "Id");
            return View(model);

        }
    }
}
