import { useState, useEffect } from "react";
import { notification } from "antd";
// import axios from "axios";

const useForm = (validate) => {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ shouldSubmit, setShouldSubmit ] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    const url = `https://formspree.io/f/xzbyeqda`;
    if (Object.keys(values).length === 3) {
      const data = Array.from(Object.entries(values)).reduce((data, [key, value]) => {
        data[key] = value;
        if (key === 'email') {
          data._replyTo = value;
        };
        return data;
      }, {});
      const config = {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data)
      }
      console.log(data);
      fetch(url, config)
      .then(()=> setShouldSubmit(true))
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon("success");
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;