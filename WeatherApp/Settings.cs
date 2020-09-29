namespace WeatherApp
{
    public static class Settings
    {
        public static string APIKEY = "YOUR API KEY HERE";
        public static string WeatherUri = $"api.openweathermap.org/data/2.5/weather?q=name&units=metric&lang=pt_br&appid={APIKEY}";
        public static string GeoWeatherUri = $"api.openweathermap.org/data/2.5/weather?lat=latvalue&lon=lonvalue&units=metric&lang=pt_br&appid={APIKEY}";
    }
}