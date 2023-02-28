var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
console.log(result);
//a.Get all the countries from the Asia continent /region using the Filter function
var res=result.filter((ele)=> ele.region=="Asia");
final=res.map((ele)=>ele.name);
console.log(final);
//b.Get all the countries with a population of less than 2 lakhs using Filter function
var pop=result.filter((ele)=>ele.population<200000);
var respop=pop.map((ele)=>ele.name);
console.log(respop);
//c.Print the total population of countries using reduce function
var sum=result.filter((ele)=>ele.population).reduce((a,b)=>a+b.population,0);
console.log(sum);
//d.Print the country which uses US Dollars as currency.
var currency=result.filter((ele)=>ele.currencies);
var currencycountry=currency.filter((ele)=>ele.name=="Dollar");
var rescurrency=currencycountry.map((ele)=>ele.name);
console.log(rescurrency)
}
