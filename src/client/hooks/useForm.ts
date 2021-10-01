import React, { useState } from "react";

export const useForm = () => {
    const [values, setValues] = useState<{ [key: string]: string }>({});
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => 
        setValues(prev => ({...prev, [e.target.name]: e.target.value}));
    const clear = () => setValues({});
    const populate = (pValues: { [key: string]: string }) => setValues(pValues);

    return {
        values,
        handleChanges,
        clear,
        populate
    }
}