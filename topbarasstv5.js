var style = document.createElement('style');
  style.innerHTML = `
  .unikiz___barbody {
      background: white;
      padding: 0;
      margin: 0;
      display: block;
      width: 100%;
      background-image: url("https://sayandweep.github.io/UnikizElements/img/20211220_191622.jp");
      background-image: linear-gradient(90deg, white, whitesmoke);
      background-size: 100%;
      transition: .4s ease;
      background-repeat: no-repeat
  }
  .unikiz___barbody:hover {
      background-size: 0%;
      background-color: #4F4BEC
  }
  [data-unikiz='elementinner'] {
   display: flex;
   justify-content: space-between;
   padding: 15px;
  }
  .unikiz___barbody:hover .unikiz___logo img {
     filter: grayscale(100%); 
     filter: brightness(200%);
     margin-left: -40px;
     transition: .3s ease
  }
  .unikiz___logo {
     width: 50%;
  }
  .
  .unikiz___btn {
      display: flex;
      align-items: center;
  }
  .btn_inner {
      float: right;
      padding: 5px 16px;
      border-radius: 3px;
      font-family: 'roboto';
      color: black;
      border: solid 2px rgba(0,0,0,0.1);
  }
      .btn_inner:active {
      border: solid rgba(0,0,0,0.3) 2px
      }
  `;
  document.head.appendChild(style);
  document.write("<div class='unikiz___barbody'><div data-unikiz='elementinner'><div class='unikiz___logo'><img src='https://sayandweep.github.io/UnikizElements/img/20211220_174547.png' width='200px' alt='Unikiz Elements'></div><div class='unikiz___btn'><a href='//www.unikizelements.xyz'><div class='btn_inner'>Buy Now</div></a></div></div></div>");
