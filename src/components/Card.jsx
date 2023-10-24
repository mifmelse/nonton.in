import { Link } from 'react-router-dom';
import {LiaStarSolid} from 'react-icons/lia'
import {BsFire} from 'react-icons/bs'
import {PropTypes} from 'prop-types'

const Card = ({data}) => {
    const media = `${data.media_type === 'movie'? 'movie' : 'tv'}`
    return (
        <Link key={data.id} to={data.media_type !== 'person'? `/det/${media}/${data.id}` : '#'}>
            <div className='rounded-lg w-[215px] h-[322px] hover:scale-[.95] ease-in-out duration-300 border border-white/20 overflow-hidden cursor-pointer font-semibold relative'>
                <img
                    className={'w-full h-full bg-cover bg-white'} 
                    src={`${import.meta.env.VITE_TMDB_IMAGE}${data.media_type !== 'person'? data.poster_path : data.profile_path}`  } 
                    alt={data.title? data.title : data.name} 
                />
            
                <div className='bg-gradient-to-t from-black/80 from-60% to-transparent text-xl text-white w-full p-3 pt-4 text-center break-words absolute bottom-0'>
                    {
                        data.title ? data.title : data.name
                    }
                    {
                        data.release_date?
                        ` (${new Date(data.release_date).getFullYear()})`:
                        data.first_air_date? ` (${new Date(data.first_air_date).getFullYear()})` : ''
                    }
                </div>

                {data.media_type !== 'person'?
                    <div className='text-xl absolute top-0 w-full flex justify-between text-shadow-sm shadow-black/70'>
                        <div className='flex items-center bg-black/50 p-2 rounded-br-md text-white'>
                            <LiaStarSolid color='yellow' size={20}/>
                            {`${(data.vote_average).toFixed(1)}`}
                        </div>
                        <div className='bg-yellow-400 px-2 rounded-bl-md flex items-center text-black'>
                            <span className='me-1'>{`${data.popularity.toFixed(2)}`}</span>
                            <BsFire color='red'/>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </Link>
    )
}

Card.propTypes={
    data: PropTypes.object,
}
export default Card