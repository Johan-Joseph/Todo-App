import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Add = () => {
  const [form, setForm] = useState({
    Userid:'',
    Description:'',
    Status:''

  });
  let submit =()=>{
          console.log("Form submitted",form);

  }
  let valueUpdate = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Userid"
          name='Userid'
          value={form.Userid}
          onChange={valueUpdate}

        />
        </div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Description"
          name='Description'
          value={form.Description}
          onChange={valueUpdate}
        />
        </div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Status"
          name='Status'
          value={form.Status}
          onChange={valueUpdate}
        />
        </div>
        <Button variant="contained" onClick={submit}>submit</Button>

        </Box>
  )
}

export default Add