import './styles.css'

const FormInput = (props:any)=>{
    return(
        <>
        <div className='flex flex-col'>
            <label className="form font-semibold text-large">{props.label}</label>
            <input className="form-input p-2" type="text" value={props.value} onChange={props.onChange}/>
        </div>
        </>
    )
}

export default FormInput;