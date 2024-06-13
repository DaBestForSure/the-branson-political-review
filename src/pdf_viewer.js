import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./pdf_viewer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const options = {
    cMapUrl: "/cmaps/",
    standardFontDataUrl: "/standard_fonts/"
};

const resizeObserverOptions = {};

const maxWidth = 800;

export default function Sample() {
    const [file, setFile] = useState("/Preview.pdf");
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

    function onFileChange(event) {
        const { files } = event.target;

        const nextFile = files?.[0];

        if (nextFile) {
            setFile(nextFile);
        }
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div className="Example">
            <div className="Example__container">
                <div
                    className="Example__container__document"
                    ref={setContainerRef}
                >
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
                                        : maxWidth
                                }
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}
