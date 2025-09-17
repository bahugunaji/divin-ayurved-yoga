import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static" color="transparent" elevation={0} className="px-6">
      <Toolbar className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-700">Divine Ayurved Yoga</div>

        <div className="hidden md:flex gap-2 md:gap-4 lg:gap-6 text-gray-600">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Pages</Button>
          <Button color="inherit">Classes</Button>
          <Button color="inherit">Retreats</Button>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">Blog</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outlined" className="hidden md:block">Book Class</Button>
          <IconButton className="md:hidden" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}


