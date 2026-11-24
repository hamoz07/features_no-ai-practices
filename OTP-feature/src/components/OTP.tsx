import React, { useEffect, useRef, useState } from 'react'
import Input from './ui/Input'
import './ui/input.css'
type OtpKeys = 'key_1' | 'key_2' | 'key_3' | 'key_4'

type OTPProps = {
    size: number;
}

const OTP = ({ size }: OTPProps) => {
    const [values, setValues] = useState<Record<OtpKeys, string | null>>(
        {
            key_1: null,
            key_2: null,
            key_3: null,
            key_4: null,
        }
    )
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const checkbeforeWrite = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const index = Number(e.currentTarget.id) - 1;

        console.log(e.key === 'Backspace' && !e.currentTarget.value && index > 0)
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            setValues(val => ({ ...val, [`key_${index}`]: "" }))
            setTimeout(() => {
                inputRefs.current[index - 1]?.focus();
            }, 100)
            return;
        }
        if (e.ctrlKey || e.metaKey || e.key.length > 1) return;

        // handle pasting
        // so that each input takes the value in order from the clipboard
        // check they're numbers and equal to 4 in this case after .split()

        // Block non-digits before they enter the input
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    }

    const mainHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const value = e.target.value
        setValues(val => ({ ...val, [`key_${id}`]: value }))
        console.log(size)
        console.log("f", inputRefs.current[id - 1]?.id)
        if (value) {
            inputRefs.current[id]?.focus()
        }
        if (+inputRefs.current[id - 1]?.id === size && value.length != 0) {
            setTimeout(() => {
                inputRefs.current[size - 1]?.blur()
            }, 500)
        }
    }

    const otp = Object.values(values).map(v => +v || null);

    // before sending to api the otp variable check using .every that otp doesnt have null and that each value is less than 10 and equal to or greater than 0


    // useEffect(() => {
    // },[])


    return (
        <div className='otp-container'>
            {Array.from({ length: size }).map((_, i) => (
                <Input
                    ref={(el) => { inputRefs.current[i] = el; }} key={i} value={values[`key_${i + 1}` as OtpKeys] ?? ''} changeHandler={mainHandler} keyDwnHandler={checkbeforeWrite}
                    id={String(i + 1)}
                    className='otp-input'
                />
            ))}
        </div>
    )
}

export default OTP
