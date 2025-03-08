const FormattedDate = ({ isHightlight,children }) => {
    return (
        <div>
             <span className={`text-sm ${isHightlight? "text-primaryAccent" : ""}`}>
             {children}
             </span>
        </div>
    )
    }
export default FormattedDate;

