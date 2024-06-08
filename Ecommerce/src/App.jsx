import { heroapi } from './Data/data';
import Hero  from './Components/Hero'
const App = () => {
  return (
   <>
      
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        
      </main>
    
   </>
  )
}

export default App;
