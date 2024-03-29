import DropButton from "../packages/Button/index";
import Alert from "../packages/Alert/index";
import DropLink from "../packages/Link/index";
import DropCheckBox from "../packages/CheckBox";
import DropAlert from "../packages/Alert";
import DropInput from "../packages/Input";
import DropSelect from "../packages/Select";
import DropCard from "../packages/InputCard";
import DropLabel from "../packages/Label";
import {
  Dropdown,
  DropdownButton,
  DropdownGroup,
  DropdownItem,
} from "../packages/Dropdown";

export {
  DropButton,
  Alert,
  DropLink,
  DropCheckBox,
  DropAlert,
  DropInput,
  DropSelect,
  DropCard,
  DropLabel,
  Dropdown,
  DropdownButton,
  DropdownGroup,
  DropdownItem,
};
// src/declare/index.ts

const components: Record<string, any> = {};

const requireComponent = import.meta.glob("/src/packages/**/*.vue");

for (const path in requireComponent) {
  const componentName = path.match(/\/(\w+)\.vue$/)?.[1];
  if (componentName) {
    components[componentName] = requireComponent[path];
  }
}

export default components;
