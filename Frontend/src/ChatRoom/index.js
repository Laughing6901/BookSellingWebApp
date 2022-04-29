import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { actFetchUser } from './module/action'

export default function ChatRoom() {
    const data = useSelector(state => state.fetchUserReducer.data)
    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(actFetchUser())
        }, []
    )
    console.log(data)

  return (
    <div>index</div>
  )
}
