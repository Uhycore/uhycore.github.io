// AOS Initialization Script
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

// WhatsApp Message Script
function sendMessage() {
    var name = document.getElementById('name').value;
    // var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Menggunakan tanda bintang (*) untuk membuat teks bold di WhatsApp
    var fullMessage = "*Name:* " + name + "\n" +
        // "*Email:* " + email + "\n" +
        "*Message:* " + message;

    var encodedMessage = encodeURIComponent(fullMessage);

    var whatsappLink = "https://wa.me/6285647234364?text=" + encodedMessage;

    window.open(whatsappLink, '_blank');
}

// // Chatbase Script
// (function () { 
//     if (!window.chatbase || window.chatbase("getState") !== "initialized") { 
//         window.chatbase = (...arguments) => { 
//             if (!window.chatbase.q) { 
//                 window.chatbase.q = [] 
//             } 
//             window.chatbase.q.push(arguments) 
//         }; 
//         window.chatbase = new Proxy(window.chatbase, { 
//             get(target, prop) { 
//                 if (prop === "q") { 
//                     return target.q 
//                 } 
//                 return (...args) => target(prop, ...args) 
//             } 
//         }) 
//     } 
//     const onLoad = function () { 
//         const script = document.createElement("script"); 
//         script.src = "https://www.chatbase.co/embed.min.js"; 
//         script.id = "39QWPWrjQZXG1A_4Mj_j6"; 
//         script.domain = "www.chatbase.co"; 
//         document.body.appendChild(script) 
//     }; 
//     if (document.readyState === "complete") { 
//         onLoad() 
//     } else { 
//         window.addEventListener("load", onLoad) 
//     } 
// })();

// Custom Tailwind configuration for more vibrant colors
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0066cc',
                secondary: '#4a90e2',
                accent: '#00b4d8'
            }
        }
    }
}

//tracking lokasi pengunjung
// function sendLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             let latitude = position.coords.latitude;
//             let longitude = position.coords.longitude;

//             // Ganti dengan FormResponse URL dari Google Forms
//             let formURL = "https://docs.google.com/forms/d/1kaP8LsxJcmHenHAFHaFPl8205f6x4d7Ykl6ED6LdI0E/formResponse";

//             let formData = new FormData();
//             formData.append("entry.9249586", latitude);  // Ganti dengan ID Latitude
//             formData.append("entry.1967723453", longitude); // Ganti dengan ID Longitude

//             fetch(formURL, {
//                 method: "POST",
//                 body: formData
//             });
//         });
//     }
// }
// sendLocation();