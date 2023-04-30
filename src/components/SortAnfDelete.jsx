import React from 'react';
import '../styleSheet/styleComponents/SortAndDelete.css'
import MyOption from '../ui/select/MyOption';

const SortAnfDelete = (props) => {

    return (
        <div className='container'>
           <div className="sortAndDelete">
                <div className="AllDelete">
                    <a className='delete' onClick={() => props.removeAll()}>Удалить все</a>
                </div>
                <div className="sort">
                    <MyOption 
                        value={props.selectedSort}
                        onChange={props.sortMarks}
                        defaultOption='Сортировка'
                        options={[
                            {
                                name: 'По названию',
                                value: 'title'
                            },
                            {
                                name: 'По описанию',
                                value: 'body'
                            }
                        ]}
                    />
                </div>
           </div>
        </div>
    );
}

export default SortAnfDelete;
