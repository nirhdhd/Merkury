import "../main/Main.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import MainContent from "../main-content/main_content";

const Main = (props) => {
  return (
    <div className='main'>
      <span>
        <Sidebar />
      </span>

      <span style={{ width: "inherit" }}>
        <Navbar />
        <MainContent />
      </span>
    </div>
  );
};

export default Main;
