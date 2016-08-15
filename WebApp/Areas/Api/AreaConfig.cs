using System.Web.Mvc;

namespace WebApp.Areas.Api
{
    public class AreaConfig : AreaRegistration 
    {
        public override string AreaName => "Api";

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Api Default",
                "Api/{action}",
                new { controller = "Api" }
            );
        }
    }
}