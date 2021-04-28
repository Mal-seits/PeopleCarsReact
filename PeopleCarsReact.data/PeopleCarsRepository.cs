using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using PeopleCarsReact.Data;

namespace PeopleCarsReact.data
{
    public class PeopleCarsRepository
    {
        private string _connectionString;
        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetAllPeople()
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public Person GetById(int id)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }
        public List<Car> GetCarsForPerson(int id)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == id).ToList();
        }
        public void AddCar(Car car)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }
        public void AddPerson(Person person)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public void DeleteCarsForPerson(int personId)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE PersonId = {personId}");
        }
    }
}
