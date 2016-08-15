using System.Configuration;
using System.Web.Mvc;
using System.Web.Routing;

namespace WebApp
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            TFL.Module.Module.ModuleDir = Server.MapPath(ConfigurationManager.AppSettings["ModuleDir"]);
            TFL.Module.Module.SearchPattern = ConfigurationManager.AppSettings["SearchPattern"];

            AreaRegistration.RegisterAllAreas();

            RouteTable.Routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            RouteTable.Routes.MapMvcAttributeRoutes();

            RouteTable.Routes.MapRoute(
                name: "Angular Controller",
                url: "{*.}",
                defaults: new { controller = "App", action = "Index" }
            );
        }
    }
}
