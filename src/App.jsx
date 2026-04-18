import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureBlocks from "./components/FeatureBlocks.jsx";
import BentoGrid from "./components/BentoGrid.jsx";
import Footer from "./components/Footer.jsx";
import SpecsSection from "./sections/SpecsSection.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import CTASection from "./sections/CTASection.jsx";
import PurchaseModal from "./components/PurchaseModal.jsx";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Organic blobs background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-15%", left: "-15%",
          width: "60vw", height: "80vh",
          background: "radial-gradient(circle, rgba(250,128,57,0.15) 0%, transparent 65%)",
          animation: "blob 15s infinite alternate ease-in-out",
          filter: "blur(60px)", willChange: "transform", transform: "translateZ(0)"
        }} />
        <div style={{
          position: "absolute", bottom: "-15%", left: "-20%",
          width: "55vw", height: "75vh",
          background: "radial-gradient(circle, rgba(250,128,57,0.10) 0%, transparent 65%)",
          animation: "blob 15s infinite alternate ease-in-out",
          animationDelay: "2s",
          filter: "blur(60px)", willChange: "transform", transform: "translateZ(0)"
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "-10%",
          width: "40vw", height: "60vh",
          background: "radial-gradient(circle, rgba(250,128,57,0.08) 0%, transparent 65%)",
          animation: "blob 18s infinite alternate ease-in-out",
          animationDelay: "4s",
          filter: "blur(60px)", willChange: "transform", transform: "translateZ(0)"
        }} />
      </div>

      <Navbar onReserve={() => setShowModal(true)} />
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection onReserve={() => setShowModal(true)} />
        <FeatureBlocks />
        <BentoGrid />
        <SpecsSection />
        <ShowcaseSection />
        <CTASection />
      </main>
      <Footer />
      <PurchaseModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
