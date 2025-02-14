import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import whatsappImg from '../assets/WhatsApp_icon.png';

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/+6281211107650`, '_blank');
  };
  return (
    <AppBar position="relative" sx={{ backgroundColor: 'rgb(0, 114, 255)', alignItems: 'flex-end' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <MenuItem key='WhatsApp' onClick={handleWhatsAppClick}>
              <img src={whatsappImg} alt="WhatsApp" style={{ width: '30px', height: 'auto' }} />
              WhatsApp
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
