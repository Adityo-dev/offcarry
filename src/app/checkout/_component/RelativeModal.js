import { useLayoutEffect } from "react";
// import { AiOutlineClose } from "react-icons/ai";

export default function RelativeModal({ setShowForm, title, children }) {
  // prevent scroll events

  useLayoutEffect(() => {
    const mainContainer = document.querySelector(".mainContainer");
    return () => (mainContainer.style.overflow = "auto");
  }, []);

  return (
    <div
      className="modal-content fixed top-0 right-0 left-0 bottom-0 z-20 w-full bg-black/20 h-full p-4 backdrop-blur-sm flex justify-center items-center animate-fade"
      onClick={() => setShowForm(false)}
    >
      <div
        className="w-[40rem] bg-background animate-scale rounded-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header flex justify-between rounded-t-md items-center p-6  text-[#38311F]">
          <h5 className="text-lg ml-11 font-semibold">{title}</h5>
          <span
            className="cursor-pointer text-2xl"
            onClick={() => setShowForm(false)}
            aria-label="Close form"
          >
            {/* <AiOutlineClose /> */}
          </span>
        </header>

        <div className="modal-body p-6  rounded-b-md backdrop-blur-xl dark:bg-gray-900/90">
          {children}
        </div>
      </div>
    </div>
  );
}
