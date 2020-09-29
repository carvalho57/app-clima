(function (doc) {
    const uri = "weather";

    function getCityByName() {
        let cityname = doc.querySelector('[data-js="cityname"]').value.trim();
        let url = `${uri}/city/${cityname}`;
        getCityUrl(url);
    }
    function setSearch(cityName) {                
        var cities = JSON.parse(localStorage.getItem('cities'));
        cities.push(cityName);
        if(cities.length > 5)
            cities.shift(0);
        localStorage.setItem('cities', JSON.stringify(cities));
    }
    
    function getLastestSearch() {
        var cities = JSON.parse(localStorage.setItem('cities'));
        return cities;
    }

    function getCityByCoord() {
        let coords = {
            lon: -49.276855,
            lat: -25.441105
        };
        let url = `${uri}/coord?lon=${coords.lon}&lat=${coords.lat}`;
        getCityUrl(url);
    }

    function getCityUrl(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => _displayInfo(data))
        .then(data => setSearch(data))
        .catch(error => console.error('Unable to get items.', error));
    }

    function _displayInfo(data) {
        let display = doc.querySelector('[data-js="display"]');
        let dl = doc.createElement('dl');
        Object.keys(data).forEach(function (key) {
            let dt = doc.createElement("dt");
            dt.textContent = key;
            let dd = doc.createElement("dd");
            dd.textContent = data[key];

            dl.appendChild(dt);
            dl.appendChild(dd);
        })
        _removeChildrenNodes(display);
        display.appendChild(dl);
    }

    function _removeChildrenNodes(elem) {
        while (elem.hasChildNodes())
            elem.removeChild(elem.lastChild)
    }

    function init() {
        let search_city_name = doc.querySelector('[data-js="get-city-name"]');
        search_city_name.addEventListener('click', getCityByName, false);

        if(!localStorage.getItem('cities'))
            localStorage.setItem('cities', JSON.stringify([]));
    }
    init();
})(document);