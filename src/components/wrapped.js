import withHOC from "./HOC_Basic/withHOC";
import classes from "../components/List/card.module.css"

const Wrapped= props=>{
    const {results}=props.users
    return (
        <div className={classes.card_wrapper}>
            {results.map(user=>(
                 <div className={classes.card} key={user.login.uuid}>
                <div className={classes.img_box}>
                    <img src={user.picture.large} alt={user.name} />
                    <h2>{user.name.title+' '+user.name.first+' '+user.name.last}</h2>
                </div>
                <div className={classes.info}>
                    <p><b>Email: </b>{user.email}</p>
                    <p><b>Gender: </b>{user.gender}</p>
                    <p><b>City: </b>{user.location.city}</p>
                    <p><b>Contry: </b>{user.location.country}</p>
                    <p><b>Age: </b>{user.dob.age}</p>
                    <p><b>Date of Birth: </b>{new Date(user.dob.date).toLocaleDateString()}</p>
                </div>
            </div> 
        ))}
            
            
        </div>
    )
}
export default withHOC(Wrapped)