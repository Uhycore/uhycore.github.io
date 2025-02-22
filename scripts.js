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


// track lokasi
async function saveLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            let locationData = {
                timestamp: new Date().toISOString(),
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            // Convert location data to a string
            let locationText = `Timestamp: ${locationData.timestamp}\nLatitude: ${locationData.latitude}\nLongitude: ${locationData.longitude}`;

            try {
                // Request a handle to the file
                const handle = await window.showSaveFilePicker({
                    suggestedName: 'lokasi.txt',
                    types: [{
                        description: 'Text Files',
                        accept: {'text/plain': ['.txt']}
                    }]
                });

                // Create a writable stream
                const writable = await handle.createWritable();

                // Write the location data to the file
                await writable.write(locationText);

                // Close the file and write the contents to disk
                await writable.close();

                console.log('Location saved successfully.');
            } catch (error) {
                console.error('Error saving location:', error);
            }
        });
    }
}
