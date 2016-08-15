using System;
using System.Text;
using System.Web.Mvc;
using TFL.Lib;

namespace WebApp.Areas.Api
{
    public static class Helper
    {
        public static ActionResult ToApiResult(this Constant.Result result, string query = "*", int? maxLevel = null, Action<Constant.JsonNode> processor = null)
        {
            string json;

            if (result == null)
                json = null;
            else if (result.Status != 0)
                json = result.ToJson("Status,Message");
            else
            {
                if (result.Message.IsNullOrWhiteSpace())
                    query += ",-Message";

                json = result.ToJson(query, maxLevel, processor);
            }

            return new ContentResult { ContentType = "application/json", ContentEncoding = Encoding.UTF8, Content = json };
        }
    }
}