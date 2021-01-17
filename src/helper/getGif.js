
export const getGif= async (category) => {
    const url=  `https:/api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=92INiygooGepYIETwM98lx5oISzl6naf`;
    const resp= await fetch(url);
    const { data }= await resp.json();
    
    const imgs=data.map(img => {
    return {
        id:img.id,
        title: img.title,
        url:img.images?.downsized_medium.url
    }
    })
    return imgs;
}