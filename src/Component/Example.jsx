import axios from "axios";
import { useEffect, useState } from "react";

function Example() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user').then(res => {
            console.log(res.data);
            setUser(res.data);
        }).catch(err => {
            console.log(err)
        });
    }, [])

    return (
        <>  
            {user.map(item => {
                return (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <p>Age: {item.age}</p>
                        <p>Profession: {item.profession}</p>
                        <p>Skills: {item.skills.join(', ')}</p>
                    </div>
                )
            })}
        </>
    );
}

export default Example