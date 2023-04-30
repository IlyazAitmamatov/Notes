import React, { useState } from 'react';
import MyButton from '../../ui/button/MyButton';

const BookMarks = (props) => {
    const [openBody, setOpenBody] = useState(false)


 
    return (
        <div className='container'>
                <div className="mark">

                    {/* marks_title_id */}
                    <div className="marks_title_id">
                        <h1>{props.mark.title}</h1>
                        
                        <div style={{display: 'flex'}}>
                                {
                                    openBody == true
                                    ?<MyButton onClick={() => setOpenBody(false)} style={{margin: '0 20px 0 0'}}>
                                    {
                                        openBody
                                        ?'скрыть'
                                        :'раскрыть'
                                    }
                                    </MyButton>
                                    :<MyButton onClick={() => setOpenBody(true)} style={{margin: '0 20px 0 0'}}>
                                    {
                                        openBody
                                        ?'скрыть'
                                        :'раскрыть'
                                    }
                                    </MyButton>
                                }

                            <a className='delete'
                                onClick={() => props.remove(props.mark)}>
                                    Удалить
                            </a>
                        </div>
                    </div>

                    {
                        openBody && (
                            props.mark.body
                            ?<>
                                <hr style={{width: '100%', height: '1px', margin: '30px 0', border: 'none', backgroundColor: '#ffffff34'}}/>

                                <div className="marks_body">
                                    <p>{props.mark.body}</p>
                                </div>
                            </>
                            :''
                        )
                    }

                </div>
        </div>
    );
}

export default BookMarks;
