import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <>
      Thử: {t('hello')}
      {/* Routing */}
      <RouteSetup/>
    </>
  )
}

export default App
