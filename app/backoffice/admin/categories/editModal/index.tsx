import * as React from 'react';
import { useContext , useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { CategoriesContext } from '@/app/context/CategoriesContext';

export default function EditModal({id, name} : {id: number, name: string}) {
  const [open, setOpen] = useState(false);
  const { handleEditCategory } = useContext(CategoriesContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm  = (formJson: any) => {
    handleEditCategory(id, formJson.category);
    setOpen(false);
    
  }

  return (
    <>
      <EditIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            handleConfirm(formJson);
          },
        }}
      >
        <DialogTitle>Edición de categorias</DialogTitle>
        <DialogContent>
        <DialogContentText className='mb-4'>
            Categoria actual: <span className='font-semibold '>{name}</span>
          </DialogContentText>
          <DialogContentText>
            Para editar, ingrese el nuevo nombre debajo.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="category"
            name="category"
            label="Categoria"
            type="category"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className='text-red-800'>Cancelar</Button>
          <Button type="submit" className='text-cyan-600'>Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
