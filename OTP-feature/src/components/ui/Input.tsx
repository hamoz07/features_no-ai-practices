import React from 'react'

type InputP = {
    value: string;
    changeHandler?: React.KeyboardEventHandler<HTMLInputElement>;
    keyDwnHandler?: React.ChangeEvent<HTMLInputElement>;
    ref?: React.Ref<HTMLInputElement>;
}


const Input = ({ value, keyDwnHandler, changeHandler, ref, ...props }: InputP) => {
    return (
        <input
            type='text'
            value={value}
            ref={ref}
            inputMode='numeric'
            onKeyDown={keyDwnHandler}
            onChange={changeHandler}
            {
            ...props
            }
        />
    )
}

export default Input
