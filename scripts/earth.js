document.getElementById("btnhome").onclick = function () {
    location.href = "mainpage.html";
};

let map = L.map('mapid').setView([32.202007, 34.844279], 3.57);

L.tileLayer('https://api.mapbox.com/styles/v1/chrisdecara/clq0ihuxh010x01p43yt0b2jg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2hyaXNkZWNhcmEiLCJhIjoiY2xwMzR1ODI0MHdvbzJscDV0a3VpOG95eiJ9.NIJcmo4S8ZdrU04H1HArEw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([29.9792, 31.1342]).addTo(map);
let marker2 = L.marker([36.4507,  28.2233]).addTo(map);
let marker3 = L.marker([32.5355, 44.4275]).addTo(map);
let marker4 = L.marker([31.2148, 29.886]).addTo(map);
let marker5 = L.marker([37.0379, 27.4241]).addTo(map);
let marker6 = L.marker([37.6360, 21.6247]).addTo(map);
let marker7 = L.marker([37.9432, 27.3583]).addTo(map);

marker1.bindPopup("<b>Great Pyramid of Gaza</b><br>Just a giant pillar of rocks arranged in the most boring way. Quite unappealing, if you ask me. And it doesn't even have a nose! Clearly, this species has never looked in a mirror.").openPopup();
marker2.bindPopup("<b>Colossus of Rhodes</b><br>Saw this while it was still around. A great, big man wearing nearly nothing, standing far above the rest of the people around him. A bit showoffish, really.");
marker3.bindPopup("<b>Hanging Gardens of Babylon</b><br>Ha! I've seen more interesting 'gardens' on the back porch of a Martian rancher. Which is, to say, that this is not nearly as impressive as it pretends to be. Yawn.");
marker4.bindPopup("<b>Lighthouse of Alexandria</b><br>The earthlings are so primitive that they require large, cylindrical beacons of flashing light just to keep from getting lost at night. As I understand it, they also have created a slightly more convenient form of this: a 'flashlight.'");
marker5.bindPopup("<b>Masuoleum at Halicarnassus</b><br>Any species so dedicated to building this monumental a structure for people who have already died (and, thus, are not likely to appreciate it) is one that will surely be gone within the next million years or so. At least, that's what I'm hoping for.");
marker6.bindPopup("<b>Statue of Zeus at Olympia</b><br>Another statue. How original. Apparently, this one was modeled after a certain 'Zeus.' To this day, I have yet to meet this human.");
marker7.bindPopup("<b>Temple of Artemis</b><br>I have never met any 'Artemis' while visiting Earth, but if I do, I will be sure to tell them that they ought to do better housekeeping. Their structure is in absolute ruins!");