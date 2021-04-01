function getAttributes() {
    const element = document.getElementById('w3r');
    // const attributes = element.getAttribute('href');
    for (let i = 0, atts = element.attributes; i < atts.length; i++) {
        console.log(atts[i].nodeValue);
    }
}