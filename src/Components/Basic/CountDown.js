import { useEffect, useState } from "react";
import { MailCodeResend } from "../../API/Auth";
import { getUserName } from "../Util/helper";


const CountDown = ({limit}) => {
    const [second , setSecond] = useState(limit);


    useEffect(()=> {
        let stopper = setInterval(() => {
            setSecond( second > 0 ? second - 1 : 0);
            if(second - 1 === 0)
                clearInterval(stopper)
        }, 1000);
        return () => {
            clearInterval(stopper)
        }
    })

    return ( <div className={`resendBtn ${second === 0 ? 'cursorPoint' : ''}`} onClick={(e)=>{
        if(second > 0) e.preventDefault();
        else{
            MailCodeResend({username : getUserName()}).then(res=>{
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }   
    }} > {second > 0 ? second :  'Resend Code'  } </div> )
}

export default CountDown;