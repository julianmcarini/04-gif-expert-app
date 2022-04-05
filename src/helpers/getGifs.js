

export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI( category )}&api_key=niARFUGocRUm0g3B2rJr00lBJj5UC5Lq`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map (img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    return gifs;
    }
