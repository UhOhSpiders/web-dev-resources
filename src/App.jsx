import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ResourceList from "./components/ResourceList";
import About from "./components/About";
import { categories, resources } from "./backend";

function App() {
  if (!resources) {
    return <p>Loading...</p>;
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
        <div className="bg-gradient-to-t from-yellow-100 to-blue-200 min-h-screen bg-fixed">
          <NavBar />
          <Routes>
            <Route path="/" element={<ResourceList data={resources} />} />
            <Route path="/about" element={<About />} />
            {routes}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
