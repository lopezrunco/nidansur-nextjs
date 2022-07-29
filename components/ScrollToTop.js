import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/ScrollToTop.module.css'

const ScrollToTop = ({ scrollTo }) => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        handleScroll() // Trigger this so that the initial state is updated as soon as the component is mounted
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    if (scrollY > 100) {
        return (
            <Link href={scrollTo}>
                <div className={styles.scrollToTop}>
                    <i className="fa-solid fa-chevron-up"></i>
                </div>
            </Link>
        )
    }
}

export default ScrollToTop