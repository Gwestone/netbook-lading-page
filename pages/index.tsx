import Navbar from "../components/Navbar/Navbar";
import Headline from "../components/Headline/Headline";
import Description from "../components/Description/Description";
import Achievements from "../components/Achievements/Achievements";
import Community from "../components/Community/Community";
import Team from "../components/Team/Team";
import GetApplication from "../components/GetApplication/GetApplication";

export default function Home() {
  return (
    <>
      <Headline />
      <Description />
      <Achievements />
      <Community />
      <Team />
      <GetApplication />
    </>
  );
}
