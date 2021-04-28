﻿using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace PeopleCarsReact.data
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public List<Car> Cars { get; set; }
        
    }
  
    public class Car
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int PersonId { get; set; }
        
        [JsonIgnore]
        public Person Person { get; set; }
    }
}
