import Banner from "./component/Banner";
import Trusted from "./component/Trusted";
import Service from "./component/Service";
import Digital from "./component/Digital";
import Ser from "./component/Ser";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Banner />
      <Trusted />
      <Service />
      <Digital />
      <Ser />
    </div>
  );
}
