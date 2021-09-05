//1)Create A XHR Object
var request = new XMLHttpRequest();
//2)Opening A Connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.Sending A Connection
request.send();
//4.Once The Server Responds Successfully Then We Have To Process The Data
request.onload=function(){
    var data = JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        console.log("Name:"+data[i].name+","+"Region:"+data[i].region+","+"SubRegion:"+data[i].subregion+","+"Flag:"+data[i].flag);
    }
}