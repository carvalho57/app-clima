using System;

namespace WeatherApp.Models
{
    public class System
    {
        public int Id { get; set; }
        public string Country { get; set; }
        public DateTime Sunrise { get; set; }
        public DateTime Sunset { get; set; }
        public int Type { get; set; }

    }
}