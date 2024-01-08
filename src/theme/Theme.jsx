import Modal from "../components/Modal";
import { backgroundColors } from "./data";

import BackgroundColor from "./BackgroundColor";
import "./theme.css";

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h3>Dark Mode</h3>

      <div className="theme__background-wrapper">
        <h5>Background Color</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
