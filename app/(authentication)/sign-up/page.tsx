"use client"
import { IUser } from "@/app/_types/IUser"
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"

export default function SignUp() {

    const [user, setUser] = useState<IUser>( {username: "", password: ""} )

    function handleUserChange (event: ChangeEvent<HTMLInputElement>) {
        const {name, value } = event.target
        setUser(prevUser => ({...prevUser, [name]: value}))
    }

    function onSubmit (event :FormEvent) {
        event.preventDefault()
        // customise signup logic
    }

    return (
        <>
            <div className="p-4">

                <p>DEBUGGING Username: {user.username}</p>
                <p>DEBUGGING Password: {user.password}</p>

                <header>Sign up</header>

                <section>

                    <form onSubmit={onSubmit} >

                        <section>
                            <label htmlFor="username"></label>
                            <input 
                                className="border"
                                placeholder="username"
                                type="text" 
                                name="username" 
                                onChange={(event) => handleUserChange(event)}></input>
                        </section>

                        <section>
                            <label htmlFor="password"></label>
                            <input 
                                className="border"
                                placeholder="password"
                                type="password" 
                                name="password" 
                                onChange={(event) => handleUserChange(event)}></input>
                        </section>
                        


                        <button type="submit">Submittera</button>

                    </form>

                </section>

            </div>

        </>
    )
}