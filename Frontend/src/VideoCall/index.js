import React from 'react'
import { useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import * as RTC from "../utils"

export default function VideoCall() {
    const { localStream, remoteStream } = useSelector(state => state.RTCSLice)
    const localVideoRef = useRef()
    const removeVideoRef = useRef()

    useEffect(() => {
        RTC.getLocalStream()
    }, [])
    useEffect(() => {
        if(localStream && localStream.id){
            console.log({localStream})
            // useRef = getElementById and get the property srcObject from element video
            localVideoRef.current.srcObject = localStream
            localVideoRef.current.onloadmetadata = () => {
                localVideoRef.current.play()
            }
        }
    }, [localStream])

    useEffect(() => {
        console.log('ls', remoteStream)
    }, [remoteStream])

    return (
        <>
            <div>
                local video
                <video autoPlay muted width={400} height={400} ref={localVideoRef}></video>
            </div>
            <div>
                remote Video
                <video autoPlay muted width={400} height={400} ref={removeVideoRef}></video>
            </div>
        </>
    )
}
