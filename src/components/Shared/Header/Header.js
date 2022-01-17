import React from 'react';
import styles from './Header.module.css'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(0),
//   Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 50,
  },
}));

const Header = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    menuIconBreak:{
      [theme.breakpoints.up('sm')]: {
        display:"none !important"
      },
    },
    navsLinkDesktop: {
      [theme.breakpoints.down('md')]: {
        display:"none !important"
      },
    },
    drawerBackground:{
      // backgroundColor:'#0a192f4d !important'
      background:'rgb(17, 34, 64)'
    },
    drawerFirstBackground:{
      // backgroundColor:'#0a192f4d !important'
     backdropFilter:'blur(5px)'
    }
  });
  const {menuIconBreak, navsLinkDesktop, drawerBackground, drawerFirstBackground} = useStyles();


  const resumeDownloadLink = () =>{
    window.location.replace('https://drive.google.com/u/0/uc?id=1Ktl1sVeRSU6pg90K5yAPRlFfpAZ_lf8o&export=download')
  }



  // Drawer
  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    className={drawerBackground}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280, height:1  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton
      style={{color:'orange', textAlign:'right', backgroundColor:'green'}}
      >
      <CloseIcon/>
      </IconButton>
      <List>

      </List>
    </Box>
  );


    return (
        <div>
            <Box sx={{ flexGrow: 1}}>
              <AppBar className={styles.appBar} position="static">
                <StyledToolbar>
                  <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    <img style={{width:'4rem'}} src='https://i.ibb.co/GMdTvFZ/logo-2.png' alt='' />
                  </Typography>

                  <Box className={navsLinkDesktop} style={{marginTop:'1.2rem'}}>
                      <Link  className={`${styles.texts} ${styles.home}`} to="/">Home</Link>  
                      <Link  className={`${styles.texts} ${styles.aboutMe}`} to="/">About Me</Link>  
                      <Link  className={`${styles.texts} ${styles.skills}`} to="/">Skills</Link>  
                      <Link  className={`${styles.texts} ${styles.projects}`} to="/">Projects</Link>  
                      <Link  className={`${styles.texts} ${styles.blogs}`} to="/">Blogs</Link>  
                      <Link  className={`${styles.texts} ${styles.contacts}`} to="/">Contacts</Link>  
                  </Box>

                  <IconButton
                    size="large"
                    aria-label="display more actions"
                    edge="end"
                    color="inherit"
                    className={menuIconBreak}
                    onClick={toggleDrawer('right', true)}
                  >
                    <i style={{width:'5rem'}} class="fas fa-bars"></i>
                    {/* <MenuIcon/> */}
                  </IconButton>
                  <Button onClick={resumeDownloadLink} className={`${navsLinkDesktop} ${styles.navsResumeButton}`}>Resume</Button>
                </StyledToolbar>
              </AppBar>
            </Box>
            <div>
      
        <React.Fragment key={'right'}>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            className={drawerFirstBackground}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      
        </div>
      </div>
    );
};

export default Header;