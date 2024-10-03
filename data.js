let obj =[
    {
        "id": 1,
        "Name": "Sami Data",
        "age": "22",
        "ovfeepaid": false,
        "src": "./img/download (3).jfif"
    },
    {
        "id": 2,
        "Name": "waleed",
        "age": "23",
        "ovfeepaid": true ,
        "src": "./img/download (1).jfif"
    },
    {
        "id": 3,
        "Name": "uzair",
        "age": "23",
        "ovfeepaid": false,
        "src": "./img/download (2).jfif"
    },
    {
        "id": 4,
        "Name": "huzaifa",
        "age": "24",
        "ovfeepaid": true,
        "src": "./img/download.jfif"
    }
]


function samidata(){
    document.getElementById("userid").innerText = obj[0].id
    document.getElementById("username").innerText = obj[0].Name
    document.getElementById("userage").innerText = obj[0].age
    document.getElementById("userfee").innerText = obj[0].ovfeepaid
    document.getElementById("profile").src = obj[0].src
}

function waleeddata(){
    document.getElementById("userid").innerText = obj[1].id
    document.getElementById("username").innerText = obj[1].Name
    document.getElementById("userage").innerText = obj[1].age
    document.getElementById("userfee").innerText = obj[1].ovfeepaid
    document.getElementById("profile").src = obj[1].src
}

function uzairdata(){
    document.getElementById("userid").innerText = obj[2].id
    document.getElementById("username").innerText = obj[2].Name
    document.getElementById("userage").innerText = obj[2].age
    document.getElementById("userfee").innerText = obj[2].ovfeepaid
    document.getElementById("profile").src = obj[2].src
}

function huzaifadata(){
    document.getElementById("userid").innerText = obj[3].id
    document.getElementById("username").innerText = obj[3].Name
    document.getElementById("userage").innerText = obj[3].age
    document.getElementById("userfee").innerText = obj[3].ovfeepaid
    document.getElementById("profile").src = obj[3].src
}

