import React, { useEffect, useState } from 'react'
import "./insta.css";

export default function Insta() {


    const getLocalItems = () => {
        let list = localStorage.getItem('todos');
        // geting the (key .. i.e todos) stiringfy element(store in the list)
        //parse ==> Parse a string (written in JSON format) and return a JavaScript object:
        // console.log(list);

        if (list) {
            return JSON.parse(list)
        } else {
            return [];
        }

    }

    const [mail, setMail] = useState("");
    const [allEntry, setAllEntry] = useState(getLocalItems());

    const handleSignUp = () => {
        if (mail === "") {
            alert("enter something")
        }
        else {
            const newEnrty = { mail }
            setAllEntry([...allEntry, newEnrty])
            setMail("")

        }

    }
    const deleteItems = (id) => {
        // console.log(id);
        let update = allEntry.filter((ele, ind) => {
            return ind !== id;
        })
        setAllEntry(update)
    }
    // conveting value which i typed in placeholder is converting to  JSON string
    // todos is a key
    // value ==> JSON.stringify(allEntry)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(allEntry))
        //    console.log(JSON.stringify(allEntry));
    }, [allEntry]);




    return (
        <div className='mainpage' style={{ display:"flex",justifyContent:"center",marginTop:"50px"}}>
            <div className='box' >
                <h1 style={{ marginLeft: "150px" ,fontSize:"40px"}}>Todo</h1>
                <div className='place'>
                    <input type="email" required placeholder='enter todo' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                    <button style={{ margin: "10px" }} onClick={handleSignUp}>Submit</button>
                </div>

                {
                    allEntry.map((ele, index) => {
                        return (
                            <div className='mainpage1' key={index}>
                                <p style={{ fontSize: "35px", color: "white" }}>{ele.mail}</p>
                                <p style={{fontSize:"30px", Color:'white'}} onClick={() => { deleteItems(index) }}>🗑</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
}
