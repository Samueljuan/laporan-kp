import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';


export default function Upload(p) {

  const [files, setFiles] = useState([]);
  const [based, setBased] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setBased(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const thumbs = files.map(file => (
    <div key={file.name} >
      {getBase64(file)}
      <div>
        <img
          src={file.preview}
          alt=""
        />
      </div>
    </div >
  ));

  useEffect(() => () => {

    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));

  }, [files]);

  useEffect(() => {
    p.onChangeFile(based)
  }, [based])

  console.log("ini based", based)

  return (
    <section className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {files.length > 0 ?
          (<aside style={thumbsContainer}>

            {thumbs}
          </aside>)
          :
          // (<p>121</p>)
            <img src={p.cover} />
        }
      </div>
    </section >
  );
}