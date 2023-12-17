import SideBar from '../components/SideBar.jsx'
import TopBar from "../components/TopBar.jsx";

import UserTableContent from "../components/UserTableContent.jsx";

function UitoDesing() {
  return (
    <section className="relative max-w-[1440px] mx-auto min-h-screen">
      
      {/* --------- SIDE BAR --------- */}
      <div className="absolute left-0 top-0 bottom-0 flexStart flex-col w-[96px] bg-white">
        <SideBar />
      </div>

      {/* --------- TOP BAR --------- */}
      <main className="absolute top-0 ml-[110px] w-full flexBetween max-w-[1310px] h-[78px] bg-white rounded-b-2xl px-10 font-medium">
        <TopBar />
      </main>


      {/* --------- MAIN table/content --------- */}

      <main className="absolute top-[110px] ml-[110px] w-full max-w-[1310px] bg-white rounded-2xl font-base pb-40">
        <UserTableContent />
      </main>

    </section>
  );
}

export default UitoDesing;
