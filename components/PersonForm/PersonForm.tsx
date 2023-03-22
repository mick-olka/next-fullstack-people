import { useForm } from 'react-hook-form'

import * as S from './styles'

export interface I_PersonForm {
  name: string
  phone: string
  age: number
  sex: 'male' | 'female' | 'robot'
  dob: Date
  email: string
  about: string
  country: string
  address: string
  color: string
}

interface I_Props {
  onSubmit: (data: I_PersonForm) => void
  initData?: I_PersonForm
}

const def: I_PersonForm = {
  name: '',
  phone: '+3809623963930',
  age: 30,
  sex: 'male',
  dob: new Date('10-11-78'),
  email: 'mail@example.com',
  about: 'Teacher at the University of Washington',
  country: 'United States',
  address: 'Washington, Baker str. 590',
  color: '#ccc',
}

export const PersonForm = ({ onSubmit, initData }: I_Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<I_PersonForm>({
    defaultValues: initData || def,
  })
  const isLoading = false

  const field = (
    title: string,
    field: keyof I_PersonForm,
    type: 'text' | 'number' | 'date',
    required?: boolean,
  ) => {
    return (
      <S.TextFieldBox>
        <label>{title}</label>
        <S.TextFieldStyled
          type={type}
          error={!!errors[field]}
          {...register(field, { required: !!required })}
        />
      </S.TextFieldBox>
    )
  }

  return (
    <S.Pane>
      <form onSubmitCapture={handleSubmit(onSubmit)}>
        {field('Name', 'name', 'text', true)}
        {field('Phone', 'phone', 'text')}
        {field('Age', 'age', 'number')}
        {field('Sex', 'sex', 'text')}
        {field('Date of Birth', 'dob', 'date')}
        {field('Email', 'email', 'text')}
        {field('About', 'about', 'text')}
        {field('Country', 'country', 'text')}
        {field('Address', 'address', 'text')}
        {field('Profile Color', 'color', 'text')}

        <S.ButtonStyled variant='contained' type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Save'}
        </S.ButtonStyled>
      </form>
    </S.Pane>
  )
}
