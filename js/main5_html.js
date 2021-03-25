function changeStyle() {
    const hElement = document.getElementById("change-style");
    if (hElement.style.color === 'blue') {
        hElement.style.fontSize = '24px';
        hElement.style.color = 'black';
        hElement.innerText = 'Javascript w3resources again';
    } else {
        hElement.style.fontSize = '36px';
        hElement.style.color = 'blue';
    }

}