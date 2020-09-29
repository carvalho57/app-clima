using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeatherApp.Interfaces;
using WeatherApp.Models;

namespace WeatherApp.Controllers
{
    [Route("weather")]
    [ApiController]
    public class WeatherController : Controller
    {
        private readonly IWeatherService _service;
        public WeatherController(IWeatherService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("city/{cityname}")]
        public async Task<ActionResult<WeatherCityResponse>> GetByCityName(string cityname)
        {
            return await _service.GetByCityName(cityname);
        }

        [HttpGet]
        [Route("coord")]
        public async Task<ActionResult<WeatherCityResponse>> GetByCoordinate([FromQuery] Coord coord)
        {
            return await _service.GetByCoordinate(coord);
        }
    }
}