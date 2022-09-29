import React, { FunctionComponent } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InputField from '../../components/shared/InputField/InputField';
import { ProductCreateDTO } from '../../types/proto/dto/products/create';
import { useCreateProduct } from '../../hooks/useCreateProduct';

interface CreateProductPageProps {}

const CreateProductPage: FunctionComponent<CreateProductPageProps> = () => {
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();

  const initialState: ProductCreateDTO = {
    name: '',
    price: 0,
    manufacturer: '',
    product_material: '',
    year: new Date().getFullYear(),
    seller: '',
    description: '',
    color: '',
  };

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

  const handleEditFormSubmit = (data: ProductCreateDTO) => {
    console.log('mutate');
    mutate(data);
    navigate(`/products`);
  };

  return (
    <div className="p-10">
      <Link to={`/products`} className="inline-block mb-3">
        <ArrowBackIcon sx={{ width: 24, height: 24 }} color="primary" />
      </Link>
      <h1 className="text-2xl text-gray-800 font-bold text-center mb-2">
        Create a product
      </h1>
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

export default CreateProductPage;
