import axios from 'axios'

const getUserData = (username, addData) => {
    if (username === '') {
        alert("Enter User Id")
    } else {
        axios.get(`https://api.github.com/users/${username}`)
            .then((res) => {
                console.log(res.data)
                addData(res.data)
            })
            .catch(() => {
                alert("Failed to Load")
            })
    }
}

export default getUserData