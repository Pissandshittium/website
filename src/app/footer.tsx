
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="mt-6 p-12 pb-32 lg:pb-12 bg-light-background-secondary dark:bg-dark-background-secondary text-white">
            <span className=''>
                &copy; Copyright 2023, Pissandshittium. All Rights Reserved.
            </span>
            <span className='flex gap-4 lg:float-right'>
                <a href="https://github.com/Pissandshittium">

                    <FontAwesomeIcon icon={faGithub} />
                </a>                
                <a href="https://twitter.com/Aikoyori">

                    <FontAwesomeIcon icon={faTwitter} />
                </a>                
            </span>

        </footer>
    )
}