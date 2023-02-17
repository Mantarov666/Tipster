


const request = async (method, url, data) => { 
    try { 
    let buildRequest

    //     const user = localStorage.getItem('auth')
    //     const authData = JSON.parse(user || '{}')
    //    

    //   if(authData.accessToken){
    //             headers['X-Authorization'] = authData.accessToken
    //         }


    if(method === 'GET'){

        buildRequest = fetch(url)
    }else { 

        buildRequest = fetch(url, {
            method, 
            headers : {
          
            'content-type' : 'application/json'
           } , 
            body : JSON.stringify(data)
        })
    }

    const response = await buildRequest
    const rezult = await response.json()

  return rezult 

} catch (error){ 
    console.log(error)
}
  

}


export const get = request.bind({}, 'GET')
export const post = request.bind({}, 'POST')
export const put = request.bind({}, 'PUT')
export const del = request.bind({}, 'DELETE')
