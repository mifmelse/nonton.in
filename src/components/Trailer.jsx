import axios from "axios"
import { useEffect, useState } from "react"
import {PropTypes} from 'prop-types'

const Trailer = ({media, id}) => {
    const [trailer, setTrailer] = useState([])
    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/${media}/${id}/videos`,{
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
                }
            }).then(response => {
                setTrailer(response.data.results)
            })
    },[media, id])

    return (
        <div id="trailer" className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth">
            {trailer.map(item => (
                <div key={item.id}>
                    <iframe src={`https://www.youtube.com/embed/${item.key}`} width="427" height="240" allow="encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen="allowfullscreen"></iframe>
                </div>
            ))}
        </div>
    )
}

Trailer.propTypes = {
    media: PropTypes.string,
    id: PropTypes.string,
}
export default Trailer