using AutoMapper;
using Hotel.BL.Interface;
using Hotel.BL.Models;
using Hotel.DAL.Entity;
using Microsoft.AspNetCore.Mvc;

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
    }
}
