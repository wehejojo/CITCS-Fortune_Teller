import styles from './Input.module.css'

function Input(props) {
  return (
    <div className={styles.container}>
      <label htmlFor={props.attr}>{`Enter your ${props.attr}: `}</label>
      <input
        type="text"
        name={props.attr}
        id={props.attr}
        value={props.value}
        onChange={(e) => props.onInputChange(props.attr, e.target.value)}
      />
    </div>
  );
}

export default Input;
