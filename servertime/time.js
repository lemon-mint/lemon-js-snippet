const getServerTime = async (url) => {
    const server_time_data = await fetch(url)
    //console.log(server_time_data)
    const server_time = await server_time_data.text()
    return new Date(parseInt(server_time))
}
