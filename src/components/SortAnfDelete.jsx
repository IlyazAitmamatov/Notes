import React from 'react';
import '../styleSheet/styleComponents/SortAndDelete.css'
import MyButton from '../ui/button/MyButton';
import MyOption from '../ui/select/MyOption';

const SortAnfDelete = (props) => {

    return (
        <div className='container'>
           <div className="sortAndDelete">
                <div className="AllDelete">
                    <MyButton onClick={() => props.removeAll()} style={{color: '#D53032', border: 'solid 1px #D53032'}}>
                        Удалить все
                    </MyButton>
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
