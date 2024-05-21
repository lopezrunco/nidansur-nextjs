<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lopezrunco/nidansur-nextjs">
    <img src="logo.png" alt="Logo" width="auto" height="40">
  </a>

<h3 align="center">Nidansur Institutional website</h3>

  <p align="center">
    Institutional website of Nidansur SA, a construction company, crafted with Next.js. With its adaptable architecture and customizable elements, this site can easily transition into a reusable template.
    <br />
    <a href="http://creativo.com.uy/"><strong>Developed by Creativo Multimedia</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#use-contact-form">Use contact form</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

![image](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![image](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* node.js
* npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lopezrunco/nidansur-nextjs.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Run development server
    ```sh
    npm run dev
    ```

### Use contact form

1. Go to <a href='https://formspree.io/' target='_blank'>formspree.io</a> and create an account
2. Copy the form id provided by the API
3. Go to the project and create a file named email-code.js, paste the form id as it follows
    ```js
    export const EMAIL_CODE = 'your_form_id'
    ```
4. The messages submitted in the form will be redirected to your email

<p align="right">(<a href="#top">back to top</a>)</p>

