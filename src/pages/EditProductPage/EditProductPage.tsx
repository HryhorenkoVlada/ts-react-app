import React, { FunctionComponent, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InputField from '../../components/shared/InputField/InputField';

import { useProduct } from '../../hooks/useProduct';
import { useEditProduct } from '../../hooks/useEditProduct';
import { IProduct } from '../../types/proto/product';

interface EditProductPageProps {}

const EditProductPage: FunctionComponent<EditProductPageProps> = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useProduct(productId ?? '');
  const { mutate } = useEditProduct();
  const [initialState, setInitialState] = useState<IProduct>({
    id: uuidv4(),
    name: '',
    price: 0,
    manufacturer: '',
    product_material: '',
    year: new Date().getFullYear(),
    seller: '',
    description: '',
    color: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setInitialState({
        id: data.id,
        name: data.name,
        price: data.price,
        manufacturer: data.manufacturer,
        product_material: data.product_material,
        year: data.year,
        seller: data.seller,
        description: data.description,
        color: data.color,
      });
    }
  }, [data]);

  const validationSchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .required('Required')
        .min(3, 'Too short!')
        .max(50, 'Too long!'),
      description: Yup.string().required('Required'),
      price: Yup.number().required('Required'),
      manufacturer: Yup.string().required('Required'),
      seller: Yup.string().required('Required'),
      year: Yup.number().required('Required'),
    });

  const handleEditFormSubmit = (data: IProduct) => {
    mutate(data);
    navigate(`/products/${productId}`);
  };

  return error ? (
    <Navigate to="/products" />
  ) : (
    <div className="p-10">
      <Link to={`/products/${productId}`} className="mb-4">
        <ArrowBackIcon sx={{ width: 24, height: 24 }} color="primary" />
      </Link>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values) => handleEditFormSubmit(values)}
      >
        <Form>
          <Field
            name="name"
            component={InputField}
            placeholder="Name"
            label="Name"
          />
          <Field
            name="description"
            component={InputField}
            placeholder="Description"
            label="Description"
          />
          <Field
            name="price"
            component={InputField}
            placeholder="Price"
            label="Price"
          />
          <Field
            name="manufacturer"
            component={InputField}
            placeholder="Manufacturer"
            label="Manufacturer"
          />
          <Field
            name="seller"
            component={InputField}
            placeholder="Seller"
            label="Seller"
          />
          <Field
            name="year"
            component={InputField}
            placeholder="Year"
            label="Year"
          />
          <Field
            name="product_material"
            component={InputField}
            placeholder="Product material"
            label="Product material"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-300 text-white rounded-lg shadow-lg border-0"
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProductPage;
