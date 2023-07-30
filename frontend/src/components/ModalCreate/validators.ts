import * as yup from 'yup'

export const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    phone: yup.string().required('Phone is required')
  })