import Home from "@/pages/Home"
import WhoAreUs from "@/pages/WhoAreUs";
import Groups from "@/pages/Groups";
import StoryTelling from "@/pages/StoryTelling"
import Solutions from "@/pages/Solutions";
import Team from "@/pages/Team";
import Roadmaps from "@/pages/Roadmaps";
import Feedbacks from "@/pages/Feedbacks";
import LastCall from "@/pages/LastCall";
import Footer from "@/pages/Footer" 

export default function Page() {
  return (
    <main className="w-full flex flex-col flex-grow items-center gap-6">
        <Home />
        <WhoAreUs />
        <Groups />
        <StoryTelling />
        <Solutions />
        <Team />
        <Roadmaps />
        <Feedbacks />
        <LastCall />
        <Footer />
    </main>
  );
}
