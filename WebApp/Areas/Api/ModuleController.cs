using System;
using System.Linq;
using System.Reflection;
using System.Web.Mvc;
using TFL.Lib;
using TFL.Module;

namespace WebApp.Areas.Api
{
    public class ModuleController : Controller
    {
        [HttpGet]
        public ActionResult ListModule(string pass, string fields = "*")
        {
            var r = new Constant.Result();
            if (!Helper.CheckPasswordConfig(pass, ref r))
                return r.ToApiResult();

            try
            {
                r = new Constant.Result<object>
                {
                    Data = TFL.Module.Module.ListMethod().GroupBy(x => x.Target as IModule).Select(x =>
                    {
                        var m = x.Key;

                        return new
                        {
                            Module = new
                            {
                                Name = m.Name,
                                Version = m.Version,
                                File = m.Assembly.ManifestModule.Name,
                                Dependency = m.Dependency,
                            },
                            ListMethod = x.Select(y =>
                            {
                                var a = y.Method.GetCustomAttribute(typeof(WebInvoke)) as WebInvoke;

                                DateTime? lastUpdate;
                                try
                                {
                                    lastUpdate = DateTime.Parse(a?.LastUpdate);
                                }
                                catch (Exception)
                                {
                                    lastUpdate = null;
                                }

                                return new
                                {
                                    Name = y.Method.Name,
                                    Type = a?.Method,
                                    LastUpdate = lastUpdate,
                                    Description = a?.Description,
                                    Input = a?.Input,
                                    Output = a?.Output,
                                    UseCache = a?.UseCache,
                                    CacheDuration = a?.UseCache ?? false ? a?.CacheDuration : null
                                };
                            }).ToArray()
                        };
                    }).ToArray()
                };
                return r.ToApiResult(fields);
            }
            catch (Exception ex)
            {
                r.Status = 1;
                r.Message = ex.GetFullMessage();
                return r.ToApiResult();
            }
        }

        [HttpPost]
        public ActionResult UpdateModule(string pass, string fields = "*")
        {
            var r = new Constant.Result();
            if (!Helper.CheckPasswordConfig(pass, ref r))
                return r.ToApiResult();

            try
            {
                TFL.Module.Module.Reload();
                return r.ToApiResult(fields);
            }
            catch (Exception ex)
            {
                r.Status = 1;
                r.Message = ex.GetFullMessage();
                return r.ToApiResult();
            }
        }

        [HttpPost]
        public ActionResult SetupModule(string pass, string module, string fields = "*")
        {
            var r = new Constant.Result();
            if (!Helper.CheckPasswordConfig(pass, ref r))
                return r.ToApiResult();

            if (module.IsNullOrWhiteSpace())
            {
                r.Status = 1;
                r.Message = $"Missing parameter: '{nameof(module)}'";
                return r.ToApiResult();
            }

            try
            {
                TFL.Module.Module.Setup(module);
                return r.ToApiResult(fields);
            }
            catch (Exception ex)
            {
                r.Status = 1;
                r.Message = ex.GetFullMessage();
                return r.ToApiResult();
            }
        }

        [HttpPost]
        public ActionResult CleanupModule(string pass, string module, string fields = "*")
        {
            var r = new Constant.Result();
            if (!Helper.CheckPasswordConfig(pass, ref r))
                return r.ToApiResult();

            if (module.IsNullOrWhiteSpace())
            {
                r.Status = 1;
                r.Message = $"Missing parameter: '{nameof(module)}'";
                return r.ToApiResult();
            }

            try
            {
                TFL.Module.Module.Cleanup(module);
                return r.ToApiResult(fields);
            }
            catch (Exception ex)
            {
                r.Status = 1;
                r.Message = ex.GetFullMessage();
                return r.ToApiResult();
            }
        }

        [HttpGet]
        [Route("Api/{module}/{method}")]
        public ActionResult Get(string module, string method, string fields = "*")
        {
            return Helper.RunModuleMethod(module, method, Request, fields);
        }

        [HttpPost]
        [Route("Api/{module}/{method}")]
        public ActionResult Post(string module, string method, string fields = "*")
        {
            return Helper.RunModuleMethod(module, method, Request, fields);
        }
    }
}