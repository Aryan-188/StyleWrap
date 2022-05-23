/**
 * @author StyeWrap Developer
 * @version v1.0
 */

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

// for the open the navbar
function openMenu(){
    $(document).ready(function(){
        $("#navBarContent").toggle(200);
        $('.options').toggle(false);
    })
}
function openOption(){
    $(document).ready(function(){
        $('.options').toggle();
    });
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// logic for the open the modal
function show(data){
    let getElmAttr = data.getAttribute("data-modal-name");
    let collection = document.getElementsByClassName('modal');
    for(let result in collection){

        if(getElmAttr === collection[result].id){
            
            $(document).ready(function(){
                $('#' + collection[result].id).fadeIn(150);
            })

            break;
        } else {
            continue;
        }
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// logic for the close the modal from the close icon
function closeModal(data){
    let getElmAttr = data.getAttribute("data-modal-close");
    let collection = document.getElementsByClassName('modal');
    for(let result in collection){

        if(getElmAttr === collection[result].id){
            
            $(document).ready(function(){
                $('#' + collection[result].id).fadeOut(150);
            })

            break;
        } else {
            continue;
        }
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// logic for the close the modal from the button
function closeModalBtn(data){
    let getElmAttr = data.getAttribute("data-modal-close-btn");
    let collection = document.getElementsByClassName('modal');
    for(let result in collection){

        if(getElmAttr === collection[result].id){
            
            $(document).ready(function(){
                $('#' + collection[result].id).fadeOut(150);
            })

            break;
        } else {
            continue;
        }
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// logic for close the alert
function closeAlert(data){
    let __getParentElm___ = data.parentNode.parentNode;
    $(document).ready(function(){
        $(__getParentElm___).fadeOut(100);
    })
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// code for the Carousel
let ___positionCarousel___ = 0;
let classOfTheCarousel = document.getElementsByClassName("imgCarouselDiv");

function nextBtn(){
    $(classOfTheCarousel[___positionCarousel___]).addClass("hideTheImage");
    ___positionCarousel___++;
}

function prevBtn(){
    ___positionCarousel___--;
    $(classOfTheCarousel[___positionCarousel___]).removeClass("hideTheImage");
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// toast close function 
function notification_close_icon(_closeElm){
    let ___elmToastToClose___ = _closeElm.parentNode.parentNode.parentNode;
    $(___elmToastToClose___).fadeOut(100);
}
function ___close_modal_with_button___(__closeElmWithButton__){
    let ____elmToastToCloseWithButton___ = __closeElmWithButton__.parentNode.parentNode;
    $(____elmToastToCloseWithButton___).fadeOut(100);
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// validation script
// code for edit the code of note or credential detail from object

if(__form_password_check_object__ !== {}){
    let ____allTheAlertCredentialTag____ = document.getElementsByClassName("check_password_credential");
    let ___arrayThatContainObjectKey____ = Object.keys(__form_password_check_object__);

    for(let ___arrayThatContainObjectKey____Result___ = 0; ___arrayThatContainObjectKey____Result___ < ___arrayThatContainObjectKey____.length; ___arrayThatContainObjectKey____Result___++){ 
        let _____increment_for_the_tag____ = 0;

        for(let __form_password_check_object__Result in __form_password_check_object__){

            let ____showerOfTheObjectKeyVariable____ = document.getElementsByClassName("___showerOFtheObjectKey___");
            ____allTheAlertCredentialTag____[_____increment_for_the_tag____].innerHTML = __form_password_check_object__[__form_password_check_object__Result] + "--";
            ____showerOfTheObjectKeyVariable____[_____increment_for_the_tag____].innerHTML = __form_password_check_object__Result;
            
            _____increment_for_the_tag____++;
            
        }
    }
} else {
    __form_password_check_object__ = {};
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// check password credentials
function __checkPassCredentials__(___passwordCheckCredential___)
{

    var ___checkPassCredential___ = document.getElementsByClassName("check_password_credential");
    const ___lowerClass__ = new RegExp('(?=.*[a-z]{' + __form_password_check_object__['lowerClass'] + '})');
    const ___upperClass__ = new RegExp('(?=.*[A-Z]{' + __form_password_check_object__['upperClass'] + '})');
    const ___number__ = new RegExp('(?=.*[0-9]{' + __form_password_check_object__['number'] + '})');
    const ___specialChar__ = new RegExp('(?=.*[!@#$%^&*(){}|]{' + __form_password_check_object__['specialCharacter'] + '})');
    const ___character__ = new RegExp('(?=.{' + __form_password_check_object__["character"] + ',})');

    if(___character__.test(___passwordCheckCredential___.value)){
        ___checkPassCredential___[4].style.color = "rgb(4, 192, 4)";
        ___checkPassCredential___[4].nextSibling.style.color = "rgb(4, 192, 4)";
        ___passwordCheckCredential___.style.border = "2px solid rgb(4, 192, 4)";
    } else {
        ___checkPassCredential___[4].style.color = "black";
        ___checkPassCredential___[4].nextSibling.style.color = "black";
        ___passwordCheckCredential___.style.border = "2px solid red";
    }

    if(___number__.test(___passwordCheckCredential___.value)){
        ___passwordCheckCredential___.style.border = "2px solid rgb(4, 192, 4)";
        ___checkPassCredential___[2].nextSibling.style.color = "rgb(4, 192, 4)";
        ___checkPassCredential___[2].style.color = "rgb(4, 192, 4)";
    } else {
        ___checkPassCredential___[2].style.color = "black";
        ___checkPassCredential___[2].nextSibling.style.color = "black";
        ___passwordCheckCredential___.style.border = "2px solid red";
    }

    if(___specialChar__.test(___passwordCheckCredential___.value)){
        ___passwordCheckCredential___.style.border = "2px solid rgb(4, 192, 4)";
        ___checkPassCredential___[3].nextSibling.style.color = "rgb(4, 192, 4)";
        ___checkPassCredential___[3].style.color = "rgb(4, 192, 4)";
    } else {
        ___checkPassCredential___[3].style.color = "black";
        ___checkPassCredential___[3].nextSibling.style.color = "black";
        ___passwordCheckCredential___.style.border = "2px solid red";
    }

    if(___upperClass__.test(___passwordCheckCredential___.value)){
        ___passwordCheckCredential___.style.border = "2px solid rgb(4, 192, 4)";
        ___checkPassCredential___[1].nextSibling.style.color = "rgb(4, 192, 4)";
        ___checkPassCredential___[1].style.color = "rgb(4, 192, 4)";
    } else {
        ___checkPassCredential___[1].style.color = "black";
        ___checkPassCredential___[1].nextSibling.style.color = "black";
        ___passwordCheckCredential___.style.border = "2px solid red";
    }

    if(___lowerClass__.test(___passwordCheckCredential___.value)){
        ___passwordCheckCredential___.style.border = "2px solid rgb(4, 192, 4)";
        ___checkPassCredential___[0].nextSibling.style.color = "rgb(4, 192, 4)";
        ___checkPassCredential___[0].style.color = "rgb(4, 192, 4)";
    } else {
        ___checkPassCredential___[0].style.color = "black";
        ___checkPassCredential___[0].nextSibling.style.color = "black";
        ___passwordCheckCredential___.style.border = "2px solid red";
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// check if the text box is empty
let ___AllTheTextBox___ = document.getElementsByClassName("form-validation"); 
function ___checkTheTextbox___(data)
{
    if(data.value === ""){
        data.nextElementSibling.setAttribute("style", "color: red")
        data.nextElementSibling.innerHTML = "Please Fill the text box";
    } else {
        data.nextElementSibling.setAttribute("style", "color:green;")
        data.nextElementSibling.innerHTML = "You have filled the textbox";
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// check is the text box is empty or not with the correct or wrong sign
function ___checkTheTextboxIsEmpty___(data)
{
    if(data.value === ""){  
        data.previousElementSibling.innerHTML = "X";
        data.style.border = "2px solid rgba(255, 0, 0, 0.808)";
        data.previousElementSibling.style.color = "rgba(255, 0, 0, 0.808)";
    } else {
        data.previousElementSibling.innerHTML = "✔";
        data.style.border = "2px solid rgb(4, 192, 4)";
        data.previousElementSibling.style.color = "rgb(4, 192, 4)";
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// check is the email is equal to the credential with the sign
function ___checkIfTheEmailDoesNotMatch___(___emailData___For___Validation___)
{
    let ___emailData___For___Validation___Value = ___emailData___For___Validation___.value; 
    const emailValidationRegEx = new RegExp('[A-Z,a-z,0-9]@*[a-z].com');
    if(emailValidationRegEx.test(___emailData___For___Validation___Value)){
        ___emailData___For___Validation___.previousElementSibling.innerHTML = "✔";
        ___emailData___For___Validation___.style.border = "2px solid rgb(4, 192, 4)";
        ___emailData___For___Validation___.previousElementSibling.style.color = "rgb(4, 192, 4)";
    } else {
        ___emailData___For___Validation___.previousElementSibling.innerHTML = "X";
        ___emailData___For___Validation___.style.border = "2px solid rgba(255, 0, 0, 0.808)";
        ___emailData___For___Validation___.previousElementSibling.style.color = "rgba(255, 0, 0, 0.808)";
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// check is the mail is equal to the credential an show an alert under the email box
function ___check_IF_the_email_match___(___emailData___For___Validation___with__alert)
{
    const emailValidationRegEx___WithAlert = new RegExp('[A-Z,a-z,0-9]@*[a-z].com'); 
    if(emailValidationRegEx___WithAlert.test(___emailData___For___Validation___with__alert.value)){
        ___emailData___For___Validation___with__alert.nextElementSibling.innerHTML = "You have fill the textbox";
        ___emailData___For___Validation___with__alert.nextElementSibling.style.fontWeight = "bold";
        ___emailData___For___Validation___with__alert.style.border = "2px solid rgb(4, 192, 4)";
        ___emailData___For___Validation___with__alert.nextElementSibling.style.color = "rgb(4, 192, 4)";
    } else {
        ___emailData___For___Validation___with__alert.nextElementSibling.innerHTML = "Please fill the correct syntax of email ex:- xyz@gmail.com";
        ___emailData___For___Validation___with__alert.nextElementSibling.style.fontWeight = "bold";
        ___emailData___For___Validation___with__alert.style.border = "2px solid rgba(255, 0, 0, 0.808)";
        ___emailData___For___Validation___with__alert.nextElementSibling.style.color = "rgba(255, 0, 0, 0.808)";
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// this code will get the text from the textarea and when click on the button it will save in clipboard
// do it is not completed
function ___copyClipboardText____(___dataElmButton___)
{
    
    let ___dataOfTheTextarea___ = ___dataElmButton___.parentNode.nextElementSibling.firstElementChild.value;
    
    // change if that class is there when the button is clicked change the background color
    // using jquery for check if the class his existing
    if($(___dataElmButton___).hasClass("ClipBoardC-primary")){
        ___dataElmButton___.style.backgroundColor = '#0d6efd';
        ___dataElmButton___.style.color = 'white';

    } else if($(___dataElmButton___).hasClass("ClipBoardC-info")) {
        ___dataElmButton___.style.backgroundColor = 'rgb(14, 212, 212)';
        ___dataElmButton___.style.color = 'black';

    } else if($(___dataElmButton___).hasClass("ClipBoardC-dark")){
        ___dataElmButton___.style.backgroundColor = 'black';
        ___dataElmButton___.style.color = 'white';

    } else if($(___dataElmButton___).hasClass("ClipBoardC-secondary")){
        ___dataElmButton___.style.backgroundColor = 'grey';
        ___dataElmButton___.style.color = 'black';

    } else if($(___dataElmButton___).hasClass("ClipBoardC-danger")){
        ___dataElmButton___.style.backgroundColor = 'rgb(235, 28, 28)';
        ___dataElmButton___.style.color = 'white';

    } else if($(___dataElmButton___).hasClass("ClipBoardC-warning")){
        ___dataElmButton___.style.backgroundColor = 'yellow';
        ___dataElmButton___.style.color = 'black';

    } else if($(___dataElmButton___).hasClass("ClipBoardC-success")){
        ___dataElmButton___.style.backgroundColor = '#07d307';
        ___dataElmButton___.style.color = 'white';

    } else if($(___dataElmButton___).hasClass("ClipBoardC-light")){
        ___dataElmButton___.style.backgroundColor = 'white';
        ___dataElmButton___.style.color = 'black';
        
    } else {
        ___dataElmButton___.style.backgroundColor = 'rgba(255, 255, 255, 0.733)';
    }
    
    // save the text in the clipBoard
    if(navigator.clipboard.writeText(___dataOfTheTextarea___)){
        ___dataElmButton___.innerHTML = "Copied";
    } else {
        ___dataElmButton___.innerHTML = "Copy";
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// code for the tooltip
function ___triggerToolTip____(___button_that_clicked____)
{   

    ___button_that_clicked____.parentNode.nextElementSibling.style.borderRadius = '10px';
    ___button_that_clicked____.style.marginBottom = '5px';
    
    $(___button_that_clicked____.parentNode.nextElementSibling).toggle(100);

}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// code for open the accordation that is clicked
function ___openAccordation_dropdown___(___accordation_which_one_is_opening___)
{
    $(___accordation_which_one_is_opening___.parentNode.lastElementChild).toggle(100)
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// collapse
function ____collapse_component____(___collapse_data_that_button_is_clicked____)
{
    // if else is that class is exist
    if($(___collapse_data_that_button_is_clicked____.parentNode.nextElementSibling).hasClass('animation-fade')){
        $(___collapse_data_that_button_is_clicked____.parentNode.nextElementSibling).toggle(100);
        console.log(___collapse_data_that_button_is_clicked____.parentNode.nextElementSibling)
    }

}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// popovers
function ___triggerPopOvers____(___button_that_clicked____)
{   
    let ____title_of_popover____ = ___button_that_clicked____.getAttribute('data-title');
    let ____description_of_popover____ = ___button_that_clicked____.getAttribute('data-description');

    // create the template that will going to show
    let ___code_template_button_popover___ = `
        <div class="popover-content">
            <div class="popover-title">${____title_of_popover____}</div>
            <div class="popover-description">${____description_of_popover____}</div>
        </div>
    `;

    // show the popover when clicked
    $(___button_that_clicked____.parentNode.firstElementChild).toggle().html(___code_template_button_popover___);

}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// offcanvase
function ____trigger_offcanvase____(__offcanvase_button_that_clicked___)
{
    // get the target name of the offcanvase
    let __offcanvase_attr_name_ = __offcanvase_button_that_clicked___.getAttribute('data-offcanvase-target');

    // select all the canvase with the class
    let ___all_the_offcanvase_class___ = document.getElementsByClassName('offcanvas');
    for(let result in ___all_the_offcanvase_class___){
        if(___all_the_offcanvase_class___[result].getAttribute('data-offcanvase-name') === __offcanvase_attr_name_){
            
            if($(___all_the_offcanvase_class___[result]).hasClass('offcanvas-left')){
                ___all_the_offcanvase_class___[result].style.left = '0%';
                ___all_the_offcanvase_class___[result].style.display = 'block';
                
                document.body.style.overflowY = 'hidden';
                $('.container').css({
                    'filter': 'blur(2px)',
                    'margin-left': '30%',
                })

            } else if($(___all_the_offcanvase_class___[result]).hasClass('offcanvas-right')){
                ___all_the_offcanvase_class___[result].style.right = '0%';
                ___all_the_offcanvase_class___[result].style.display = 'block';
                document.body.style.overflowY = 'hidden';
                $('.container').css({
                    'filter': 'blur(2px)',
                })

            } else if($(___all_the_offcanvase_class___[result]).hasClass('offcanvas-top')){
                ___all_the_offcanvase_class___[result].style.top = '0%';
                ___all_the_offcanvase_class___[result].style.display = 'block';
                document.body.style.overflowY = 'hidden';
                $('.container').css({
                    'filter': 'blur(2px)',
                })

            } else {
                ___all_the_offcanvase_class___[result].style.bottom = '0%';
                ___all_the_offcanvase_class___[result].style.display = 'block';
                document.body.style.overflowY = 'hidden';
                $('.container').css({
                    'filter': 'blur(2px)',
                })
            }

            break;
        } else {
            continue;
        }
    }

}

// code for the close
function ___close_button_offcanvase____(__close_icon_offcanvas__)
{
    if($(__close_icon_offcanvas__.parentNode.parentNode).hasClass('offcanvas-left')){
        __close_icon_offcanvas__.parentNode.parentNode.style.left = '-30%';
        __close_icon_offcanvas__.parentNode.parentNode.style.display = 'none';
        $('.container').css({
            'filter': 'blur(0px)',
            'margin-left': '10%',
        })

        document.body.style.overflowY = 'scroll';

    } else if($(__close_icon_offcanvas__.parentNode.parentNode).hasClass('offcanvas-right')){
        __close_icon_offcanvas__.parentNode.parentNode.style.right = '-26%';
        __close_icon_offcanvas__.parentNode.parentNode.style.display = 'none';
        document.body.style.overflowY = 'scroll';
        $('.container').css({
            'filter': 'blur(0px)',
        })

    } else if($(__close_icon_offcanvas__.parentNode.parentNode).hasClass('offcanvas-top')){
        __close_icon_offcanvas__.parentNode.parentNode.style.top = '-50%';
        __close_icon_offcanvas__.parentNode.parentNode.style.display = 'none';
        document.body.style.overflowY = 'scroll';
        $('.container').css({
            'filter': 'blur(0px)',
        })

    } else {
        __close_icon_offcanvas__.parentNode.parentNode.style.bottom = '-50%';
        __close_icon_offcanvas__.parentNode.parentNode.style.display = 'none';
        document.body.style.overflowY = 'scroll';
        $('.container').css({
            'filter': 'blur(0px)',
        })
    }
}

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
// designal dropdown
function ____dropdown_button____(__button_that_clicked____)
{
    $(__button_that_clicked____.nextElementSibling).toggle(80);
}
function ____dropdown_button____arrow(__button_that_clicked_arrow__)
{
    $(__button_that_clicked_arrow__.parentNode.nextElementSibling).toggle(80)
}



