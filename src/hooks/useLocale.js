
import { useState } from "react";

export const useLocaleStorage = (key, defaultValue) => { 

    const [value, setValue] = useState(()=> { 
        const saveValue = localStorage.getItem(key)

        return saveValue ? JSON.parse(saveValue) : defaultValue
    })

    const setLocalStorage = (newValue) => { 

localStorage.setItem(key, JSON.stringify(newValue))
setValue(newValue)

    }


    return [ 
        value, 
        setLocalStorage
    ]
}

