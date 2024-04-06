import ListMovie from "./components/list/list-movie";
import MovieData from "./util/movie";

const App = () => {
  console.log(MovieData);

  return (
    <>
        <ListMovie data={MovieData}/>
    </>
  )
}

export default App
