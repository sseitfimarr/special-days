const body = document.querySelector('body')
const container = body.querySelector('.container')
const phoneScreen = document.querySelector('.phone-screen')

const nextScene = document.querySelector('.continue')

const envelope = phoneScreen.querySelector('.envelope')
const envelopeAnim = setInterval(() => {
    envelope.style.animation = 'zoomInOut 2s ease-in-out'
    setTimeout(() => {
        envelope.style.animation = 'none'
    }, 3000)
}, 5000)

const popUpSfx = new Audio('sfx/pop-up.mp3')
const flipCardSfx = new Audio('sfx/flip-card.mp3')

const coverEnvelope = envelope.querySelector('.cover')
const topEnvelope = envelope.querySelector('.top').parentElement
const framerEnvelope = envelope.querySelector('.frame')
coverEnvelope.addEventListener('click', () => {
    envelope.style.animation = 'none'
    clearInterval(envelopeAnim)
    coverEnvelope.style.animation = 'popUp 2s ease-in forwards'
    popUpSfx.play()
    coverEnvelope.children[0].style.animation = 'infiniteRotate 4s ease-in infinite'
    setTimeout(() => {
        topEnvelope.style.transform = 'rotateX(180deg)'
        flipCardSfx.play()
        topEnvelope.style.zIndex = '0'
    }, 500)
    setTimeout(() => {
        framerEnvelope.style.transform = 'translateY(-50px)'
    }, 1000)
})

const paperSfx = new Audio('sfx/paper.mp3')
const woshhSfx = new Audio('sfx/woshh.mp3')

const scene1 = phoneScreen.querySelector('.scene-1')
const bgScene1 = scene1.querySelector('.bg')
const frontEnvelope = envelope.querySelector('.front')
const birthdayVideo = framerEnvelope.querySelector('.birthday-video')
const hbdTextScene1 = scene1.querySelector('.hbd-text')
const dateTextScene1 = scene1.querySelector('.date-text')
frontEnvelope.addEventListener('click', () => {
    framerEnvelope.style.transform = 'translateY(-150px)'
    paperSfx.play()
    setTimeout(() => {
        framerEnvelope.style.zIndex = '6'
        bgScene1.style.display = 'block'
    }, 500)
    setTimeout(() => {
        framerEnvelope.style.animation = 'appeard 2s ease-in-out forwards'
        scene1.style.backgroundColor = 'var(--blackCol)'
        bgScene1.style.opacity = '.5'
        woshhSfx.volume = .3
        woshhSfx.play()
    }, 1000)
    setTimeout(() => {
        birthdayVideo.style.opacity = '1'
        birthdayVideo.innerHTML = '<source src="assets/birthday-video.mp4" type="video/mp4">'
        birthdayVideo.play()
    }, 2500)
    let intervalConfetti = ''
    setTimeout(() => {
        hbdTextScene1.style.transform = 'translate(-35%, -375%) rotate(-2deg)'
        dateTextScene1.style.transform = 'translate(50%, 350%) rotate(2deg)'
    }, 3000)
    setTimeout(() => {
        intervalConfetti = setInterval(() => {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 70,
                origin: { x: 0 }
            });

            confetti({
                particleCount: 4,
                angle: 120,
                spread: 70,
                origin: { x: 1 }
            });

            confetti({
                particleCount: 2,
                angle: 90,
                spread: 120,
                origin: {
                    x: Math.random(),
                    y: 0
                }
            });
        }, 50);
    }, 3300)
    setTimeout(() => {
        hbdTextScene1.style.color = 'var(--whiteCol)'
        dateTextScene1.style.color = 'var(--whiteCol)'
    }, 5000)
    setTimeout(() => {
        nextScene.style.transition = '1s ease-in-out'
        nextScene.style.transform = 'translateY(700%)'
        clearInterval(intervalConfetti)
    }, 15000)
})

const prolougeRc = new Audio('music/Prologue.mp3')

function DescTime(text, time) {
    this.text = text
    this.time = time
}

const paragraph1 = [
    new DescTime('Selamat untukmu yang bertambah usia hari ini', 7),
    new DescTime('meski tanpa pesta yang meriah, tanpa kue, tanpa hadiah', 9),
    new DescTime('atau mungkin tanpa ucapan selamat', 5),
    new DescTime('dari orang orang tercintamu.', 4)
]

const paragraph2 = [
    new DescTime('Namun di antara semua itu', 5),
    new DescTime('kau masih memiliki dirimu yang sudah bertahan sejauh ini', 10),
    new DescTime('izin aku mengucapkan untukmu', 4),
    new DescTime('Selamat ulang tahun... Mailobe.', 4)
]

const paragraph3 = [
    new DescTime('Meski kelak dunia menunjukkan sisi paling kejamnya,', 7),
    new DescTime('aku percaya, kau mampu melewati semuanya', 6),
    new DescTime('seperti hari-hari yang telah kau taklukkan sebelumnya.', 7),
]

const paragraph4 = [
    new DescTime('Bersenang-senanglah hari ini, sebab hari ini adalah hari yang diam diam kau tunggu di antara 360 hari yang panjang itu,', 20),
    new DescTime('rayakanlah dirimu, setidaknya untuk hari ini.', 6),
]

const paragraph5 = [
    new DescTime('Semoga di usia yang baru ini,', 6),
    new DescTime('hidup belajar untuk memperlakukan dirimu lebih baik dari sebelumnya', 9),
]

const paragraphs = [
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5
];

function descAppeared(data, parent) {
    for (let i = 0; i < data.length; i++) {
        const split = data[i].text.split(' ');
        parent.innerHTML += `<p>${data[i].text}</p>`;
    }
}

const subtitle = document.querySelector('.subtitle-music')
nextScene.addEventListener('click', () => {
    container.style.height = 'max-content'
    container.style.justifyContent = 'start'
    phoneScreen.style.height = 'max-content'
    phoneScreen.style.flexDirection = 'column'
    phoneScreen.style.justifyContent = 'start'
    phoneScreen.style.overflowY = 'scroll'
    nextScene.style.transform = 'translateY(5000%)'
    phoneScreen.style.height = 'max-content'
    phoneScreen.innerHTML = `
        <div class="scene-2">
            <div class="hero"></div>
            <div class="hero"></div>
            <div class="hero"></div>
            <div class="hero"></div>
            <div class="hero"></div>
        </div>`

    const scene2 = phoneScreen.querySelector('.scene-2')
    for (let i = 0; i < scene2.children.length; i++) {
        const currentChild = scene2.children[i]
        if (i === 0) {
            currentChild.innerHTML = '<img src="assets/blue cake.jpg" alt=""><div class="desc"></div>'
        } else if (i === 1) {
            currentChild.innerHTML = '<div class="desc"></div><img src="assets/blue doll.jpg" alt="">'
        } else if (i === 2) {
            currentChild.innerHTML = '<img src="assets/blue tape.jpg" alt=""><div class="desc"></div>'
        } else if (i === 3) {
            currentChild.innerHTML = '<div class="desc"></div><img src="assets/blue flower.jpg" alt="">'
        } else {
            currentChild.innerHTML = '<img src="assets/blue butterfly.jpg" alt=""><div class="desc"></div>'
        }
    }

    const descs = scene2.querySelectorAll('.desc')
    descs.forEach((desc, index) => {
        descAppeared(paragraphs[index], desc);
    });
    scene1.style.transition = '0s'
    scene1.style.opacity = '0'
    prolougeRc.play()
    setTimeout(() => {
        subtitle.innerHTML = '[ Prologue - Reality Club]'
        phoneScreen.removeChild(scene1)
    }, 2000)
    setTimeout(() => {
        subtitle.style.opacity = '0'
        container.removeChild(nextScene)
        const newDiv = document.createElement('div')
        newDiv.style.transform = 'translateY(5000%)'
        newDiv.innerHTML = 'continue'
        container.appendChild(newDiv)
        newDiv.classList.add('continue', 'next-scene-3')
    }, 3000)

    setTimeout(() => {
        const nextScene3 = document.querySelector('.continue')
        nextScene3.style.transition = '1s ease-in-out'
        nextScene3.style.transform = 'translateY(1900%)'
        subtitle.innerHTML = ''
    }, 30000)
})

const transitionSfx = new Audio('sfx/transition.mp3')
const anythingRc = new Audio('music/Anything.mp3')

document.addEventListener("click", (e) => {
    subtitle.style.opacity = '1'
    if (e.target.classList.contains('next-scene-3')) {
        const nextScene3 = document.querySelector('.continue')
        container.removeChild(nextScene3)
        phoneScreen.removeChild(phoneScreen.children[0])
        prolougeRc.pause()
        transitionSfx.play()

        phoneScreen.innerHTML = `
        <div class="scene-3">
                <div class="text-headline"><span>Cinta</span>, kamu yang terlalu <Span>indah</Span>...</div>
                <div class="frameee">
                    <div class="big-frame">
                        <img src="assets/sayang1.jpeg" alt="">
                    </div>
                    <div class="mini-frame">
                        <img src="assets/sayang2.jpeg" alt="">
                    </div>
                    <div class="mini-frame">
                        <img src="assets/sayang3.jpeg" alt="">
                    </div>
                    <div class="mini-frame">
                        <img src="assets/sayang4.jpeg" alt="">
                    </div>
                    <div class="mini-frame">
                        <img src="assets/sayang5.jpeg" alt="">
                    </div>
                </div>
                <div class="text-headline">akan <span>sayang</span> jika tidak <span>dimiliki</span>...</div>
                <div class="descript">
                    <div class="text">
                        Kalau ditanya apa itu <span>cinta</span>, jawabanku <span>sederhana</span>.
                        Sesederhana aku tiba-tiba terampil merangkai <span>kata</span>, mengulang
                        <span>sajak</span>, hanya karena <span>bertegur kata</span>.
                    </div>
                    <img src="assets/red telephone.jpg" alt="">
                </div>
                <div class="descript">
                    <img src="assets/red jantung.jpg" alt="">
                    <div class="text">
                        Sesederhana aku tiba-tiba terampil menghias <span>kanvas</span>, mengayun
                        <span>kuas</span>, hanya karena <span>bertatap mata</span>.
                    </div>
                </div>
                <div class="descript">
                    <div class="text">
                        Barangkali <span>indah pesonamu</span> tak cukup <span>dipuja</span> hanya
                        dengan <span>cinta</span>. Oh, <span>Sayang</span>. Demi kamu aku bisa sajak
                        jadi <span>seniman</span>.
                    </div>
                    <img src="assets/red book.jpg" alt="">
                </div>
                <div class="descript">
                    <img src="assets/red disc.jpg" alt="">
                    <div class="text">
                        Kalaupun aku tidak terampil <span>berkarya</span>, maka aku akan <span>belajar</span>. Belajar
                        mengingat <span>makanan kesukaanmu</span>, belajar dengan <span>giat</span>. Kutemukan
                        sisi <span>indah</span> lainnya, yang tak kalah buatku <span>terpanah</span>.
                    </div>
                </div>
                <div class="descript">
                    <div class="text">
                        <span>Cinta</span>, kalau saja kamu tidak <span>abadi</span> dalam <span>karyaku</span>
                        layaknya <span>seniman</span>. Izinkan aku <span>abadikan</span> kamu dalam setiap
                        <span>hari-hariku</span>, setiap <span>jaringan sarafku</span> layaknya ikan <span>remora</span>
                        dan <span>hiu</span>.
                    </div>
                    <img src="assets/red fish.jpg" alt="">
                </div>
            </div>
            `

        setTimeout(() => {
            subtitle.innerHTML = '[ Anything You Want - Reality Club]'
            anythingRc.play()
        }, 1000)
        setTimeout(() => {
            subtitle.style.opacity = '0'
        }, 3000)
    }
});