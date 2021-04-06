// function getAttributes() {
//     const element = document.getElementById('w3r');
//     // const attributes = element.getAttribute('href');
//     for (let i = 0, atts = element.attributes; i < atts.length; i++) {
//         console.log(atts[i].nodeValue);
//     }
// }

function getAttributes() {
    const linkAttributes = document.getElementById('w3r').attributes; // object
    console.log(`
        href: ${linkAttributes.href.value}, 
        hreflang: ${linkAttributes.hreflang.value}, 
        rel: ${linkAttributes.rel.value}, 
        target: ${linkAttributes.target.value}, 
        type: ${linkAttributes.type.value}`);
}