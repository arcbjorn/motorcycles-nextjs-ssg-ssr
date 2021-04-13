import { useRouter } from 'next/router'
import styles from '../../styles/Motorcycles.module.css'

import Head from 'next/head'

export default function Motorcycle({ motorcycle }) {
    const router = useRouter()
    const { id } = router.query

    return(<>
        <Head>
            <title>{motorcycle.color} {motorcycle.id}</title>
        </Head>
        <div className={styles.title}>
            <h1>Here is {id}</h1>
        </div>
        <img src={motorcycle.image} />
    </>)
}

// SSR - generate each page upon request

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/data/${params.id}.json`)
    const data = await req.json();

    return {
        props: { motorcycle: data }
    }
}

// SSG - generate all pages at build time

// export async function getStaticProps({ params }) {
//     const req = await fetch(`http://localhost:3000/data/${params.id}.json`)
//     const data = await req.json();

//     return {
//         props: { motorcycle: data }
//     }
// }

// export async function getStaticPaths({ params }) {
//     const req = await fetch(`http://localhost:3000/data/motorcycles.json`)
//     const data = await req.json();

//     const paths = data.map((motorcycle) => {
//         return { params: { id: motorcycle }}
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }