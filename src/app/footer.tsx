
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="mt-6 p-12 pb-32 lg:pb-12 bg-light-background-secondary dark:bg-dark-background-secondary text-white">
            <span>
                &copy; Copyright 2023, Pissandshittium
            </span>
            <a href="https://github.com/Pissandshittium" className='inline md:block md:float-right'>

                <FontAwesomeIcon icon={faGithub} />
            </a>
        </footer>
    )
}