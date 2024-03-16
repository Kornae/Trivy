import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import HomeIcon from '@mui/icons-material/Home';

export default function AlertDialogModal() {
    const [open, setOpen] = React.useState(false);

    let home = () => {
        window.location = '/'
    }

    return (
        <React.Fragment>
            <Button
                variant="plain"
                color="neutral"
                onClick={() => setOpen(true)}
                sx={{ width: 'auto', marginRight: '10px' }}
            >
                <HomeIcon />
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog variant="outlined" role="alertdialog">
                    <DialogTitle>
                        <WarningRoundedIcon />
                        Confirmation
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        Are you sure you want to leave this quiz?
                    </DialogContent>
                    <DialogActions>
                        <Button variant="solid" color="danger" onClick={home}>
                            Exit
                        </Button>
                        <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}