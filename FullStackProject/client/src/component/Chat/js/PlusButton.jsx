import React, { useRef, useState } from "react";
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

import {
  handleFileChange,
  handleFileClick,
  getFileType,
} from "../helper/plusButton/media";

const PlusButton = () => {
  const fileInputRef = useRef(null);
  const [fileType, setFileType] = useState("*/*");

  const onfileClick = (type) => {
    setFileType(getFileType(type));
    handleFileClick(fileInputRef);
  };

  return (
    <div className={style.plusButton}>
      {/* Used to mannage the file uploading from media & direct Share */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
        accept={fileType}
      />

      {/* Different Options */}
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
        clickHandle={() => onfileClick("media")}
      />
      <IconSetter
        icon={fileUpload}
        name={"Document"}
        clickHandle={() => onfileClick("doc")}
      />
      <IconSetter
        icon={directShare}
        name={"Direct Share"}
        clickHandle={() => onfileClick("all")}
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
