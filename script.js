//http://api.openweathermap.org/data/2.5/forecast?q=dallas,{state%20code}&appid=962b4c07887c5b1363f6ed2eb82702b2


$("#search-button").on("click", function (event) {
    event.preventDefault()
    let $searchCities = $("#search-text").val();
    let queryURL = "http://api.openweathermap.org/data/2.5/forecast?query=" + $searchCities + "&api_key=6a393bcbc5f4f6689456aa457d634f8b";

    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response);
        console.log(response.city.name)
        
        let $cityId = response.city.name;
        let cityURL = "http://api.openweathermap.org/data/2.5/forecast?query=" + $cityId + "&api_key=6a393bcbc5f4f6689456aa457d634f8b";
        
        return $.ajax({
            url: cityURL,
            method: "GET"
        })
        
    })
    
    console.log(event)

})





