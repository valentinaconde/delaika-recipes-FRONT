import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Category } from '@/app/interfaces/categories';


export default function ConfirmModal({ category, action}: { category: Category, action: string }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {
                action === 'delete' ?
                    <button className="text-red-800 px-2 py-1" onClick={handleClickOpen}><DeleteIcon /></button>
                    :
                    (
                        category.hide ?
                            <button className="text-lime-600 px-2 py-1" onClick={handleClickOpen}><VisibilityIcon /></button>
                            :
                            <button className="text-lime-600 px-2 py-1" onClick={handleClickOpen}><VisibilityOffIcon /></button>

                    )
            }

            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Categoria: {category.name}</DialogTitle>     
               <DialogContent>
                    {
                        action === 'delete' ?
                            <DialogContentText>
                                ¿Está seguro que desea eliminar la categoria? 
                            </DialogContentText>
                            :
                            (
                                category.hide ?
                                    <DialogContentText>
                                        ¿Está seguro que desea mostrar la categoria?
                                    </DialogContentText>
                                    :
                                    <DialogContentText>
                                        ¿Está seguro que desea ocultar la categoria?
                                    </DialogContentText>

                            )
                           
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className='text-red-800'>Cancelar</Button>
                    <Button type="submit" className='text-cyan-600'>{
                        action === 'delete' ?
                            'Eliminar'
                            :
                            'Ocultar'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
