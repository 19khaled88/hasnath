import Axios from 'axios'
// function postRequest() {
//   axios
//     .post('/', {})
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

const axiosBaseUrl = Axios.create({
    // baseURL:'http://localhost:9000/api/v1'
    baseURL:`https://photography-server-omega.vercel.app/api/v1/`
})

export default axiosBaseUrl;
