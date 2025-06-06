import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./pdf_viewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const options = {
    cMapUrl: "/cmaps/",
    standardFontDataUrl: "/standard_fonts/"
};

const resizeObserverOptions = {};
const maxWidth = 800;

export default function PDFLoader({ file = "/Spring2024.pdf" }) {
    const [numPages, setNumPages] = useState();
    const [loading, setLoading] = useState(true); // Add loading state
    const [containerRef, setContainerRef] = useState(null);
    const [containerWidth, setContainerWidth] = useState();

    const onResize = useCallback((entries) => {
        const [entry] = entries;
        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
        setLoading(false); // Set loading to false when loading is successful
    }

    return (
        <div className="Example">
            <div className="Example__container">
                <div
                    className="Example__container__document"
                    ref={setContainerRef}
                >
                    {loading && (
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    )}

                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}
                        loading={null}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                loading={null}
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={
                                    containerWidth
                                        ? Math.min(containerWidth, maxWidth)
                                        : maxWidth
                                }
                                style="margin: 0;"
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}
