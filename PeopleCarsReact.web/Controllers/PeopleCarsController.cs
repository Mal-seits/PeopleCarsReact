using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PeopleCarsReact.data;

namespace PeopleCarsReact.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private readonly string _connectionString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConnectionString");
        }

        [HttpGet]
        [Route("GetAllPeople")]
        public List<Person> GetAllPeople()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetAllPeople();
        }
        [HttpGet]
        [Route("GetPersonById")]
        public Person GetPersonById(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetById(id);
        }
        [HttpGet]
        [Route("GetCarsForPerson")]
        public List<Car> GetCarsForPerson(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCarsForPerson(id);
        }
        [HttpPost]
        [Route("AddCar")]
        public void AddCar(Car car)
        {
         
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(car);
        }
        [HttpPost]
        [Route("AddPerson")]
        public void AddPerson(Person person)
        {

            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(person);
        }
        [HttpPost]
        [Route("DeleteCarsForPerson")]
        public void DeleteCarsForPerson(int id)
        {

            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCarsForPerson(id);
        }


    }
}
