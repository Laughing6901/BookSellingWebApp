import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import BoxHeader from './BoxHeader'
import { changeTrigger } from './siderSlice'
import './style.css'

export default function Message() {
    const dispatch = useDispatch();
   
    const renderBoxHeader = () => {
        return(
            <BoxHeader/>
        )
    }

    const [trigger, isTrigger] = useState(true)
    useEffect(() => {
        dispatch(changeTrigger(trigger))
    }, [trigger, dispatch])

    return (
        <div className='messageBox'>
            {renderBoxHeader()}
            <div className='messageList'></div>
            <div className='sendMessage'>
                <form>
                    <div className='inputGroup'>
                        <div className='inputText'>
                            <Input placeholder="Message" allowClear onClick={() => {
                                isTrigger(!trigger)
                            }}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
