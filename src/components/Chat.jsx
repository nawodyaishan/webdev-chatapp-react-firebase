import {useRef, useState, useEffect} from "react";
import Message from "./Message";
import {db} from '../firebase'
import {query, collection, onSnapshot, orderBy} from 'firebase/firestore'

const style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        // Look at collection in db at messages document

        const q = query(collection(db, 'messages'), orderBy('timeStamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, []);


    return (<div>
        <main className={style.main}>
            {messages && messages.map(message => <Message key={message.id} message={message.text}/>)}
            <Message/>
        </main>
        {/*Send Message Componnent*/}
        <span ref={scroll}></span>
    </div>);
};

export default Chat;