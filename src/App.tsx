import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
import SearchBar from "./components/SearchBar";
import Sort from "./components/Sort";

function App() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">
        E-commerce
      </h1>
      <div className="h-1 bg-slate-700 dark:bg-slate-200 w-20 mx-auto mb-2"></div>
      <SearchBar />
      <Sort />
      <div className="h-[2px] bg-slate-700 dark:bg-slate-200 w-full mx-auto mb-2"></div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <div className="lg:block hidden">
          <Filter />
        </div>
        <ProductsList />
      </div>
    </main>
  );
}

export default App;
