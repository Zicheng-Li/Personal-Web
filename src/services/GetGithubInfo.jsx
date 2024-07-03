import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
// This is not working, because I need to hide my token, but I use github page hosting, so I can't use .env file

function getGithubInfo() {
    const [repoCount, setRepoCount] = useState(0);
    const [contributions, setContributions] = useState(0);

    useEffect(() => {
        axios.get('https://api.github.com/users/Zicheng-Li/repos')
            .then((res) => {
                setRepoCount(res.data.length);
            })
        axios.get('https://api.github.com/users/Zicheng-Li/contributions')
            .then((res) => {
                setContributions(res.data);
            })
    }
    , [])
  return (
    <div>getGithubInfo</div>
  )
}

export default getGithubInfo