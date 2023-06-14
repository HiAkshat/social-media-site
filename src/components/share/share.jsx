import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

import "./share.css";
import { InsertPhotoTwoTone } from '@mui/icons-material';

export default function Share() {
  return (
    <div>
      <div>
        <img src={require("./1.jpg")} alt="" />
        <span>What's on your mind?</span>
      </div>
      <hr />
      <div>
        <div>
          <InsertPhotoIcon />
          <span>Attach</span>
        </div>
      </div>
    </div>
  )
}