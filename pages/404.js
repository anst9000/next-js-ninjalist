import Link from "next/link"
import { useRouter } from 'next/router'
import React, { useEffect } from "react"
import {notFound} from '../styles/Fourofour.module.css'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go()
      router.push('/');
    }, 3000);
  }, [])


  return (
    <div className={notFound}>
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  )
}

export default NotFound