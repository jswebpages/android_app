$(document).ready(function(){
    loadPage();
})

function loadPage(url){
    if(url == undefined){
        $('#container').load('index.html #header ul', hijackslinks);
    }else{
        $('#container').load(url + '#content', hijackslinks);
    }
}

function hijackslinks(){
    $('#container a').click(function(e){
        e.preventDefault();
        loadPage(e.target.href);
    });
}

