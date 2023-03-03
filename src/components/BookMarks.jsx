import React from 'react';
import MyButton from '../ui/button/MyButton';

const BookMarks = (props) => {

    return (
        <div className='container'>
            <div className="marks">

                {/* marks_title_id */}
                <div className="marks_title_id">
                    <h1>{props.number}. {props.mark.title}</h1>
                    
                    <div style={{display: 'flex'}}>
                        <MyButton style={{margin: '0 20px 0 0'}}>
                            Изменить
                        </MyButton>

                        <MyButton
                            onClick={() => props.remove(props.mark)} 
                            style={{color: '#D53032', border: 'solid 1px #D53032'}}
                        >
                            Удалить
                        </MyButton>
                    </div>
                </div>

                {/* hr */}
                <hr style={{width: '100%', height: '1px', margin: '30px 0', border: 'none', backgroundColor: '#00000043'}}/>

                {/* marks_body */}
                <div className="marks_body">
                    <p>{props.mark.body}</p>
                </div>
            </div>
        </div>
    );
}

export default BookMarks;
