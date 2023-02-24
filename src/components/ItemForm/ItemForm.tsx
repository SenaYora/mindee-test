import React from 'react';
import { useFormik } from 'formik';
import { Button, Grid, TextField } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { itemAdded } from '../../features/item/item-slice';
import validationSchema from './form.schema';
import Centered from '../Centered';

const ItemForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      dispatch(itemAdded(values));
      actions.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Centered sx={{ justifyContent: 'space-evenly', height: '30vh' }}>
        <Grid item>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            type="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>

        <Grid item>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </Centered>
    </form>
  );
};

export default ItemForm;
