//Go to news ApI -> News Sources ->Select Country ->Select Sub CAtegory according to content need
let homeApi =
  "http://newsapi.org/v2/top-headlines?country=in&apiKey=aad25e5a9f894012bb14a6543bdb17c0";

let sportsApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aad25e5a9f894012bb14a6543bdb17c0";

let businessApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aad25e5a9f894012bb14a6543bdb17c0";

let entertainmentApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=aad25e5a9f894012bb14a6543bdb17c0";

let healthApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=aad25e5a9f894012bb14a6543bdb17c0";

let scienceApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=aad25e5a9f894012bb14a6543bdb17c0";

let technologyApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=aad25e5a9f894012bb14a6543bdb17c0";

//Weather Search Start

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchKey = document.getElementById("searchWeatherPlace").value;
  console.log(searchKey);
  searchWeather(searchKey);
});

function searchWeather(searchKey) {
  let WeatherApi = `
  https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=cadc70e6247c33c3d840b35b783197c8`;
  window
    .fetch(WeatherApi)
    .then((data) => {
      data
        .json()
        .then((weather) => {
          console.log(weather);
          let weatherData = weather.weather;
          let main = weather.main;

          output = [];

          for (let x of weatherData) {
            let currentTemp = (weather.main.temp - 273.15).toFixed(2);
            let maxTemp = (weather.main.temp_max - 273.15).toFixed(2);
            let minTemp = (weather.main.temp_min - 273.15).toFixed(2);
            output += `
            <div class="weatherHeader">
            <div class="cityName">${weather.name}</div>
            <div class="cityCondition">${x.description}</div>
          </div>
          <div class="weatherTemperature">
            <div class="weather-now">
              <span class="weather-degreee">${currentTemp}</span>
              <span class="weather-deg-circle">°</span>
              <span class="weather-unit">C</span>
            </div>
            <div class="low-high">
              <div class="degree-wrap">
                <i class="fas fa-angle-double-up up-icon">
                  <span class="max-degree">${maxTemp}</span>
                  <span class="deg-circle">°</span></i
                >
              </div>
              <div class="degree-wrap">
                <i class="fas fa-angle-double-down down-icon">
                  <span class="max-degree">${minTemp}</span>
                  <span class="deg-circle">°</span>
                </i>
              </div>
            </div>
          </div>
          <div class="weather-info">
            <div class="weather-section1">
              <i class="fas fa-tint icon-weather-single"></i>
              <span class="humid">${weather.main.humidity} %</span>
            </div>
            <div class="weather-section2">
              <i class="fas fa-wind icon-weather-single"></i
              ><span class="wind">${weather.wind.speed} km/h</span>
            </div>
            <div class="weather-section3">
              <i class="fas fa-cloud icon-weather-single"></i
              ><span class="cloud">${weather.clouds.all}%</span>
            </div>
          </div>
            `;
            document.getElementById("weatherTemplate").innerHTML = output;
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

//Weather Search End

// Home Section Area Starts Here

window
  .fetch(homeApi)
  .then((HomeData) => {
    HomeData.json()
      .then((home) => {
        let HomeInfo = home.articles;

        let output = [];

        for (let home of HomeInfo) {
          let date = new Date(home.publishedAt).toDateString();
          output += `
          
            <div class="post-content">
                
                <div class="img-title-wrap">
                  <a href="${home.url}" > <img src="${home.urlToImage}" class="image-wrap"/></a>
                </div>

                <div class="text-title-wrap">
                  <div class="entry-title"><a href="${home.url}" target="_self"><h3>${home.title}</h3></a></div>
                  <div class="post-date">${date}</div>
                  <div class="post-desc">${home.description}</div>
                  <div class="post-read-more"><a href="${home.url}">Read more</a></div>
                </div>
            </div>  
            
           
          `;

          document.getElementById("homeSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// Home Section Area End Here

// Sports Section Area Starts Here

window
  .fetch(sportsApi)
  .then((SportsData) => {
    SportsData.json()
      .then((sports) => {
        let SportsInfo = sports.articles;
        let output = [];

        for (let sport of SportsInfo) {
          let date = new Date(sport.publishedAt).toDateString();
          output += `
          
            <div class="post-content">
                
                <div class="img-title-wrap">
                  <a href="${sport.url}" > <img src="${sport.urlToImage}" class="image-wrap"/></a>
                </div>

                <div class="text-title-wrap">
                  <div class="entry-title"><a href="${sport.url}" target="_self"><h3>${sport.title}</h3></a></div>
                  <div class="post-date">${date}</div>
                  <div class="post-desc">${sport.description}</div>
                  <div class="post-read-more"><a href="${sport.url}">Read more</a></div>
                </div>
            </div>  
          
           
          `;

          document.getElementById("sportsSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// Sports Section Area End Here

// Business Section Area Starts Here

window
  .fetch(businessApi)
  .then((BusinessData) => {
    BusinessData.json()
      .then((business) => {
        let BusinessInfo = business.articles;
        let output = [];

        for (let business of BusinessInfo) {
          let date = new Date(business.publishedAt).toDateString();
          output += `
          
            <div class="post-content">
                
                <div class="img-title-wrap">
                  <a href="${business.url}" > <img src="${business.urlToImage}" class="image-wrap"/></a>
                </div>

                <div class="text-title-wrap">
                  <div class="entry-title"><a href="${business.url}" target="_self"><h3>${business.title}</h3></a></div>
                  <div class="post-date">${date}</div>
                  <div class="post-desc">${business.description}</div>
                  <div class="post-read-more"><a href="${business.url}">Read more</a></div>
                </div>
            </div>  
          
           
          `;

          document.getElementById("businessSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// Business Section Area End Here

// Entertainment Section Area Starts Here

window
  .fetch(entertainmentApi)
  .then((EntertainmentData) => {
    EntertainmentData.json()
      .then((entertainment) => {
        let EntertainmentInfo = entertainment.articles;
        let output = [];

        for (let entertainment of EntertainmentInfo) {
          let date = new Date(entertainment.publishedAt).toDateString();
          output += `
          
            <div class="post-content">
                
                <div class="img-title-wrap">
                  <a href="${entertainment.url}" > <img src="${entertainment.urlToImage}" class="image-wrap"/></a>
                </div>

                <div class="text-title-wrap">
                  <div class="entry-title"><a href="${entertainment.url}" target="_self"><h3>${entertainment.title}</h3></a></div>
                  <div class="post-date">${date}</div>
                  <div class="post-desc">${entertainment.description}</div>
                  <div class="post-read-more"><a href="${entertainment.url}">Read more</a></div>
                </div>
            </div>  
          
           
          `;

          document.getElementById("entertainmentSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// Entertainment Section Area End Here

// Science Section Area Starts Here

window
  .fetch(scienceApi)
  .then((ScienceData) => {
    ScienceData.json()
      .then((science) => {
        let ScienceInfo = science.articles;
        let output = [];

        for (let science of ScienceInfo) {
          let date = new Date(science.publishedAt).toDateString();
          output += `
          
            <div class="post-content">
                
                <div class="img-title-wrap">
                  <a href="${science.url}" > <img src="${science.urlToImage}" class="image-wrap"/></a>
                </div>

                <div class="text-title-wrap">
                  <div class="entry-title"><a href="${science.url}" target="_self"><h3>${science.title}</h3></a></div>
                  <div class="post-date">${date}</div>
                  <div class="post-desc">${science.description}</div>
                  <div class="post-read-more"><a href="${science.url}">Read more</a></div>
                </div>
            </div>  
          
           
          `;

          document.getElementById("scienceSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// Science Section Area End Here

//Technology Section Area End Here

window
  .fetch(technologyApi)
  .then((TechnologyData) => {
    TechnologyData.json()
      .then((technology) => {
        let TechnologyInfo = technology.articles;
        let output = [];

        for (let technology of TechnologyInfo) {
          let date = new Date(technology.publishedAt).toDateString();
          output += `
          
            <div class="post-content">
                
                <div class="img-title-wrap">
                  <a href="${technology.url}" > <img src="${technology.urlToImage}" class="image-wrap"/></a>
                </div>

                <div class="text-title-wrap">
                  <div class="entry-title"><a href="${technology.url}" target="_self"><h3>${technology.title}</h3></a></div>
                  <div class="post-date">${date}</div>
                  <div class="post-desc">${technology.description}</div>
                  <div class="post-read-more"><a href="${technology.url}">Read more</a></div>
                </div>
            </div>  
          
           
          `;

          document.getElementById("techSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// Technology Section Area End Here

// Health Section Area Starts Here

window
  .fetch(healthApi)
  .then((HealthData) => {
    HealthData.json()
      .then((health) => {
        let HealthInfo = health.articles;
        let output = [];

        for (let health of HealthInfo) {
          let date = new Date(health.publishedAt).toDateString();
          output += `
        
          <div class="post-content">
              
              <div class="img-title-wrap">
                <a href="${health.url}" > <img src="${health.urlToImage}" class="image-wrap"/></a>
              </div>

              <div class="text-title-wrap">
                <div class="entry-title"><a href="${health.url}" target="_self"><h3>${health.title}</h3></a></div>
                <div class="post-date">${date}</div>
                <div class="post-desc">${health.description}</div>
                <div class="post-read-more"><a href="${health.url}">Read more</a></div>
              </div>
          </div>  
        
         
        `;

          document.getElementById("healthSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// Health Section Area End Here
