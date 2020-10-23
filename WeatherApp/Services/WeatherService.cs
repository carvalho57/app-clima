using System;
using System.Threading.Tasks;
using WeatherApp.Interfaces;
using WeatherApp.Models;

namespace WeatherApp.Services
{
    public class WeatherService : IWeatherService
    {
        private readonly HttpClientService _clientService;

        public WeatherService(HttpClientService clientService)
        {
            _clientService = clientService;
        }

        public async Task<WeatherCityResponse> GetByCityName(string city)
        {
            var uri = new Uri($@"http://{Settings.WeatherUri.Replace("name", city)}");

            var response = await _clientService.GetAsync<WeatherResponse>(uri);
            return ToWeatherCityResponse(response);
        }

        public async Task<WeatherCityResponse> GetByCoordinate(Coord coord)
        {
            var uri = new Uri($@"http://{Settings.GeoWeatherUri
                    .Replace("latvalue", coord.Lat)
                    .Replace("lonvalue", coord.Lon)}");
            var response = await _clientService.GetAsync<WeatherResponse>(uri);
            return ToWeatherCityResponse(response);
        }

        private WeatherCityResponse ToWeatherCityResponse(WeatherResponse response) {
            return new WeatherCityResponse(
                        response.Name,
                        response.Sys.Country,
                        response.Sys.Sunrise,
                        response.Sys.Sunset,
                        response.Main.Temp,
                        response.Main.Temp_Min,
                        response.Main.Temp_Max
                    );                    
        }
    }
}