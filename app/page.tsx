import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Trusted from "./component/Trusted";
import Service from "./component/Service";
import Digital from "./component/Digital";
import Ser from "./component/Ser";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Trusted />
      <Service />
      <Digital />
      <Ser />
    </main>
  );
}
