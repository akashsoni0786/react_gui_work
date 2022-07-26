import "./Footer.css";
import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div style={{width:"100%",backgroundColor:"black",color:"white"}}>
  
          <div style={{padding:"5%"}}>
  
          <div className='parentlevel1'>
  
          <div className='parentlevel2'>
            <SpotifyLogo />
              <Columns />
              <Columns />
              <Columns />
              <GapMaker />
          </div>
          
          <Logos />
          
          </div>
              <div className='langparent'><LeagalHeadings /> <Langs /></div></div>
      </div>
    )
  }
}



export class LeagalHeadings extends Component {
  render() {
    return (
      <div className='downlinks'>
          <span>Leagel</span><span>Privacy&nbsp;Center</span>
          <span>Privacy&nbsp;Policy</span><span>About&nbsp;Ads</span>
          <span>Cookie</span>
      </div>
    )
  }
}


export class Langs extends Component {
  render() {
    return (
      <div className='langs'>
        <p>
          <span>India</span><span>(English)</span></p>
          <span>2022 Spotify AB</span>
      </div>
    )
  }
}


export class GapMaker extends Component {
  render() {
    return (
      <div style={{width:"1.5vw",height:"100px",color:"transparent"}}>dfgdfggggggggggg</div>
    )
  }
}


export  class Columns extends Component {
  render() {
    return (
      <div className='downContent'>
          <span className='fheading'>Company</span>
          <span className='fsublink'>About</span>
          <span className='fsublink'>Jobs</span>
          <span className='fsublink'>For&nbsp;Records</span>
          <span className='fsublink'>Jobs</span>
      </div>
    )
  }
}



export class Logos extends Component {
  render() {
    return (
      <div className='fbinstaparent'>
          
          <svg  className='fbinsta' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg>
  
  <svg  className='fbinsta' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
  </svg>
  
          <svg  className='fbinsta'  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
  </svg>
        
          
  
      </div>
    )
  }
}



export class SpotifyLogo extends Component {
  render() {
    return (
      <div className='logoparent'><img className='logodownNav' alt='' src='data:image/png;base64,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'/></div>
    )
  }
}



export default Footer;