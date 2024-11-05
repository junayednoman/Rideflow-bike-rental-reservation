import { Modal } from "antd";
import RForm from "./form/RForm";
import RButtonSmall from "./layout/ui/RButtonSmall";
import { FieldValues, SubmitHandler } from "react-hook-form";
import React, { Dispatch, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RTimePicker from "./form/RTimePicker";
import { useReturnBikeMutation } from "@/redux/api/rentalApi";
import handleMutation from "@/utils/handleMutation";

const schema = z.object({
  endTime: z.unknown().refine((value) => value, {
    message: "End Time is required",
  }),
});

type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  rentalId: string;
};

const CalculateRentalCostModel = ({
  isModalOpen,
  setIsModalOpen,
  rentalId,
}: TModalProps) => {
  const [reset, setReset] = useState(false);
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  const [returnBike] = useReturnBikeMutation();

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    const onSuccess = () => {
      setIsModalOpen(false);
      setReset(true);
    };
    const rentalEndTime = data?.endTime?.format("HH:mm");

    handleMutation(
      { rentalEndTime, rentalId },
      returnBike,
      "Bike is returning...",
      onSuccess
    );
  };

  return (
    <div>
      <Modal
        footer={null}
        title="Calculate rental cost!"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div>
          <RForm
            reset={reset}
            resolver={zodResolver(schema)}
            handleFormSubmit={handleFormSubmit}
          >
            <RTimePicker
              label="End Time*"
              name="endTime"
              placeholder="Select end time"
            />
            <RButtonSmall type="submit">Calculate</RButtonSmall>
          </RForm>
        </div>
      </Modal>
    </div>
  );
};

export default CalculateRentalCostModel;
