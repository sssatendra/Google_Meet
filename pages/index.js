import Head from 'next/head'
import moment from "moment"
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google Meet</title>
        <link rel="icon" href="https://ssl.gstatic.com//meet/icons/logo_meet_2020q4_48dp_2556d3f5eb3d58f0410e20b82a3ba462.png" />
      </Head>
      <Header />
      <Layout />
    </div>
  )
}
