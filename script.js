/* ===== Reset & Base ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --yellow: #FFC107;
    --yellow-dark: #FF9800;
    --pink: #E91E63;
    --pink-dark: #C2185B;
    --purple: #9C27B0;
    --orange: #FF5722;
    --teal: #009688;
    --dark: #1a1a2e;
    --dark-2: #16213e;
    --gray: #666;
    --light-gray: #f5f5f5;
    --white: #ffffff;
    --shadow: 0 10px 30px rgba(0,0,0,0.1);
    --shadow-hover: 0 20px 40px rgba(0,0,0,0.15);
    --gradient: linear-gradient(135deg, var(--yellow) 0%, var(--pink) 100%);
    --gradient-2: linear-gradient(135deg, var(--pink) 0%, var(--purple) 100%);
    --gradient-3: linear-gradient(135deg, var(--orange) 0%, var(--yellow) 100%);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Montserrat', sans-serif;
    color: var(--dark);
    line-height: 1.7;
    overflow-x: hidden;
    background: var(--white);
}

h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.3;
}

h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-family: 'Playfair Display', serif;
}

p {
    color: var(--gray);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
}

/* ===== Header ===== */
#header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.3s ease;
}

.header-top {
    background: var(--dark);
    color: var(--white);
    padding: 8px 0;
    font-size: 0.85rem;
}

.header-top .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.header-info {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.header-info span i {
    color: var(--yellow);
    margin-right: 5px;
}

.header-social {
    display: flex;
    gap: 15px;
}

.header-social a {
    color: var(--white);
    transition: all 0.3s;
    font-size: 1rem;
}

.header-social a:hover {
    color: var(--yellow);
    transform: translateY(-3px);
}

.navbar {
    background: var(--white);
    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
    padding: 12px 0;
    transition: all 0.3s ease;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    font-size: 2.2rem;
    color: var(--yellow);
    animation: spin 20s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.logo-text h1 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}

.logo-text span {
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--pink);
    font-weight: 600;
}

.nav-menu {
    display: flex;
    gap: 5px;
}

.nav-menu li a {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--dark);
    border-radius: 25px;
    transition: all 0.3s;
    position: relative;
}

.nav-menu li a i {
    color: var(--pink);
    transition: all 0.3s;
}

.nav-menu li a:hover,
.nav-menu li a.active {
    background: var(--gradient);
    color: var(--white);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(233,30,99,0.3);
}

.nav-menu li a:hover i,
.nav-menu li a.active i {
    color: var(--white);
    transform: rotate(360deg);
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--pink);
}

/* ===== Hero ===== */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-top: 140px;
}

.hero-slide {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
}

.hero-content {
    text-align: center;
    color: var(--white);
    max-width: 800px;
    padding: 40px 20px;
    animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

.hero-badge {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 20px;
    border: 1px solid rgba(255,255,255,0.3);
}

.hero-badge i {
    color: var(--yellow);
}

.hero-content h2 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 20px;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
}

.hero-content h2 .highlight {
    color: var(--yellow);
    font-style: italic;
    position: relative;
}

.hero-content p {
    font-size: 1.15rem;
    color: rgba(255,255,255,0.95);
    margin-bottom: 35px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    border-radius: 40px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid transparent;
    font-family: inherit;
}

.btn-primary {
    background: var(--white);
    color: var(--pink);
}

.btn-primary:hover {
    background: var(--yellow);
    color: var(--dark);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.btn-outline {
    background: transparent;
    color: var(--white);
    border-color: var(--white);
}

.btn-outline:hover {
    background: var(--white);
    color: var(--pink);
    transform: translateY(-5px);
}

.btn.full {
    width: 100%;
    justify-content: center;
}

.hero-wave {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    line-height: 0;
}

.hero-wave svg {
    width: 100%;
    height: 120px;
}

/* ===== Features ===== */
.features {
    padding: 80px 0;
    background: var(--white);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 25px;
}

.feature-card {
    background: var(--white);
    padding: 35px 25px;
    border-radius: 20px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: all 0.4s;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient);
    transform: scaleX(0);
    transition: transform 0.4s;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: var(--yellow);
}

.feature-card:hover::before {
    transform: scaleX(1);
}

.feature-icon {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: var(--white);
    background: var(--gradient);
    transition: all 0.4s;
}

.feature-card:nth-child(2) .feature-icon { background: var(--gradient-2); }
.feature-card:nth-child(3) .feature-icon { background: var(--gradient-3); }
.feature-card:nth-child(4) .feature-icon { background: linear-gradient(135deg, var(--teal), var(--yellow)); }

.feature-card:hover .feature-icon {
    transform: rotate(360deg) scale(1.1);
}

.feature-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--dark);
}

.feature-card p {
    font-size: 0.9rem;
}

/* ===== Sections ===== */
.section {
    padding: 100px 0;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-tag {
    display: inline-block;
    background: var(--gradient);
    color: var(--white);
    padding: 8px 22px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 15px;
    letter-spacing: 1px;
}

.section-tag.light {
    background: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.3);
}

.section-divider {
    margin-top: 15px;
    font-size: 1.5rem;
    color: var(--yellow);
}

.section-divider.light {
    color: var(--yellow);
}

/* ===== Sobre ===== */
.sobre {
    background: var(--light-gray);
}

.sobre-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.sobre-text h3 {
    font-size: 1.6rem;
    margin-bottom: 20px;
    color: var(--dark);
}

.sobre-text h3 i {
    color: var(--pink);
    margin-right: 8px;
}

.sobre-text p {
    margin-bottom: 18px;
    font-size: 1.02rem;
}

.sobre-text strong {
    color: var(--pink);
}

.sobre-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 35px;
}

.stat {
    text-align: center;
    background: var(--white);
    padding: 20px 10px;
    border-radius: 15px;
    box-shadow: var(--shadow);
    transition: all 0.3s;
}

.stat:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}

.stat i {
    font-size: 1.5rem;
    color: var(--pink);
    margin-bottom: 8px;
}

.stat-number {
    display: block;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--dark);
    font-family: 'Playfair Display', serif;
}

.stat-label {
    font-size: 0.75rem;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.sobre-image {
    display: flex;
    justify-content: center;
}

.image-wrapper {
    width: 100%;
    aspect-ratio: 1;
    background: var(--gradient);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: var(--shadow-hover);
    overflow: hidden;
}

.image-wrapper::before {
    content: '';
    position: absolute;
    inset: 20px;
    border: 3px dashed rgba(255,255,255,0.4);
    border-radius: 20px;
}

.big-icon {
    font-size: 10rem;
    color: var(--white);
    animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.85; }
}

.floating-badge {
    position: absolute;
    bottom: 30px;
    right: 30px;
    background: var(--white);
    color: var(--pink);
    padding: 12px 20px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.85rem;
    box-shadow: var(--shadow);
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.floating-badge i {
    color: var(--yellow);
    margin-right: 5px;
}

/* ===== Historia / Timeline ===== */
.historia {
    background: var(--white);
}

.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding-left: 40px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient);
    border-radius: 3px;
}

.timeline-item {
    position: relative;
    margin-bottom: 50px;
    padding-left: 60px;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-icon {
    position: absolute;
    left: -18px;
    top: 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.1rem;
    box-shadow: 0 5px 15px rgba(233,30,99,0.4);
    z-index: 2;
    transition: all 0.4s;
}

.timeline-item:hover .timeline-icon {
    transform: scale(1.15) rotate(360deg);
}

.timeline-item:nth-child(2) .timeline-icon { background: var(--gradient-2); }
.timeline-item:nth-child(3) .timeline-icon { background: var(--gradient-3); }

.timeline-content {
    background: var(--light-gray);
    padding: 25px 30px;
    border-radius: 15px;
    box-shadow: var(--shadow);
    transition: all 0.3s;
    position: relative;
}

.timeline-content::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 15px;
    width: 20px;
    height: 20px;
    background: var(--light-gray);
    transform: rotate(45deg);
}

.timeline-item:hover .timeline-content {
    transform: translateX(10px);
    box-shadow: var(--shadow-hover);
    background: var(--white);
}

.timeline-item:hover .timeline-content::before {
    background: var(--white);
}

.timeline-content h3 {
    color: var(--pink);
    margin-bottom: 10px;
    font-size: 1.3rem;
}

.timeline-item::after {
    content: attr(data-year);
    position: absolute;
    left: -80px;
    top: 10px;
    font-weight: 900;
    color: var(--yellow-dark);
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
}

/* ===== Girassol ===== */
.girassol {
    background: var(--gradient-2);
    color: var(--white);
    position: relative;
    overflow: hidden;
}

.girassol::before {
    content: '\f185';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    position: absolute;
    font-size: 30rem;
    color: rgba(255,255,255,0.05);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
}

.girassol .section-header h2 {
    color: var(--white);
}

.girassol-content {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-bottom: 50px;
    position: relative;
    z-index: 2;
}

.girassol-icon {
    flex-shrink: 0;
}

.girassol-icon i {
    font-size: 8rem;
    color: var(--yellow);
    display: block;
}

.rotating {
    animation: spin 15s linear infinite;
}

.girassol-text p {
    color: rgba(255,255,255,0.92);
    margin-bottom: 15px;
    font-size: 1.05rem;
}

.girassol-text strong {
    color: var(--yellow);
}

.girassol-mission {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    position: relative;
    z-index: 2;
}

.mission-card {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    padding: 35px 30px;
    border-radius: 20px;
    transition: all 0.4s;
}

.mission-card:hover {
    background: rgba(255,255,255,0.18);
    transform: translateY(-8px);
}

.mission-card i {
    font-size: 2rem;
    color: var(--yellow);
    margin-bottom: 15px;
}

.mission-card h3 {
    color: var(--white);
    margin-bottom: 12px;
    font-size: 1.3rem;
}

.mission-card p {
    color: rgba(255,255,255,0.9);
    font-size: 0.95rem;
}

/* ===== Coleção ===== */
.colecao {
    background: var(--light-gray);
}

.colecao-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.colecao-card {
    background: var(--white);
    padding: 40px 25px;
    border-radius: 20px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: all 0.4s;
    position: relative;
    overflow: hidden;
    border-bottom: 4px solid transparent;
}

.colecao-card:nth-child(1) { border-bottom-color: var(--yellow); }
.colecao-card:nth-child(2) { border-bottom-color: var(--pink); }
.colecao-card:nth-child(3) { border-bottom-color: var(--purple); }
.colecao-card:nth-child(4) { border-bottom-color: var(--orange); }

.colecao-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: var(--shadow-hover);
}

.colecao-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--white);
    background: var(--gradient);
    transition: all 0.5s;
}

.colecao-card:nth-child(2) .colecao-icon { background: var(--gradient-2); }
.colecao-card:nth-child(3) .colecao-icon { background: linear-gradient(135deg, var(--purple), var(--pink)); }
.colecao-card:nth-child(4) .colecao-icon { background: var(--gradient-3); }

.colecao-card:hover .colecao-icon {
    transform: rotateY(360deg);
}

.colecao-card h3 {
    margin-bottom: 10px;
    color: var(--dark);
}

.colecao-card p {
    font-size: 0.9rem;
}

/* ===== Empresa ===== */
.empresa {
    background: var(--white);
}

.empresa-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
}

.empresa-card {
    background: var(--light-gray);
    padding: 30px 25px;
    border-radius: 18px;
    transition: all 0.4s;
    border-left: 5px solid var(--yellow);
    position: relative;
    overflow: hidden;
}

.empresa-card:nth-child(even) {
    border-left-color: var(--pink);
}

.empresa-card:hover {
    background: var(--white);
    box-shadow: var(--shadow-hover);
    transform: translateY(-8px);
}

.empresa-icon {
    width: 55px;
    height: 55px;
    border-radius: 14px;
    background: var(--gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.4rem;
    margin-bottom: 18px;
    transition: all 0.4s;
}

.empresa-card:nth-child(even) .empresa-icon {
    background: var(--gradient-2);
}

.empresa-card:hover .empresa-icon {
    transform: rotate(-10deg) scale(1.1);
}

.empresa-card h4 {
    color: var(--dark);
    margin-bottom: 8px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.empresa-card p {
    font-size: 0.95rem;
    color: var(--gray);
}

/* ===== Contato ===== */
.contato {
    background: var(--dark);
    color: var(--white);
}

.contato .section-header h2 {
    color: var(--white);
}

.contato-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 50px;
}

.contato-info {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.contato-item {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    padding: 20px;
    background: rgba(255,255,255,0.05);
    border-radius: 15px;
    transition: all 0.3s;
    border: 1px solid rgba(255,255,255,0.08);
}

.contato-item:hover {
    background: rgba(255,255,255,0.1);
    transform: translateX(8px);
}

.contato-icon {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--white);
}

.contato-item:nth-child(2) .contato-icon { background: var(--gradient-2); }
.contato-item:nth-child(3) .contato-icon { background: var(--gradient-3); }
.contato-item:nth-child(4) .contato-icon { background: linear-gradient(135deg, var(--teal), var(--yellow)); }

.contato-item h4 {
    color: var(--yellow);
    font-size: 1rem;
    margin-bottom: 5px;
}

.contato-item p {
    color: rgba(255,255,255,0.85);
    font-size: 0.9rem;
}

.contato-form {
    background: rgba(255,255,255,0.05);
    padding: 35px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.1);
}

.form-group {
    position: relative;
    margin-bottom: 18px;
}

.form-group i {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--yellow);
    font-size: 0.95rem;
    pointer-events: none;
}

.form-group textarea + i,
.form-group:has(textarea) i {
    top: 22px;
    transform: none;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px 18px 15px 48px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.08);
    color: var(--white);
    font-family: inherit;
    font-size: 0.95rem;
    transition: all 0.3s;
    resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255,255,255,0.5);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--yellow);
    background: rgba(255,255,255,0.12);
    box-shadow: 0 0 0 4px rgba(255,193,7,0.15);
}

.contato-form .btn-primary {
    background: var(--gradient);
    color: var(--white);
    margin-top: 10px;
}

.contato-form .btn-primary:hover {
    background: var(--gradient-3);
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(233,30,99,0.4);
}

/* ===== Footer ===== */
.footer {
    background: var(--dark-2);
    color: var(--white);
    padding: 60px 0 20px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.2fr 1.2fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer .logo {
    margin-bottom: 18px;
}

.footer .logo-text h1 {
    font-size: 1.4rem;
}

.footer-col p {
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
    margin-bottom: 18px;
}

.footer-col h3 {
    color: var(--yellow);
    font-size: 1.05rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.footer-col ul li {
    margin-bottom: 10px;
}

.footer-col ul li a {
    color: rgba(255,255,255,0.75);
    font-size: 0.9rem;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.footer-col ul li a i {
    font-size: 0.7rem;
    color: var(--pink);
    transition: all 0.3s;
}

.footer-col ul li a:hover {
    color: var(--yellow);
    transform: translateX(5px);
}

.footer-col ul li a:hover i {
    color: var(--yellow);
}

.footer-info li {
    display: flex;
    gap: 10px;
    color: rgba(255,255,255,0.75);
    font-size: 0.85rem;
    align-items: flex-start;
}

.footer-info li i {
    color: var(--yellow);
    margin-top: 4px;
    flex-shrink: 0;
}

.footer-social {
    display: flex;
    gap: 12px;
}

.footer-social a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    transition: all 0.3s;
}

.footer-social a:hover {
    background: var(--gradient);
    transform: translateY(-5px) rotate(360deg);
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 25px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.6);
}

.footer-bottom i {
    color: var(--yellow);
}

/* ===== Back to Top ===== */
#backToTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient);
    color: var(--white);
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    box-shadow: 0 10px 25px rgba(233,30,99,0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
    z-index: 999;
}

#backToTop.visible {
    opacity: 1;
    visibility: visible;
}

#backToTop:hover {
    transform: translateY(-6px) scale(1.1);
    box-shadow: 0 15px 35px rgba(233,30,99,0.6);
}

/* ===== Scrollbar ===== */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--light-gray);
}

::-webkit-scrollbar-thumb {
    background: var(--gradient);
    border-radius: 10px;
}

/* ===== Responsive ===== */
@media (max-width: 992px) {
    .sobre-grid,
    .contato-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }

    .girassol-content {
        flex-direction: column;
        text-align: center;
    }

    .girassol-mission {
        grid-template-columns: 1fr;
    }

    .timeline-item::after {
        display: none;
    }
}

@media (max-width: 768px) {
    .header-top .container {
        justify-content: center;
    }

    .header-info {
        justify-content: center;
    }

    .menu-toggle {
        display: block;
    }

    .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--white);
        flex-direction: column;
        gap: 0;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transform: translateY(-150%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s;
        z-index: -1;
    }

    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    .nav-menu li a {
        justify-content: center;
        border-radius: 10px;
    }

    .hero-content h2 {
        font-size: 2.2rem;
    }

    .sobre-stats {
        grid-template-columns: 1fr;
    }

    .timeline {
        padding-left: 20px;
    }

    .timeline-icon {
        left: -2px;
    }

    .timeline-item {
        padding-left: 45px;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .footer-bottom {
        justify-content: center;
        text-align: center;
    }

    .section {
        padding: 70px 0;
    }

    .girassol-icon i {
        font-size: 5rem;
    }

    .floating-badge {
        bottom: 15px;
        right: 15px;
        font-size: 0.75rem;
        padding: 10px 15px;
    }
}

@media (max-width: 480px) {
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .header-info span {
        font-size: 0.75rem;
    }

    .logo-text h1 {
        font-size: 1.3rem;
    }

    .contato-form {
        padding: 25px 20px;
    }
}
