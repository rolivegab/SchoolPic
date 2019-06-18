import { useState } from 'react'
import React from 'react'
import Request from './core/request';



export default function Form() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')

	const submit = () => {
		Request
	}

	return (
		<div>
			email:
				<input
				type="text"
				name="email"
				value={email}
				onChange={e => setEmail(e.currentTarget.value)}
			/> <br />
			Password:
        <input
				type="text"
				name="password"
				value={password}
				onChange={e => setPassword(e.currentTarget.value)}
			/> <br />
			name:
        <input
				type="text"
				name="name"
				value={name}
				onChange={e => setName(e.currentTarget.value)}
			/> <br />
			<button onClick={submit}>Enviar</button>
		</div>
	)
}