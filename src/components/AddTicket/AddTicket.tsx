import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./AddTicket.scss";
import * as yup from "yup";

const schema = yup.object({
  flightCode: yup.number().required("Required"),
  date: yup.date().required("Required"),
  capacity: yup.number().required("Required"),
});
type FormValues = {
  flightCode: Number;
  date: Date | null;
  capacity: Number;
};

export default function AddTicket() {
  const form = useForm<FormValues>({
    defaultValues: {
      flightCode: "",
      date: null,
      capacity: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="add-ticket-form"
    >
      <div className="form-control">
        <label htmlFor="flightCode">Flight Code</label>
        <input type="text" />
        <p className="error">{errors.flightCode?.message}</p>
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input type="date" />
        <p className="error">{errors.date?.message}</p>
      </div>
      <div className="form-control">
        <label htmlFor="capacity">Capacity</label>
        <input type="number" />
        <p className="error">{errors.capacity?.message}</p>
      </div>

      <button>Add</button>
    </form>
  );
}
