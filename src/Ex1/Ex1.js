import styles from "./Ex1.module.css";
import cx from "classnames";

// TODO: size
const Button = ({ className, active, ...rest }) => (
  <button
    className={cx(styles.root, active && styles.active, className)}
    {...rest}
  />
);

export default function App() {
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <p>
        <Button>Default</Button>
      </p>
      <p>
        <Button active>Active</Button>
      </p>
      <p>
        <Button size="big">Big</Button>
      </p>
      <p>
        <Button size="small">Small</Button>
      </p>
    </div>
  );
}
