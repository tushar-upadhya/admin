import { useLocation } from "react-router-dom";
import Apps from "./Apps";
import Charts from "./Charts";
import Sidebar from "./Sidebar";
import { HiMenuAlt4 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { CommonHeader } from "..";

const Index = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <CommonHeader title="Logo." />

        <Sidebar location={location} />
        <Charts location={location} />
        <Apps location={location} />

        {phoneActive && (
          <button id="close_sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

export default Index;
