import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./AddTicket.scss";
import { useAppDispatch, useAppSelector } from "@hooks";
import { addTicket, editTicket, getSingleTicket } from "@reducers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "@store";
import { Card, Skeleton } from "@components";
import dayjs from "dayjs";

// Define the form's data type
interface ITicketFormInput {
  code: string;
  date: Date | string;
  capacity: number;
}

type FormProps = {
  type: string;
  onClose: () => void;
};

// Validation Schema using yup
const ticketValidationSchema = yup
  .object({
    code: yup.string().required("Code is required"),
    date: yup
      .date()
      .nullable()
      .required("Date is required")
      .typeError("Date is required")
      .test("is-future-date", "Date must be in the future", (value) => {
        return value && new Date(value) > new Date();
      }),
    capacity: yup
      .number()
      .typeError("Capacity is required")
      .positive()
      .integer()
      .required("Capacity is required"),
  })
  .required();

const AddTicket = (props: FormProps) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { singleTicket, isLoading } = useAppSelector(
    (state: RootState) => state.ticket
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ITicketFormInput>({
    resolver: yupResolver(ticketValidationSchema),
  });

  const onSubmit: SubmitHandler<ITicketFormInput> = (data) => {
    if (props.type === "add") {
      dispatch(addTicket(data));
    } else {
      dispatch(editTicket({ data, id }));
    }

    props.onClose();
  };

  //getSingleTicket
  useEffect(() => {
    if (props.type === "edit") {
      dispatch(getSingleTicket(id));
    }
  }, []);
  useEffect(() => {
    if (props.type === "edit") {
      setValue("code", singleTicket.code);
      setValue("date", dayjs(singleTicket.date).format("YYYY-MM-DD"));
      setValue("capacity", singleTicket.capacity);
    }
  }, [singleTicket]);

  return (
    <>
      {isLoading && <Skeleton />}

      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="add-ticket-form">
          <div className="form-control">
            <label htmlFor="code">Code:</label>
            <input id="code" type="text" {...register("code")} />
            {errors.code && <p className="error">{errors.code.message}</p>}
          </div>

          <div className="form-control">
            <label htmlFor="date">Date:</label>
            <input id="date" type="date" {...register("date")} />
            {errors.date && <p className="error">{errors.date.message}</p>}
          </div>

          <div className="form-control">
            <label htmlFor="capacity">Capacity:</label>
            <input id="capacity" type="number" {...register("capacity")} />
            {errors.capacity && (
              <p className="error">{errors.capacity.message}</p>
            )}
          </div>

          <button type="submit">
            {props.type === "edit" ? "Edit Ticket" : "Add Ticket"}{" "}
          </button>
          {props.type === "edit" && <a href="/flights">Back to tickets list</a>}
        </form>
      </Card>
    </>
  );
};

export default AddTicket;
