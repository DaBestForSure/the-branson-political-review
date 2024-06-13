import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import Property1Default from "./components/property1-default";
import './admin-dashboard.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

export default function Sample() {
  const [file, setFile] = useState('./Preview.pdf');
  const [numPages, setNumPages] = useState();
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onButtonClick(event) {
    const { files } = event.target;

    const nextFile = files?.[0];

    if (nextFile) {
      setFile(nextFile);
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  // return (
  //   <div className="Example">
  //     <div className="Example__container">
  //       {/* <div className="Example__container__load">
  //         <label htmlFor="file">Load from file:</label>{' '}
  //         <input onChange={onFileChange} type="file" />
  //       </div> This was button click*/} 
  //       <div className="Example__container__document" ref={setContainerRef}>
  //         <Document
  //           file={file}
  //           onLoadSuccess={onDocumentLoadSuccess}
  //           options={options}
  //         >
  //           {Array.from(new Array(numPages), (el, index) => (
  //             <Page
  //               key={`page_${index + 1}`}
  //               pageNumber={index + 1}
  //               width={
  //                 containerWidth
  //                   ? Math.min(containerWidth, maxWidth)
  //                   : maxWidth}
  //             />
  //           ))}
  //         </Document>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="admin-dashboard">
      <div className="st-column">
        <div className="frame-parent">
          <div className="frame">
            <h1 className="welcome-back">Welcome Back!</h1>
            <button className="button" onClick={onButtonClick}> {/* Why no work */}
              <h2 className="upload-new-pdf">Upload new PDF</h2>
            </button>
          </div>
          <div className="postview-sample-of-new-post">
            {/* <div className="show-uploaded-pdf">Show uploaded pdf</div> */}
            <div className="show-uploaded-pdf" ref={setContainerRef}>
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={
                      containerWidth
                        ? Math.min(containerWidth, maxWidth)
                        : maxWidth}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      </div>
      <div className="nd-column">
        <div className="stats-showing-numbers">
          <Property1Default
            totalNumberOfVisits="Total number of visits"
            number="1,402"
          />
          <Property1Default
            totalNumberOfVisits="Number of visits (month)"
            number="248"
          />
          <Property1Default
            totalNumberOfVisits="Average time spent on page"
            number="15m"
          />
        </div>
        <div className="stats-graph">
          <div className="graph-time">{`Graph time & posts vs. views (colors can be black and white)`}</div>
        </div>
      </div>
    </div>
  );
};


{/* <div className="Example__container__document" ref={setContainerRef}>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={
                  containerWidth
                    ? Math.min(containerWidth, maxWidth)
                    : maxWidth}
              />
            ))}
          </Document>
        </div> */}



// const AdminDashboard = () => {

//   return (
//     <div className="admin-dashboard">
//       <div className="st-column">
//         <div className="frame-parent">
//           <div className="frame">
//             <h1 className="welcome-back">Welcome Back!</h1>
//             <button className="button" onClick={onButtonClick}>
//               <h2 className="upload-new-pdf">Upload new PDF</h2>
//             </button>
//           </div>
//           <div className="postview-sample-of-new-post">
//             <div className="show-uploaded-pdf">Show uploaded pdf</div>
//           </div>
//         </div>
//       </div>
//       <div className="nd-column">
//         <div className="stats-showing-numbers">
//           <Property1Default
//             totalNumberOfVisits="Total number of visits"
//             number="1,402"
//           />
//           <Property1Default
//             totalNumberOfVisits="Number of visits (month)"
//             number="248"
//           />
//           <Property1Default
//             totalNumberOfVisits="Average time spent on page"
//             number="15m"
//           />
//         </div>
//         <div className="stats-graph">
//           <div className="graph-time">{`Graph time & posts vs. views (colors can be black and white)`}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

