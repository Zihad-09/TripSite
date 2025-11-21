import React, { useEffect, useState } from "react";
import Newandfeaturetour from "./HomeComponent/Newandfeaturetour";
import SidebarBrowse from "../Component/SidebarBrowse";

const Browsetours = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("../../public/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <div className="mt-16">

        <SidebarBrowse category={category} />
      </div>
    </div>
  );
};

export default Browsetours;
