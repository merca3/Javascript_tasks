// function getFormvalue(submitEvent) {
//     submitEvent.preventDefault();
//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
//     console.log(`First name: ${firstName}, Last name: ${lastName}`);
// }


function getFormvalue(submitEvent) {
    submitEvent.preventDefault();
    const formElements = document.getElementById('form1');
    // for (let i = 0; i < formElements.length; i++) {
    //     console.log(formElements[i].value);
    // }
    for (let element of formElements) {
        if (element.value !== 'Submit') {
            console.log(element.value)
        }
    }
}