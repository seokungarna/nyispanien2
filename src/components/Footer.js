import React from 'react'
import './Footer.css'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@tjay</a>
    </h2>
    <br /> */}
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} {' '}
          <a href="/">Ny i Spanien</a>
        </span>
      </div>
    </footer>
  </div>
)
