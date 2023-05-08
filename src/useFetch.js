import {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [iserror, setError] = useState(null);


    useEffect(() => {
        const abtCll = new AbortController();
        setTimeout(() => {
                fetch(url, {signal: abtCll.signal})
                .then((res) => {
                    if (!res.ok) {throw Error('couldnt find value')};
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setPending(false);
                    setError(false);
                    })
                .catch((err) => {
                    if (err.name === 'AbortError')
                    {
                        console.log('fetch abourted')
                    }
                    else
                    {
                    setError(err.message);
                    setPending(false);
                    setData(false);
                    }
                })
            }, 1000)

            return () => abtCll.abort();
    }, [url])

    return {data, isPending, iserror};
}

export default useFetch