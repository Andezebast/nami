// import { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";
// import { IApiResponse } from "../models/IApiResponse";

// function AxiosGet<T>(url: string): IApiResponse<T> {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response: AxiosResponse<T> = await axios.get(url);
//         setData(response.data);
//       } catch (error) {
//         setError("Error fetching data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// }

// export default AxiosGet;
