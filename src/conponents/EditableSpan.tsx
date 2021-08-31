import React, {ChangeEvent, useState} from 'react';

type propsType = {
    title: string
    callBack:(title:string)=>void
}

export const EditableSpan = (props: propsType) => {
    let [edit, setEdit] = useState(false)
    let [title, setTitle] = useState(props.title)

    const onDoubleClickHandler = () => {
        setEdit(true)
    }
    const onBlurHandler = () => {
        setEdit(false)
        props.callBack(title)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
        console.log(title)
    }

    return (
        edit
            ? <input value={title} autoFocus onBlur={onBlurHandler} onChange={onChangeHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}
