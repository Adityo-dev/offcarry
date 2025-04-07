import { X } from "lucide-react";
import { useLayoutEffect } from "react";

export default function RelativeModal({ setShowForm, title, children }) {
  useLayoutEffect(() => {
    const mainContainer = document.querySelector(".mainContainer");
    return () => (mainContainer.style.overflow = "auto");
  }, []);

  return (
    <main
      className="fixed top-0 right-0 left-0 bottom-0 z-50 w-full bg-black/20 h-full p-4 backdrop-blur-sm flex justify-center items-center animate-fade"
      onClick={() => setShowForm(false)}
    >
      <section
        className="w-full sm:w-[40rem] bg-background animate-scale rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header flex justify-between rounded-t-md items-center p-6 pb-0  text-[#38311F]">
          <h5 className="text-lg font-semibold">{title}</h5>
          <span
            className="cursor-pointer text-2xl"
            onClick={() => setShowForm(false)}
            aria-label="Close form"
          >
            <X size={28} strokeWidth={1.5} />
          </span>
        </header>

        {/* RELATIVE MODAL CHILDREN */}
        <div className="modal-body p-6 rounded-b-md backdrop-blur-xl dark:bg-gray-900/90">
          {children}
        </div>
      </section>
    </main>
  );
}
