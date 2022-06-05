import socketClient from "socket.io-client"

import { store } from "../store"
import { setLocalStream, setRemoteStream } from "../Message/rtcSlice"

let socket;
let myPeer;
let Server = "http://localhost:8600"
const constraints = {
    video: true,
    audio: true
}

export const getLocalStream = () => {
    try {
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            console.log("mystream", stream)
            store.dispatch(setLocalStream(stream))
        })
    } catch (error) {
        console.log({error})
    }
}

// export const connectWithPeer = () => {
//     myPeer = new window.Peer(undefined, {
//         path: ''
//     })
// }