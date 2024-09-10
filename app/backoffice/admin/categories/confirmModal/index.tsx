import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Category } from '@/app/interfaces/categories';

import { CategoriesContext } from '@/app/context/CategoriesContext';


export default function ConfirmModal({ category, action }: { category: Category, action: string }) {
    const [open, setOpen] = useState(false);
    const [modalText, setModalText] = useState('')
    const { handleDeleteCategory, handleHideCategory } = useContext(CategoriesContext)

    const handleClickOpen = () => {
        handleSetModalText()
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSetModalText = () => {
        action === 'delete' ?
            setModalText('¿Está seguro que desea eliminar la categoria?')
            :
            (
                category.hide ?
                    setModalText('¿Está seguro que desea mostrar la categoria?')
                    :
                    setModalText('¿Está seguro que desea ocultar la categoria?')
            )
    }

    useEffect(() => {
        handleSetModalText()
    }, [open])

    const handleConfirm = () => {
        if (action === 'delete') {
            handleDeleteCategory(category.id)
        } else {
            handleHideCategory(category.id)
        }
        setOpen(false);
    }


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
                        handleConfirm()
                    },
                }}
            >
                <DialogTitle>Categoria: {category.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {modalText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className='text-red-800'>Cancelar</Button>
                    <Button type="submit" className='text-cyan-600' >{
                        action === 'delete' ?
                            'Eliminar'
                            :
                            (
                                category.hide ?
                                'Mostrar'
                                : 'Ocultar'
                            )
                    }
                    </Button>
                </DialogActions>
            </Dialog >
        </>
    );
}
