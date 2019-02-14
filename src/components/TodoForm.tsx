import React, { useState } from "react";

export default (props: any): JSX.Element => {
  const [value, setValue] = useState("");

  /**
   * @description handles submission
   */
  const handleSubmit = (e: any): void => {
    e.preventDefault();

    if (!value) return;
    props.addTodo(value);
    // reset value state
    setValue("");
  };

  /**
   * @description handles change event in form fields
   */
  const handleChange = (e: any): void => {};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};
