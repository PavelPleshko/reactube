import React from 'react';

//material ui
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';


const confirmDeleteDialog = ({open,closeDialog,resourceTitle,confirmDelete,...rest})=>{
return (
	<span>
      <Dialog open={open}>
        <DialogTitle>{rest.title ? rest.title : "Delete "+resourceTitle}</DialogTitle>
        <DialogContent>
          {rest.children ? rest.children : <DialogContentText>
            Confirm to delete <strong>{resourceTitle}</strong> from your account.
          </DialogContentText>
        }
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} variant="raised" color="primary" autoFocus="autoFocus">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </span>
	)
}


export default confirmDeleteDialog;