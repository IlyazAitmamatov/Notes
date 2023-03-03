import React, { useMemo, useState } from "react";
import './styleSheet/styleSystem/App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
 
function App() {
  // все заметки хронться здесь
  const [marks, setMarks] = useState([]);
  //модальное окно формы
  const [open, setOpen] = useState(false);
  //состаяние сортировки
  const [selectedSort, setSelectedSort] = useState('')
  // состаяние поиска
  const [search, setSearch] = useState('')

  const sortedMarks = useMemo(() => {
    if(selectedSort){
      return [...marks].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return marks
  }, [selectedSort, marks])

  const sortAndSearchedMarks = useMemo(() => {
    return sortedMarks.filter(mark => mark.title.toLowerCase().includes(search))
  }, [search, sortedMarks])

  //функция сортировки
  const sortMarks = (sort) => {
    setSelectedSort(sort)
    setMarks([...marks].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  //функция создание новой заметки
  const createMarks = (newMarks) => {
    setMarks([...marks, newMarks])
  }
  //функция удалениие
  const removMark = (mark) => {
    setMarks(marks.filter(m => m.id !== mark.id))
  }
  //функция удаление всех заметок
  const removeAllMark = () => {
    setMarks(marks.filter(() => marks == 0))
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
          <Header/>
                <Routes>
                  <Route
                  path="/"
                  element={
                  <Home
                    search={search} setSearch={setSearch}
                    setSelectedSort={setSelectedSort} selectedSort={selectedSort} sortMarks={sortMarks}
                    removeAll={removeAllMark} remove={removMark} 
                    marks={sortAndSearchedMarks} createMarks={createMarks} 
                    open={open} setOpen={setOpen}/>
                  }/>
                  <Route path="/about" element={<About />}/>
                </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
