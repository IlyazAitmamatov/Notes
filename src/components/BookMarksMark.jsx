import React from 'react';
import BookMarks from './BookMarks';

const BookMarksMark = ({marks, remove}) => {

    if(!marks.length){
        return(
            <div className='addMark'>
                    <p style={{textAlign: 'center', fontWeight: '100', fontSize: '20px'}}>Заметок нету</p>
            </div>
        )
    }

    return (
        <div>
            {marks.map((mark, index) => 
                <BookMarks remove={remove} number={index + 1} key={mark.id} mark={mark}/>
            )}
        </div>
    );
}

export default BookMarksMark;
