import { BottomNavigationBar } from "./BottomNavigationBar";
import CenterNavigationBar from "./CenterNavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";
import TopNavigationBar from "./TopNavigationBar";

function MainNavigationBar() {
  return (
    <main className="xl:space-y-6">
      <TopNavigationBar />
      <CenterNavigationBar />
      <BottomNavigationBar />
      <MobileNavigationBar />
    </main>
  );
}

export default MainNavigationBar;
