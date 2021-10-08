import IranMap from "./components/IranMap";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="hero">
        <IranMap />
        <Footer />
      </div>
      <style jsx>{`
        .hero {
          direction: rtl;
          display: flex;
          flex-direction: row-reverse;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 5rem;
        }
        @media only screen and (max-width: 1200px) {
          .hero {
            direction: rtl;
            display: flex;
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </>
  );
}

export default App;
