
function Hello ({stu_name, enroll="Not Enroll"}) {

/*   
    const props = {
        stu_name : 'Aftab'
    } 

    const {stu_name, enroll} = props
*/
    return(
        <div style={{border : '2px solid', backgroundColor : 'pink'}}>
            <h2>Hello {stu_name} - {enroll} </h2> 
        </div>
    )
}
export default Hello;