import logo from "../assets/StayAura.jpeg";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";  

const Navbar = () => {

    const navVariants={
        hidden:{ y:-100,opacity:0},
        visible:{y:0, opacity:1,
            transition:{ type: "spring",
        stiffness: 120,
        damping: 15}
        }
    }
    const linkContainer={
        hidden:{},
        visible:{
            transition:{
                 staggerChildren: 0.18,
                 delayChildren: 0.3
            }
        }
    }
    const linkItem={
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12
      }
    }
  };
  return (
    <motion.nav  className="TopNav flex justify-between items-center px-10 py-4 backdrop-blur-md bg-white/80 shadow-md"
    variants={navVariants}
    initial="hidden"
    animate="visible">
        {/*logo section */}
        <motion.div className="Logo"
       initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}

        >
            <img src={logo} alt="StayAura Logo" className="w-32 cursor-pointer" />
        </motion.div>
     {/*Links */}
      <motion.div
      variants={linkContainer}
      initial="hidden"
      animate="visible"
       className="NavContent flex gap-10 text-gray-700 font-semibold"
      >
        {[
  {name:"Home", path:"/"},
  {name:"Hotels", path:"/hotels"},
  {name:"About", path:"/about"},
  {name:"Contact", path:"/contact"}
    
].map((item, index)=>(
            <motion.div 
            key={index}
            variants={linkItem}
          
           whileHover={{ y: -6, scale: 1.05 }}
            className="relative group cursor-pointer">
                <Link to={item.path}>{item.name}</Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.div>
        ))}
      </motion.div>
      <div></div>
    </motion.nav>
  )
}

export default Navbar
