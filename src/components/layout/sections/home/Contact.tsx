import RInput from "@/components/form/RInput";
import RContainer from "../../RContainer";
import RSectionTitle from "@/components/layout/ui/RSectionTitle";
import RForm from "@/components/form/RForm";
import RTextArea from "@/components/form/RTextArea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import RButtonSmall from "../../ui/RButtonSmall";

const Contact = () => {
  const handleContactForm: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <section className="xl:py-24 md:py-20 py-16">
      <RContainer>
        <RSectionTitle
          heading="Contact Now"
          subHeading="Get in Touch with Us"
        />
        <div className="lg:w-[700px] mx-auto -mt-3">
          <RForm handleFormSubmit={handleContactForm}>
            <RInput
              name="contact_name"
              label="Name"
              placeholder="Enter your name"
            />
            <RInput name="email" label="Email" placeholder="Enter your email" />
            <RTextArea name="message" label="Message" rows={5} />
            <RButtonSmall>Submit</RButtonSmall>
          </RForm>
        </div>
      </RContainer>
    </section>
  );
};

export default Contact;
