
import Lists from "./Lists.jsx"
import Search from "./Search.jsx"
import VD from "./VD.jsx"


function App() {

  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]

  return (
    <div><VD />
      {/* <h1>My Hacker Stories</h1>


      <Search />
      <hr />
      <Lists list={list} name="Manikandan Anbalagn" topics={["React", "Redux"]} /> */}
      {/* lists = { list: list, name: "Manikandan Anbalagn", topics: ["React", "Redux"] }*/}
    </div>
  )
}

export default App
