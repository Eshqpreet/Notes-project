import React from "react";
//Importing Components 
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from "../notes";

const createEntry = (props) => (
    <Note
        key={props.key}
        title={props.title}
        content={props.content}
    />

)

const App = () => (
    <div>
        <Header />
        {notes.map(createEntry)}
        <Footer />
    </div>
);

export default App;