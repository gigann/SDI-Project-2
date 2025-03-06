import { useState, useLayoutEffect } from 'react'

function colorMode() {
    const [mode, setMode] = useState('dark-mode')

    const toggleMode = () => {
        if (mode === 'dark-mode') {
            setMode('light-mode');
        }
        else {
            setMode('dark-mode');
        }
    }

    useLayoutEffect(() => {
        document.documentElement.setAttribute('color-mode', mode)
    }, [mode])

    return { mode, toggleMode }
}

export default colorMode