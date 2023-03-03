import React, { useState } from 'react';
import BookMarksMark from '../components/BookMarksMark';
import CreateBookmarks from '../components/CreateBookmarks';
import CreateMarksForm from '../components/CreateMarksForm';
import Search from '../components/Search';
import SortAnfDelete from '../components/SortAnfDelete';

const Home = ({marks, search, setSearch, createMarks, open, setOpen, remove, removeAll, setSelectedSort, selectedSort, sortMarks}) => {
    
    return (
        <>


            <Search search={search} setSearch={setSearch}/>

            {
                marks == 0
                ?<div></div>
                :<SortAnfDelete sortMarks={sortMarks} setSelectedSort={setSelectedSort} selectedSort={selectedSort} removeAll={removeAll}/>
            }

            <BookMarksMark 
                remove={remove}
                marks={marks}
            />
            <CreateBookmarks setOpen={setOpen}/>

            {
                open && (
                    <CreateMarksForm
                        createMarks={createMarks}
                        setOpen={setOpen}/>
                )
            }

        </>
    );
}

export default Home;
