import React from "react";
import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const ColorPicker = () => {
  const changColor = args => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };

  return (
    <div className="m-2 mt-24 bg-white p-2 md:p-10 rounded-3xl">
      <Header category="Page" title="Color Picker" />
      <div className="text-center">
        <div id="preview"></div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={changColor}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={changColor}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
