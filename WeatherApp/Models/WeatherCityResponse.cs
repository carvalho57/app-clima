using System;

namespace WeatherApp.Models
{
    public class WeatherCityResponse
    {
        public WeatherCityResponse(string name, string country, DateTime sunrise, DateTime sunset, decimal temp, decimal temp_min, decimal temp_Max)
        {
            Name = name;
            Country = country;
            Sunrise = sunrise;
            Sunset = sunset;
            Temp = temp;
            Temp_min = temp_min;
            Temp_Max = temp_Max;
        }

        public string Name { get; set; }
        public string Country { get; set; }
        public DateTime Sunrise { get; set; }
        public DateTime Sunset { get; set; }
        public decimal Temp { get; set; }
        public decimal Temp_min { get; set; }
        public decimal Temp_Max { get; set; }
    }
}