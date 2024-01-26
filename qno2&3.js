
var request =  new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function()
{
    var res = JSON.parse(request.response);
    console.log(res);   
   // 2.For displaying the flags of the country.
    for(var i=0;i<res.length; i++)
    {
        console.log(res[i].flags.png);
    }
    // 3.For displaying country names,regions, sub-regions & population
   for(var i=0;i<res.length;i++)
   {
    console.log("Name: "+ res[i].name.common);
    console.log("Region: "+ res[i].region);
    console.log("Sub-Region: "+ res[i].subregion);
    console.log("Population: "+ res[i].population);
   }
    
        
    
}