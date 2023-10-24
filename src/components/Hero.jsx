import { Link } from "react-router-dom"

const Contents = () => {
  return (
    <div className='flex justify-center items-center text-white h-[50vh]'>
      <div className='text-shadow shadow-black text-center'>
        <div className='text-2xl ms:text-3xl sm:text-5xl font-bold uppercase tracking-wider sm:mx-12'>
          <h1>nonton <span className="text-yellow-200">gratis</span></h1>
          <h1>gaperlu <span className="text-yellow-200">nangis</span> dompet tipis</h1>
        </div>
        <Link type="button" to={'/trending/all/day'} className="text-xs sm:text-xl bg-yellow-500 p-1.5 rounded cs:p-2 mt-3 cs:rounded sm:rounded-md shadow-md hover:bg-yellow-400">Lihat Semua Film</Link>
      </div>
    </div>
  )
}
export default Contents