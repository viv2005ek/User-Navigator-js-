


async function camera(){
  const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
  video.srcObject = stream;


  // const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
  // video.srcObject = mediaStream;

  // const tracks = mediaStream.getTracks();
  // const audioTrack = stream.getAudioTracks()[0];
}



    async function screen() {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      video.srcObject = stream;
    }

   function stop(){
      video.srcObject = null;
    }

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude: " + position.coords.latitude +
                  " Longitude: " + position.coords.longitude);

        const locationElement = document.createElement('div'); 
        locationElement.innerHTML = "Position:- Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude; 
        document.body.prepend(locationElement); 
        locationElement.style.position = "absolute"; 
        locationElement.style.top = "10px"; 
        locationElement.style.right = "40px"; 
    });


(async function() {
    const battery = await navigator.getBattery();
    console.log("Battery level: " + battery.level * 100 + "%");
   
  const batteryLevelElement = document.createElement('div'); 
  batteryLevelElement.textContent = "Battery level: " + battery.level * 100 + "%"; 

  document.body.prepend(batteryLevelElement); 
  batteryLevelElement.style.position = "absolute"; 
  batteryLevelElement.style.right = "40px"; 
    batteryLevelElement.style.top = "40px"; 

})();


    // navigator.getBattery().then(function(battery) {
    //   console.log("Battery level: " + battery.level * 100 + "%");
    // });




    //showing typing...
    const typingStatus = document.getElementById('typings');
    let typingTimer;

    const showTyping = () => typingStatus.style.display = 'block';
    const hideTyping = () => typingStatus.style.display = 'none';

    const handleTyping = () => {
        clearTimeout(typingTimer);
        showTyping();
        typingTimer = setTimeout(hideTyping, 1000);
    };

    output.addEventListener('keydown', handleTyping);





//text to voice   
    const video = document.getElementById('video');

    function speak() {
        let synth = window.speechSynthesis;
        let voice = new SpeechSynthesisUtterance(`${output.value}`);  //output->{id of textarea}
        let sounds = synth.getVoices();
        voice.voice = sounds[5]; 
        voice.pitch = 1.4; 
        voice.rate = 1.2;
        synth.speak(voice);
    }

//voice to text   
    const recognition =  new webkitSpeechRecognition();
    recognition.lang = 'en-US' ;
    recognition.interimResults = true;
    recognition.continuous = true;

    document.getElementById("start-btn")
    .onclick = () => {recognition.start();
speakNow.innerHTML = "Recording...";
                     }


    document.getElementById("stop-btn")
    .onclick = () => {recognition.stop();
      speakNow.innerHTML = "";}

    recognition.onresult = event => {
    output.value = event.results[event.results.length - 1][0].transcript;  //output->{id of textarea}
    navigator.mediaDevices.getUserMedia({ audio: true });
    }

