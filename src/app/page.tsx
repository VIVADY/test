import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OverviewStats from "@/components/OverviewStats";
import LedgerRow from "@/components/LedgerRow";
import CarRow from "@/components/CarRow";
import MiniCardGrid from "@/components/MiniCardGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <OverviewStats />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 28px" }}>
        <LedgerRow />
        <CarRow />
      </div>
      <MiniCardGrid />
      <Footer />
    </>
  );
}
