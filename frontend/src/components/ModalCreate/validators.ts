import * as yup from 'yup'

export const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    number: yup.string().required('Phone is required')
  })