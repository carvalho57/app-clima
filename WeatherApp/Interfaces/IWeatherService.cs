using System.Threading.Tasks;
using WeatherApp.Models;

namespace WeatherApp.Interfaces
{
    public interface IWeatherService
    {
        Task<WeatherCityResponse> GetByCityName(string cityName);
        Task<WeatherCityResponse> GetByCoordinate(Coord coord);
    }
}