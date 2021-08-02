import React,{useState} from 'react'

const Reactform = () => {
    const [user,setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
    });
    let name,value;
    const getUserData = (event) =>{
        name=event.target.name;
        value=event.target.value;
        setUser({...user,[name]:value});
    };
    const postData = async (e) =>{
        e.preventDefault();
        const {firstname,lastname,email} = user;
        if(firstname && lastname&& email){
            const res = await fetch("https://reactfireform-default-rtdb.firebaseio.com/firereactform.json",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    firstname,
                    lastname,
                    email,
                }),
            }
            );
            if(res){
                setUser({
                    firstname:"",
                    lastname:"",
                    email:"",
                })
                alert("Data stored successfully !")
            }
        }
        else{
           alert("Please provide all the information!") 
        }


    };
    return (
        <div>
                   <div>
            <div className="container">
                <form className="form" method="POST">
                    <div className="title">Heya !</div>
                    <div className="subtitle">Please provide the below information  !</div>
                    <div className="input-container ic1">
                        <input id="firstname" name="firstname" className="input" type="text" placeholder=" " value={user.firstname} onChange={getUserData} />
                        <div className="cut"></div>
                        <label htmlFor="firstname" className="placeholder">First name</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="lastname" name="lastname" className="input" type="text" placeholder=" " value={user.lastname} onChange={getUserData}/>
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">Last name</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="email" name="email" className="input" type="text" placeholder=" " value={user.email} onChange={getUserData}/>
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder">Email</label>
                    </div>
                    <button type="text" className="submit" onClick={postData}>submit</button>
                </form>
            </div>
        </div>
            
        </div>
    )
}

export default Reactform
