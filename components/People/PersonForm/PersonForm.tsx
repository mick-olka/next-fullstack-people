import { FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material'
import { useForm } from 'react-hook-form'

import * as S from './styles'
import { ColorPicker } from '../../Color/ColorPicker'

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
    getValues,
    setValue,
    watch,
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
        <FormLabel>{title}</FormLabel>
        <S.TextFieldStyled
          type={type}
          error={!!errors[field]}
          {...register(field, { required: !!required })}
        />
      </S.TextFieldBox>
    )
  }

  watch('color')

  return (
    <S.Pane>
      <form onSubmitCapture={handleSubmit(onSubmit)}>
        {field('Name', 'name', 'text', true)}
        {field('Phone', 'phone', 'text')}
        {field('Age', 'age', 'number')}
        <S.TextFieldBox>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row defaultValue={'male'} {...register('sex')}>
            <FormControlLabel value='female' control={<Radio />} label='Female' />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='robot' control={<Radio />} label='Other' />
          </RadioGroup>
        </S.TextFieldBox>
        {field('Date of Birth', 'dob', 'date')}
        {field('Email', 'email', 'text')}
        {field('About', 'about', 'text')}
        {field('Country', 'country', 'text')}
        {field('Address', 'address', 'text')}
        {field('Profile Color', 'color', 'text')}
        <S.TextFieldBox>
          <ColorPicker color={getValues('color')} onChange={(c) => setValue('color', c)} />
        </S.TextFieldBox>

        <S.ButtonStyled variant='contained' type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Save'}
        </S.ButtonStyled>
      </form>
    </S.Pane>
  )
}
