const api = "TCkxqkOJS0FSbYRjQDXBrhrtMtChyQ0j335mNDdw";
const url = `https://api.nasa.gov/insight_weather/?api_key=${api}&feedtype=json&ver=1.0`;

function getWeather(){
    fetch(url).then(res=> res.json()).then(data =>{
        var i = 0;
        var sol_days = [];
        var avg_temps = [];
        var hi_temps = [];
        var low_temps = [];
        for(i=0;i<7;i++)
        {
            sol_days[i] = data.sol_keys[i];
            try{
                    avg_temps[i] = data[sol_days[i]].AT.av
                    hi_temps[i] = data[sol_days[i]].AT.mx
                    low_temps[i] = data[sol_days[i]].AT.mn
            }
            catch (e){
                console.log(null)
            }
        }
        
        for(i=1;i<8;i++)
        {
            if(typeof avg_temps[i] !=='undefined')
            {
                document.getElementById("dt0"+i).innerHTML = `${avg_temps[i-1].toFixed(2)}°C&emsp;&emsp;&emsp;&emsp;&emsp;${hi_temps[i-1].toFixed(2)}°C&emsp;&emsp;&emsp;&emsp;&emsp;${low_temps[i-1].toFixed(2)}°C`
            }
        }
    })
}

var pics = "https://images-api.nasa.gov/search?q=mars%20planet&media_type=image"
function testthis(){
    fetch(pics).then(re=> re.json()).then(dat =>{
        var dt = Math.floor((Math.random() * 100) + 1)
        try{
            var desc = dat.collection.items[dt].data[0].description
            var pic = dat.collection.items[dt].href
        }
        catch (e){
            desc = ' '
        }
        document.getElementById('desc').innerHTML = desc    
        fetchpic(pic)
    })
}

function fetchpic(pic_url){
    fetch(pic_url).then(res => res.json()).then(data =>{
        document.getElementById('randpic').src = data[1];
    })
}

getWeather();
testthis();