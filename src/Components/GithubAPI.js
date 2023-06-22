import axios from 'axios'

const getUserData = (username, addData) => {
    axios.get(`https://api.github.com/users/${username}`)
        .then((res) => {
            console.log(res.data)
            addData(res.data)
        })
        .catch(() => {
            alert("Failed to Load")
        })
}

export default getUserData
