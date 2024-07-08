// components/CreateDatasetModal.js
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const CreateDatasetModal = ({ open, onClose, onSubmit }) => {
  const [datasetName, setDatasetName] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(datasetName, file);
    setDatasetName('');
    setFile(null);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Dataset</DialogTitle>
      <DialogContent>
        <TextField
          label="Dataset Name"
          value={datasetName}
          onChange={(e) => setDatasetName(e.target.value)}
          fullWidth
          required
        />
        <input type="file" accept=".csv" onChange={handleFileChange} style={{ marginTop: '10px' }} required />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDatasetModal;
