const Alert = ({type,message}) => (
    <div className={`alert alert-${type} w-50 mx-auto my-3 rounded`} role="alert">
        <h4 className="alert-heading">
            {type==='success'?'Well Done':'Oops!'}
            </h4>
        <p>{message}</p>
        <hr />
        <p className="mb-0">{type==="danger"&&'Please Try again Later...!'}</p>
    </div>
)

export default Alert