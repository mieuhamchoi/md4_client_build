import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import { useSelector } from 'react-redux';
import { StoreType } from './stores';
function App() {
  const commonStore = useSelector((store:StoreType) => store.commonStore)

  const env = import.meta.env;
  console.log("env", env.VITE_PW, import.meta.env.VITE_PW)

  console.log("commonStore", commonStore.count)
  return (
    <>
      <h1 className='test'>Hello World</h1>
      <RouteSetup/>
    </>
  )
}

export default App
