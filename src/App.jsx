import { useEffect, useState } from "react";
import Table from "./component/Table";
import headerColumns from "./utils/Header";


function App() {
  const [gasData, setGasData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchGasData = async () => {
    try {
      const response = await fetch("/utils/mockData.json");
      const data = await response.json();
      setGasData(data?.data || []);
      // console.log("Gas Data:", data?.data);
    }
    catch(error) {
      console.error("Error fetching gas data:", error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGasData();
  }, []);

  const header = headerColumns();

  if(loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl font-bold mb-4">Gas Data Table</h1>
     <Table rows={gasData} columns={header} />
    </div>
  )
}

export default App
