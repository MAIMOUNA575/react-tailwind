import { useState } from "react"

export default function Formulaire() {
    const [email, setEmail]=useState("")
    const [password, setPasswort]=useState("")
    
    const onSubmit = (e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(`l'Email ${email} vient de connecter avec pour mot de passe ${password}`)
    }
    return(
        <form onSubmit={onSubmit}>
            <input type="email" placeholder="entrez un email" name="" id="" className="border" value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} />
            <input type="password" placeholder="entrez votre mot de passe" name="" id="" className="border" value={password} onChange={(e)=>{
                setPasswort(e.target.value)
            }}/>
            <button type="submit" className="border rounded-2xl bg-gray-300" >Connecter</button>
        </form>
    )
}