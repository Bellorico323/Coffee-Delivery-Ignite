import {
  InputHTMLAttributes,
  HTMLAttributes,
  forwardRef,
  LegacyRef,
  FocusEvent,
  useState,
} from 'react'

import { FieldError } from 'react-hook-form'
import { Box, Container, ErrorMessage } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const TextInput = forwardRef(function TextInput(
  { optional, error, containerProps, onFocus, onBlur, ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          autoComplete="off"
          {...rest}
        />
        {optional ? <span>Opcional</span> : null}
      </Container>

      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Box>
  )
})
