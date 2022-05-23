import React from 'react'
import Image from 'next/image'
import Search from "../assets/svg/search"
import { ConnectButton } from 'web3uikit'

const styles = {
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-content h-full `,
    nav: `flex justify-center items-center gap-[20px]`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    navLink: `text-white flex mx-[10px]`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`
}

const Header = () => {
    return (
        <div className={styles.header}>
            <Image
                alt=''
                src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
                width={220}
                height={220}
            />
            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            cryptocurrency
                        </div>
                        <div className={styles.badge}></div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Exchange
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Nft
                        </div>
                        <div className={styles.badge}></div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Cryptown
                        </div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Portfolio
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Watchlist
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Product
                        </div>
                        <div className={styles.badge}></div>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Learn
                        </div>
                    </div>
                </nav>
                <div className="flex items-center">
                    <ConnectButton />
                    <div className={styles.inputContainer}>
                        <Search />
                        <input type="text" className={styles.input} placeholder="Search" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header