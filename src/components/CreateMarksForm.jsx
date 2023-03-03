import React, { useState } from 'react';
import '../styleSheet/styleComponents/CreateMarksForm.css'
import MyButton from '../ui/button/MyButton';
import MyInput from '../ui/input/MyInput';
import TextArea from '../ui/textArea/textArea';

const CreateMarksForm = ({createMarks, setOpen}) => {
    const [mark, setMark] = useState({title: '', body: ''})

    const newPost = (e) => {
        e.preventDefault()
        const newMarks = {
            ...mark, id: Date.now()
        }
        createMarks(newMarks)
        setOpen(false)
    }
 
    return (
        <>

        <div onClick={() => setOpen(false)} className="creeteMarksFormShadow"></div>
        <div className='creeteMarksForm'>
            <form>
                <MyInput
                    placeholder='Название заметки'
                    onChange={e => setMark({...mark, title: e.target.value})}
                    value={mark.title}
                />
                <TextArea
                    placeholder='Описание заметки' 
                    onChange={e => setMark({...mark, body: e.target.value})}
                    value={mark.body}
                    style={{margin: '20px 0'}}
                />
                <MyButton 
                    onClick={newPost}
                    style={{backgroundColor: '#fff', border: '0', textAlign: 'center'}}
                    >
                    Сохранить и создать
                </MyButton>
            </form>
        </div>

        </>
    );
}

export default CreateMarksForm;
