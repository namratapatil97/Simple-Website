import React from "react";
import { useState } from "react";


const Contact = () => {

    const [fullname, setFullname] = useState("");
    const [mobno, setMobNo] = useState();
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");



    const formSubmit = (e) => {
        e.preventDefault();
        const Data = {
            fullname: fullname,
            mobno: mobno,
            email: email,
            msg: msg
        }
        alert(`${Data.fullname}`);
        console.log([Data]);
        setFullname("");
        setMobNo("");
        setEmail("");
        setMsg("");
    };

    return (
        <>
            <div className="my-4 ms">
                <h1 className="text-center">Contact Us</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"></div>
                    <form onSubmit={formSubmit}>
                        <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">
                                Full Name
                            </label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Enter your name" required />
                        </div>

                        <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">
                                Mobile No
                            </label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" name="mobno" value={mobno} onChange={e => setMobNo(e.target.value)} placeholder="Mobile Number" required />
                        </div>

                        <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">
                                Email address
                            </label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com" required />
                        </div>

                        <div class="mb-2">
                            <label for="exampleFormControlTextarea1" class="form-label">
                                Message
                            </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={msg} onChange={e => setMsg(e.target.value)} required></textarea>
                        </div>

                        <div className="col-12 mb-4">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Contact;