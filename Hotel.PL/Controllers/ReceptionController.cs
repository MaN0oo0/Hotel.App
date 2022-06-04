using AutoMapper;
using Hotel.BL.Interface;
using Hotel.BL.Models;
using Hotel.DAL.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Hotel.PL.Controllers
{
    public class ReceptionController : Controller
    {
        #region Prop

        private readonly IReception reception;

        private readonly IMapper mapper;
       
        public ReceptionController(IReception reception, IMapper mapper)
        {
            this.reception = reception;
            this.mapper = mapper;
           
        }


       

        #endregion


        public async Task<IActionResult> Index(string SearchValue)
        {

            if (SearchValue != null)
            {

                // Search

                var data = await reception.SearchAsync(x => x.Name.Contains(SearchValue)
                                                        && x.IsActive == true
                                                        && x.IsDeleted == false
                                                        || x.Salary.ToString() == SearchValue
                                                        || x.Id.ToString() == SearchValue
                                                       
                                                        );

                var result = mapper.Map<IEnumerable<ReceptionVM>>(data);
                return View(result);
            }
            else
            {
                // Without Search
                var data = await reception.GetAsync(x => x.IsActive == true && x.IsDeleted == false);
                var result = mapper.Map<IEnumerable<ReceptionVM>>(data);
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
        public async Task<IActionResult> Create(ReceptionVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    var data = mapper.Map<Reception>(model);
                    await reception.CreateAsync(data);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            //var Dpt = await department.GetData();
            //ViewBag.DepartmentList = new SelectList(Dpt, "Id", "Name", model.DepartmentId);
            return View(model);

        }
        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            var data = await reception.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<ReceptionVM>(data);
            //var Dpt = await department.GetData();
            //ViewBag.DepartmentList = new SelectList(Dpt, "Id", "Name", data.DepartmentId);

            return View(result);
        }


        [HttpPost]
        public async Task<IActionResult> Update(ReceptionVM model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var data = mapper.Map<Reception>(model);
                    await reception.UpdateAsync(data);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            //var Dpt = await department.GetData();
            //ViewBag.DepartmentList = new SelectList(Dpt, "Id", "Name", model.DepartmentId);

            return View(model);

        }
        [HttpGet]
        public async Task<IActionResult> Delete(int id)
        {
            var data = await reception.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<ReceptionVM>(data);
            //var Dpt = await department.GetData();
            //ViewBag.DepartmentList = new SelectList(Dpt, "Id", "Name", data.DepartmentId);

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
                    await reception.DeleteAsync(id);
                    return RedirectToAction("Index");
                }

            }
            catch (Exception ex)
            {
                TempData["error"] = ex.Message;
            }

            //ModelState.Clear();
            //var Dpt = await department.GetData();
            ////ViewBag.DepartmentList = new SelectList(Dpt, "Id", "Name", );
            return View();

        }
        public async Task<IActionResult> Details(int id)
        {
            var data = await reception.GetByIdAsync(x => x.Id == id && x.IsActive == true && x.IsDeleted == false);
            var result = mapper.Map<ReceptionVM>(data);
            //var Dpt = await department.GetData();
            //ViewBag.DepartmentList = new SelectList(Dpt, "Id", "Name", data.DepartmentId);

            return View(result);
        }

       




    }
}
