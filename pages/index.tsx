import Navbar from "../components/Navbar/Navbar";
import Headline from "../components/Headline/Headline";
import Description from "../components/Description/Description";
import Achievements from "../components/Achievements/Achievements";
import Community from "../components/Community/Community";

export default function Home() {
  return (
    <>
      <Headline />
      <Description />
      <Achievements />
        <Community />
    </>
  );
}
