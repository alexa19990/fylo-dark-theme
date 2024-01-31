import Header from "./components/Header"
import classes from './modules/app.module.scss'
import backgroundIcon from './assets/images/bg-curvy-desktop.svg'
import StartInfo from "./components/StartInfo"
import Productive from "./components/Productive"
import Information from "./components/Information"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"

const App = () => {
  return(
    <div className={classes['app-container']}>
      <img src={backgroundIcon} alt="" className={classes['background']} />
      <Header/>
      <StartInfo/>
      <Information/>
      <Productive/>
      <Feedback/>
      <Footer/>
    </div>
  )
}


export default App