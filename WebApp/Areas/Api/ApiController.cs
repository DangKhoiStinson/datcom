using iFoodBusConnection;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using TFL.Lib;

namespace WebApp.Areas.Api
{
    public class ApiController : Controller
    {
        [HttpGet]
        public ActionResult monAn()
        {
            var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            var db = iFoodBusConnectionDB.GetInstance();
            IEnumerable<MonAn> MA= db.Query<MonAn>("SELECT * FROM MonAn");
            var data = serializer.Serialize(MA);   
            var result = new Constant.Result<object>
            {
              Data = data
            };
            return result.ToApiResult();
        }
        public ActionResult ThanhVien()
        {
            var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            var db = iFoodBusConnectionDB.GetInstance();
            IEnumerable<ThanhVien> TV = db.Query<ThanhVien>("SELECT * FROM ThanhVien");
            var data = serializer.Serialize(TV);
            var result = new Constant.Result<object>
            {
                Data = data
        };
            return result.ToApiResult();
        }
        public ActionResult ChotHoaDon()
        {
            var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            var db = iFoodBusConnectionDB.GetInstance();
            var kq = db.Fetch<ChotHoaDon>("SELECT thoi_gian, hoten,ten_mon,yc_rieng,yc_them, gia,tiengui,trang_thai FROM HoaDon JOIN ThanhVien ON HoaDon.id_kh=ThanhVien.id WHERE day(HoaDon.thoi_gian) = day(getdate()) AND month(HoaDon.thoi_gian) = month(getdate()) AND year(HoaDon.thoi_gian) = YEAR(getdate())");
            var data = serializer.Serialize(kq);
            var result = new Constant.Result<object> {
                Data = data
            };
            return result.ToApiResult();
        }
    }   
}