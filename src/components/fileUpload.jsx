import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import config from "../config/config";
import constants from "../config/constants";
import tokenService from "../services/tokenService";

registerPlugin(
  FilePondPluginImageResize,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageTransform
);

const getServerConfig = () => {
  let result = {};
  result.url = config.apiUrl+config.filePath;
  const token = tokenService.getToken();
  let headers = {};
  if (token) {
    headers[constants.TOKEN_HEADER_NAME] = token;
  }
  result.headers = headers;
  return result;
};

const FileUpload = ({ files, setFiles }) => {
  return (
    <FilePond
      file={files}
      onupdatefiles={setFiles}
      name="files"
      server={getServerConfig()}
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      allowMultiple={true}
      //   stylePanelAspectRatio={1.5}
      imageResizeMode="contain"
      imageResizeUpscale={false}
      imageResizeTargetWidth={506}
      imageResizeTargetHeight={900}
      imagePreviewHeight={200}
    />
  );
};

export default FileUpload;
