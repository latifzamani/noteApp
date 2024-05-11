import React, { Component } from 'react';
import Notepad from './components/notepad/notepad';
import { Toast,ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
class App extends Component {
    state = {
        notepads: [
            // { id: 1, title: 'books', note: 'l have three books...' },
            // { id: 2, title: 'phones', note: 'l have three phones...' },
            // { id: 3, title: 'Pens', note: 'l have three Pens...' },
            // { id: 4, title: 'notebooks', note: 'l have three notebooks...' },
        ],
        notepad:'',
        showNotes: true,
    };
    showNotes = () => {
        this.setState({
            showNotes: !this.state.showNotes
        });
        // console.log(this.state.showNotes);
    };
    deleteNote = (id) => {
        const notepad = [...this.state.notepads];
        const filterNote = notepad.filter(n => n.id !== id);
        this.setState({ notepads: filterNote });
        toast.error('Report deleted successfully',{
            position:"top-center",
            closeButton:true,
        })
    }
    editNote=(event,id)=>{
        const {notepads:notepadsAll}=this.state;
        const notepadIndex=notepadsAll.findIndex((n)=>n.id===id);
        const notepad=notepadsAll[notepadIndex];
        // console.log(notepad.note);
        notepad.note=event.target.value;
        // console.log(event);
        const note=[...notepadsAll];
        note[notepadIndex]=notepad;
        this.setState({notepads:note});
    }
    addNote=()=>{
        const notepads=[...this.state.notepads];
        const Id=Math.floor(Math.random()*1000);
        const notepad={
            id:Id,
            title:`Note ${Id}`,
            note:this.state.notepad,
        };
        if(notepad.note !=='' && notepad.note !==" "){
            
            notepads.push(notepad);
            this.setState({notepads:notepads,notepad:''});
            //Toasting
            toast.success('Report added successfully☺',{
                position:'top-center',
                closeButton:true,
                closeOnClick:false,
            });
        }
    }
     

    setNote=(event)=>{
        this.setState({notepad:event.target.value});
    }



    render() {
        const note = this.state.notepads;
       let badgeStyle=[];
     if(note.length>=3) badgeStyle.push("badge badge-success");
     if(note.length<=2) badgeStyle.push("badge badge-warning");
     if(note.length<=1) badgeStyle.push("badge badge-danger");

        return (
            <div className='App'>
                <h1 className='mct m-5'>ریاست عمومی تیم سایبری ملکوت</h1>
                <h1 className='mct m-5'>ریاست گزارش ها</h1>
                <h3 className=''>Number of reports:<span className={`badge badge-pill ${badgeStyle.join(" ")}`}>{note.length}</span></h3>
                <h1 className=' m-4' >Reports</h1>
                <input className='input form-control' type='text' placeholder='Adding new report...' onChange={this.setNote} value={this.state.notepad}/>
                <button className='btn btn-success  fa fa-plus-square' onClick={this.addNote}> Add</button>
                {note.map((n) => {
                    if (this.state.showNotes) {

                        return <Notepad key={n.id} title={n.title} note={n.note} deleteNote={() => this.deleteNote(n.id)} editNote={(event)=>{this.editNote(event,n.id)}} />;
                    }
 
                })}

                <button className='btn btn-success fa fa-book' onClick={this.showNotes}>  Show reports</button>
                <ToastContainer draggable/>
            </div>
        );
    };
};

export default App;