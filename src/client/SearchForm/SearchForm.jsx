import { useForm } from "../../shared/hooks";

import { initialState } from "./initianState";

const Form = ({ onSubmit }) => {
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={data.q} onChange={handleChange} type="text" />
    </form>
  );
};

export default Form;
