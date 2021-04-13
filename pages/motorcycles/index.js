import Head from 'next/head'
import styles from '../../styles/Motorcycles.module.css'

export default function Motorcycles({ motorcyclesData }) {
    const motorcycles = motorcyclesData.map((id) => {
        return <li>
            <a href={`http://localhost:3000/motorcycles/${id}`}>{id}</a>
        </li>;
    })

    return (
        <div className={styles.container}>
            <Head>Motorcycles</Head>
            <h1>Motorcycles</h1>
            <ul>{ motorcycles }</ul>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/data/motorcycles.json`)
    const data = await req.json();

    return {
        props: { motorcyclesData: data }
    }
}