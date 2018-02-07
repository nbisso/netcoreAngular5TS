using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular5TF1.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Persona> Get()
        {
            var retorno = new List<Persona>();
            retorno.Add(new Persona() { Id = Guid.NewGuid().ToString(),Apellido = "Ramiro1", Edad = 20, Nombre = "perdo"});
            retorno.Add(new Persona() { Id = Guid.NewGuid().ToString(), Apellido = "Ramiro1", Edad = 20, Nombre = "perdo" });
            retorno.Add(new Persona() { Id = Guid.NewGuid().ToString(), Apellido = "Ramiro1", Edad = 20, Nombre = "perdo" });
            retorno.Add(new Persona() { Id = Guid.NewGuid().ToString(), Apellido = "Ramiro1", Edad = 20, Nombre = "perdo" });
            return retorno;
        }

    }

    public class Persona
    {
        public string Nombre { get; set; }
        public string Id { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
    }
}
