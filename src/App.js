import React, { useState } from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'

const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((preData) => {
            return [...preData, note]
        })
       // console.log(addItem)
    }
    const onDelete = (id) => {
        setAddItem((oldData) => 
            oldData.filter((currData, index) => {
                return index != id
            })
        )
    }
    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            {
                addItem.map((val, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                })
            }

            <Footer />
        </>
    )
}

export default App