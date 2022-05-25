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

    const [trigger, isTrigger] = useState(false)
    console.log({trigger})
    useEffect(() => {
        dispatch(changeTrigger(trigger))
    }, [trigger])

    return (
        <div className='messageBox'>
            {renderBoxHeader()}
            <div className='messageList'></div>
            <div className='sendMessage'>
                <form>
                    <div className='inputGroup'>
                        <div className='inputText'>
                            <Input placeholder="Message" allowClear onClick={() => {
                                isTrigger(true)
                            }}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
