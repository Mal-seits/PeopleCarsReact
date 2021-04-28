using System.IO;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace PeopleCarsReact.Data
{
    public class PeopleCarsDbContextFactory : IDesignTimeDbContextFactory<PeopleCarsDbContext>
    {
        public PeopleCarsDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}PeopleCarsReact.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new PeopleCarsDbContext(config.GetConnectionString("ConnectionString"));
        }
    }
}