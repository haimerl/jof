import './style.css'
import jofLogo from './img.svg'
import jofIcon from '/icon.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="#" target="_blank">
      <img src="${jofIcon}" class="logo" alt="JOF Icon" />
    </a>
    <a href="https://jaroffiles.com/nm" target="_blank">
      <img src="${jofLogo}" class="logo vanilla" alt="JOF Logo" />
    </a>
    <h1>Jar of Files</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      JOF
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
