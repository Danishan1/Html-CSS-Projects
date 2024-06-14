import React from "react";
import IconSetter from "../helper/IconSetter";
import style from "../css/PlusButton.module.css";
import {
  meeting,
  note,
  fileUpload,
  calendar,
  schedule,
  reminder,
  payment,
  media,
  directShare,
} from "../helper/PlusButtonIcons";

const PlusButton = () => {
  return (
    <div className={style.plusButton}>
      <IconSetter
        icon={meeting}
        name={"Meeting"}
        clickHandle={() => console.log("Meeting")}
      />
      <IconSetter
        icon={note}
        name={"Notes"}
        clickHandle={() => console.log("Notes")}
      />
      <IconSetter
        icon={media}
        name={"Media"}
        clickHandle={() => console.log("Media")}
      />
      <IconSetter
        icon={fileUpload}
        name={"Document"}
        clickHandle={() => console.log("Document")}
      />
      <IconSetter
        icon={directShare}
        name={"Direct Share"}
        clickHandle={() => console.log("Direct Share")}
      />
      <IconSetter
        icon={calendar}
        name={"Calendar"}
        clickHandle={() => console.log("Calendar")}
      />
      <IconSetter
        icon={schedule}
        name={"Schedule"}
        clickHandle={() => console.log("Schedule")}
      />
      <IconSetter
        icon={reminder}
        name={"Reminder"}
        clickHandle={() => console.log("Reminder")}
      />
      <IconSetter
        icon={payment}
        name={"Payment"}
        clickHandle={() => console.log("Payment")}
      />
    </div>
  );
};

export default PlusButton;
