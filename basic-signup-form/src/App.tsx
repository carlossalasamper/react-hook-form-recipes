import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function App() {
  const { register, handleSubmit, getValues } = useForm<FormData>();
  const onSubmit = handleSubmit((values) => {
    alert("Form submit: " + JSON.stringify(values));
  });

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          {...register("firstName", { required: true })}
          placeholder="First name"
        />
        <input
          {...register("secondName", { required: true })}
          placeholder="Second name"
        />
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        <input
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === getValues("password"),
          })}
          placeholder="Confirm password"
          type="password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
