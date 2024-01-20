import React, {useState} from "react";

export default function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleClear = () =>{
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className="w-full">
    <form className="px-8 pt-6 pb-8 mb-4">
        <div className="w-full justify-around lg:flex lg:flex-row lg: md:flex md:flex-row p-4 sm:flex sm:items-center sm:flex-col xs:flex xs:flex-col xs:items-center">
            <div className="w-1/3">
                <div class=" w-full mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Full Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="name" type="text" placeholder="Full name" 
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                     required/>
                </div>
                <div class="w-full mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="email" type="email" placeholder="Email"
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     required/>
                </div>
            </div>
            <div class="mb-4 w-1/3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea cols={30} rows={8} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="message" type="text" placeholder="Your message here ..."
                     value={message}
                     onChange={(e)=>setMessage(e.target.value)}
                     required/>
                    <div className="flex justify-evenly mt-2">
                        <button onClick={handleClear} type="button" className="rounded-sm bg-slate-700 text-white px-5 py-1">Clear</button>
                        <button type="submit" className="rounded-sm bg-green-700 text-white px-5 py-1">Submit</button>
                    </div>
                </div>
        </div>
</form>
  <p class="text-center text-gray-500 text-xs">
    &copy;Developed by Sunny Virgo
  </p>
</div>
    )
}