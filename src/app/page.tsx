"use client";
import Image from "next/image";
import Hero from "./hero";
import { /* funny feat icons */ CpuChipIcon, WindowIcon, EyeSlashIcon, UserCircleIcon, StopCircleIcon, ClockIcon,
         /* actual feat icons */  CodeBracketIcon, SwatchIcon, QuestionMarkCircleIcon, ChatBubbleOvalLeftIcon, CloudArrowUpIcon, DocumentIcon
 } from "@heroicons/react/24/outline";
 
import ThemeSwitcher from "./themechanger";
import { motion, stagger, useScroll  } from "framer-motion";
import { PropsWithChildren } from "react";
import Quote from "./quote";

export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <Hero></Hero>
      <motion.div className="px-8 2xl:px-24"
      animate={{}}
      transition={{duration:0.75, staggerChildren: 1.5}}
      viewport={{ once: true }}
      >
        <AnimatedSection>
          <h2>A Browser that doesn&apos;t care</h2>
          <span>
            At Pissandshittium, we don&apos;t care how you use your browser. Nor
            do we care about anything in this browser. We&apos;re adding whatever the FUCK we want to the browser and no one can stop it.
            <h3 className="mt-4">
              How did this start?
            </h3>
            <span>
              It started when someone brought up certain red browser in a popular YouTuber&apos;s Discord as a hot take. Then at that moment I decided to fork Chromium naming it &quot;Pissandshittium&quot; making it sound not too serious.
              <br />
              I am basically proving that even you can make your own web browser based on Chromium.
            </span>
          </span>
        </AnimatedSection>
        <AnimatedSection>
          <h1>&quot;Features&quot;</h1>
          <span className="text-sm">Disclaimer: This was written by Microsoft&apos;s Copilot. We don&apos;t actually do any of these and really we just think it&apos;s super funny.</span>
          <AnimatedDivision className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
            <FeatureList
              icon={<CpuChipIcon width={96}></CpuChipIcon>}
              featureName="Unrivaled Inefficiency"
              featureDesc="Our browser is guaranteed to use more system resources than any other browser on the market. Your computer didn’t need that RAM anyway, right?"
            ></FeatureList>
            <FeatureList
              icon={<WindowIcon width={96}></WindowIcon>}
              featureName="Invasive Ads"
              featureDesc="Enjoy a browsing experience filled with so many ads, you’ll forget what you were originally searching for. Who doesn’t love a good pop-up ad now and then?"
            ></FeatureList>
            <FeatureList
              icon={<EyeSlashIcon width={96}></EyeSlashIcon>}
              featureName="Lack of Privacy"
              featureDesc="Why browse anonymously when you can share your data with the world? We believe in open source, especially when it comes to your personal information."
            ></FeatureList>
            <FeatureList
              icon={<UserCircleIcon width={96}></UserCircleIcon>}
              featureName="Nonexistent Customer Support"
              featureDesc="Got a problem? Good luck with that! Our customer support team is as elusive as Bigfoot."
            ></FeatureList>
            <FeatureList
              icon={<StopCircleIcon width={96}></StopCircleIcon>}
              featureName="Frequent Crashes"
              featureDesc="Our browser crashes so often, it could be a feature in a demolition derby. But hey, everyone needs a break sometimes, right?
              "
            ></FeatureList>
            <FeatureList
              icon={<ClockIcon width={96}></ClockIcon>}
              featureName="Slow Loading Times"
              featureDesc="Patience is a virtue, and our browser is here to teach you that. Watch as websites load slower than a snail racing through peanut butter.
              "
            ></FeatureList>
          </AnimatedDivision>
        </AnimatedSection>
        <AnimatedSection>
          <h1>Actual Features</h1>
          <AnimatedDivision className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
            <FeatureList
              icon={<CodeBracketIcon width={96}></CodeBracketIcon>}
              featureName="Funny Strings"
              featureDesc={<>We&apos;re changing quite a few strings so it becomes a little funnier. Includes latest 21<sup>st</sup> century humours, privacy scandals, and more!</>}
            ></FeatureList>
            <FeatureList
              icon={<SwatchIcon width={96}></SwatchIcon>}
              featureName="3 New Colors"
              featureDesc={<>Featuring <b>Literal Shit</b>, <b>Piss off</b>, and <b>Who tf farted?</b> These colours really compliments the Piss and shit in the name!</>}
            ></FeatureList>
            <FeatureList
              icon={<QuestionMarkCircleIcon width={96}></QuestionMarkCircleIcon>}
              featureName="Google API?"
              featureDesc={<>Windows build have my Google API keys so you can still sign in. Not recommended though.</>}
            ></FeatureList>
            <FeatureList
              icon={<ChatBubbleOvalLeftIcon width={96}></ChatBubbleOvalLeftIcon>}
              featureName="Easter Eggs"
              featureDesc={<>Hidden beneath the app are some easter eggs and reference to whatever I want to add. Expect a harmless surprise coming your way!</>}
            ></FeatureList>
            <FeatureList
              icon={<CloudArrowUpIcon width={96}></CloudArrowUpIcon>}
              featureName="Open Source"
              featureDesc={<>We believe in open source software. So we&apos;re making changes visible to the public eye just like regular Chromium. If you don&apos;t believe in builds provided. Feel free to compile it yourself.</>}
            ></FeatureList>
            <FeatureList
              icon={<DocumentIcon width={96}></DocumentIcon>}
              featureName="I don't know what I'm doing"
              featureDesc={<>Honestly, I just tried to fix bugs but the codebase was very unstable (the code is unstable by nature) but you&apos;ll get to try the latest Chrome feature!</>}
            ></FeatureList>
          </AnimatedDivision>
        </AnimatedSection>
        
        <AnimatedSection>
          <h1>Screen&shy;shots</h1>
          <div className="flex gap-4 overflow-x-auto overflow-y-hidden relative flex-shrink-0 items-start flex-grow-0 md:max-h-[52dvh] rounded-xl object-contain">
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/a/pastsc1.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/v/pastsc1.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/a/pastsc2.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/v/pastsc2.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/a/pastsc3.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/v/pastsc3.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <h1>Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center">
              <h2 className="top-margin-spacing pb-4 text-center">Brodie Robertson</h2>
              <span>
                <iframe width="100%" height="380px" src="https://www.youtube.com/embed/sZAtPvdgTM0?si=1r4nla3WpiMdTw-T" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </span>            
            </div>
            <div className="flex gap-6 flex-col">
            <Quote author={<span><a  className="link" href="https://www.reddit.com/r/browsers/comments/18kwbil/pissandshittium_is_my_new_favorite_browser_now/">u/FurryRevolution</a> on Reddit</span>}>
              <span className="italic">Pissandshittium is my new favorite browser now!</span>
            </Quote>         
            <Quote author={<span><a  className="link" href="https://www.reddit.com/r/browsers/comments/18kwbil/comment/kducv1u">u/Cylancer7253</a> on Reddit</span>}>
              <span className="italic">I like it. Sounds just like any other chromium based browser. Can&apos;t wait for Poopenfartenfox to be finished.</span>
            </Quote>              
            </div>

          </div>

        </AnimatedSection>
        <AnimatedSection>
          <h1>FAQs</h1>
          <h2 className="top-margin-spacing">Is this a virus?</h2>
          <span>
            No. It&apos;s a Chromium fork. It&apos;s also open source. You can compile it yourself if you want to.
          </span>
          <h2 className="top-margin-spacing">Is this safe to use?</h2>
          <span>
            Yes, if you so desire to daily drive this browser. It&apos;s pretty much safe to use. But we don&apos;t recommend you use it as your main as it can be quite unstable.
          </span>
          <h2 className="top-margin-spacing">How do I compile this thing?</h2>
          <span>
            Obtain Chromium source code using depot_tools, pull Pissandshittium&apos;s source code, and then compile it. It&apos;s that simple.
          </span>
          <h2 className="top-margin-spacing">Do you plan to do this with Firefox?</h2>
          <span>
            Yes and it will be named Poopenfartenfox.
          </span>
        </AnimatedSection>
        <AnimatedSection>
          <h1>Acknow&shy;ledgement</h1>
          <span>
            I would like to give all credits to <a className="link" href="https://www.chromium.org/">The Chromium Project contributors</a> for making the backbone of Google Chrome and whatever this is possible. 
            Without them, this project wouldn&apos;t exist ever. I would also like to thank people in MMSI for words of (not so) encouragement and help with compilation on Linux.
          </span>
        </AnimatedSection>
        <AnimatedSection>
          
          <h1>Credits</h1>
          <span>
          <a className="link" href="https://www.chromium.org/">The Chromium Project</a> (duh)
            <br/>
          <a className="link" href="https://heroicons.com/">HeroIcons</a> for icons on features section.
            <br/>
          <a className="link" href="https://fontawesome.com/">Font Awesome</a> Brand Icons for brand icons.
            <br/>
          MMSI for build labs
            <br/>
            Others for some feedback

          </span>
        </AnimatedSection>
      </motion.div>
    </>
  );
}

const variants = {
    
    initX:{opacity:0, x:100},
    enterX:{opacity:1, x:0},
    initY:{opacity:0, y:100},
    enterY:{opacity:1, y:0},
    initO:{opacity:0},
    enterO:{opacity:1},
}
function FeatureList({icon,featureName,featureDesc}:{icon:any,featureName:any,featureDesc:any}) {
  return (
    <motion.div className="flex items-center gap-2 flex-col"
    variants={variants}
    initial={'init0'}
    whileInView={'enter0'}
    viewport={{ once: true }}
    >
        {icon}
      <h2 className="text-center">{featureName}</h2>
      <span>{featureDesc}</span>
    </motion.div>
  );
}

function AnimatedSection({children}:PropsWithChildren<any>){
  
  return (<motion.section
    variants={variants}
    initial={'initO'}
    whileInView={'enterO'}
  transition={{duration:0.5}}
  viewport={{ once: true }}
  className="mt-12"
  >
    {children}
  </motion.section>)
}
function AnimatedDivision({children}:PropsWithChildren<any>){
  
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4"
    variants={variants}
    transition={{duration:0.95,staggerChildren:0.35}}
    viewport={{ once: true }}
    >
      {children}
    </motion.div>)
}
