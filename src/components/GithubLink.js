const Footer = () => {
  return (
    <>
      <span id="forkongithub">
        <a href="https://github.com/masoudnemati/iran-map">Fork me on GitHub</a>
      </span>
      <style jsx>{`
        #forkongithub a {
          background: #fff;
          color: #1c1c1c;
          text-decoration: none;
          font-family: arial, sans-serif;
          text-align: center;
          font-weight: bold;
          padding: 5px 40px;
          font-size: 1rem;
          line-height: 2rem;
          position: relative;
          transition: all 0.3s ease-out;
        }

        #forkongithub a::before,
        #forkongithub a::after {
          content: "";
          width: 100%;
          display: block;
          position: absolute;
          top: 1px;
          left: 0;
          height: 1px;
          background: #ccc;
        }

        #forkongithub a::after {
          bottom: 1px;
          top: auto;
        }

        #forkongithub a:hover {
          color: #c7414a;
          background-color: #1c1c1c;
        }

        @media screen and (min-width: 1100px) {
          #forkongithub {
            position: fixed;
            display: block;
            top: 0;
            left: 0;
            width: 200px;
            overflow: visible;
            height: 200px;
            z-index: 9999;
          }
          #forkongithub a {
            width: 300px;
            position: absolute;
            top: 50px;
            left: -75px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
          }

          #forkongithub a:hover {
            color: #c7414a;
            background-color: #1c1c1c;
            cursor: pointer;
            box-shadow: black 0px 0px 0px 2px inset,
              rgba(0, 0, 0, 0.1) 10px -10px 0px 30px,
              rgba(199, 65, 74, 0.9) 10px -10px,
              rgba(0, 0, 0, 0.2) 20px -20px 0px -3px,
              rgba(199, 65, 74, 0.9) 20px -20px,
              rgba(0, 0, 0, 0.3) 30px -30px 0px -3px,
              rgba(199, 65, 74, 0.9) 30px -30px,
              rgba(0, 0, 0, 0.4) 40px -40px 0px -3px,
              rgba(199, 65, 74, 0.9) 40px -40px,
              rgba(0, 0, 0, 0.5) 50px -50px 0px -3px,
              rgba(199, 65, 74, 0.9) 50px -50px,
              rgba(0, 0, 0, 0.6) 60px -60px 0px -3px,
              rgba(199, 65, 74, 0.9) 60px -60px,
              rgba(0, 0, 0, 0.7) 70px -70px 0px -3px,
              rgba(199, 65, 74, 0.9) 70px -70px,
              rgba(0, 0, 0, 0.8) 80px -80px 0px -3px,
              rgba(199, 65, 74, 0.9) 80px -80px,
              rgba(0, 0, 0, 0.9) 90px -90px 0px -3px,
              rgba(199, 65, 74, 0.9) 90px -90px,
              /*bottom shadow  */ rgb(255, 255, 255) -10px 10px 0px -3px,
              rgba(0, 0, 0, 0.9) -10px 10px,
              rgb(255, 255, 255) -20px 20px 0px -3px,
              rgba(0, 0, 0, 0.85) -20px 20px,
              rgb(255, 255, 255) -30px 30px 0px -3px,
              rgba(0, 0, 0, 0.8) -30px 30px,
              rgb(255, 255, 255) -40px 40px 0px -3px,
              rgba(0, 0, 0, 0.75) -40px 40px,
              rgb(255, 255, 255) -50px 50px 0px -3px,
              rgba(0, 0, 0, 0.7) -50px 50px,
              rgb(255, 255, 255) -60px 60px 0px -3px,
              rgba(0, 0, 0, 0.65) -60px 60px,
              rgb(255, 255, 255) -70px 70px 0px -3px,
              rgba(0, 0, 0, 0.6) -70px 70px,
              rgb(255, 255, 255) -80px 80px 0px -3px,
              rgba(0, 0, 0, 0.55) -80px 80px,
              rgb(255, 255, 255) -90px 90px 0px -3px,
              rgba(0, 0, 0, 0.5) -90px 90px,
              rgb(255, 255, 255) -100px 100px 0px -3px,
              rgba(0, 0, 0, 0.45) -100px 100px,
              rgb(255, 255, 255) -110px 110px 0px -3px,
              rgba(0, 0, 0, 0.4) -110px 110px,
              rgb(255, 255, 255) -120px 120px 0px -3px,
              rgba(0, 0, 0, 0.35) -120px 120px,
              rgb(255, 255, 255) -130px 130px 0px -3px,
              rgba(0, 0, 0, 0.3) -130px 130px,
              rgb(255, 255, 255) -140px 140px 0px -3px,
              rgba(0, 0, 0, 0.25) -140px 140px,
              rgb(255, 255, 255) -150px 150px 0px -3px,
              rgba(0, 0, 0, 0.2) -150px 150px,
              rgb(255, 255, 255) -160px 160px 0px -3px,
              rgba(0, 0, 0, 0.15) -160px 160px,
              rgb(255, 255, 255) -170px 170px 0px -3px,
              rgba(0, 0, 0, 0.1) -170px 170px,
              rgb(255, 255, 255) -180px 180px 0px -3px,
              rgba(0, 0, 0, 0.05) -180px 180px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
