import classes from '../modules/feedback.module.scss'
import img1 from '../assets/images/profile-1.jpg'
import img2 from '../assets/images/profile-2.jpg'
import img3 from '../assets/images/profile-3.jpg'
import quotesIcon from '../assets/images/bg-quotes.png'

const Feedback = () => {
  
    const dataArr = [
        {
            text:'Fylo has improved our team productivity by an order of magnitude. since making the switch our team has become well-oiled collaboration machine',
            name:'Satish Patel',
            role:'Founder & CEO, Huddle',
            image: img1
        },
        {
            text:'Fylo has improved our team productivity by an order of magnitude. since making the switch our team has become well-oiled collaboration machine',
            name:'Bruce McKenzie',
            role:'Founder & CEO, Huddle',
            image: img2
        },
        {
            text:'Fylo has improved our team productivity by an order of magnitude. since making the switch our team has become well-oiled collaboration machine',
            name:'Iva Boyd',
            role:'Founder & CEO, Huddle',
            image: img3
        }
    ]
  
    return (
    <div className={classes['feedback-container']}>
        <img className={classes['annotations']} src={quotesIcon} alt="" />
        <div className={classes['row-align']}>
            {dataArr.map((item, index)=>{
                return(
                    <div className={classes['feedback-box']} key={index}>
                        <p>{item.text}</p>
                        <div className={classes['feedback-roleSide']}>
                            <img src={item.image} alt="" />
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}


export default Feedback