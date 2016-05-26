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
    contentId.innerHTML = "blah blah blah";
}