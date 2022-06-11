import React, { useEffect, useRef, useState } from 'react'
import Peer from 'peerjs'
import { message } from 'antd';

export default function VideoCall() {
    const myVideo = useRef('');
    const friendVideo = useRef('')

    const [value, setValue] = useState({
        myId: '',
        friendId: '',
        peer: {},
        // message: '',
        // messages: []
    })

    console.log({value})
    
    useEffect(() => {
        const peer = new Peer();

        peer.on('open', (id) => {
            console.log({id})
            setValue({
                myId: id,
                peer: peer
            })
        })

        peer.on('connection', (conn) => {
            conn.on('data', (data) => {
                console.log({data})
            })
        })

        peer.on('call', (call) => {
            console.log({call})
            var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            getUserMedia({ video: true, audio: true }, (stream) => {

                myVideo.current.srcObject = stream;
                myVideo.current.play();

                call.answer(stream);

                call.on('stream', (remoteStream) => {
                    friendVideo.current.srcObject = remoteStream;
                    friendVideo.current.play();
                });

            });
        })
    }, [])


    const send = () => {
        const conn = value.peer.connect(value.friendId);

        conn.on('open', () => {
            const msgObj = {
                sender: value.myId,
                // message: value.message
            }
            conn.send(msgObj)
            // setValue({
            //     ...value,
            //     messages: [...value.messages, msgObj],
            //     message: ''
            // })
        })
    }

    const videoCall = () => {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        getUserMedia({ video: true, audio: true }, (stream) => {
            console.log({stream})

            myVideo.current.srcObject = stream;
            myVideo.current.play();

            const call = value.peer.call("another-peers-id", stream);
            console.log({call})

            call.on('stream', (remoteStream) => {
                console.log("first")
                friendVideo.current.srcObject = remoteStream;
                friendVideo.current.play();
                friendVideo.current[value.friendId].autoplay = true
            });
        });
    }

    return (
        <div className="wrapper">
            <div className="col">
                <h1>My ID: {value.myId}</h1>

                <label>Friend ID:</label>
                <input
                    type="text"
                    value={value.friendId}
                    onChange={(event) => {
                        setValue({
                            ...value,
                            friendId: event.target.value,
                        })
                    }} />

                <br />
                <br />

                {/* <label>Message:</label>
                <input
                    type="text"
                    value={value.message}
                    onChange={(event) => {
                        setValue({
                            ...value,
                            message: event.target.value
                        })
                    }} /> */}
                <button onClick={send}>Send</button>

                <button onClick={videoCall}>Video Call</button>
                {/* {
                    value.messages?.map((message, i) => {
                        return (
                            <div key={i}>
                                <h3>{message.sender}:</h3>
                                <p>{message.message}</p>
                            </div>

                        )
                    })
                } */}
            </div>

            <div className="col">
                <div>
                    <video ref={myVideo} />
                </div>
                <div>
                    <video ref={friendVideo} />
                </div>
            </div>

        </div>
    );
}
