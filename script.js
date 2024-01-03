function load_youtube() {
    window.open("https://www.youtube.com/@Ihat3my1if3")
}
function load_github() {
    window.open("https://github.com/0x1F608")
}

function load_discord() {
    window.open("https://discord.gg/Yd2AvvESSK")
}


function grab_ip() {
    const api = "https://api.ipify.org"
    fetch(api)
    .then(response => {
        return response.text()
    })
    .then(data => {
        console.log("This is not used for malicious purposes, I am just learning js: ", data);
    })
}

var title_shite = [
    'H',
    'Ha',
    'Han',
    'Hann',
    'Hanna',
    'Hannah',
    'HannahH',
    'HannahHa',
    'HannahHav',
    'HannahHave',
    'HannahHave',
    'HannahHaven',
    'HannahHaven',
    'HannahHave',
    'HannahHave',
    'HannahHav',
    'HannahHa',
    'HannahH',
    'Hannah',
    'Hanna',
    'Hann',
    'Han',
    'Ha',
    'H'
];

var x = 0;

function anim_title() {
    document.getElementsByTagName("title")[0].innerHTML = title_shite[x++ % title_shite.length];
}

onload(grab_ip(), setInterval(anim_title, 500))
