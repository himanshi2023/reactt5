import React,{useState} from 'react';
function Age()
{
    const[birthdate,setBirthdate]=useState();
    const[age,setAge]=useState(0);
    const calculate=()=>{
        const today=new Date();
        const birthdateDate = new Date(birthdate);

        let calculatedAge=today.getFullYear()-birthdateDate.getFullYear();
        const monthDiff=today.getMonth()-birthdateDate.getMonth();
        if(monthDiff<0||(monthDiff===0 && today.getDate()<birthdateDate.getDate()))
        {
            calculatedAge--;
        }
        setAge(calculatedAge);
    };
    return(
        <div>
            <center>
                <h1 style={{marginTop:"240px"}}>Age Calculator</h1>
                <h4>Enter your date of birth</h4>
                <input type="date" value={birthdate} onChange={e=>setBirthdate(e.target.value)} style={{height:"30px",width:"250px",borderRadius:"3px",borderColor:"#5b5c5f"}}></input><br/><br/>
                <input type="button" onClick={calculate} value="Calculate Age" style={{height:"30px",width:"150px",borderRadius:"3px",color:"white",backgroundColor:"#293df2",borderStyle:"none"}}></input>
                <h3>You are {age} years old</h3>
            </center>
        </div>
    );
}
export default Age;

