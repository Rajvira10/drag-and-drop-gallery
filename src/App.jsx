import Gallery from "./components/Gallery";
import { SortableContextProvider } from "./contexts/SortableContext";

export default function Home() {
  return (
    <SortableContextProvider>
      <div className="bg-slate-200 h-full min-h-screen py-5">
        <Gallery />
      </div>
    </SortableContextProvider>
  );
}
