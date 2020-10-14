import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImageResize,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginFileEncode,
  FilePondPluginImageTransform
);

const FileUpload = ({ files, setFiles }) => {
  return (
    <FilePond
      file={files}
      onupdatefiles={setFiles}
      name="files"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      instantUpload={false}
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
