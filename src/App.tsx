import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { PointOfView } from "./components/PointOfView";
import { SelectedWork } from "./components/SelectedWork";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Proof } from "./components/Proof";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { StructuredData } from "./components/StructuredData";

function App() {
  return (
    <div className="grain min-h-screen bg-bg text-fg">
      <StructuredData />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <PointOfView />
        <SelectedWork />
        <Services />
        <Process />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
