var postBtn = document.getElementById("postButton");
var getBtn = document.getElementById("getButton");
var putBtn = document.getElementById("putButton");
var deleteBtn = document.getElementById("deleteButton");
let urlPost = "https://httpbin.org/post";
let urlGet = "https://httpbin.org/get";
let urlPut = "https://httpbin.org/put";
let urlDel = "https://httpbin.org/delete";
var recordIdTarget = document.getElementById("recordID");
var articleNameTarget = document.getElementById("articleName");
var articleBodyTarget = document.getElementById("articleBody");
var resultTarget = document.getElementById("result");

function post(){
    resultTarget.innerHTML=``;
    const data = {   
        "RecordID" : recordIdTarget.value,
        "ArticleName" : articleNameTarget.value,
        "ArticleBody" : articleBodyTarget.value,
        "Date" : timerFunc()
    }
    fetch(urlPost,{
        method: 'POST', 
        header: {
            'contentType': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => res.json()).then(jsondata => {
        var headerItem = jsondata["headers"];
        var DataItem = jsondata["json"];
        var originItem = jsondata["origin"];
        var urlItem = jsondata["url"];
        
        var stringItemData = JSON.stringify(DataItem);
        var stringItemHeader = JSON.stringify(headerItem);

        var timeRender = document.createElement('p');
        var item = document.createElement('p');
        var item2 = document.createElement('p');
        var item3 = document.createElement('p');
        var item4 = document.createElement('p');
        var recordedId = document.createElement('p');
        
        recordedId.innerHTML = `<b>ID</b> : ${recordIdTarget.value}` 
        timeRender.innerHTML = `<b>Date</b> : ${timerFunc()}`
        item.innerHTML = `<strong>Header data</strong> : ${stringItemHeader}`;
        item2.innerHTML = `<b>Data</b> : ${stringItemData}`;
        item3.innerHTML = `<b>origin</b> : ${originItem}`;
        item4.innerHTML = `<b>endpoint</b> : ${urlItem}`;
        
        resultTarget.appendChild(recordedId);
        resultTarget.appendChild(timeRender);
        resultTarget.appendChild(item);
        resultTarget.appendChild(item2);
        resultTarget.appendChild(item3);
        resultTarget.appendChild(item4);
    })
    .catch((error) => {console.error('fail', error)});
}
function get(){
    resultTarget.innerHTML=``;
    fetch(urlGet).then(res=> res.json()
    ).then(jsondata=>{
        
        var headerItem = jsondata["headers"];
        var originItem = jsondata["origin"];
        var urlItem = jsondata["url"];
        
        var stringItemHeader = JSON.stringify(headerItem);

        var timeRender = document.createElement('p');
        var item = document.createElement('p');
        var item3 = document.createElement('p');
        var item4 = document.createElement('p');
        var recordedId = document.createElement('p');
        
        recordedId.innerHTML = `<b>ID</b> : ${recordIdTarget.value}` 
        timeRender.innerHTML = `<b>Date</b> : ${timerFunc()}`
        item.innerHTML = `<strong>Header data</strong> : ${stringItemHeader}`;
        item3.innerHTML = `<b>origin</b> : ${originItem}`;
        item4.innerHTML = `<b>endpoint</b> : ${urlItem}`;
        
        resultTarget.append(recordedId);
        resultTarget.append(timeRender);
        resultTarget.appendChild(item);
        resultTarget.appendChild(item3);
        resultTarget.appendChild(item4);

    }).catch((error) => {console.error('fail', error)});

}
function put(){
    resultTarget.innerHTML=``;
    const data = {   
            "RecordID" : recordIdTarget.value,
            "ArticleName" : articleNameTarget.value,
            "ArticleBody" : articleBodyTarget.value,
            "Date" : timerFunc()
        }
    fetch(urlPut,{
        method: 'PUT', 
        header: {
            'contentType': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => res.json()).then(jsondata => {
        var headerItem = jsondata["headers"];
        var DataItem = jsondata["json"];
        var originItem = jsondata["origin"];
        var urlItem = jsondata["url"];
        
        var stringItemData = JSON.stringify(DataItem);
        var stringItemHeader = JSON.stringify(headerItem);

        var timeRender = document.createElement('p');
        var item = document.createElement('p');
        var item2 = document.createElement('p');
        var item3 = document.createElement('p');
        var item4 = document.createElement('p');
        var recordedId = document.createElement('p');
        
        recordedId.innerHTML = `<b>ID</b> : ${recordIdTarget.value}`; 
        timeRender.innerHTML = `<b>Date</b> : ${timerFunc()}`
        item.innerHTML = `<strong>Header data</strong> : ${stringItemHeader}`;
        item2.innerHTML = `<b>Data</b> : ${stringItemData}`;
        item3.innerHTML = `<b>origin</b> : ${originItem}`;
        item4.innerHTML = `<b>endpoint</b> : ${urlItem}`;
        
        resultTarget.appendChild(recordedId);
        resultTarget.appendChild(timeRender);
        resultTarget.appendChild(item);
        resultTarget.appendChild(item2);
        resultTarget.appendChild(item3);
        resultTarget.appendChild(item4);
    })
    .catch((error) => {console.error('fail', error)});
}

function del(){
    resultTarget.innerHTML=``;
    fetch(urlDel, { method: 'DELETE' })
    .then(res => res.json()).then(jsondata => {
        var headerItem = jsondata["headers"];
        var originItem = jsondata["origin"];
        var urlItem = jsondata["url"];
        
        var stringItemHeader = JSON.stringify(headerItem);

        var timeRender = document.createElement('p');
        var item = document.createElement('p');
        var item3 = document.createElement('p');
        var item4 = document.createElement('p');
        var recordedId = document.createElement('p');
        
        recordedId.innerHTML = `<b>ID</b> : ${recordIdTarget.value}`; 
        timeRender.innerHTML = `<b>Date</b> : ${timerFunc()}`;
        item.innerHTML = `<strong>Header data</strong> : ${stringItemHeader}`;
        item3.innerHTML = `<b>origin</b> : ${originItem}`;
        item4.innerHTML = `<b>endpoint</b> : ${urlItem}`;
        
        resultTarget.appendChild(recordedId);
        resultTarget.appendChild(timeRender);
        resultTarget.appendChild(item);
        resultTarget.appendChild(item3);
        resultTarget.appendChild(item4);
    })


}
function timerFunc(){
    var curr = new Date();
    let date = (curr.getDate() < 10) ? '0'+parseInt(curr.getDate()) : curr.getDate(); 
    let month = curr.getMonth()+1;
    let hours = curr.getHours();
    let mins = (curr.getMinutes()<10) ? '0'+parseInt(curr.getMinutes()) : curr.getMinutes();
    var finalTime; 
    if(hours>12){
        finalTime = `${hours-12}:${mins}PM, ${month}/${date}`
    }else if(hours<12){
        finalTime = `${hours}:${mins}AM, ${month}/${date}`
    }else{
        finalTime = `${hours}:${mins}PM, ${month}/${date}`
    }
    return finalTime;
}
postBtn.addEventListener('click',post);
getBtn.addEventListener('click',get);
putBtn.addEventListener('click',put);
deleteBtn.addEventListener('click',del);
