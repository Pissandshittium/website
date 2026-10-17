
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="mt-6 p-12 pb-32 lg:pb-12 transition-colors bg-light-background-secondary dark:bg-dark-background-secondary text-light-text dark:text-dark-text">
            <span className=''>
                &copy; Copyright 2023-2026, Pissandshittium. All Rights Reserved.
            </span>
            <span className='flex gap-4 lg:float-right'>
                <a href="https://github.com/Pissandshittium">

                    <FontAwesomeIcon icon={faGithub} />
                </a>                
                <a href="https://twitter.com/pissandshittium">

                    <FontAwesomeIcon icon={faTwitter} />
                </a>            
                <a href="https://discord.gg/JVg8Bynm7k">

                    <FontAwesomeIcon icon={faDiscord} />
                </a>                
            </span>

        </footer>
    )
}