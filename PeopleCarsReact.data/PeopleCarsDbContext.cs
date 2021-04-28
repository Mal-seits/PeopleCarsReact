using Microsoft.EntityFrameworkCore;
using PeopleCarsReact.data;

namespace PeopleCarsReact.Data
{
    public class PeopleCarsDbContext : DbContext
    {
        private readonly string _connectionString;

        public PeopleCarsDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }
    }
}
