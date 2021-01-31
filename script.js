const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition= new window.SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result' , (e)=>{

    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'HI HOW ARE YOU ?';
            texts.appendChild(p);
        }
        if(text.includes('what is your name')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'MY NAME IS JARVIS AND MY CREATOR IS SHUBHAM. CAN I KNOW YOUR NAME ?????';
            texts.appendChild(p);
        }

        if(text.includes("what's your name")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'MY NAME IS JARVIS AND MY CREATOR IS SHUBHAM. CAN I KNOW YOUR NAME ?????';
            texts.appendChild(p);
        }

        if(text.includes(" Google")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening google';
            texts.appendChild(p);
            window.open('https://www.google.com/');
        }

        if(text.includes("YouTube")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening google';
            texts.appendChild(p);
            window.open('https://www.youtube.com/');
        }

        if(text.includes("Gmail")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Gmail';
            texts.appendChild(p);
            window.open('http://www.gmail.com/');
        }

        if(text.includes("whitehat junior")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening WhiteHatJr.';
            texts.appendChild(p);
            window.open('https://code.whitehatjr.com/');
        }

        if(text.includes("white hat junior")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening WhiteHatJr.';
            texts.appendChild(p);
            window.open('https://code.whitehatjr.com/');
        }

        if(text.includes("WhatsApp")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Whatsapp Web';
            texts.appendChild(p);
            window.open('https://web.whatsapp.com/');
        }

        if(text.includes("zoom")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Whatsapp Web';
            texts.appendChild(p);
            window.open('https://zoom.us/');
        }

        if(text.includes("news")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Latest News';
            texts.appendChild(p);
            window.open('https://www.ndtv.com/');
        }

        if(text.includes("my YouTube channel")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Your YouTube Channel:)';
            texts.appendChild(p);
            window.open('https://www.youtube.com/channel/UCTg1IDGZT-oH21v6GxG0RYw');
        }

        if(text.includes("gov.in")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Gov.in:)';
            texts.appendChild(p);
            window.open('https://email.gov.in/');
        }

        
        if(text.includes("today's date")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Calender:)';
            texts.appendChild(p);
            window.open('https://calendar.google.com/calendar/u/0/r?mode=week&pli=1');
        }

        if(text.includes("Google search")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Redirecting you to google';
            texts.appendChild(p);
            window.open('https://www.google.com/');
        }
    


        p = document.createElement('p');
    }

    console.log(e);
})

recognition.addEventListener('end' , ()=>{
    recognition.start();
});

recognition.start();