import React from 'react';
import SplashScreen from 'react-native-splash-screen'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const [showComponent, setShowComponent] = React.useState(false)
  React.useEffect(() => {

    setTimeout(() => {
      setShowComponent(true)
      SplashScreen.hide() 
    }, 2000)
    
  }, [])
  
  return (
    showComponent && <AppRoutes />
  );
} 

export default Routes;