import { setGlobalState, useGlobalState } from '../store'

const Hero = () => {
  
  const [stats] = useGlobalState('stats')

  return (
    <div className="py-24 px-6 text-center bg-white text-gray-800">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            <span className="capitalize">Bring Creative Campaign to life on</span> <br />
            <span className="uppercase text-green-600">EtherFund.</span>
        </h1>
        <div className="flex justify-center items-center space-x-3">


        <button type='button' className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-[7px] shadow-md hover:bg-green-700'  onClick={() => setGlobalState('createModal', 'scale-100')}>Add Campaign</button>

        <button type='button' className='inline-block px-6 py-2.5 border border-green-600 font-medium text-xs leading-tight uppercase text-green-600 rounded-[7px] shadow-md bg-transparent hover:bg-green-700 hover:text-white'>Back Campaigns</button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
              <span className="text-lg font-bold text-green-900 leading">{stats?.totalProjects || 0}</span>
              <span>Projects</span>
          </div>
          <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
              <span className="text-lg font-bold text-green-900 leading">{stats?.totalBacking || 0}</span>
              <span>Backings</span>
          </div>
          <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
              <span className="text-lg font-bold text-green-900 leading">{stats?.totalDonations || 0} ETH</span>
              <span>Donated</span>
          </div>
        </div>
    </div>
  )
}

export default Hero
// Time: 41:05