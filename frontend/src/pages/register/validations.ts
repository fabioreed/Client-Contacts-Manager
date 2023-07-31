import * as yup from 'yup'

export const formSchema = yup.object({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
      .required('Senha obrigatória'),
    
    number: yup
      .string()
      .typeError("That doesn't look like a phone number")
      .min(8)
      .required('A phone number is required')
})