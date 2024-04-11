'use client' 
import { useState } from "react";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";

const Contato = ()=>{
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    const sendForm = ()=>{
        fetch('https://endereco.do.leo.com.br/api/client', {
        method: 'post',
        body: {
            _name: name,
            _address: address,
            _phone: phone,
            _mail: mail
        }
        })
      }
    
      const changeName = (e:any)=> setName(e.target.value)
      const changeAddress = (e:any)=> setAddress(e.target.value)
      const changePhone = (e:any)=> setPhone(e.target.value)
      const changeMail = (e:any)=> setMail(e.target.value)
    return(
        <section className="m-4 bg-indigo-200 p-7 rounded-md">
            <header>
                <h1 className="text-4xl mb-5">Formulário de Contato &#128195;</h1>
            </header>
            <FormInput
            label = 'Nome'
            value = {name}
            onChange = {changeName}
            ></FormInput>
            <FormInput
            label = 'Endereço'
            value = {address}
            onChange = {changeAddress}
            ></FormInput>
            <FormInput
            label = 'Telefone'
            value = {phone}
            onChange = {changePhone}
            ></FormInput>
            <FormInput
            label = 'Email'
            value = {mail}
            onChange = {changeMail}
            ></FormInput>
            <Button
                onClick ={sendForm} 
                text = 'Enviar'
            ></Button>
        </section>
    )
}

export default Contato;