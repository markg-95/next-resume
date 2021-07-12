import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import CoverLetter from "../components/cover_letter";

import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head><title>Next-Resume</title></Head>
        <CoverLetter />
    </>
  )
}
