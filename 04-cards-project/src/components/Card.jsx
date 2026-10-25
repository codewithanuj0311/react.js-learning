import './Card.css';
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props)
  return (
    <>
    <div className="card">
        <div className="top">
          <img src={props.logo} alt="company icon" />
          <button className='btn-save'>Save <Bookmark/></button>
        </div>
        <div className="center">
          <span className="company">{props.company} </span><span className='time'>{props.posted}</span>
          <h2 className='position'>{props.position}</h2>
          <span className="role">{props.role}</span><span className="level">{props.level}</span>
        </div>
        <hr />
        <div className="footer">
          <div className="benefits">
            <p className="price">{props.salary}</p>
            <p className="location">{props.location}</p>
          </div>
          <button className="btn-apply">Apply Now</button>
        </div>
      </div>
    </>
  )
}

export default Card
