import React from 'react';
import '../styleSheet/styleComponents/Search.css'
import MyInput from '../ui/input/MyInput';

const Search = (props) => {

    return (
        <div className="container">
            <div className='search'>
                <MyInput
                    value={props.search}
                    onChange={e => props.setSearch(e.target.value)} 
                    placeholder='Поиск'
                />
        </div>
        </div>
    );
}

export default Search;
