import Link from 'next/link'
import { title, text, btn } from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={title}>hello from index</h1>
      <p className={text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nihil corrupti adipisci, ullam similique dolore aliquid ipsa atque ipsam quasi provident quas et doloremque expedita nulla aut corporis suscipit consectetur.</p>
      <p className={text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nihil corrupti adipisci, ullam similique dolore aliquid ipsa atque ipsam quasi provident quas et doloremque expedita nulla aut corporis suscipit consectetur.</p>
      <Link href="/ninjas"><a className={btn}>See Ninja listing</a></Link>
    </div>
  )
}
