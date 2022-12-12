function route() {
    let hashTag = window.location.hash;
    // console.log("hash tag " + hashTag);
    let pageID = hashTag.replace("#/", "");

    if (pageID == "") {
        // navToPage("home");
        MODEL.getMyVariable("home");

    } else {
        // navToPage(pageID);
        MODEL.getMyVariable(pageID);

    } 
    //use model
    MODEL.getMyVariable(pageID);
}

function initListeners() {
    $(window).on("hashchange", route);
    route();
}

var userList = localStorage.getItem('userList');
$(document).ready(function() {
    // navToPage("home");
    initListeners();
    if(userList == null){
        localStorage.setItem('userList',JSON.stringify([]));
        userList = localStorage.getItem('userList');
    }
    userList = JSON.parse(userList);
});
