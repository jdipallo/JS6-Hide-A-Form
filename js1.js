var editProfileBtn = document.getElementById("editProfileBtn");
var saveProfileBtn = document.getElementById("saveProfileBtn");
var profileForm    = document.getElementById("profileForm");
var theProfileContent = document.getElementById("theProfileContent");

editProfileBtn.addEventListener('click', handleClickEvent);
saveProfileBtn.addEventListener('click', handleClickEvent);

function handleClickEvent(event) {
    if (event.srcElement.id === "editProfileBtn") {
        profileForm.style.display="block";
    } 
    else if (event.srcElement.id === "saveProfileBtn") {
        gatherFormContent(theProfileContent);
    }
}

function gatherFormContent(contentId) {
    profileForm.style.display = "none";
    
    var name = '<p>Name:<span>' + ' ' + '</span>' + profileForm.firstName.value + ' ' + profileForm.lastName.value + '</p>';
    var bio  = '<p>Bio:<span>' + ' ' + '</span>' + profileForm.bio.value + '</p>';
    var favBooks = '<p>Favorite Books:<span>' + ' ' + '</span>' + profileForm.favbooks.value + '</p>' ;
    var favjslibs = '<p>Favorite JS Libraries:<span>' + ' ' + '</span>' + profileForm.favjslibs.value + '</p>';
    contentId.innerHTML = name + bio + favBooks + favjslibs;
}