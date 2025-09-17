import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="transparent" elevation={0} className="backdrop-blur bg-white/70 border-b">
      <Toolbar className="section !px-4 flex justify-between items-center min-h-[64px]">
        <div className="text-xl font-semibold text-gray-800">Divine Ayurved Yoga</div>

        <nav className="hidden md:flex items-center gap-6 text-gray-700 uppercase tracking-wide text-sm">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Pages</Button>
          <Button color="inherit">Classes</Button>
          <Button color="inherit">Retreats</Button>
          <Button color="inherit">Blog</Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outlined" className="hidden md:block rounded-full px-5">Book Class</Button>
          <IconButton className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}


