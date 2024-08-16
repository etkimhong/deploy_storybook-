import React from "react";
import PaginatedList from "./components/templtes/PaginatedListv";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Paginated List</h1>
      <PaginatedList />
    </div>
  );
};

export default Home;
