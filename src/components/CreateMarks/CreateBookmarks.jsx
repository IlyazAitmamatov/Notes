import React from 'react';
import iconPlus from '../../images/free-icon-plus-2549959.png'
import '../../styleSheet/styleComponents/CreateBookmarks.css'
import MyButton from '../../ui/button/MyButton';

const CreateBookmarks = ({setOpen}) => {

    return (
        <div className='createBookmarks'>
            <div style={{margin: '0 10px'}} className="createBook">
                <MyButton style={{backgroundColor: '#303030', color: '#ffffff9c', border: '1px solid #303030'}}>
                    Создать книгу
                </MyButton>
            </div>

            <div style={{margin: '0 10px'}} className="createMarks">
                <MyButton onClick={() => setOpen(true)} style={{backgroundColor: '#D53032', border: 'none', color: '#101010', fontWeight: '700'}}>
                    <img src={iconPlus} alt="" style={{width: '23px', margin: '0 20px 0 0'}}/>
                    Добавить заметки
                </MyButton>
            </div>
        </div>
    );
}

export default CreateBookmarks;
