import React, { useEffect, useState } from 'react'
import "./ScrollButton.css"


const ScrollButton =()=>{
    const [isvisible,setisvisible]=useState(false);

    const scrollToTop=()=>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }
    
    useEffect(()=>{
        const handlescroll=()=>{
            setisvisible(window.scrollY > 350);
        }

        window.addEventListener('scroll',handlescroll)
        return ()=>{
            window.removeEventListener('scroll',handlescroll)
        }

    },[]);










    return(<>
   {isvisible &&(
    <button 
    className="scroll-up-button"
    onClick={scrollToTop}
    >
</button>

    )}
    </>)
}

export default ScrollButton;