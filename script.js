

	fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
        .then(function(response) {
            return response.json();
        })
        
        
        .then(function(data) {
        console.log(data);
            // loopThroughResults(json);
        });
        .catch(function(error) {
            console.log(error);
        });
