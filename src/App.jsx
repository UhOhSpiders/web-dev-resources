import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ResourceList from "./components/ResourceList";
import { categories, resources } from "./backend";

function App() {
  if (!resources) {
    return <p>loading...</p>;
  }

  const routes = categories.map((category) => {
    let pageData = resources.filter((resource) => {
      return resource.category_ids.includes(category.id);
    });
    return (
      <Route
        key={category.id}
        path={category.name}
        element={<ResourceList data={pageData} />}
      />
    );
  });

  return (
    <>
      <Router>
        <div className="bg-slate-200 min-h-screen">
          <h1 className="text-2xl underline text-green-600">Web Dev Resources</h1>
          <NavBar/>
          <Routes>
            <Route
        path="/"
        element={<ResourceList data={resources} />}
      />
            {routes}
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
