import userFetchData from "./hooks/useFetchData";

import LoadingData from "./components/loading-data";
import ShowData from "./components/show-data";

function App(): JSX.Element {
  const { data, loading } = userFetchData();

  return (
    <div className="container">
      {loading ? <LoadingData /> : <ShowData data={data} />}
    </div>
  );
}

export default App;
