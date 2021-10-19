import IranMap from "./components/IranMap";
import GithubLink from "./components/GithubLink";

function App() {
  return (
    <>
      <div className="hero">
        <IranMap />
        <GithubLink />
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: row-reverse;
          justify-content: flex-start;
          align-items: flex-start;
        }
        @media only screen and (max-width: 1200px) {
          .hero {
            display: flex;
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </>
  );
}

export default App;
