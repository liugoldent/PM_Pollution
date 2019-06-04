/*JSONP use
JSONP 與HTML內js連結
須在HTML內定義網址然後與JS內呼叫
*/
/*
function showEvents(data){
    var newContent="";  
   console.log(newContent[0]);
}
*/


/*GET JSON 通用格式  尾端是JSON可以用＆尾端是URL也可以用*/
/*
(function () {     
    var URL = "http://opendata.epa.gov.tw/webapi/Data/ATM00766/?$orderby=SiteId%20desc&$skip=0&$top=1000&format=json&callback=?";
  //if 政府開放資料不用加上&callback=?
  //if 非政府開放資料  再 加上&callback=?
  $.getJSON( URL, function(){
    format: "json"
  }).done(function(data) {
        var opendata;
    	opendata= data;
      console.log(opendata);
    });
})();
*/


/* AJAX 請求 JSON use 最基本寫法*/
/*
var openURL="http://opendata.epa.gov.tw/webapi/Data/ATM00766/?$orderby=SiteId%20desc&$skip=0&$top=1000&format=json&callback=?";

var xhr=new XMLHttpRequest(); 
xhr.open("GET",openURL,true);
xhr.send();
//上三行資料請求 


xhr.onload=function(){
if(this.readyState === 4 && this.status === 200){
 var data = JSON.parse(this.responseText);
    for(var i=0;i<10;i++){
        console.log(data[i]);
    }
    var myh1=document.getElementById("h1");
    myh1.innerHTML=data[0].masterUnit;
    }
};
//以上是當伺服器回應時要幹嘛
*/


/*大神寫的*/
/*
function getData (cb) {
  const clientId = 's44s145uexjgeu9mqqa1s93oc1bnli';
  const limit = 20;
  
  $.ajax({
    url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-9B2AEB2E-B9E8-4D21-93AA-A5369BA74CD5&format=JSON&locationName=&elementName=&sort=time',
    success: (response) => {
      console.log(response);
      cb(null, response);
        },
    error: (err) => {
      cb(err);
    }
  })
}

getData((err, data) => {
  // const {streams} = data;
  if (err) {
    console.log(err);
  } else {
    const streams = data.streams;

    const $row = $('.row');
    for(const stream of streams) {
      $row.append(getColumn(stream));
    }  
  }
});
*/

function RenewData(){
(function () {     
    var URL = "http://opendata.epa.gov.tw/webapi/Data/ATM00766/?$orderby=SiteId%20desc&$skip=0&$top=1000&format=json&callback=?";
  //if 政府開放資料不用加上&callback=?
  //if 非政府開放資料  再 加上&callback=?
  $.getJSON( URL, function(){
    format: "json"
  }).done(function(data) {

        var opendata;
    	opendata= data;
        console.log(opendata);
        console.log(opendata.length);
      
 for(var i=0;i<opendata.length;i++){
        var datapoint=document.getElementById("content");
      
        var tr=document.createElement("tr");
      
        var AddMonitorDate=document.createElement("td");
                AddMonitorDate.className = "MonitorDate";
        var AddCounty=document.createElement("td");
                AddCounty.className = "County";
        var AddSiteName=document.createElement("td");
                AddSiteName.className = "SiteName";
        var AddConcentration=document.createElement("td");
                AddConcentration.className = "Concentration";
      
      tr.appendChild(AddMonitorDate);
      tr.appendChild(AddCounty);
      tr.appendChild(AddSiteName);
      tr.appendChild(AddConcentration);
        datapoint.appendChild(tr) ;
 }     
for (var i=0;i<opendata.length;i++){
        var MonitorDate=document.getElementsByClassName("MonitorDate");
        var County=document.getElementsByClassName("County");
        var SiteName=document.getElementsByClassName("SiteName");
        var Concentration=document.getElementsByClassName("Concentration");
      console.log(MonitorDate.length);
      
        MonitorDate[i].innerHTML=opendata[i].MonitorDate;
        County[i].innerHTML=opendata[i].County;
        SiteName[i].innerHTML=opendata[i].SiteName;
        Concentration[i].innerHTML=opendata[i].Concentration;  
      }
      
    $('#stop').prop('onclick',null).off('click');
    });
})();
    
    
}