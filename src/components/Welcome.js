import React from 'react';
import globe from '../images/hd0941.mov';
import '../styles/Welcome.css'

function Welcome() {
  return (
    <div>
      <body class="background">
        <div class="index-container">
          <article class="content">
            <h1 class="title"> Yohanes Demissie </h1>
            <h1 class="sub-title">Where critical thinking meets creative solutions</h1>
            <a class="button" href="/home"><u>Click here</u></a>
          </article>
        </div>
      </body>
      <video class="videoLayout" autoPlay loop muted>
        <source src={globe} type="video/mp4" />
      </video>
    </div>
  )
}

export default Welcome;