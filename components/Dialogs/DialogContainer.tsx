import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import * as S from './styles'
import { TransitionProps } from '@mui/material/transitions'
import { Slide } from '@mui/material'

// type F = () => void
// type PromiseF = () => Promise<void>

interface I_Props {
  children: React.ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  // onSubmit: PromiseF | F
  title?: string
  text?: string
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function DialogContainer({
  children,
  title,
  text,
  open,
  setOpen,
}: // onSubmit,
I_Props) {
  // const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  // const handleSubmit = async () => {
  //   await onSubmit()
  //   setOpen(false)
  // }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ '.MuiPaper-root': { maxWidth: 'calc(100% - 64px)' } }}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          {text && <DialogContentText>{text}</DialogContentText>}
          {children}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          {/* <Button onClick={handleSubmit}>Submit</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  )
}
