import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useMobileBackButton() {
    const history = useHistory()
    const [transformState, setTransformState] = useState('translateY(75px)')
    
    function updateTransform() {
        if(window.scrollY > 10) {
            setTransformState('translateY(0px)') 
        } else {
            setTransformState('translateY(75px)')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', updateTransform)
        return () => {
            window.removeEventListener('scroll', updateTransform)
        }
    })

    return { history, transformState };
}