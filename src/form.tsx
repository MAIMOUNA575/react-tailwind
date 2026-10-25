import { useState } from "react"

export default function Formulaire() {
    const [text, setText]=useState("")
    const [password, setPasswort]=useState("")

    console.log(text, password)
    
    return(
        <>
            <form action=""  >
                <input type="text" placeholder="entrez un texte" name="" id="" className="border" onChange={(e) => {
                    setText(e.target.value)
                }} />
                <input type="password" placeholder="entrez votre mot de passe" name="" id="" className="border" onChange={(e)=>{
                    setPasswort(e.target.value)
                }}/>
                <button type="submit" className="border rounded-2xl bg-gray-300" >Connecter</button>
            </form>
        </>
    )
}