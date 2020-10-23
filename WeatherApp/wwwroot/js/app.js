(function (doc) {
    const uri = 'weather';
    const storageCities = 'cities'
    const emptyString = '';

    function getCityByName() {
        let input = doc.querySelector('[data-js="cityname"]')
        let cityname = input.value.trim();
        input.value = emptyString;

        if (isNullOrEmpty(cityname))
            return null;

        let url = `${uri}/city/${cityname}`;
        getCity(url);
        setSearch(cityname);
    }

    function setSearch(cityName) {
        const MaxStoredCities = 5;
        var cities = JSON.parse(localStorage.getItem(storageCities));
        cities.push(cityName);

        if (cities.length > MaxStoredCities)
            cities.shift(0);

        localStorage.setItem(storageCities, JSON.stringify(cities));
    }

    function getLastestSearch() {
        return JSON.parse(localStorage.getItem(storageCities));
    }

    function getCityByCoord(longitude, latitude) {
        let coords = {
            lon: longitude,
            lat: latitude
        };

        let url = `${uri}/coord?lon=${coords.lon}&lat=${coords.lat}`;
        getCity(url);
    }

    function isNullOrEmpty(input) {
        return input == emptyString || input == undefined;
    }

    function getCity(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                _displayInfo(data)
            })
            .catch(error => console.error('Não foi possível recuperar as informacoes da cidade.', error));
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
    function initEventListeners() {
        let search_city_name = doc.querySelector('[data-js="get-city-name"]');
        search_city_name.addEventListener('click', getCityByName, false);
        search_city_name.addEventListener('keypress', (keypressed) => {
            if (keypressed == 13)
                getCityByName
        }, false);
    }

    function EnsureCreatedLocalStorage() {
        if (!localStorage.getItem(storageCities))
            localStorage.setItem(storageCities, JSON.stringify([]));
    } 

    function init() {
        initEventListeners();
        EnsureCreatedLocalStorage();        

        navigator.geolocation
            .getCurrentPosition(
                (position) => getCityByCoord(position.coords.longitude, position.coords.latitude)
            );

        getLastestSearch()
            .forEach(function (city) {
                console.log(city);
            });
    }
    
    init();
})(document);