using System;
using System.Collections.Generic;

namespace WeatherApp.Models
{
    public class WeatherResponse
    {
        public Coord Coord { get; set; }
        public Weather[] Weather { get; set; }
        public string Base { get; set; }
        public Main Main { get; set; }
        public int Visibility { get; set; }
        public Wind Wind { get; set; }
        public Cloud Clouds { get; set; }
        public DateTime Dt { get; set; }
        public System Sys { get; set; }
        public string Timezone { get; set; }
        public string Name { get; set; }
        public int Id { get; set; }
        public int Cod { get; set; }

    }
}