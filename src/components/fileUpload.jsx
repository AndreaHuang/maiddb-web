import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import config from "../config/config.json";

registerPlugin(
  FilePondPluginImageResize,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageTransform
);

const FileUpload = ({ files, setFiles }) => {
  return (
    <FilePond
      file={files}
      onupdatefiles={setFiles}
      name="files"
      server={config.fileUrl}
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      allowMultiple={true}
      //   stylePanelAspectRatio={1.5}
      imageResizeMode="contain"
      imageResizeUpscale={false}
      imageResizeTargetHeight={200}
      imagePreviewHeight={100}
    />
  );
};

export default FileUpload;
