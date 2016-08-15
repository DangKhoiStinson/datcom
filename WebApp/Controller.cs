using System.Web.Mvc;

namespace WebApp
{
    public class AppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Layouts/_layout.cshtml");
        }
    }
}