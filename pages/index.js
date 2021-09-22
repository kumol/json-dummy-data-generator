import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/UI/Header'
import styles from '../styles/Home.module.css'
import Dashboard from './home'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Layout>{Dashboard}</Layout>
    
    </div>
  )
}
