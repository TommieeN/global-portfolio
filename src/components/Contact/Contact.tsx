import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./contact.scss";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const errorToast = () => "Please fill in all fields!";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Empty fields check
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    // Email validity check
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_ywprvph",
        "template_ls2e94b",
        {
          from_name: form.name,
          to_name: "Tommy",
          from_email: form.email,
          to_email: "timsnguyen@hotmail.com",
          message: form.message,
        },
        "s6jc0I844TxtaN1mY"
      );

      setLoading(false);
      toast.success("Thank you. I will get back to you as soon as possible.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="form" id="contact">
      <h2 className="form__header">Get In Touch!</h2>
      <form className="form__container" ref={formRef} onSubmit={handleSubmit}>
        <div className="form__input-container">
          <input
            className="form__input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            className="form__input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <textarea
          className="form__text-area"
          rows={10}
          cols={20}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Send me an email! :)"
        />
        <button className="form__btn" onClick={errorToast} type="submit">
          {loading ? "Sending..." : "Send"}
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </div>
  );
};

export default Contact;
