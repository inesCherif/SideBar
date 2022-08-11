import './App.css';
import TocRoundedIcon from '@mui/icons-material/TocRounded'; // don't forget npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps npm install @mui/icons-material --legacy-peer-deps
import Item from './Component/Item';
import {motion} from 'framer-motion';
import { useState } from 'react';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRemoteRoundedIcon from '@mui/icons-material/SettingsRemoteRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';



function App() {

const [open, setOpen]= useState(true);

// function for collapsing sidebar
const handleToggle = () =>{
  setOpen(!open)
}

const sideContainerVariants={
  true :{
    width: '15rem',
  },
  false :{
    transition:{
      delay:0.6
    }
  }
}
const sideBarVariants= {
  true: {},
  false: {
    width: '3rem',
    transition:{
      delay: 0.4
    }
  }
}
const profileVariants={
  true :{
    alignSelf:'center',
    width : '4rem',
    height: '4rem'
  },
  false :{
    alignSelf: 'flex-start',
    marginTop: '2rem',
    width: '3rem',
    height: '3rem'
  }
}



  return (
    <div className="App">
      <motion.div
      data-Open= {open}
      variants= {sideContainerVariants}
      initial={`${open}`}
      animate={`${open}`}
      className='sidebar-container'>
      
       <motion.div 
       initial={`${open}`}
       animate={`${open}`}
       variants= {sideBarVariants}
       className='sidebar'>
        {/* -------------------------------ICON------------------------------- */}
         <motion.div 
         whileHover={{
          scale: 1.2,
          rotate: 180,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          WebkitBackdropFilter: "blur(3.5px)",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          transition: {
            delay: 0.2,
            duration: 0.4,
          },
         }}
         onClick={handleToggle}
         className='menu-icon'>
           <TocRoundedIcon/>
         </motion.div>
        {/* ----------------------------PROFILE PHOTO------------------------- */}
         <motion.div
         layout
         initial={`${open}`}
         animate={`${open}`}
         variants={profileVariants}
         transition={{duration: 0.4}}
         whileHover={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(5.5px)",
          WebkitBackdropFilter: "blur(5.5px)",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          cursor: "pointer"
         }}
         className='profile'>
           <img src="../img/ines.jpg" alt='profile-img'/>
         </motion.div>
        {/* -------------------------------groupes----------------------------- */}
        <div className='groups'>
                                       {/* Groupe 1 */}
          <div className='group'>
            <motion.h3
            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
              ANALYTICS</motion.h3>
            <Item icon= {<DashboardRoundedIcon/>} name= "Dashboard"/>
            <Item icon= {<BarChartRoundedIcon/>} name= "Performance"/>
          </div>
                                      {/* Groupe 2 */}
          <div className='group'>
            <motion.h3
            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>Content</motion.h3>
            <Item icon= {<AttachMoneyRoundedIcon/>} name= "Sales"/>
            <Item icon= {<AssignmentTurnedInRoundedIcon/>} name= "Checklist"/>
            <Item icon= {<AccountCircleRoundedIcon/>} name= "customers"/>
          </div>
                                     {/* Groupe 3 */}    
          <div className='group'>
            <motion.h3
            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>CUSTOMIZATION</motion.h3>
            <Item icon= {<SettingsRemoteRoundedIcon/>} name= "Segments"/>
            <Item icon= {<ColorLensRoundedIcon/>} name= "Themes"/>

          </div>


        </div>
      </motion.div>



      </motion.div>




      <div className='body-container'></div>
    </div>
  );
}

export default App;
