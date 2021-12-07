import React, { useEffect, useState } from 'react'

const Display = ({ initnum, setInitNum, setShow }) => {
    const [newNum, setNewNum] = useState(0);
    const putBody = {
        method: "PUT",
        body: JSON.stringify({
            harshit: newNum
        })
    }
    const handleBlur = async () => {
        setInitNum(newNum);
        setShow(true);
        await fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", putBody).then(res => {
            console.log(res)
        });
        setShow(false);
        setNewNum(newNum)
    }

    useEffect(() => {
        console.log(initnum);
        document.querySelector('input').value = initnum;
    }, [initnum])

    return (
        <>
            <input type="text" defaultValue={initnum} onChange={(e) => { setNewNum(parseInt(e.target.value)); console.log(newNum) }} onBlur={handleBlur} />
        </>
    )
}

export default Display
