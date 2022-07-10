

namespace Hotel.PL.Controllers
{
    public class CleanersController : Controller
    {
        private readonly ICleaners cleaners;

        private readonly IMapper mapper;
        public CleanersController(ICleaners cleaners, IMapper mapper)
        {
            this.cleaners = cleaners;
            this.mapper = mapper;
        }

        public async Task<IActionResult> Index(string SearchValue)
        {
            if (SearchValue!=null)
            {
                var data = await cleaners.SearchAsync(x => x.Name.Contains(SearchValue)
                                                       && x.IsActive == true
                                                       && x.IsDeleted == false

                                                       || x.Id.ToString() == SearchValue
                                                       
                                                       );

                var result = mapper.Map<IEnumerable<CleanersVM>>(data);
                return View(result);
            }
            else
            {
                // Without Search
                var data = await cleaners.GetAsync(x => x.IsActive == true && x.IsDeleted == false);
                var result = mapper.Map<IEnumerable<CleanersVM>>(data);
                return View(result);
            }

        }
        public async Task<IActionResult> Create()
        {

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CleanersVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    var data = mapper.Map<Cleaners>(model);
                    await cleaners.CreateAsync(data);
                    return RedirectToAction("Index", "Cleaners");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            
            return View(model);

        }
    }
}
