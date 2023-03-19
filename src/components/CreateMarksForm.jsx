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

        <div className='creeteMarksFormShadow'></div>
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
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    {
                        mark.title
                        ?<MyButton 
                        onClick={newPost}
                        style={{margin: '0 10px 0 0', backgroundColor: '#fff', border: '0', textAlign: 'center'}}
                        >
                        Сохранить и создать
                        </MyButton>
                        :''
                    }

                    {/* {
                        mark.body
                        ?<MyButton 
                        onClick={newPost}
                        style={{margin: '0 10px 0 0', backgroundColor: '#fff', border: '0', textAlign: 'center'}}
                        >
                        Сохранить и создать
                        </MyButton>
                        :''
                    } */}

                    <MyButton
                        style={{backgroundColor: '#fff', border: '0', textAlign: 'center'}}
                        onClick={() => setOpen(false)}
                    >
                        Отмена
                    </MyButton>
                </div>
            </form>
        </div>

        </>
    );
}

export default CreateMarksForm;
