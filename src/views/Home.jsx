import {Hero} from '../components'
import CreateProject from '../components/CreateProject'
import Projects from '../components/Projects'
import AddButton from '../components/AddButton';


const Home = () => {
  return <>
     <Hero />
     <Projects/>
     <div className='flex justify-center items-center my-5'>
     <button type='button' className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-[7px] shadow-md hover:bg-green-700'>Load More</button>
     </div>
     <CreateProject/>
     < AddButton />
    
    </>

}

export default Home
