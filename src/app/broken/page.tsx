import NagbarButton from "../NagbarButton";
import Link from 'next/link';

export default function Broken(){
    return (
        <>  
        <div className="pt-48 ">
            </div>      
        <div className="px-2 md:px-12">
            
            <Link href="/">
            <button className="rounded-lg border-2 px-3 py-2 border-light-text hover:bg-light-text  dark:border-dark-text dark:hover:bg-dark-text hover:text-red-500 transition-colors">
                
                &lt; Go Back to main page
            </button>
            </Link>
            <h1 className="text-6xl pt-8">New FAQs</h1>
            <h2 className="text-4xl pt-8">What?</h2>
            <p className="text-lg pb-8">Okay, so, I have not update this browser in over 3 years. It should go without saying that it's kind of dead but HOWEVER I've been talking to people who are interested in the project and its eventual sister project, Poopenfartenfox, to revive it. Stay tuned!
            </p>
            <h2  className="text-4xl">How??</h2>
            <p className="text-lg pb-8">
                Sooooo, compiling Chromium (or any derivatives, for that matter), unsurprisingly, takes up a lot of resource and I, unfortunately, do not have the resources to continue its development solo at the moment.
            </p>
            <h2  className="text-4xl">The next course of action?</h2>
            <p className="text-lg pb-8">
                I suggest you do not use this as daily drive unless you really want that whopping 6 features the browser offer.
            </p>
            <h2  className="text-4xl">Linux build when?</h2>
            <p className="text-lg pb-8">
                It's been 3 years man.
            </p>
            <h2  className="text-4xl">What happened to the GitHub issues? Were you not able to address them?</h2>
            <p className="text-lg pb-8">
                Again I got bombarded with issues, there were some serious issues labeled but don't count on me working on them
            </p>
            <h2  className="text-4xl">Why?????</h2>
            <p className="text-lg pb-8">
                IT'S BEEN 3 YEARS DUDE
            </p>
            <h2  className="text-4xl">Didn&apos;t you got banned from <i>that</i> server for sharing the link to this website?</h2>
            <p className="text-lg pb-8">
                That server is now dead anyway lol it doesn't really matter anymore
            </p>
            <h2  className="text-4xl">Actually, can I help?</h2>
            <p className="text-lg pb-8">
                Go ahead and contact me however you can.
            </p>
            <p className="text-sm pb-8">
                I appreciate everyone who has taken the time to read all of this and followed the project over the years :3
            </p>
            <h1 className="text-6xl pt-8">Old FAQs from 2023</h1>
            <h2 className="text-4xl pt-8">What?</h2>
            <p className="text-lg pb-8">Okay, so, I made a website for this browser as a joke and then people started to actually use it. 
            I did not actually mean for it to be used or daily drive at all. I am sorry if you had a bad time with the browser. I barely know C lmfao
            </p>
            <h2  className="text-4xl">How is it broken? It seems to run fine for me</h2>
            <p className="text-lg pb-8">
                Sooooo, it had a <a className="link" href="https://github.com/Pissandshittium/pissandshittium/issues/2">*memory leak*</a> when you go to settings and that&apos;s all I had to say. I have no clue why it even happens and 
                honestly I&apos;d just like to base it off stable now EXCEPT that I am unmotivated to do so.
            </p>
            <h2  className="text-4xl">The next course of action?</h2>
            <p className="text-lg pb-8">
                One day when I am motivated enough I will actually rebase everything to stable. The current one is kind of a mess and I would like
                to actually take time to polish the browser to a usable state (more or less just make it stable) and maybe somehow figure out how to do auto update??
                The future is uncertain for the browser but it will be done™ [citation needed].
            </p>
            <h2  className="text-4xl">Linux build when?</h2>
            <p className="text-lg pb-8">
                We did get Linux to build (mainly thanks to people in MMSI) but we don&apos;t know to package it lol
            </p>
            <h2  className="text-4xl">Are the first 3 issues real</h2>
            <p className="text-lg pb-8">
                Oh yeah and it got bombarded with jokes lol not that i hate them
            </p>
            <h2  className="text-4xl">Why?????</h2>
            <p className="text-lg pb-8">
                Everything in this field takes a LOT time and I am literally unmotivated. The Chromium code is 50GB big (the source code alone) and it took me 13 hours just to pull the code from Chromium&apos;s repo. It also took like 6 hours just to compile (subsequent built are faster but if there are a lot of changes to the code it will take as long as if it&apos;s initial build). I technically am the only person building this (Windows build so far) and I&apos;d like to not spend half the day just waiting for barely anything to happen.
            </p>
            <h2  className="text-4xl">But I still want to use it tho...</h2>
            <p className="text-lg pb-8">
                I won&apos;t stop you from using it but keep in mind that it&apos;s pretty unstable so if you do use it, use it at your own risk. I am not responsible for any data loss or anything that happens to your computer. 
            </p>
            <h2  className="text-4xl">Didn&apos;t you get banned from <i>that</i> server for sharing the link to this website?</h2>
            <p className="text-lg pb-8">
                Oh yeah, about that. As it turns out, Kaspersky tripped on the mini_installer and when they check it does nothing so it was suspected to be a malware (it is not). Thought I got unbanned later for proving my innocence and that&apos;s the end of that. I can&apos;t send this link ever again though so I&apos;ll just keep this link from that server.
            </p>
            <h2  className="text-4xl">Actually, can I help?</h2>
            <p className="text-lg pb-8">
                Go ahead and check out the GitHub repo for the browser and file more issues. If you know how to figure stuff out feel free to send a PR fixing.
            </p>
            <p className="text-sm pb-8">
                I appreciate everyone who has taken the time to read all of this and followed the project. You know who you are :D
            </p>
        </div>
        </>

    )
}