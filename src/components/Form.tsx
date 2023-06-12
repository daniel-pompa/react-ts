import { useForm } from '../hooks/useForm';

interface FormData {
  name: string;
  email: string;
  age: number;
}

const Form = () => {
  const { name, email, age, form, handleInputChange } = useForm<FormData>({
    name: 'Gael Pompa Ciambrino',
    email: 'gael.pompa@gmail.com',
    age: 1,
  });

  return (
    <div className='my-5'>
      <h2>Custom Hooks</h2>
      <form autoComplete='off' className='mt-4'>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Nombre
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Correo electrónico
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='age' className='form-label'>
            Edad
          </label>
          <input
            type='number'
            className='form-control'
            name='age'
            id='age'
            value={age}
            onChange={handleInputChange}
          />
        </div>
      </form>

      <pre>{JSON.stringify(form)}</pre>
    </div>
  );
};

export default Form;
