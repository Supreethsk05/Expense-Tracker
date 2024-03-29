import { Spinner } from "react-bootstrap";
export const Loading = ({size=100}) => {
    return(
        <div style={{
            display:"flex",
            justifyContent : "center",
            alignItems :"center",
            width:"100%",
            height:"100%"
        }}
        > 

            <Spinner 
            style={{
                width: size,
                height :size,
                color :'red'
            }}
            animation="border"/>
        </div>
    )
}