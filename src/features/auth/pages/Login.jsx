import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate('/app')
    }

    if (loading) {
        return (
            <main className='loading-screen'>
                <h1>Signing you in&hellip;</h1>
            </main>
        )
    }

    return (
        <main>
            <Link to='/' className='back-home'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                Back to home
            </Link>

            <div className="form-container">
                <div className="form-header">
                    <span className='eyebrow'>Welcome back</span>
                    <h1>Log in to your file</h1>
                    <p>Pick up where you left off and keep prepping.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <div className='input-wrap'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}
                                type="email" id="email" name='email' placeholder='Enter email address' />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className='input-wrap'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                value={password}
                                type="password" id="password" name='password' placeholder='Enter password' />
                        </div>
                    </div>
                    <button className='button primary-button'>Log in</button>
                </form>

                <p className='form-footer'>Don&rsquo;t have an account? <Link to={"/register"}>Register</Link></p>
            </div>
        </main>
    )
}

export default Login