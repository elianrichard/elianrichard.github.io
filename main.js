//Nav animation
var navAnimate = {
    targets: 'nav ul li',
    duration: 1000,
    translateY: ['-200', '0'],
    opacity: ['0', '1'],
    // delay: (el, i) => {
    //     return 100 * i;
    // }
    delay: anime.stagger(100, {direction: 'reverse'})
}

//NAV RESPONSIVE
document.addEventListener('DOMContentLoaded', (e) => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-navbar');
    const navLinks = nav.querySelectorAll('li');

    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            nav.removeAttribute('style');
            navLinks.forEach((a)=>{
                a.removeAttribute('style');
            });
            burger.querySelectorAll('div').forEach((a)=>{
                a.removeAttribute('style');
            });
            burger.classList.remove('open');
        }
    })
    
    burger.addEventListener('click', (e) => {
        if (burger.classList.contains('nav-progress')){
        } else {
            burger.classList.add('nav-progress')
            if (burger.classList.contains('open')) {
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: function(anim){
                        navLinks.forEach( (a) => {
                            a.style.display = 'none';
                            a.removeAttribute('style');
                        })
                        nav.removeAttribute('style');
                        burger.classList.remove('nav-progress')
                    }
                }).add({
                    targets: navLinks,
                    opacity: ['1', '0'],
                    translateY: ['0', '-50'],
                    duration: 400,
                    delay: (el, i) => {
                        return 100 * i;
                    }
                }).add({
                    targets: nav,
                    height: ['50vh', '0'],
                    duration: 400,
                }, '-=100')
                anime({
                    targets: burger.querySelector('.line1'),
                    rotate: 0,
                    translateY: ['12', '0'],
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                anime({
                    targets: burger.querySelector('.line3'),
                    rotate: 0,
                    translateY: ['-12', '0'],
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                anime({
                    targets: burger.querySelector('.line2'),
                    opacity: 1,
                    easing: 'easeOutQuad',
                    duration: 700,
                })
                burger.classList.remove('open');
            } else {
                navLinks.forEach( (a) => {
                    a.style.display = 'block';
                })
                anime({
                    targets: burger.querySelector('.line1'),
                    rotate: 45,
                    translateY: ['0', '12'],
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime({
                    targets: burger.querySelector('.line3'),
                    rotate: -45,
                    translateY: ['0', '-12'],
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime({
                    targets: burger.querySelector('.line2'),
                    opacity: 0,
                    easing: 'easeOutExpo',
                    duration: 800,
                })
                anime.timeline({
                    easing: 'easeOutExpo',
                    complete: function (anim) {
                        burger.classList.remove('nav-progress')
                    }
                }).add({
                    targets: nav,
                    height: ['0', '50vh'],
                    duration: 800,
                }).add({
                    targets: navLinks,
                    opacity: ['0', '1'],
                    translateY: ['50', '0'],
                    duration: 1000,
                    delay: (el, i) => {
                        return 100 * i;
                    }
                }, '-=400')
                burger.classList.add('open');
            }
        }
    })
})

//index.html
function indexLoaded(e){
    //LANDING
    var logoMatahari = document.querySelector('.matahari')
    var descMatahari = document.querySelector('.logo-desc-matahari')
    var logoSerigala = document.querySelector('.serigala')
    var descSerigala = document.querySelector('.logo-desc-serigala')
    var logoKuas = document.querySelector('.kuas')
    var descKuas = document.querySelector('.logo-desc-kuas')
    var logoGelombang = document.querySelector('.gelombang')
    var descGelombang = document.querySelector('.logo-desc-gelombang')

    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            document.querySelectorAll('.logo-desc-container > div').forEach((a) => {
                a.removeAttribute('style');
                a.querySelector('h1').removeAttribute('style');
                a.querySelector('p').removeAttribute('style');
            })
        }
    })

    function matahariReveal(){
        descMatahari.style.display = 'flex';
        descMatahari.parentElement.classList.add('progress');
        descSerigala.classList.remove('active');
        descMatahari.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descMatahari.classList.add('active');
                if (!descSerigala.classList.contains('active')){
                    descMatahari.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descMatahari.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descMatahari.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descMatahari.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function serigalaReveal(){
        descSerigala.style.display = 'flex';
        descSerigala.parentElement.classList.add('progress');
        descMatahari.classList.remove('active');
        descSerigala.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descSerigala.classList.add('active');
                if (!descMatahari.classList.contains('active')){
                    descSerigala.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descSerigala.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descSerigala.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descSerigala.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function kuasReveal(){
        descKuas.style.display = 'flex';
        descKuas.parentElement.classList.add('progress');
        descGelombang.classList.remove('active');
        descKuas.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descKuas.classList.add('active');
                if (!descGelombang.classList.contains('active')){
                    descKuas.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descKuas.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descKuas.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descKuas.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function gelombangReveal(){
        descGelombang.style.display = 'flex';
        descGelombang.parentElement.classList.add('progress');
        descKuas.classList.remove('active');
        descGelombang.classList.add('active');
        anime.timeline({
            easing: 'easeOutExpo',
            complete: () => {
                descGelombang.classList.add('active');
                if (!descKuas.classList.contains('active')){
                    descGelombang.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descGelombang.querySelector('.logo-desc-line'),
            width: ['0%', '80%'],
            duration: 500,
        }).add({
            targets: descGelombang.querySelector('h1'),
            opacity: [0, 1],
            translateX: ['50', '0'],
            duration: 1000,
        }).add({
            targets: descGelombang.querySelector('p'),
            opacity: [0, 1],
            translateX: ['-50', '0'],
            duration: 1000,
        }, '-=800')
    }
    function matahariClose(){
        descMatahari.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descMatahari.style.display = 'none';
                descMatahari.classList.remove('active');
                if (!descSerigala.classList.contains('active')){
                    descMatahari.parentElement.classList.remove('progress');
                }
            }
        }).add({
            targets: descMatahari.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descMatahari.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descMatahari.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function serigalaClose(){
        descSerigala.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descSerigala.style.display = 'none';
                descSerigala.classList.remove('active');
                if (!descMatahari.classList.contains('active')){
                    descSerigala.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descSerigala.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descSerigala.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descSerigala.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function kuasClose(){
        descKuas.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descKuas.style.display = 'none';
                descKuas.classList.remove('active');
                if (!descGelombang.classList.contains('active')){
                    descKuas.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descKuas.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descKuas.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descKuas.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }
    function gelombangClose(){
        descGelombang.parentElement.classList.add('progress');
        anime.timeline({
            easing: 'easeOutQuad',
            complete: () => {
                descGelombang.style.display = 'none';
                descGelombang.classList.remove('active');
                if (!descKuas.classList.contains('active')){
                    descGelombang.parentElement.classList.remove('progress');
                };
            }
        }).add({
            targets: descGelombang.querySelector('.logo-desc-line'),
            width: '0%',
            duration: 500,
        }).add({
            targets: descGelombang.querySelector('h1'),
            opacity: 0,
            duration: 500,
        }, '-=500').add({
            targets: descGelombang.querySelector('p'),
            opacity: 0,
            duration: 500,
        }, '-=1000')
    }

    function logoIMEAnimation (){
        logoMatahari.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descSerigala.classList.contains('active')){
                    if (!descMatahari.classList.contains('active')){
                        if (!descMatahari.parentElement.classList.contains('progress')){
                            matahariReveal();
                        }
                    }
                } else {
                    descSerigala.style.display = '';
                    serigalaClose();
                    matahariReveal();
                }
            }
        })
        logoMatahari.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descMatahari.parentElement.classList.contains('progress')){
                    matahariClose()
                }
            }
        })
        logoSerigala.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descMatahari.classList.contains('active')){
                    if (!descSerigala.classList.contains('active')){
                        if (!descSerigala.parentElement.classList.contains('progress')){
                            serigalaReveal();
                        }
                    }
                } else {
                    descMatahari.style.display = '';
                    matahariClose();
                    serigalaReveal();
                }
            }
        })
        logoSerigala.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descSerigala.parentElement.classList.contains('progress')){
                    serigalaClose();
                }
            }
        })
        logoKuas.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descGelombang.classList.contains('active')){
                    if (!descKuas.classList.contains('active')){
                        if (!descKuas.parentElement.classList.contains('progress')){
                            kuasReveal();
                        }
                    }
                } else {
                    descGelombang.style.display = '';
                    gelombangClose();
                    kuasReveal();
                }
            }
        })
        logoKuas.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descKuas.parentElement.classList.contains('progress')){
                    kuasClose()
                }
            }
        })
        logoGelombang.addEventListener('mouseover', (e) => {
            if (window.innerWidth > 768){
                if (!descKuas.classList.contains('active')){
                    if (!descGelombang.classList.contains('active')){
                        if (!descGelombang.parentElement.classList.contains('progress')){
                            gelombangReveal();
                        }
                    }
                } else {
                    descKuas.style.display = '';
                    kuasClose();
                    gelombangReveal();
                }
            }
        })
        logoGelombang.addEventListener('mouseout', (e) => {
            if (window.innerWidth > 768){
                if (!descGelombang.parentElement.classList.contains('progress')){
                    gelombangClose()
                }
            }
        })
    }

    if (window.innerWidth > 768){
        logoIMEAnimation();
    } else {
        window.addEventListener('resize', (e) => {
            if (window.innerWidth > 768){
                logoIMEAnimation();
            }
        })
    }

    //LOGBID
    var bidangTitle = document.querySelector('.logbid-bidang-title');
    var bidangDesc = document.querySelector('.logbid-bidang-desc');
    var bidangMainLogo = document.querySelector('.logbid-bidang-logo');
    var bidangButton = document.querySelector('.bidang-button');
    var bidangLogo = document.querySelector('.logbid-logos').querySelectorAll('a');
    let onProgress = false;

    bidangLogo.forEach((a) => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (!onProgress){
                onProgress = true;
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: () => {
                        bidangButton.style.display = 'inline-block';
                        if (e.target.parentElement.classList.contains('logbid-kominfo')){
                            bidangTitle.textContent = 'Komunikasi dan Informasi';
                            bidangDesc.textContent = 'Bidang Komunikasi dan Informasi merupakan bidang pelayanan informasi serta menjalin hubungan baik dengan internal maupun eksternal DTE.';
                            bidangButton.href = '/bidang-template.html'
                            bidangMainLogo.src = 'assets/logbid/kominfo.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-kema')){
                            bidangTitle.textContent = 'Kemahasiswaan';
                            bidangDesc.textContent = 'Bidang yang berfungsi untuk membina dan menanamkan nilai-nilai serta softskills dan memiliki fungsi sebagai garda terdepan dalam pembinaan serta koordinator arah gerak kemahasiswaan di Departemen Teknik Elektro.';
                            bidangButton.href = '/bidang-template-kema.html'
                            bidangMainLogo.src = 'assets/logbid/kema.png';
                        }
                        else if (e.target.parentElement.classList.contains('logbid-kastrat')){
                            bidangTitle.textContent = 'Kajian dan Aksi Strategis';
                            bidangDesc.textContent = 'Bidang yang berfungsi untuk mengkaji, mencerdaskan, dan mengimplementasikan ilmu kepada warga DTE mengenai isu-isu POLEKSOSBUDHANKAM dan keelektroan yang sedang berkembang.';
                            bidangButton.href = '/bidang-template-kastrat.html'
                            bidangMainLogo.src = 'assets/logbid/kastrat.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-kewirus')){
                            bidangTitle.textContent = 'Keuangan dan Kewirausahaan';
                            bidangDesc.textContent = 'Bidang yang bertanggung jawab untuk mengatur alir keuangan dan mencari pemasukan dana untuk IME FTUI serta menumbuhkan semangat kewirausahaan warga Departemen Teknik Elektro.';
                            bidangButton.href = '/bidang-template-kewirus.html'
                            bidangMainLogo.src = 'assets/logbid/kewirus.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-kestari')){
                            bidangTitle.textContent = 'Kesekretariatan';
                            bidangDesc.textContent = 'Bidang yang berperan sebagai pusat administrasi dan inventarisasi yang dimiliki oleh lembaga IME FTUI.';
                            bidangButton.href = '/bidang-template-kestari.html'
                            bidangMainLogo.src = 'assets/logbid/kestari.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-kesma')){
                            bidangTitle.textContent = 'Kesejahteraan Mahasiswa';
                            bidangDesc.textContent = 'Bidang di IME FTUI yang bertanggung jawab mengenai advokasi mahasiswa di bidang finansial dan fasilitas.';
                            bidangButton.href = '/bidang-template-kesma.html'
                            bidangMainLogo.src = 'assets/logbid/kesma.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-pengmas')){
                            bidangTitle.textContent = 'Pengabdian Mahasiswa';
                            bidangDesc.textContent = 'Bidang yang bertanggung jawab untuk mewadahi dan menumbuhkan sikap kepedulian mahasiswa DTE terhadap masyarakat dan lingkungan hidup, dengan berhubungan serta menyalurkan core competence DTE kepada masyarakat.';
                            bidangButton.href = '/bidang-template-pengmas.html'
                            bidangMainLogo.src = 'assets/logbid/pengmas.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-litbang')){
                            bidangTitle.textContent = 'Penelitian dan Pengembangan';
                            bidangDesc.textContent = 'Bidang penelitian dan pengembangan adalah bidang internal IME FTUI yang bertindak sebagai Analisator, evaluator, dan konsultan IME FTUI.';
                            bidangButton.href = '/bidang-template-litbang.html'
                            bidangMainLogo.src = 'assets/logbid/litbang.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-retro')){
                            bidangTitle.textContent = 'Rohani Islam Elektro';
                            bidangDesc.textContent = 'Bidang yang berfungsi untuk melakukan pewadahan serta menuansakan suasana keislaman di Departemen Teknik Elektro.';
                            bidangButton.href = '/bidang-template-retro.html'
                            bidangMainLogo.src = 'assets/logbid/retro.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-piptek')){
                            bidangTitle.textContent = 'Pengembangan Ilmu Pengetahuan dan Teknologi';
                            bidangDesc.textContent = 'Bidang di yang mewadahi dan mengembangkan minat dan bakat warga Departemen Teknik Elektro dalam ilmu pengetahuan dan teknologi.';
                            bidangButton.href = '/bidang-template-piptek.html'
                            bidangMainLogo.src = 'assets/logbid/piptek.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-siwa')){
                            bidangTitle.textContent = 'Kreasi Mahasiswa';
                            bidangDesc.textContent = 'Bidang yang mewadahi warga Departemen Teknik Elektro pada bidang seni dan olahraga. Bidang ini bertanggung jawab untuk mengembangkan bakat warga dengan menciptakan suasana bersenang-senang.';
                            bidangButton.href = '/bidang-template-siwa.html'
                            bidangMainLogo.src = 'assets/logbid/siwa.png';
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-akpro')){
                            bidangTitle.textContent = 'Akademis dan Keprofesian';
                            bidangDesc.textContent = 'Bidang yang mengadvokasi dan memfasilitasi warga Departemen Teknik Elektro dalam hal akademis dan pasca kampus.';
                            bidangButton.href = '/bidang-template-akpro.html'
                            bidangMainLogo.src = 'assets/logbid/akpro.png';
                        }
                    }
                }).add({
                    targets: bidangMainLogo.parentElement,
                    opacity: [1, 0],
                    duration: 400,
                }).add({
                    targets: bidangTitle,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200').add({
                    targets: bidangDesc,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200').add({
                    targets: bidangButton,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=200');

                setTimeout(() => {
                    anime.timeline({
                        easing: 'easeOutExpo',
                        complete: () => {
                            onProgress = false;
                        }
                    }).add({
                        targets: bidangMainLogo.parentElement,
                        translateY: ['-100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }).add({
                        targets: bidangTitle,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200').add({
                        targets: bidangDesc,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200').add({
                        targets: bidangButton,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200');
                }, 1200)

            }
        })
    })


}

// about.html
function aboutLoaded(e){
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1020 && window.innerWidth > 900) {
            document.querySelector('#misi').removeAttribute('style');
            document.querySelector('#visi').removeAttribute('style');
            document.querySelector('.vismis-line').removeAttribute('style');
        }
    })
    if (window.innerWidth < 1020){
        anime.timeline({
            easing: 'easeOutExpo',
        }).add({
            targets: '.vismis-line',
            width: ['0', '200'],
            duration: 400,
        }).add({
            targets: '#visi',
            translateX: ['100', '0'],
            opacity: ['0', '1'],
            duration: 400,
        }).add({
            targets: '#misi',
            translateX: ['-100', '0'],
            opacity: ['0', '1'],
            duration: 400,
        })
        .add(navAnimate)
    } else {
        anime.timeline({
            easing: 'easeOutQuad'
        }).add({
            targets: '#visi',
            translateY: ['100', '0'],
            opacity: ['0', '1'],
            duration: 800
        }).add({
            targets: '#misi',
            translateY: ['-100', '0'],
            opacity: ['0', '1'],
            duration: 800,
        }, '-=800')
        .add({
            targets: '.vismis-line',
            height: ['0','100%'],
            duration: 800,
        }, '-=1600')
        .add(navAnimate);
    }
    
    if (window.innerHeight < 600) {
        document.getElementById('visi').addEventListener('click', visiAppear);
        document.getElementById('misi').addEventListener('click', misiAppear);
        document.querySelector('.visi-card').addEventListener('click', visiDisappear);
        document.querySelector('.misi-card').addEventListener('click', misiDisappear);
    } else {
        document.getElementById('visi').addEventListener('mouseover', visiAppear);
        document.getElementById('misi').addEventListener('mouseover', misiAppear);
        document.getElementById('visi').addEventListener('mouseout', visiDisappear);
        document.getElementById('misi').addEventListener('mouseout', misiDisappear);
    }

}
// Visi Misi Section
function visiAppear(e){
    var nextSection = document.querySelector('#organigram');
    var nextSectionPosition = nextSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (window.innerWidth < 1020) {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.visi-card').classList.add('visi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('visi').addEventListener('click', visiUpAppear);
        }
    } else {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.visi-card').classList.add('visi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('visi').addEventListener('click', visiUpAppear);
        }
    }
}
function misiAppear(e){
    var nextSection = document.querySelector('#organigram');
    var nextSectionPosition = nextSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    
    if(window.innerWidth < 1020) {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.misi-card').classList.add('misi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('misi').addEventListener('click', misiUpAppear);
        }
    } else {
        if (nextSectionPosition > screenHeight - 1){
            document.querySelector('.misi-card').classList.add('misi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else{
            document.getElementById('misi').addEventListener('click', misiUpAppear);
        }
    }
}
function visiDisappear(e){
    if (window.innerWidth < 1020){
        document.querySelector('.visi-card').classList.remove('visi-mini-appear');
        anime({
            targets: '.vismis-line',
            width: '200',
            duration: 200,
            easing: 'easeOutExpo',
        });
    } else{
        document.querySelector('.visi-card').classList.remove('visi-appear');
        anime({
            targets: '.vismis-line',
            height: '100%',
            duration: 200,
            easing: 'easeOutExpo',
        });
    }
}
function misiDisappear(e){
    if (window.innerWidth < 1020){
        document.querySelector('.misi-card').classList.remove('misi-mini-appear');
        anime({
            targets: '.vismis-line',
            width: '200',
            duration: 200,
            easing: 'easeOutExpo',
        });
    } else {
        document.querySelector('.misi-card').classList.remove('misi-appear');
        anime({
            targets: '.vismis-line',
            height: '100%',
            duration: 200,
            easing: 'easeOutExpo',
        });
    }
}
function visiUpAppear(e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(function() {
        if (window.innerWidth < 1020){
            document.querySelector('.visi-card').classList.add('visi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else {
            document.querySelector('.visi-card').classList.add('visi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        }
    }, 500);
}
function misiUpAppear(e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    setTimeout(function() {
        if (window.innerWidth < 1020){
            document.querySelector('.misi-card').classList.add('misi-mini-appear');
            anime({
                targets: '.vismis-line',
                width: '0',
                duration: 200,
                easing: 'easeOutExpo',
            });
        } else {
            document.querySelector('.misi-card').classList.add('misi-appear');
            anime({
                targets: '.vismis-line',
                height: '0%',
                duration: 200,
                easing: 'easeOutExpo',
            });
        }
      }, 500);
}


// window.addEventListener('scroll', consolePosition);
// function consolePosition(e){
//     var nextSection = document.querySelector('#organigram');
//     var nextSectionPosition = nextSection.getBoundingClientRect().top;
//     var screenHeight = window.innerHeight;

//     if (nextSectionPosition < screenHeight - 1){
//         console.log('Hello')
//     } else{
//         console.log('World')
//     }
// }


//  bidang-template.html //
function bidangLoaded(e){
    anime.timeline({
        easing: 'easeOutExpo',
        complete: () => {
            document.querySelectorAll('.bidang-foto').forEach((a) => {
                a.removeAttribute('style');
            })
        }
    })
    .add({
        targets: '.bidang-logo img',
        duration: 800,
        translateX: [-200, 0],
        opacity: [0, 1],
    })
    .add({
        targets: '.bidang-title',
        duration: 800,
        translateX: [200, 0],
        opacity: [0, 1],
    }, '-=400')
    .add({
        targets: '.bidang-proker',
        duration: 800,
        translateX: [200, 0],
        opacity: [0, 1],
    }, '-=400')
    .add({
        targets: '.bidang-foto-container div',
        duration: 500,
        translateY: [40, 0],
        opacity: [0, 1],
        delay: (el, i) => {
            return 100 * i;
        },
    })
    .add(navAnimate);

    //MODAL
    var fotoBidang = document.querySelectorAll('.bidang-foto');
    var modalBidang = document.querySelector('.modal-bidang-foto');
    var modalFotoContainer = document.querySelector('.modal-foto-container');
    var modalImg = document.querySelector('.modal-img');
    var modalLeft = document.querySelector('.fa-chevron-left');
    var modalRight = document.querySelector('.fa-chevron-right');
    let modalOnProgress = false;
    let currentModalImg;
    let nextModalImg;

    fotoBidang.forEach((a) => {
        a.querySelector('img').addEventListener('click', (e) => {
            currentModalImg = e.target;
            modalImg.src = currentModalImg.src;
            modalBidang.style.display = 'flex';
            anime({
                targets: modalBidang,
                opacity: 1,
                duration: 500,
                easing: 'easeOutQuad',
            })
        })
    })

    document.querySelector('.fa-times').addEventListener('click', (e) => {
        anime({
            targets: modalBidang,
            opacity: 0,
            duration: 500,
            easing: 'easeOutExpo',
            complete: () => {
                modalBidang.style.display = 'none';
            }
        })
    })

    modalRight.addEventListener('click', () => {
        if (!modalOnProgress){
            modalOnProgress = true;
            if (currentModalImg.classList.contains('last-foto')){
                nextModalImg = document.querySelector('.first-foto');
            } else{
                nextModalImg = currentModalImg.parentElement.nextElementSibling.querySelector('img');
            };
            anime.timeline({
                easing: 'easeInOutQuad',
                complete: () => {
                    modalImg.src = nextModalImg.src;
                    anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            modalOnProgress = false;
                            currentModalImg = nextModalImg;
                        }
                    }).add({
                        targets: modalFotoContainer,
                        translateX: ['100', '0'],
                        opacity: [0, 1],
                        duration: 500,
                    })
                }
            }).add({
                targets: modalFotoContainer,
                translateX: ['0', '-100'],
                opacity: [1, 0],
                duration: 500,
            })
        }
    })
    modalLeft.addEventListener('click', () => {
        if (!modalOnProgress){
            modalOnProgress = true;
            if (currentModalImg.classList.contains('first-foto')){
                nextModalImg = document.querySelector('.last-foto')
            } else{
                nextModalImg = currentModalImg.parentElement.previousElementSibling.querySelector('img');
            }
            anime.timeline({
                easing: 'easeInOutQuad',
                complete: () => {
                    modalImg.src = nextModalImg.src;
                    anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            modalOnProgress = false;
                            currentModalImg = nextModalImg;
                        }
                    }).add({
                        targets: modalFotoContainer,
                        translateX: ['-100', '0'],
                        opacity: [0, 1],
                        duration: 500,
                    })
                }
            }).add({
                targets: modalFotoContainer,
                translateX: ['0', '100'],
                opacity: [1, 0],
                duration: 500,
            })
        }
    })


    // LOGO BIDANG DI BIDANG TEMPLATE
    var bidangTitle = document.querySelector('.logbid-bidang-title');
    var bidangMainLogo = document.querySelector('.logbid-bidang-logo');
    var bidangLogo = document.querySelector('.logbid-logos').querySelectorAll('img');
    let currentLogo;
    bidangLogo.forEach((a) => {
        a.addEventListener('mouseover', (e) => {
            if (!(currentLogo === e.target.parentElement.className)){
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: () => {
                        if (e.target.parentElement.classList.contains('logbid-kominfo')){
                            bidangTitle.textContent = 'Komunikasi dan Informasi';
                            bidangMainLogo.src = 'assets/logbid/kominfo.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-kema')){
                            bidangTitle.textContent = 'Kemahasiswaan';
                            bidangMainLogo.src = 'assets/logbid/kema.png';
                            currentLogo = e.target.parentElement.className;
                        }
                        else if (e.target.parentElement.classList.contains('logbid-kastrat')){
                            bidangTitle.textContent = 'Kajian dan Aksi Strategis';
                            bidangMainLogo.src = 'assets/logbid/kastrat.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-kewirus')){
                            bidangTitle.textContent = 'Keuangan dan Kewirausahaan';
                            bidangMainLogo.src = 'assets/logbid/kewirus.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-kestari')){
                            bidangTitle.textContent = 'Kesekretariatan';
                            bidangMainLogo.src = 'assets/logbid/kestari.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-kesma')){
                            bidangTitle.textContent = 'Kesejahteraan Mahasiswa';
                            bidangMainLogo.src = 'assets/logbid/kesma.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-pengmas')){
                            bidangTitle.textContent = 'Pengabdian Mahasiswa';
                            bidangMainLogo.src = 'assets/logbid/pengmas.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-litbang')){
                            bidangTitle.textContent = 'Penelitian dan Pengembangan';
                            bidangMainLogo.src = 'assets/logbid/litbang.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-retro')){
                            bidangTitle.textContent = 'Rohani Islam Elektro';
                            bidangMainLogo.src = 'assets/logbid/retro.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-piptek')){
                            bidangTitle.textContent = 'Pengembangan Ilmu Pengetahuan dan Teknologi';
                            bidangMainLogo.src = 'assets/logbid/piptek.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-siwa')){
                            bidangTitle.textContent = 'Kreasi Mahasiswa';
                            bidangMainLogo.src = 'assets/logbid/siwa.png';
                            currentLogo = e.target.parentElement.className;
                        } 
                        else if (e.target.parentElement.classList.contains('logbid-akpro')){
                            bidangTitle.textContent = 'Akademis dan Keprofesian';
                            bidangMainLogo.src = 'assets/logbid/akpro.png';
                            currentLogo = e.target.parentElement.className;
                        }
                    }
                }).add({
                    targets: bidangMainLogo.parentElement,
                    opacity: [1, 0],
                    duration: 400,
                }).add({
                    targets: bidangTitle,
                    opacity: [1, 0],
                    duration: 400,
                }, '-=400')
    
                setTimeout(() => {
                    anime.timeline({
                        easing: 'easeOutQuad',
                    }).add({
                        targets: bidangMainLogo.parentElement,
                        opacity: [0, 1],
                        duration: 400,
                    }).add({
                        targets: bidangTitle,
                        opacity: [0, 1],
                        duration: 400,
                    }, '-=200');
                }, 400)
            }
        })
    })
}

// akademis.html
function akademisLoaded(e){
    window.addEventListener('resize', () => {
        if (window.innerWidth < 800 && window.innerWidth > 768) {
            document.querySelector('#diktat').removeAttribute('style');
            document.querySelector('#ebook').removeAttribute('style');
            document.querySelector('.akademis-line').removeAttribute('style');
        }
    })
    if (window.innerWidth < 768) {
        var akademisLine = {
            targets: '.akademis-line',
            width: ['0', '20rem'],
            opacity: ['0', '1'],
            duration: 800,
        }
        var akademisDiktat = {
            targets: '#diktat',
            translateY: ['500', '0'],
            duration: 1000,
        }
        var akademisEbook = {
            targets: '#ebook',
            translateY: ['-500', '0'],
            duration: 1000,
        }
    } else {
        var akademisLine = {
            targets: '.akademis-line',
            height: ['0', '6rem'],
            opacity: ['0', '1'],
            duration: 800,
        }
        var akademisDiktat = {
            targets: '#diktat',
            translateX: ['500', '0'],
            duration: 1000,
        }
        var akademisEbook = {
            targets: '#ebook',
            translateX: ['-500', '0'],
            duration: 1000,
        }
    }
    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add(akademisLine)
    .add(akademisDiktat)
    .add(akademisEbook, '-=800')
    .add(navAnimate, '-=400')

    let isOpen = false;
    setTimeout(function(){
        document.querySelector('#ebook-a').addEventListener('click', (e) => {
            var ebook = document.querySelectorAll('.ebook-list');
            
            if (isOpen){
                setTimeout (function(){
                    isOpen = false;
                    ebook.forEach(function(a){
                        a.style.display = '';
                    });
                }, 1400)
                animation = anime.timeline({
                    easing: 'easeOutQuad'
                }).add({
                    targets: '.ebook-list',
                    duration: 400,
                    translateX: ['0', '-50'],
                    opacity: ['1', '0'],
                    delay: (el, i) => {
                        return 100 * i;
                    },
                }).add({
                    targets: '.ebook-dropdown',
                    height: 0,
                    duration: 1000,
                })
            }else{
                ebook.forEach(function(a){
                    a.style.display = 'block';
                })
                isOpen = true;
                animation = anime.timeline({
                    easing: 'easeOutSine'
                }).add({
                    targets: '.ebook-dropdown',
                    height: 100,
                    duration: 1000,
                }).add({
                    targets: '.ebook-list',
                    duration: 400,
                    translateX: ['-50', '0'],
                    opacity: ['0', '1'],
                    delay: (el, i) => {
                        return 100 * i;
                    },
                })
            }
        })
    }, 2000)
}

// diktat.html
function diktatLoaded(e){
    var listHeader = document.querySelectorAll('.diktat-list-header');
    var linkHeader = document.querySelectorAll('.diktat-link-header');

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1020 && window.innerWidth > 900) {
            listHeader.forEach((a)=>{
                a.classList.remove('open');
            })
            linkHeader.forEach((a)=>{
                a.removeAttribute('style');
                a.classList.remove('active');
            })
            document.querySelectorAll('.diktat-list').forEach((a)=>{
                a.removeAttribute('style');
            })
            document.querySelectorAll('.diktat-link').forEach((a)=>{
                a.removeAttribute('style');
            })
        }
    })
    listHeader.forEach(function(a){
        a.addEventListener('click', (e) => {
            var selectedHeader = e.target;
            var selectedList = e.target.parentElement.nextElementSibling;
            if (selectedHeader.classList.contains('open')){
                anime({
                    targets: selectedList,
                    height: 0,
                    opacity: 0,
                    duration: 800,
                    easing: 'easeOutExpo',
                    complete: () => {
                        selectedList.style.display = 'none';
                        selectedHeader.classList.remove('open');
                        document.querySelectorAll('.diktat-link').forEach(function(a){
                            a.removeAttribute('style');
                        });
                        document.querySelectorAll('.diktat-link-header').forEach(function(a){
                            a.classList.remove('active');
                        });
                    }
                })
            } else{
                selectedList.style.display = 'block';
                anime.timeline({
                    easing: 'easeOutQuad'
                }).add({
                    targets: selectedList,
                    height: 100,
                    opacity: 1,
                    duration: 600,
                }).add({
                    targets: selectedList.querySelectorAll('.diktat-link-header'),
                    translateX: ['-100', '0'],
                    opacity:  ['0', '1'],
                    duration: 400,
                    delay: (el, i) => {
                        return (100 * i) ;
                    }
                }, '-=300')
                selectedHeader.classList.add('open');
            }
        })
    })
    linkHeader.forEach((a) => {
        a.addEventListener('click', (e) => {
            var diktatLinksHeader = e.target;
            var diktatLinks = diktatLinksHeader.parentElement.nextElementSibling;
            var diktatList = diktatLinksHeader.parentElement.parentElement.parentElement;
            if (window.innerWidth < 1020) {
                if (diktatLinksHeader.classList.contains('active')){
                    anime.timeline({
                        easing: 'easeOutQuad',
                        complete: () => {
                            diktatLinks.removeAttribute('style');
                        }
                    }).add({
                        targets: diktatLinks.querySelectorAll('li'),
                        opacity: 0,
                        duration: 400,
                    }).add({
                        targets: diktatLinks,
                        height: 0,
                        duration: 400,
                    }, '-=400')
                    diktatLinksHeader.classList.remove('active');
                } else {
                    diktatLinks.style.display = 'block';
                    anime.timeline({
                        easing: 'easeOutExpo',
                        delay: 300
                    })
                    .add({
                        targets: diktatLinks.querySelectorAll('li'),
                        opacity: ['0', '1'],
                        translateX: ['-50', '0'],
                        duration: 800,
                        delay: anime.stagger(100),
                    })
                    diktatLinksHeader.classList.add('active');
                    //diktatList.style.height = 'auto';
                    diktatList.removeAttribute('style');
                    diktatList.style.display = 'block';
                }
            }
        })
    })

    //DIKTAT ARRAY
    var diktatBookContainer = document.querySelectorAll('.diktat-book-container');
    var diktatBookTitle = document.querySelectorAll('.diktat-book-title');
    var diktatBookCover = document.querySelectorAll('.diktat-cover');
    
    diktatBookContainer.forEach((a) => {
        a.parentElement.target = '_blank';
    })
    document.querySelectorAll('.diktat-link').forEach((a) => {
        a.querySelectorAll('a').forEach((b) => {
            b.target = '_blank';
        })
    })

    document.querySelectorAll('.diktat-link-header').forEach((a) => {
        for (let i = 0; i <= 14; i++){
            if (a.classList.contains('uts-ganjil-2020')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = utsGanjil20[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = utsGanjil20[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = utsGanjil20[i].display;
            }
            if (a.classList.contains('uas-ganjil-2020')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = uasGanjil20[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = uasGanjil20[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = uasGanjil20[i].display;
            }
            if (a.classList.contains('uts-genap-2020')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = utsGenap20[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = utsGenap20[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = utsGenap20[i].display;
            }
            if (a.classList.contains('uas-genap-2020')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = uasGenap20[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = uasGenap20[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = uasGenap20[i].display;
            }
            if (a.classList.contains('uts-ganjil-2019')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = utsGanjil19[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = utsGanjil19[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = utsGanjil19[i].display;
            }
            if (a.classList.contains('uas-ganjil-2019')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = uasGanjil19[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = uasGanjil19[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = uasGanjil19[i].display;
            }
            if (a.classList.contains('uts-genap-2019')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = utsGenap19[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = utsGenap19[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = utsGenap19[i].display;
            }
            if (a.classList.contains('uas-genap-2019')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = uasGenap19[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = uasGenap19[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = uasGenap19[i].display;
            }
            if (a.classList.contains('uts-ganjil-2018')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = utsGanjil18[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = utsGanjil18[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = utsGanjil18[i].display;
            }
            if (a.classList.contains('uas-ganjil-2018')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = uasGanjil18[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = uasGanjil18[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = uasGanjil18[i].display;
            }
            if (a.classList.contains('uts-genap-2018')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = utsGenap18[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = utsGenap18[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = utsGenap18[i].display;
            }
            if (a.classList.contains('uas-genap-2018')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = uasGenap18[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = uasGenap18[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = uasGenap18[i].display;
            }
            if (a.classList.contains('uts-ganjil-2017')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = utsGanjil17[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = utsGanjil17[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = utsGanjil17[i].display;
            }
            if (a.classList.contains('uas-ganjil-2017')){
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].text = uasGanjil17[i].title;
                a.parentElement.nextElementSibling.querySelectorAll('a')[i].href = uasGanjil17[i].link;
                a.parentElement.nextElementSibling.querySelectorAll('li')[i].style.display = uasGanjil17[i].display;
            }
        }
    })

    document.querySelectorAll('.diktat-link-header').forEach((a) => {
        a.addEventListener('click', () => {
            for (let i = 0; i <= 14; i++){
                if (a.classList.contains('uts-ganjil-2020')){
                    diktatBookContainer[i].parentElement.href = utsGanjil20[i].link
                    diktatBookContainer[i].parentElement.style.display = utsGanjil20[i].display
                    diktatBookTitle[i].querySelector('h1').textContent = utsGanjil20[i].title.toUpperCase();
                    diktatBookCover[i].querySelector('img').src = utsGanjil20[i].img
                }
                if (a.classList.contains('uas-ganjil-2020')){
                        diktatBookContainer[i].parentElement.href = uasGanjil20[i].link
                        diktatBookContainer[i].parentElement.style.display = uasGanjil20[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = uasGanjil20[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = uasGanjil20[i].img
                }
                if (a.classList.contains('uts-genap-2020')){
                        diktatBookContainer[i].parentElement.href = utsGenap20[i].link
                        diktatBookContainer[i].parentElement.style.display = utsGenap20[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = utsGenap20[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = utsGenap20[i].img
                }
                if (a.classList.contains('uas-genap-2020')){
                        diktatBookContainer[i].parentElement.href = uasGenap20[i].link
                        diktatBookContainer[i].parentElement.style.display = uasGenap20[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = uasGenap20[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = uasGenap20[i].img
                }
                if (a.classList.contains('uts-ganjil-2019')){
                        diktatBookContainer[i].parentElement.href = utsGanjil19[i].link
                        diktatBookContainer[i].parentElement.style.display = utsGanjil19[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = utsGanjil19[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = utsGanjil19[i].img
                }
                if (a.classList.contains('uas-ganjil-2019')){
                        diktatBookContainer[i].parentElement.href = uasGanjil19[i].link
                        diktatBookContainer[i].parentElement.style.display = uasGanjil19[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = uasGanjil19[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = uasGanjil19[i].img
                }
                if (a.classList.contains('uts-genap-2019')){
                        diktatBookContainer[i].parentElement.href = utsGenap19[i].link
                        diktatBookContainer[i].parentElement.style.display = utsGenap19[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = utsGenap19[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = utsGenap19[i].img
                }
                if (a.classList.contains('uas-genap-2019')){
                        diktatBookContainer[i].parentElement.href = uasGenap19[i].link
                        diktatBookContainer[i].parentElement.style.display = uasGenap19[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = uasGenap19[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = uasGenap19[i].img
                }
                if (a.classList.contains('uts-ganjil-2018')){
                        diktatBookContainer[i].parentElement.href = utsGanjil18[i].link
                        diktatBookContainer[i].parentElement.style.display = utsGanjil18[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = utsGanjil18[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = utsGanjil18[i].img
                }
                if (a.classList.contains('uas-ganjil-2018')){
                        diktatBookContainer[i].parentElement.href = uasGanjil18[i].link
                        diktatBookContainer[i].parentElement.style.display = uasGanjil18[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = uasGanjil18[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = uasGanjil18[i].img
                }
                if (a.classList.contains('uts-genap-2018')){
                        diktatBookContainer[i].parentElement.href = utsGenap18[i].link
                        diktatBookContainer[i].parentElement.style.display = utsGenap18[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = utsGenap18[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = utsGenap18[i].img
                }
                if (a.classList.contains('uas-genap-2018')){
                        diktatBookContainer[i].parentElement.href = uasGenap18[i].link
                        diktatBookContainer[i].parentElement.style.display = uasGenap18[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = uasGenap18[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = uasGenap18[i].img
                }
                if (a.classList.contains('uts-ganjil-2017')){
                        diktatBookContainer[i].parentElement.href = utsGanjil17[i].link
                        diktatBookContainer[i].parentElement.style.display = utsGanjil17[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = utsGanjil17[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = utsGanjil17[i].img
                }
                if (a.classList.contains('uas-ganjil-2017')){
                        diktatBookContainer[i].parentElement.href = uasGanjil17[i].link
                        diktatBookContainer[i].parentElement.style.display = uasGanjil17[i].display
                        diktatBookTitle[i].querySelector('h1').textContent = uasGanjil17[i].title.toUpperCase();
                        diktatBookCover[i].querySelector('img').src = uasGanjil17[i].img
                }
            }
            anime({
                targets: diktatBookContainer,
                translateY: ['-100', '0'],
                opacity: ['0', '1'],
                duration: 800,
                delay: anime.stagger(100),
                easing: 'easeOutExpo',
            })
        })
    })

    //bouncing book
    var diktatBook = document.querySelectorAll('.diktat-book-container');
    diktatBook.forEach(function(a){
        var bouncingBook = anime({
            targets: a.querySelector('.diktat-cover'),
            translateY: -20,
            direction: 'alternate',
            duration: 600,
            loop: true,
            autoplay: false,
            easing: 'easeInOutSine',
        })
        setTimeout(function(){
            a.addEventListener('mouseenter', (e) => {
                setTimeout(bouncingBook.play , 500)
            })
        }, 500)
        a.addEventListener('mouseleave', (e) => {
            setTimeout(function(){
                bouncingBook.loop = false;
                bouncingBook.paused = true;
                anime({
                    targets: a.querySelector('.diktat-cover'),
                    translateY: 0,
                    duration: 500,
                    easing: 'easeOutExpo',
                    complete: function (a) {
                        document.querySelector('.diktat-cover').removeAttribute('style');
                        bouncingBook.seek(0)
                    }
                })
            }, 500)
        })
    })
}

// ebook.html

function ebookLoaded(e) {
    var ebook = document.querySelectorAll('.ebook-click');
    ebook.forEach(function(a){
        a.addEventListener('click', (e) => {
            e.preventDefault();
            if (a.classList.contains('open')){
                anime.timeline({
                    easing: 'easeOutQuad',
                    complete: function(anim){
                        a.parentElement.parentElement.style.zIndex = 0;
                        a.classList.remove('open');
                        a.parentElement.parentElement.style.justifyContent = 'center';
                    }
                })
                .add({
                    targets: a.nextElementSibling.querySelectorAll('li'),
                    translateX: ['0', '-50'],
                    opacity: 0,
                    duration: 600,
                    delay: (el, i) => {
                        return 200 * i;
                    }
                })
                .add({
                    targets: a.nextElementSibling,
                    width: '100%',
                    duration: 600,
                }, '-=200')
            } else {
                a.parentElement.parentElement.style.zIndex = 10;
                if (window.innerWidth < 768){
                    a.parentElement.parentElement.style.justifyContent = 'flex-start';
                };
                anime.timeline({
                    easing: 'easeOutExpo'
                }).add({
                    targets: a.nextElementSibling,
                    width: '200%',
                    duration: 600,
                }).add({
                    targets: a.nextElementSibling.querySelectorAll('li'),
                    translateX: ['-50', '0'],
                    opacity: 1,
                    duration: 600,
                    delay: (el, i) => {
                        return 200 * i;
                    }
                })
                setTimeout(function(){
                    a.classList.add('open');
                }, 650)
            }
        })
    })
}
// contact-us.html
function contactusLoaded(e) {
    anime.timeline({
        easing: 'easeOutExpo',
    }).add({
        targets: document.querySelector('.contact-title-line'),
        width: ['0', '30%'],
        duration: 500,
    }).add({
        targets: document.querySelector('.contact-title').querySelector('h1'),
        translateY: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 500,
    }, '-=500').add({
        targets: document.querySelectorAll('.contact-desc-title'),
        translateX: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 800,
        delay: anime.stagger(200)
    }, '-=350').add({
        targets: document.querySelectorAll('.contact-desc-text'),
        translateX: ['-50', '0'],
        opacity: ['0', '1'],
        duration: 800,
        delay: anime.stagger(200)
    }, '-=500').add({
        targets: document.querySelector('.social-media-icons').querySelectorAll('div'),
        translateY: ['-50', '0'],
        opacity: ['0', '1'],
        delay: anime.stagger(100, {
            from: 'center',
            direction: 'reverse',
        })
    }, '-=600').add(navAnimate, '-=700')
}