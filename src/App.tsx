import './main.scss';
import RouteSetup from '@routes/RouteSetup';
import { useTranslation } from 'react-i18next';
import { googleLogin } from './firebase';
import axios from 'axios';
function App() {
  const { t } = useTranslation();

  async function handleGoogleLogin() {
    let result = await googleLogin();
    let token = await result.user.getIdToken();
    let serverRes = await axios.post("http://localhost:4000/authen-google", {
      token
    })
    console.log("đã vào result!", serverRes)
  }
  return (
    <>
      Thử: {t('hello')}
      <button onClick={() => {
        handleGoogleLogin();
      }}>Google Singin</button>
      {/* Routing */}
      <RouteSetup/>
    </>
  )
}

export default App
