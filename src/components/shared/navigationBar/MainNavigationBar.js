import { BottomNavigationBar } from "./BottomNavigationBar";
import CenterNavigationBar from "./CenterNavigationBar";
import TopNavigationBar from "./TopNavigationBar";

function MainNavigationBar() {
  return (
    <main className="sm:space-y-6">
      <TopNavigationBar />
      <CenterNavigationBar />
      <BottomNavigationBar />
    </main>
  );
}

export default MainNavigationBar;
