/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

import { Container, Label, Required, Input, Error } from './input.styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeValue?: (e: string) => void;
  classNameInput?: string;
  error?: string;
  touched?: boolean;
  ref?: React.MutableRefObject<string>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
}

export const InputBox: React.FC<IInputProps> = (props) => {
  const {
    className = '',
    classNameInput = '',
    error,
    touched,
    ref,
    onChangeValue,
    onChange,
    disabled = false,
    label = '',
    placeholder = '',
    required,
    value,
    ...restProps
  } = props;

  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (touched && error) {
      !isError && setIsError(true);
    } else {
      isError && setIsError(false);
    }
  }, [touched, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onChangeValue && onChangeValue(e.target.value);
  };

  return (
    <Container className={className}>
      {label && (
        <Label>
          {label}
          {required ? <Required>*</Required> : null}
        </Label>
      )}

      <Input
        className={classNameInput}
        error={isError}
        disabled={disabled}
        ref={ref}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        {...(restProps as any)}
      />
      {error && touched && (
        <Error>
          <ExclamationCircleIcon
            width={16}
            height={16}
            className="mr-0.5 inline-block"
          />
          {error}
        </Error>
      )}
    </Container>
  );
};

export default InputBox;
