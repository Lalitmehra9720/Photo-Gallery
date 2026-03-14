import Navbar from "./components/layout/Navbar";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow">
        <GalleryPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;