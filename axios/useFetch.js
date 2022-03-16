import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, ref) => {
	const [data, setData ] = useState([]);
	const [loading, setLoading ] = useState(true);

	useEffect(() => {
		let mounted = true;

		if(mounted) {
			const fetchData = async () => {
				try {
					const result = await axios.get(url);
					setData(result.data);
					setLoading(false);
				} catch (err) {
					console.log(err.message)
				}
			}

			fetchData();
		}	
		return () => {
			mounted = false
		}
	}, [url]);

	return { data, loading }
}

export default useFetch;