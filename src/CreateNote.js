import React, { useState } from "react";


const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((preData) => {
            return {
                ...preData,
                [name]: value
            }
        })
       // console.log(note)
    }
    const addEvent = (event) => {
        event.preventDefault();
        props.passNote(note)
        setNote({
            title:"",
            content:""
        })
    }
    return (
        <div className="main_note">
            <form>
                <input type="text"
                    placeholder="Title"
                    name='title'
                    onChange={InputEvent}
                    value={note.title}
                    autoComplete="off" />
                <textarea rows=""
                    column=''
                    placeholder='write s note...'
                    name='content'
                    value={note.content}
                    onChange={InputEvent}

                />
                <button className="add-button" onClick={addEvent}>
                    <span className="plus_sign">+</span></button>
            </form>
        </div>
    )
}

export default CreateNote