import { useEffect, useReducer } from 'react'
import api from 'axios'
import reducer from './reducer'

const useGet = url => {
    const [data, dispatch] = useReducer(reducer, {
        loading: true,
        data: {}
    })
    
    const load = async() => {
        dispatch({ type: 'REQUEST' })
        const res = await api.get(url)
        dispatch({
            type: 'SUCCESS',
            data: res.data
        })
    }
    
    useEffect(() => {
        load()
    }, [url])

    return {
        ...data,
        refetch: load
    }
}

export default useGet