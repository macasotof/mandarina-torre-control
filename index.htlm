```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MANDARINA — Torre de Control Logístico</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

:root{
  --cream:#f3f1e9;
  --ink:#17201b;
  --green:#174b38;
  --green-light:#2c6a50;
  --lime:#bfd85b;
  --orange:#df7951;
  --gray:#85877f;
  --line:#d8d6cc;
  --card:#f8f7f2;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,
body{
  width:100%;
  height:100%;
  overflow:hidden;
}

body{
  background:var(--cream);
  color:var(--ink);
  font-family:"Manrope",sans-serif;
}

/* =========================
   APP
========================= */

.app{
  width:100vw;
  height:100vh;
  position:relative;
  overflow:hidden;
}

.grid{
  position:absolute;
  inset:0;
  pointer-events:none;
  opacity:.20;

  background-image:
    linear-gradient(to right,rgba(23,75,56,.07) 1px,transparent 1px),
    linear-gradient(to bottom,rgba(23,75,56,.07) 1px,transparent 1px);

  background-size:90px 90px;
}

/* =========================
   HEADER
========================= */

header{
  position:absolute;
  z-index:20;
  top:28px;
  left:5vw;
  right:5vw;

  display:flex;
  align-items:center;
  justify-content:space-between;
}

.logo{
  display:flex;
  align-items:center;
  gap:10px;

  font-family:"DM Mono",monospace;
  font-size:11px;
  letter-spacing:.15em;
}

.logo-dot{
  width:9px;
  height:9px;
  border-radius:50%;
  background:var(--green);
}

.counter{
  font-family:"DM Mono",monospace;
  font-size:12px;
  color:var(--gray);
}

.counter strong{
  color:var(--green);
}

/* =========================
   PROGRESS
========================= */

.progress{
  position:absolute;
  z-index:20;
  top:69px;
  left:5vw;
  right:5vw;

  height:2px;
  background:var(--line);
}

.progress-bar{
  height:100%;
  width:10%;
  background:var(--green);

  transition:width .7s cubic-bezier(.22,.61,.36,1);
}

/* =========================
   SLIDES
========================= */

.slides{
  width:100%;
  height:100%;

  display:flex;

  overflow-x:auto;
  overflow-y:hidden;

  scroll-snap-type:x mandatory;
  scroll-behavior:smooth;

  scrollbar-width:none;
}

.slides::-webkit-scrollbar{
  display:none;
}

.slide{
  flex:0 0 100vw;
  width:100vw;
  height:100vh;

  scroll-snap-align:start;

  position:relative;
  overflow:hidden;
}

.content{
  width:min(1200px,90vw);
  height:100%;
  margin:auto;

  position:relative;
  z-index:2;

  padding-top:120px;
  padding-bottom:110px;
}

.label{
  font-family:"DM Mono",monospace;
  font-size:10px;
  letter-spacing:.15em;
  color:var(--green);

  margin-bottom:28px;
}

h1{
  font-size:clamp(80px,11vw,165px);
  line-height:.78;

  letter-spacing:-.09em;

  font-weight:800;
}

h2{
  font-size:clamp(55px,6.8vw,100px);
  line-height:.86;

  letter-spacing:-.075em;

  font-weight:800;
}

.green{
  color:var(--green);
}

.gray{
  color:var(--gray);
}

.mono{
  font-family:"DM Mono",monospace;
}

/* =========================
   01 PORTADA
========================= */

.cover{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.cover-text{
  max-width:760px;
}

.cover-sub{
  margin-top:35px;

  font-size:19px;
  color:var(--gray);
}

.orbit{
  width:410px;
  height:410px;

  position:relative;
}

.orbit-ring{
  position:absolute;

  left:50%;
  top:50%;

  transform:translate(-50%,-50%);

  border:1px solid var(--line);
  border-radius:50%;
}

.orbit-ring.one{
  width:190px;
  height:190px;
}

.orbit-ring.two{
  width:300px;
  height:300px;
}

.orbit-ring.three{
  width:410px;
  height:410px;
}

.orbit-core{
  position:absolute;

  width:120px;
  height:120px;

  left:50%;
  top:50%;

  transform:translate(-50%,-50%);

  background:var(--green);

  border-radius:50%;

  color:white;

  display:flex;
  align-items:center;
  justify-content:center;

  text-align:center;

  font-family:"DM Mono",monospace;
  font-size:10px;
  line-height:1.5;
}

.orbit-point{
  position:absolute;

  width:12px;
  height:12px;

  border-radius:50%;
  background:var(--lime);
}

.p1{
  top:30px;
  right:70px;
}

.p2{
  bottom:55px;
  left:45px;
}

.p3{
  top:95px;
  left:15px;
}

/* =========================
   02 DORMEX
========================= */

.product{
  display:flex;
  align-items:center;
  gap:9vw;
}

.product-title{
  flex:1;
}

.dormex{
  font-size:clamp(80px,10vw,150px);
  line-height:.75;

  letter-spacing:-.1em;
  font-weight:800;
}

.tags{
  display:flex;
  gap:8px;
  margin-top:40px;
}

.tag{
  border:1px solid var(--line);

  padding:9px 13px;

  font-family:"DM Mono",monospace;
  font-size:9px;
}

.product-stat{
  flex:1;

  border-left:1px solid var(--line);

  padding-left:8vw;
}

.number-74{
  font-size:clamp(150px,20vw,280px);

  line-height:.65;

  letter-spacing:-.12em;

  font-weight:800;

  color:var(--green);
}

.stat-description{
  margin-top:55px;

  font-size:19px;

  color:var(--gray);
}

.bar{
  width:100%;
  height:7px;

  margin-top:25px;

  background:var(--line);
}

.bar-fill{
  width:74%;
  height:100%;

  background:var(--lime);
}

/* =========================
   03 PROBLEMA
========================= */

.problem{
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.problem h2{
  max-width:1050px;
}

.problem-sub{
  margin-top:30px;

  font-size:clamp(25px,3vw,43px);
  line-height:1.05;

  max-width:900px;
}

.flow{
  margin-top:70px;

  display:flex;
  align-items:center;

  gap:12px;
}

.flow-item{
  padding:13px 17px;

  background:var(--green);

  color:white;

  font-family:"DM Mono",monospace;

  font-size:9px;
}

.flow-arrow{
  color:var(--green);
  font-size:20px;
}

.flow-break{
  position:relative;
}

.flow-break::before{
  content:"QUIEBRE";

  position:absolute;

  top:-23px;
  right:0;

  color:var(--orange);

  font-family:"DM Mono",monospace;

  font-size:8px;
}

/* =========================
   04 ENTORNO
========================= */

.environment{
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.environment-grid{
  margin-top:65px;

  display:grid;
  grid-template-columns:repeat(3,1fr);

  gap:18px;
}

.environment-card{
  min-height:240px;

  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);

  padding:25px 0;
}

.card-number{
  font-family:"DM Mono",monospace;
  color:var(--gray);

  font-size:9px;
}

.icon{
  font-size:42px;

  color:var(--green);

  margin:28px 0;
}

.environment-card h3{
  font-size:19px;
}

.environment-card p{
  margin-top:9px;

  color:var(--gray);

  font-size:12px;
}

/* =========================
   05 PORTER
========================= */

.porter{
  display:flex;
  align-items:center;
  justify-content:center;
}

.porter-label{
  position:absolute;
  top:120px;
  left:0;
}

.porter-orbit{
  width:390px;
  height:390px;

  border:1px solid var(--line);

  border-radius:50%;

  position:relative;
}

.porter-core{
  width:150px;
  height:150px;

  border-radius:50%;

  position:absolute;

  left:50%;
  top:50%;

  transform:translate(-50%,-50%);

  background:var(--green);

  color:white;

  display:flex;
  align-items:center;
  justify-content:center;

  text-align:center;

  font-size:14px;
  font-weight:700;
}

.force{
  position:absolute;

  width:180px;
}

.force-line{
  width:100%;
  height:3px;

  background:var(--orange);

  margin-bottom:9px;
}

.force strong{
  display:block;
  font-size:13px;
}

.force small{
  font-family:"DM Mono",monospace;
  font-size:8px;

  color:var(--gray);
}

.force-a{
  top:-15px;
  left:-190px;
}

.force-b{
  top:-15px;
  right:-190px;
}

.force-c{
  bottom:-50px;
  left:50%;
  transform:translateX(-50%);
}

.porter-message{
  position:absolute;

  bottom:115px;
  left:0;

  color:var(--gray);

  font-size:12px;
}

/* =========================
   06 FODA
========================= */

.foda{
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.foda-title{
  display:flex;
  justify-content:space-between;
  align-items:end;
}

.foda-grid{
  display:grid;

  grid-template-columns:1fr 1fr;

  gap:12px;

  margin-top:38px;
}

.foda-box{
  border:1px solid var(--line);

  padding:18px;

  min-height:125px;

  background:rgba(248,247,242,.5);
}

.foda-box h3{
  font-family:"DM Mono",monospace;

  color:var(--green);

  font-size:9px;

  margin-bottom:13px;
}

.foda-box p{
  color:var(--gray);

  font-size:11px;

  line-height:1.8;
}

.foda-score{
  display:flex;

  align-items:center;
  justify-content:center;

  gap:55px;

  margin-top:25px;
}

.score{
  font-size:65px;

  font-weight:800;

  letter-spacing:-.08em;

  color:var(--green);
}

.score-label{
  font-family:"DM Mono",monospace;

  color:var(--gray);

  font-size:8px;

  margin-top:10px;
}

.vs{
  font-family:"DM Mono",monospace;

  color:#aaa;

  font-size:10px;
}

/* =========================
   07 ESTRATEGIA
========================= */

.strategy{
  display:flex;

  flex-direction:column;

  justify-content:center;
}

.strategy-flow{
  display:flex;

  align-items:center;

  margin-top:75px;
}

.strategy-step{
  flex:1;

  text-align:center;
}

.strategy-circle{
  width:75px;
  height:75px;

  margin:auto;

  border-radius:50%;

  border:1px solid var(--line);

  display:flex;

  align-items:center;
  justify-content:center;

  font-family:"DM Mono",monospace;

  font-size:9px;
}

.strategy-step:last-child .strategy-circle{
  background:var(--green);
  border-color:var(--green);
  color:white;
}

.strategy-step strong{
  display:block;

  margin-top:18px;

  font-size:11px;
}

.strategy-arrow{
  font-size:24px;

  color:var(--green);
}

.strategy-note{
  margin-top:55px;

  border-left:3px solid var(--lime);

  padding-left:15px;

  color:var(--gray);

  font-size:13px;
}

/* =========================
   08 MANDARINA
========================= */

.control{
  display:flex;

  flex-direction:column;

  justify-content:center;
}

.control h2{
  position:absolute;
  top:120px;
  left:0;
}

.network{
  width:760px;
  height:430px;

  margin:80px auto 0;

  position:relative;
}

.network-center{
  position:absolute;

  width:170px;
  height:170px;

  border-radius:50%;

  background:var(--green);

  left:50%;
  top:50%;

  transform:translate(-50%,-50%);

  color:white;

  display:flex;
  flex-direction:column;

  align-items:center;
  justify-content:center;

  z-index:4;
}

.network-center strong{
  font-size:17px;
}

.network-center span{
  margin-top:9px;

  font-family:"DM Mono",monospace;

  font-size:8px;

  opacity:.65;
}

.node{
  position:absolute;

  z-index:5;

  padding:11px 15px;

  border:1px solid var(--line);

  background:var(--card);

  font-family:"DM Mono",monospace;

  font-size:9px;
}

.node-1{
  top:0;
  left:50%;
  transform:translateX(-50%);
}

.node-2{
  top:45px;
  left:35px;
}

.node-3{
  top:45px;
  right:35px;
}

.node-4{
  top:50%;
  left:0;
  transform:translateY(-50%);
}

.node-5{
  top:50%;
  right:0;
  transform:translateY(-50%);
}

.node-6{
  bottom:45px;
  left:35px;
}

.node-7{
  bottom:45px;
  right:35px;
}

.node-8{
  bottom:0;
  left:50%;
  transform:translateX(-50%);
}

.network svg{
  position:absolute;

  width:100%;
  height:100%;

  inset:0;
}

.network line{
  stroke:var(--line);

  stroke-width:1.5;

  stroke-dasharray:5 7;
}

/* =========================
   09 METODOLOGÍA
========================= */

.method{
  display:flex;

  flex-direction:column;

  justify-content:center;
}

.pipeline{
  display:flex;

  margin-top:65px;
}

.pipeline-item{
  flex:1;

  min-height:115px;

  padding:15px;

  border:1px solid var(--line);

  display:flex;

  flex-direction:column;

  justify-content:space-between;
}

.pipeline-item span{
  font-family:"DM Mono",monospace;

  color:#aaa;

  font-size:8px;
}

.pipeline-item strong{
  font-size:10px;
}

.pipeline-final{
  background:var(--green);

  color:white;

  border-color:var(--green);
}

.sources{
  display:flex;

  flex-wrap:wrap;

  gap:6px;

  margin-top:25px;
}

.source{
  padding:7px 9px;

  background:#e5e3da;

  font-family:"DM Mono",monospace;

  font-size:7px;
}

/* =========================
   10 CIERRE
========================= */

.closing{
  display:flex;

  flex-direction:column;

  justify-content:center;
}

.metrics{
  display:grid;

  grid-template-columns:repeat(3,1fr);

  gap:25px;

  margin-top:60px;
}

.metric{
  border-top:1px solid var(--line);

  padding-top:23px;
}

.metric-number{
  font-size:clamp(75px,9vw,125px);

  line-height:.7;

  font-weight:800;

  letter-spacing:-.1em;

  color:var(--green);
}

.metric-name{
  margin-top:35px;

  font-family:"DM Mono",monospace;

  color:var(--gray);

  font-size:9px;
}

.transformation{
  margin-top:60px;

  padding:20px 0;

  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);

  display:flex;

  justify-content:space-between;

  font-family:"DM Mono",monospace;

  color:var(--green);

  font-size:9px;
}

.final-row{
  margin-top:35px;

  display:flex;

  align-items:end;

  justify-content:space-between;
}

.final-row strong{
  font-size:43px;

  letter-spacing:-.07em;
}

.final-row span{
  color:var(--gray);

  font-size:12px;

  line-height:1.5;

  text-align:right;
}

/* =========================
   NAVEGACIÓN
========================= */

.navigation{
  position:absolute;

  z-index:30;

  left:5vw;
  right:5vw;
  bottom:25px;

  display:flex;

  align-items:center;

  justify-content:space-between;
}

.buttons{
  display:flex;

  gap:7px;
}

.nav-button{
  width:42px;
  height:36px;

  background:rgba(248,247,242,.8);

  border:1px solid var(--line);

  color:var(--green);

  cursor:pointer;

  transition:.25s;
}

.nav-button:hover{
  background:var(--green);

  color:white;
}

.nav-button:disabled{
  opacity:.25;

  cursor:default;
}

.dots{
  position:absolute;

  left:50%;

  transform:translateX(-50%);

  display:flex;

  gap:5px;
}

.dot{
  width:5px;
  height:5px;

  border:0;

  border-radius:10px;

  background:#c6c4bb;

  cursor:pointer;

  transition:.3s;
}

.dot.active{
  width:22px;

  background:var(--green);
}

.keyboard{
  color:#aaa;

  font-family:"DM Mono",monospace;

  font-size:8px;
}

/* =========================
   ANIMACIÓN
========================= */

.slide .content{
  opacity:0;

  transform:translateY(25px);

  transition:
    opacity .65s ease,
    transform .65s ease;
}

.slide.active .content{
  opacity:1;

  transform:translateY(0);
}

.slide.active .number-74,
.slide.active .metric-number{
  animation:appear .8s ease both;
}

@keyframes appear{
  from{
    opacity:0;
    transform:translateY(25px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }
}

/* =========================
   TABLET
========================= */

@media(max-width:900px){

  .content{
    width:88vw;
  }

  .cover{
    display:block;

    padding-top:145px;
  }

  .orbit{
    width:280px;
    height:280px;

    margin:70px auto 0;
  }

  .orbit-ring.one{
    width:130px;
    height:130px;
  }

  .orbit-ring.two{
    width:210px;
    height:210px;
  }

  .orbit-ring.three{
    width:280px;
    height:280px;
  }

  .product{
    display:block;

    padding-top:145px;
  }

  .product-stat{
    border-left:0;

    border-top:1px solid var(--line);

    padding:40px 0 0;

    margin-top:50px;
  }

  .number-74{
    font-size:130px;
  }

  .environment-grid{
    grid-template-columns:1fr;
  }

  .environment-card{
    min-height:100px;
  }

  .environment-card:nth-child(n+2){
    display:none;
  }

  .pipeline{
    overflow:hidden;
  }

  .pipeline-item{
    min-width:110px;
  }

  .pipeline-item:nth-child(n+5){
    display:none;
  }

  .network{
    transform:scale(.65);
  }

  .keyboard{
    display:none;
  }
}

/* =========================
   CELULAR
========================= */

@media(max-width:600px){

  h1{
    font-size:65px;
  }

  h2{
    font-size:42px;
  }

  .label{
    margin-bottom:20px;
  }

  .cover-sub{
    font-size:15px;
  }

  .problem-sub{
    font-size:25px;
  }

  .flow{
    overflow:hidden;

    margin-top:45px;
  }

  .flow-item{
    padding:9px;

    font-size:7px;
  }

  .flow-arrow{
    font-size:14px;
  }

  .porter{
    padding-top:150px;
  }

  .porter-orbit{
    transform:scale(.67);
  }

  .porter-label{
    top:105px;
  }

  .porter-message{
    bottom:95px;
  }

  .foda{
    padding-top:125px;
  }

  .foda-grid{
    gap:7px;
  }

  .foda-box{
    min-height:105px;

    padding:12px;
  }

  .foda-box p{
    font-size:8px;
  }

  .score{
    font-size:43px;
  }

  .foda-score{
    gap:18px;
  }

  .strategy{
    padding-top:130px;
  }

  .strategy-flow{
    flex-direction:column;

    gap:10px;

    margin-top:40px;
  }

  .strategy-arrow{
    transform:rotate(90deg);
  }

  .control{
    padding-top:135px;
  }

  .control h2{
    top:105px;
  }

  .network{
    transform:scale(.5);
  }

  .metrics{
    gap:10px;
  }

  .metric-number{
    font-size:48px;
  }

  .metric-name{
    font-size:7px;
  }

  .transformation{
    font-size:6px;
  }

  .final-row strong{
    font-size:28px;
  }

  .final-row span{
    font-size:8px;
  }

  .dots{
    display:none;
  }
}
</style>
</head>

<body>

<div class="app">

<div class="grid"></div>

<header>

  <div class="logo">
    <span class="logo-dot"></span>
    MANDARINA
  </div>

  <div class="counter">
    <strong id="current">01</strong> / 10
  </div>

</header>

<div class="progress">
  <div class="progress-bar" id="progressBar"></div>
</div>


<main class="slides" id="slides">


<!-- =====================================================
     01
===================================================== -->

<section class="slide active">

<div class="content cover">

  <div class="cover-text">

    <div class="label">
      01 / 10 · TORRE DE CONTROL LOGÍSTICO
    </div>

    <h1>
      MANDARINA
    </h1>

    <div class="cover-sub">
      Planificación inteligente para DORMEX
    </div>

  </div>


  <div class="orbit">

    <div class="orbit-ring one"></div>
    <div class="orbit-ring two"></div>
    <div class="orbit-ring three"></div>

    <div class="orbit-core">
      TORRE<br>
      DE CONTROL
    </div>

    <span class="orbit-point p1"></span>
    <span class="orbit-point p2"></span>
    <span class="orbit-point p3"></span>

  </div>

</div>

</section>


<!-- =====================================================
     02
===================================================== -->

<section class="slide">

<div class="content product">

  <div class="product-title">

    <div class="label">
      02 / 10 · PRODUCTO CRÍTICO
    </div>

    <div class="dormex">
      DORMEX
    </div>

    <div class="tags">
      <span class="tag">DORMEX 20</span>
      <span class="tag">DORMEX 200</span>
    </div>

  </div>


  <div class="product-stat">

    <div class="number-74">
      74%
    </div>

    <div class="stat-description">
      del valor vendido<br>
      de su categoría
    </div>

    <div class="bar">
      <div class="bar-fill"></div>
    </div>

    <div class="mono gray"
         style="font-size:8px;margin-top:12px;">
      ALTA CRITICIDAD · VENTANA AGRÍCOLA ACOTADA
    </div>

  </div>

</div>

</section>


<!-- =====================================================
     03
===================================================== -->

<section class="slide">

<div class="content problem">

  <div class="label">
    03 / 10 · EL DESAFÍO
  </div>

  <h2>
    El problema<br>
    no es <span class="green">vender.</span>
  </h2>

  <div class="problem-sub">
    Es tener el producto correcto,<br>
    en el lugar correcto,<br>
    en el momento correcto.
  </div>


  <div class="flow">

    <div class="flow-item">
      DEMANDA
    </div>

    <div class="flow-arrow">→</div>

    <div class="flow-item">
      STOCK
    </div>

    <div class="flow-arrow">→</div>

    <div class="flow-item flow-break">
      BODEGA
    </div>

    <div class="flow-arrow">→</div>

    <div class="flow-item">
      TRANSPORTE
    </div>

    <div class="flow-arrow">→</div>

    <div class="flow-item">
      SUCURSAL
    </div>

  </div>

</div>

</section>


<!-- =====================================================
     04
===================================================== -->

<section class="slide">

<div class="content environment">

  <div class="label">
    04 / 10 · DIAGNÓSTICO DEL ENTORNO
  </div>

  <h2>
    ¿Qué condiciona<br>
    la <span class="green">operación?</span>
  </h2>


  <div class="environment-grid">

    <div class="environment-card">

      <div class="card-number">
        01
      </div>

      <div class="icon">
        ⌁
      </div>

      <h3>
        TECNOLOGÍA
      </h3>

      <p>
        SAP + datos transaccionales
      </p>

    </div>


    <div class="environment-card">

      <div class="card-number">
        02
      </div>

      <div class="icon">
        ◌
      </div>

      <h3>
        CLIMA
      </h3>

      <p>
        Demanda sensible a condiciones agrícolas
      </p>

    </div>


    <div class="environment-card">

      <div class="card-number">
        03
      </div>

      <div class="icon">
        △
      </div>

      <h3>
        REGULACIÓN
      </h3>

      <p>
        SUSPEL + sustancias peligrosas
      </p>

    </div>

  </div>

</div>

</section>


<!-- =====================================================
     05
===================================================== -->

<section class="slide">

<div class="content porter">

  <div class="label porter-label">
    05 / 10 · PRESIÓN COMPETITIVA
  </div>


  <div class="porter-orbit">

    <div class="porter-core">
      PRESIÓN<br>
      COMPETITIVA
    </div>


    <div class="force force-a">

      <div class="force-line"></div>

      <strong>
        PROVEEDORES
      </strong>

      <small>
        ALTO PODER
      </small>

    </div>


    <div class="force force-b">

      <div class="force-line"></div>

      <strong>
        CLIENTES
      </strong>

      <small>
        ALTO PODER
      </small>

    </div>


    <div class="force force-c">

      <div class="force-line"></div>

      <strong>
        COMPETENCIA
      </strong>

      <small>
        ALTA RIVALIDAD
      </small>

    </div>

  </div>


  <div class="porter-message">
    Si falla la disponibilidad, el cliente puede cambiar de proveedor.
  </div>

</div>

</section>


<!-- =====================================================
     06
===================================================== -->

<section class="slide">

<div class="content foda">

  <div class="label">
    06 / 10 · FODA
  </div>


  <div class="foda-title">

    <h2>
      El potencial existe.<br>
      <span class="green">Falta ordenarlo.</span>
    </h2>

  </div>


  <div class="foda-grid">

    <div class="foda-box">

      <h3>
        FORTALEZAS
      </h3>

      <p>
        Cobertura<br>
        SAP<br>
        Experiencia VMI
      </p>

    </div>


    <div class="foda-box">

      <h3>
        DEBILIDADES
      </h3>

      <p>
        Datos manuales<br>
        Reposición no estandarizada<br>
        Fletes no consolidados
      </p>

    </div>


    <div class="foda-box">

      <h3>
        OPORTUNIDADES
      </h3>

      <p>
        Automatización<br>
        Integración de datos<br>
        Planificación anticipada
      </p>

    </div>


    <div class="foda-box">

      <h3>
        AMENAZAS
      </h3>

      <p>
        Clima<br>
        Regulación<br>
        Competencia
      </p>

    </div>

  </div>


  <div class="foda-score">

    <div>

      <div class="score">
        3,82
      </div>

      <div class="score-label">
        FACTORES FAVORABLES
      </div>

    </div>


    <div class="vs">
      VS.
    </div>


    <div>

      <div class="score">
        1,53
      </div>

      <div class="score-label">
        FACTORES DESFAVORABLES
      </div>

    </div>

  </div>

</div>

</section>


<!-- =====================================================
     07
===================================================== -->

<section class="slide">

<div class="content strategy">

  <div class="label">
    07 / 10 · MATRIZ DE CONFRONTACIÓN
  </div>

  <h2>
    De la debilidad<br>
    a la <span class="green">estrategia.</span>
  </h2>


  <div class="strategy-flow">

    <div class="strategy-step">

      <div class="strategy-circle">
        01
      </div>

      <strong>
        DEBILIDADES
      </strong>

    </div>


    <div class="strategy-arrow">
      →
    </div>


    <div class="strategy-step">

      <div class="strategy-circle">
        02
      </div>

      <strong>
        TECNOLOGÍA
      </strong>

    </div>


    <div class="strategy-arrow">
      →
    </div>


    <div class="strategy-step">

      <div class="strategy-circle">
        03
      </div>

      <strong>
        ESTANDARIZACIÓN
      </strong>

    </div>


    <div class="strategy-arrow">
      →
    </div>


    <div class="strategy-step">

      <div class="strategy-circle">
        04
      </div>

      <strong>
        MANDARINA
      </strong>

    </div>

  </div>


  <div class="strategy-note">
    Digitalizar después de ordenar el proceso.
  </div>

</div>

</section>


<!-- =====================================================
     08
===================================================== -->

<section class="slide">

<div class="content control">

  <div class="label">
    08 / 10 · SOLUCIÓN
  </div>

  <h2>
    Una torre de control<br>
    para <span class="green">DORMEX.</span>
  </h2>


  <div class="network">

    <svg viewBox="0 0 760 430">

      <line x1="380" y1="75" x2="380" y2="215"/>

      <line x1="110" y1="90" x2="300" y2="215"/>

      <line x1="650" y1="90" x2="460" y2="215"/>

      <line x1="75" y1="215" x2="300" y2="215"/>

      <line x1="685" y1="215" x2="460" y2="215"/>

      <line x1="110" y1="340" x2="300" y2="275"/>

      <line x1="650" y1="340" x2="460" y2="275"/>

      <line x1="380" y1="430" x2="380" y2="300"/>

    </svg>


    <div class="network-center">

      <strong>
        MANDARINA
      </strong>

      <span>
        TORRE DE CONTROL
      </span>

    </div>


    <div class="node node-1">
      SAP
    </div>

    <div class="node node-2">
      FORECAST
    </div>

    <div class="node node-3">
      STOCK
    </div>

    <div class="node node-4">
      DEMANDA
    </div>

    <div class="node node-5">
      BODEGA
    </div>

    <div class="node node-6">
      TRANSPORTE
    </div>

    <div class="node node-7">
      REPOSICIÓN
    </div>

    <div class="node node-8">
      PALLETS
    </div>

  </div>

</div>

</section>


<!-- =====================================================
     09
===================================================== -->

<section class="slide">

<div class="content method">

  <div class="label">
    09 / 10 · DATOS Y METODOLOGÍA
  </div>

  <h2>
    De datos dispersos<br>
    a una <span class="green">decisión.</span>
  </h2>


  <div class="pipeline">

    <div class="pipeline-item">

      <span>01</span>

      <strong>
        SAP
      </strong>

    </div>


    <div class="pipeline-item">

      <span>02</span>

      <strong>
        HOMOLOGACIÓN
      </strong>

    </div>


    <div class="pipeline-item">

      <span>03</span>

      <strong>
        STOCK
      </strong>

    </div>


    <div class="pipeline-item">

      <span>04</span>

      <strong>
        DEMANDA
      </strong>

    </div>


    <div class="pipeline-item">

      <span>05</span>

      <strong>
        PALLETS
      </strong>

    </div>


    <div class="pipeline-item">

      <span>06</span>

      <strong>
        CAPACIDAD
      </strong>

    </div>


    <div class="pipeline-item">

      <span>07</span>

      <strong>
        COSTOS
      </strong>

    </div>


    <div class="pipeline-item pipeline-final">

      <span>08</span>

      <strong>
        DECISIÓN
      </strong>

    </div>

  </div>


  <div class="sources">

    <span class="source">SAP</span>
    <span class="source">MOTOR DORMEX</span>
    <span class="source">CORREOS</span>
    <span class="source">BITÁCORAS</span>
    <span class="source">SAG</span>
    <span class="source">ODEPA</span>
    <span class="source">MINAGRI</span>
    <span class="source">ALZCHEM</span>

  </div>

</div>

</section>


<!-- =====================================================
     10
===================================================== -->

<section class="slide">

<div class="content closing">

  <div class="label">
    10 / 10 · RESULTADO Y CIERRE
  </div>

  <h2>
    El problema<br>
    está <span class="green">identificado.</span>
  </h2>


  <div class="metrics">

    <div class="metric">

      <div class="metric-number">
        100%
      </div>

      <div class="metric-name">
        MÉTODO
      </div>

    </div>


    <div class="metric">

      <div class="metric-number">
        100%
      </div>

      <div class="metric-name">
        DATOS Y SISTEMAS
      </div>

    </div>


    <div class="metric">

      <div class="metric-number">
        94%
      </div>

      <div class="metric-name">
        ALMACENAMIENTO
      </div>

    </div>

  </div>


  <div class="transformation">

    <span>REACTIVO</span>
    <span>→</span>
    <span>ANTICIPADO</span>
    <span>→</span>
    <span>ESTANDARIZADO</span>
    <span>→</span>
    <span>TRAZABLE</span>
    <span>→</span>
    <span>MEDIBLE</span>

  </div>


  <div class="final-row">

    <strong>
      MANDARINA
    </strong>

    <span>
      Transformar la gestión logística de DORMEX.<br>
      Muchas gracias.
    </span>

  </div>

</div>

</section>


</main>


<!-- =========================
     CONTROLES
========================= -->

<div class="navigation">

  <div class="buttons">

    <button
      class="nav-button"
      id="prev">
      ←
    </button>

    <button
      class="nav-button"
      id="next">
      →
    </button>

  </div>


  <div
    class="dots"
    id="dots">
  </div>


  <div class="keyboard">
    ← → · NAVEGAR
  </div>

</div>

</div>


<script>

/* =========================
   VARIABLES
========================= */

const slides =
  document.getElementById("slides");

const slideElements =
  [...document.querySelectorAll(".slide")];

const current =
  document.getElementById("current");

const progressBar =
  document.getElementById("progressBar");

const previousButton =
  document.getElementById("prev");

const nextButton =
  document.getElementById("next");

const dotsContainer =
  document.getElementById("dots");

let currentIndex = 0;


/* =========================
   CREAR DOTS
========================= */

slideElements.forEach((slide,index)=>{

  const dot =
    document.createElement("button");

  dot.className = "dot";

  if(index === 0){
    dot.classList.add("active");
  }

  dot.addEventListener("click",()=>{
    goTo(index);
  });

  dotsContainer.appendChild(dot);

});


const dots =
  [...document.querySelectorAll(".dot")];


/* =========================
   NAVEGAR
========================= */

function goTo(index){

  index =
    Math.max(
      0,
      Math.min(
        slideElements.length - 1,
        index
      )
    );

  currentIndex = index;

  slides.scrollTo({
    left:index * window.innerWidth,
    behavior:"smooth"
  });

  updateInterface();

}


/* =========================
   ACTUALIZAR
========================= */

function updateInterface(){

  const number =
    String(currentIndex + 1)
    .padStart(2,"0");

  current.textContent =
    number;

  progressBar.style.width =
    ((currentIndex + 1) /
    slideElements.length * 100) + "%";


  dots.forEach((dot,index)=>{

    dot.classList.toggle(
      "active",
      index === currentIndex
    );

  });


  slideElements.forEach((slide,index)=>{

    slide.classList.toggle(
      "active",
      index === currentIndex
    );

  });


  previousButton.disabled =
    currentIndex === 0;

  nextButton.disabled =
    currentIndex === slideElements.length - 1;

}


/* =========================
   BOTONES
========================= */

previousButton.addEventListener(
  "click",
  ()=>{
    goTo(currentIndex - 1);
  }
);

nextButton.addEventListener(
  "click",
  ()=>{
    goTo(currentIndex + 1);
  }
);


/* =========================
   TECLADO
========================= */

document.addEventListener(
  "keydown",
  event=>{

    if(event.key === "ArrowRight"){

      event.preventDefault();

      goTo(currentIndex + 1);

    }

    if(event.key === "ArrowLeft"){

      event.preventDefault();

      goTo(currentIndex - 1);

    }

  }
);


/* =========================
   TRACKPAD
========================= */

let locked = false;

slides.addEventListener(
  "wheel",
  event=>{

    if(
      Math.abs(event.deltaX) <=
      Math.abs(event.deltaY)
    ){
      return;
    }

    event.preventDefault();

    if(locked){
      return;
    }

    locked = true;

    if(event.deltaX > 0){

      goTo(currentIndex + 1);

    }else{

      goTo(currentIndex - 1);

    }

    setTimeout(()=>{
      locked = false;
    },650);

  },
  {passive:false}
);


/* =========================
   DETECTAR SCROLL
========================= */

let scrollTimer;

slides.addEventListener(
  "scroll",
  ()=>{

    clearTimeout(scrollTimer);

    scrollTimer =
      setTimeout(()=>{

        const index =
          Math.round(
            slides.scrollLeft /
            window.innerWidth
          );

        if(index !== currentIndex){

          currentIndex = index;

          updateInterface();

        }

      },100);

  }
);


/* =========================
   TOUCH / CELULAR
========================= */

let touchStart = 0;

slides.addEventListener(
  "touchstart",
  event=>{

    touchStart =
      event.touches[0].clientX;

  }
);

slides.addEventListener(
  "touchend",
  event=>{

    const touchEnd =
      event.changedTouches[0].clientX;

    const difference =
      touchStart - touchEnd;

    if(Math.abs(difference) < 50){
      return;
    }

    if(difference > 0){

      goTo(currentIndex + 1);

    }else{

      goTo(currentIndex - 1);

    }

  }
);


/* =========================
   INICIO
========================= */

updateInterface();

</script>

</body>
</html>
```
